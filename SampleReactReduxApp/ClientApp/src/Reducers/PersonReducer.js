export default (state = {}, action) => {
    switch (action.type) {
        case 'AddPerson':
            const counters =[...state.User,{Name:action.Personinfo.Name,Family:action.Personinfo.Family,Tell:action.Personinfo.Tell,Email:action.Personinfo.Email,Mobile:action.Personinfo.Mobile,DateFrom:action.Personinfo.DateFrom,DateTo:action.Personinfo.DateTo}];
            
          
            return {...state,User:counters};
            case 'AddNew':
             const News =[...state.News,{Title:action.New.Title,Desc:action.New.Desc}];
            
            console.log(News)
            return {...state,News:News};
    
        default:
            return state;
    }
}
