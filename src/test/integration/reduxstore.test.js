import { createStore } from "redux";
import rootReducer from "../../reducers";

import {addTodo, toggleTodo}  from '../../actions';

describe("redux store integration Tests", () => {
    let store;
    beforeEach(() => {
        store = createStore(rootReducer);
    })

    it("should add 1 todo", () => {
        store.dispatch(addTodo('buy milk'));
        const todo = store.getState().todos.find(x => x.text === 'buy milk');
        expect(todo.text).toEqual('buy milk');
        expect(todo.completed).toEqual(false) 
    })

    it("should toggle 1 todo", () => {
        store.dispatch(addTodo('go shopping'));
        // console.log('before toggle', store.getState());
        store.dispatch(toggleTodo(1));
        const todo = store.getState().todos.find(x => x.text === 'go shopping');
        expect(todo.text).toEqual('go shopping');
        expect(todo.completed).toEqual(true) 
        
    })
})