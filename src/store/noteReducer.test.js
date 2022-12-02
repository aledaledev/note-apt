import noteReducer from './noteReducer'

describe('noteReducer', () => {
    test('return new state after action with toggle importance',
    () => {
        const state = [
            {
                id:1,
                content: 'note1',
                important: false
            },
            {
                id:2,
                content: 'note2',
                important: true
            }
        ]

        const action = {
            type: 'TOGGLE_IMPORTANT',
            payload: {
                id:2
            }
        }

        const newState = noteReducer(state,action)

        expect(newState).toHaveLength(2)
        expect(newState).toContainoEqual(state[0])
        expect(newState).toContainoEqual({
            id:2,
            content: 'note2',
            important: false
        })
    })
})