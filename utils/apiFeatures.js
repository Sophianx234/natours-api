class APIFeatures {
    constructor(query, queryString) {
      this.query = query 
      this.queryString = queryString
    }
    filter() {
      const queryObj = { ...this.queryString };
      const excludedFields = ['page', 'sort', 'limit', 'fields'];
      excludedFields.forEach((el) => delete queryObj[el]);
  
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(lte|lt|gte|gt)\b/g, (match) => `$${match}`);
      this.query = this.query.find(JSON.parse(queryStr));
  
      return this;
    }
    sort() {
      if (this.queryString.sort) {
        const sortBy = this.queryString.sort.split(',').join(' ');
        this.query = this.query.sort(sortBy);
      } else {
        this.query = this.query.sort('-createdAt');
      }
      return this;
    }
    limitFields() {
      if (this.queryString.fields) {
        const fields = this.queryString.fields.split(',').join(' ');
        query = query.select(fields);
      }
      return this;
    }
    paginate() {
      const page = +this.queryString.page;
      const limit = +this.queryString.limit;
      const skip = (page - 1) * limit;
      this.query = this.query.skip(skip).limit(limit);
      return this
    }
  }

  module.exports = APIFeatures