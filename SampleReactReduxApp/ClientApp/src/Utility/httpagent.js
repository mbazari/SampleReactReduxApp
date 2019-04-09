import axios from 'axios';
const API_PREFIX_ADDRESS = 'api';
let User={
    get:()=>{
        return new Promise((resolve, failed)=>{
            axios.get(`${API_PREFIX_ADDRESS}/user`)
                .then(response => {
                   
                var converted = response.data.map(a=> { 
                    return {
                    Name: a.firstName,
                    Family: a.lastName,
                    Mobile: a.mobileNo,
                    Tell: a.tell,
                    Address: a.address,
                    DateTo: a.endDateActivity,
                    DateFrom: a.startDateActivity,
                    Email :a.email
                }});
                resolve(converted)
            })
            .catch(()=>{
                console.error("Erro on GetAll users");
            });
        })
       
    },
    save:( user )=>{
        let convertedUser = {
            FirstName:user.Name,
            LastName: user.Family,
            Address: user.Address,
            Tell:user.Tell,
            Email: user.Email,
            MobileNO: user.Mobile,
            StartDateActivity: user.DateFrom,
            EndDateActivity: user.DateTo
        };
        axios.post(`${API_PREFIX_ADDRESS}/user`,{...convertedUser})
        .then(response => {
            return response.data;
        })
        .catch(
            (e)=> {console.log(e);}
        )
    }
}

let News={
    get:() => {
        return new Promise ((resolve, faile) => {
            axios.get(`${API_PREFIX_ADDRESS}/news`)
        .then((response)=> 
            {
                var converted = response.data.map(a=> { 
                    return {
                        Title:a.title,
                        Desc: a.description
                }});
                resolve(converted)
            }
        ).
        catch(()=> console.error("Error on get all news"))
    })
    },
    save:(news) =>{
        let convertedNews= {
            Title:news.Title,
            Description: news.Desc
        }
        axios.post(`${API_PREFIX_ADDRESS}/news`,{...convertedNews})
        .then((response)=> console.log(response))
        .catch((e)=> console.error(e))
    }

}

export {
    User,
    News
};
