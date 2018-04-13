'use strict';

const catData = require('./scratch-data/catdata');
const dogData = require('./scratch-data/dogdata');

const store = {
  catData,
  dogData,
  getDog: function() {
    return dogData[0];
  },
  getCat: function() {
    return catData[0];
  },
  deleteDog: function() {
    this.dogData.splice(0,1);
  },
  deleteCat: function() {
    this.catData.splice(0,1);
  }
};

module.exports = store;