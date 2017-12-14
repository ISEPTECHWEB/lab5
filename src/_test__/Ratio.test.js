import {ratioHelper} from '../helpers/ratio-helper'


it('calculates sum of vote', () =>  {
    const initialChoices = [
        {id: 1, name: 'blue or light blue', vote:2},
        {id: 2, name: 'green', vote:4},
        {id: 3, name: 'yellow', vote:1}
    ]

    const sum = ratioHelper.sumProperty(initialChoices, 'vote');

    console.log('sum= '+sum)

    expect(sum).toEqual(7);
});

it('calculatec the ratio of a vote', () =>  {
    const initialChoices = [
        {id: 1, name: 'blue or light blue', vote:2},
        {id: 2, name: 'green', vote:4},
        {id: 3, name: 'yellow', vote:0}
    ]

    const sum = ratioHelper.sumProperty(initialChoices, 'vote');
    const newChoices = ratioHelper.addRatio(initialChoices, sum, 'vote')

    const expectedChoices = [
        {id: 1, name: 'blue or light blue', vote:2, pourcent:33.33333333333333},
        {id: 2, name: 'green', vote:4, pourcent:66.66666666666666},
        {id: 3, name: 'yellow', vote:0, pourcent:0.00}
    ]

    expect(newChoices).toEqual(expectedChoices);

});

it('updates the vote', () =>  {
    const initialChoices = [
        {id: 1, name: 'blue or light blue', vote:2, pourcent:0.2},
        {id: 2, name: 'green', vote:4, pourcent:0.2},
        {id: 3, name: 'yellow', vote:0, pourcent:0.2}
    ]

    const newChoices = ratioHelper.updateChoice(initialChoices,3,4);
    
    const expectedChoices = [
        {id: 1, name: 'blue or light blue', vote:2, pourcent:0.2},
        {id: 2, name: 'green', vote:4, pourcent:0.2},
        {id: 3, name: 'yellow', vote:4, pourcent:0.2}
    ]

    expect(newChoices).toEqual(expectedChoices);
});

it('updates the percent from the vote change', () =>  {
    const initialChoices = [
        {id: 1, name: 'blue or light blue', vote:2, pourcent:0.2},
        {id: 2, name: 'green', vote:3, pourcent:0.3},
        {id: 3, name: 'yellow', vote:5, pourcent:0.5}
    ]

    const newChoices = ratioHelper.updateChoices(initialChoices,3,15);

    console.log(newChoices)
    
    const expectedChoices = [
        {id: 1, name: 'blue or light blue', vote:2, pourcent:10},
        {id: 2, name: 'green', vote:3, pourcent:15},
        {id: 3, name: 'yellow', vote:15, pourcent:75}
    ]

    expect(newChoices).toEqual(expectedChoices);
});



