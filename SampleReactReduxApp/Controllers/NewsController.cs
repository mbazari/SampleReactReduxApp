using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SampleReactReduxApp.Controllers
{
    [Route("api/[controller]")]
    public class NewsController : Controller
    {
        static ICollection<News> NewsList = null;

        static NewsController()
        {
            NewsList = new List<News>();
            for (int i = 1; i < 17; i++)
            {
                NewsList.Add(new News
                {
                    Id = i,
                    Title=$"خبر شماره {i}",
                    Description = $"توضیحات برای خبر شماره {i}"
                });
            }
        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<News> Get()
        {
            return NewsList;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public News Get(int id)
        {
            return NewsList.FirstOrDefault(a => a.Id == id);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]News news)
        {
            var lastId = NewsList.Max(a => a.Id);
            news.Id = ++lastId;
            NewsList.Add(news);
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

        public class News
        {
            public int Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
        }
    }
}
