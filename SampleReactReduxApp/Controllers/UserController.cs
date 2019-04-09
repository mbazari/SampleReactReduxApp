using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SampleReactReduxApp.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        static ICollection<UserInfo> userList = new List<UserInfo>
        {
            new UserInfo
            {
                Id=1,
                Address="تهران",
                Email="test@yahoo.com",
                EndDateActivity= DateTime.Now.AddMonths(1),
                FirstName="علی",
                LastName="رضایی",
                MobileNo="09877777",
                StartDateActivity = DateTime.Now,
                Tell="123"

            },
            new UserInfo
            {
                Id=2,
                Address="مشهد",
                Email="test2@yahoo.com",
                EndDateActivity= DateTime.Now.AddMonths(8),
                FirstName="نیما",
                LastName="صالحی",
                MobileNo="09367",
                StartDateActivity = DateTime.Now,
                Tell="897"

            }
        };
        
        // GET: api/<controller>
        [HttpGet()]
        public IEnumerable<UserInfo> Get()
        {
            return userList;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public UserInfo Get(int id)
        {
            return userList.Where(a=> a.Id == id).FirstOrDefault();
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]UserInfo user)
        {
            var lastId = userList.Max(a => a.Id);
            user.Id = ++lastId;
            userList.Add(user);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }


        public class UserInfo
        {
            public int Id { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Tell { get; set; }
            public String MobileNo { get; set; }
            public string Email { get; set; }
            public string Address { get; set; }
            public DateTime StartDateActivity { get; set; }
            public DateTime EndDateActivity { get; set; }
        }
    }
}
