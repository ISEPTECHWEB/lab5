import {choiceHelper} from '../helpers/choice-helper'


it('adds a choice to my list', () =>  {
    const initialChoices = [
        {id: 1, name: 'blue or light blue', vote:2},
        {id: 2, name: 'green', vote:4},
        {id: 3, name: 'yellow', vote:1}
    ]

    const newChoices = choiceHelper.addChoice(initialChoices, 'newchoice');

    const expectedChoices =[
        ... initialChoices,
        newChoices[3]
    ]
    console.log(expectedChoices);
    console.log(newChoices);

    expect(newChoices).toEqual(expectedChoices);
});

it('doesn\'t change my initial Choices list to add a Choice using the helper', () =>  {
    const initialChoices = [
        {id: 1, name: 'blue or light blue', vote:2},
        {id: 2, name: 'green', vote:4},
        {id: 3, name: 'yellow', vote:1}
    ]

    const expectedChoices =[... initialChoices];

    choiceHelper.addChoice(initialChoices, 'newchoice');

    console.log(expectedChoices);
    console.log(initialChoices);

    expect(initialChoices).toEqual(expectedChoices);
});

