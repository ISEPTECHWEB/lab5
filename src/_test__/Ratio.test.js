import {ratioHelper} from '../helpers/ratio-helper'


it('calculate sum of vote', () =>  {
    const initialChoices = [
        {id: 1, name: 'blue or light blue', vote:2},
        {id: 2, name: 'green', vote:4},
        {id: 3, name: 'yellow', vote:1}
    ]

    const sum = ratioHelper.sumProperty(initialChoices, 'vote');

    console.log('sum= '+sum)

    expect(sum).toEqual(7);
});

it('calculate the ratio of a vote', () =>  {
    const initialChoices = [
        {id: 1, name: 'blue or light blue', vote:2},
        {id: 2, name: 'green', vote:4},
        {id: 3, name: 'yellow', vote:0}
    ]

    const sum = ratioHelper.sumProperty(initialChoices, 'vote');
    
    console.log(ratioHelper.addRatio(initialChoices, sum, 'vote')) 

});
