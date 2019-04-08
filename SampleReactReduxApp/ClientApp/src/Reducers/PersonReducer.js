export default (state = [], action) => {
    switch (action.type) {
        case 'AddPerson':
            const counters =[...state,{Name:action.Personinfo.Name,Family:action.Personinfo.Family,Tell:action.Personinfo.Tell,Email:action.Personinfo.Email,Mobile:action.Personinfo.Mobile,DateFrom:action.Personinfo.DateFrom,DateTo:action.Personinfo.DateTo}];
            console.log(counters)
            return [...counters];

    
        default:
            return state;
    }
}
