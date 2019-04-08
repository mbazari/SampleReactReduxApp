export default (state = {}, action) => {
    switch (action.type) {
        case 'AddNew':
            const counters =[...state.News,{Title:action.New.Title,Family:action.New.Desc}];
            
            console.log(counters)
            return {...state,News:counters};

    
        default:
            return state;
    }
}