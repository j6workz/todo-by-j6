const initialState = {
    todoList:[
        {
            title:"Title 1",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            isDone:false,
            isSearched:false
        },
        {
            title:"Title 2",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            isDone:true,
            isSearched:false
        },
        {
            title:"Title 3",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            isDone:false,
            isSearched:false
        }
    ],
    openModal:false,
    isLoading:false,
    visibility:"ALL",
    visibilityFilters:["ALL", "PENDING", "COMPLETED"],
    searchEnabled:false
}

const reducers = (state = initialState, action) => {
    switch(action.type){
        case "OPEN_MODAL": return Object.assign({}, state, {openModal:true});

        case "CLOSE_MODAL": return Object.assign({}, state, {openModal:false});

        case "SELECT_FILTER": return Object.assign({}, state, {visibility:action.data.data})

        case "SET_LOADER": return Object.assign({}, state, {isLoading:!state.isLoading});

        case "SAVE_TODO": {
            const tempObj = {title:action.data.data.title, body:action.data.data.content, isDone:false, isSearched:false};
            let tempArray = Object.assign([], state.todoList);
            tempArray.push(tempObj)
            console.log("SAVE_TODO REDUCER:::",tempArray,tempObj, action);
            return Object.assign({}, state, {todoList:Object.assign([],tempArray)}, {visibility:"ALL"});
        }

        case "DELETE_TODO":{
            const tempArray = Object.assign([], state.todoList);
            let newArray = tempArray.filter((item,index) => index!==action.data.index);
            console.log("newArray",newArray)
            return Object.assign({}, state, {todoList:Object.assign([],newArray)})
        }

        case "CHANGE_STATUS": {
            console.log("ChangeStatus:::", action);
            const index = action.data.index;
            let tempObj = state.todoList[index];
            tempObj.isDone = true;
            let tempArray = Object.assign([], state.todoList);
            return Object.assign({}, state, {todoList:Object.assign([],tempArray)});
        }

        case "SEARCH_CARDS":{
            console.log("SEARCH_CARDS by :::", action.data.keyword);
            const keyword = action.data.keyword;
            const reg = new RegExp(keyword, 'i');
            const isFiltered = (key) => Object.assign({}, key, {isSearched:true})
            const todoArray = Object.assign([],state.todoList.map((key)=>key.title.match(reg)!==null?isFiltered(key):key))
            return Object.assign({}, state, {searchEnabled:true}, {todoList:todoArray});
        }

        case "CLEAR_SEARCH":{
            const todoArray = Object.assign([],state.todoList.map((key)=>Object.assign({}, key, {isSearched:false})));
            return Object.assign({}, state, {searchEnabled:false}, {todoList:todoArray});
        }

        default: return state;
    }
}

export default reducers;