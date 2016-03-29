using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using AngularJsTrainingAsp5.Models;
using System.Net;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularJsTrainingAsp5.Controllers
{
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private static List<Category> categories = new List<Category>()
        {
            new Category()
            {
                Id = 1,
                Name = "Food",
                Color = "#ADED13"
            },
            new Category()
            {
                Id = 2,
                Name = "Leisure",
                Color = "#C220D6"
            },
            new Category()
            {
                Id = 3,
                Name = "Sports",
                Color = "#11FD87"
            },
            new Category()
            {
                Id = 4,
                Name = "Gadgets",
                Color = "#DB637D"
            }
        };

        // GET: api/values
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return categories;
        }

        [HttpGet("{id:int}")]
        public Category Get(int id)
        {
            Category category = categories.FirstOrDefault(c => c.Id == id);
            if (categories == null)
            {
                Response.StatusCode = (int)HttpStatusCode.NotFound;
                return null;
            }

            return category;
        }

        [HttpPost]
        public int Put([FromBody]Category category)
        {
            if (category == null || string.IsNullOrEmpty(category.Name) || string.IsNullOrEmpty(category.Color))
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return -1;
            }

            var nextId = categories.Count > 0 ? categories.Max(c => c.Id) + 1 : 1;
            category.Id = nextId;
            categories.Add(category);

            return nextId;
        }
    }
}
