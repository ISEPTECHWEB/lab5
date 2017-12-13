const ratioHelper = {

    sumProperty: (arr, type) => {
        return arr.reduce((total, obj) => {
          if (typeof obj[type] === 'string') {
            return total + Number(obj[type]);
          }
          return total + obj[type];
        }, 0);
    },
    
    addRatio: (arr, sum, type) => { 
      arr.map(function(item) {
        item.percent = (parseInt(item[type])/ sum * 100);
      })
      return arr
    }
    
};

export {ratioHelper}