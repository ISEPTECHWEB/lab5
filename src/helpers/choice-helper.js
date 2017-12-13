const choiceHelper = {
    addChoice: (choices, newChoiceName) => [
        ...choices,
        {
            id: Math.floor((Math.random()*1000)+1),
            name: newChoiceName,
            vote: 0
        }
    ]
};

export {choiceHelper}