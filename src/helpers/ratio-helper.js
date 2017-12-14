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
        item.pourcent = item[type]/ sum * 100;
      })
      return arr
    },

    updateChoice: (arr, updateChoiceId, value) =>{
      return arr.map(t=> t.id !== updateChoiceId ? t : {
        ...t,
        vote: value 
      })
    },

    updateChoices: (arr,updateChoiceId, value) => {
      var arr1 = arr.map(t=> t.id !== updateChoiceId ? t : {
        ...t,
        vote: value 
      })

      arr1.map(function(item) {
        item.pourcent = ((item['vote'])* 100/20);
      })
      return arr1
    }
};

export {ratioHelper}