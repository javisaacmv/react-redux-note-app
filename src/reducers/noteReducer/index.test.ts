import { noteReducer } from ".";
import {describe, test} from 'vitest';
import deepFreeze from 'deep-freeze'

const expect = chai.expect;

describe('noteReducer', () => {
    test('returns new state after action with toggle importance', () => {
        const state = [
            {
                id: 1,
                content: 'note 1',
                important: false
            },
            { 
                id: 2,
                content: 'note 2',
                important: false
            }
        ]

        const action = {
            type: '@note/toggle_importance',
            payload: {
                id: 2
            }
        }
        deepFreeze(state)

        const newState = noteReducer(state, action)

        expect(newState).to.have.lengthOf(2)
        expect(newState).to.own.contain(state[0])
        console.log(newState)
        expect(newState[1]).to.have.property('important').to.be.equal(true)
    })
})