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
    return arr.map(item => arr!==undefined ? {
      ...item,
      pourcent : item[type] / sum * 100
    } : 0)
  },

  updateChoice: (arr, updateChoiceId, value) => {
    return arr.map(t => t.id !== updateChoiceId ? t : {
      ...t,
      vote: value
    })
  },

  updateChoices: (arr, updateChoiceId, value) => {
    var arr1 = arr.map(t => t.id !== updateChoiceId ? t : {
      ...t,
      vote: value
    })

    var sum = ratioHelper.sumProperty(arr1, 'vote')

    return arr1.map(item => arr!==undefined ? {
      ...item,
      pourcent : item['vote'] / sum * 100
    } : 0)

  }
};

export { ratioHelper }