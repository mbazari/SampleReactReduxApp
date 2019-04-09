import * as agent from '../Utility/httpagent'
export default (state = {}, action) => {
    switch (action.type) {
        case 'AddPerson':
            agent.User.save(action.Personinfo);
            return {...state};
        
        case 'ALL_PERSON_LOADED':
           let userState= {...state, User: action.users};
            return userState
        case 'ALL_NEWS':
            let newsState= {...state, News: action.news};
            return newsState
        case 'AddNew':
            agent.News.save(action.New);
            return {...state};
       
        default:
            return state;
    }
}
