using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsTrainingAsp5.Controllers
{
    public class DemoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Controllers()
        {
            return View();
        }

        public IActionResult UserCreatedEvents()
        {
            return View();
        }

        public IActionResult Watches()
        {
            return View();
        }

        public IActionResult ScopeApply()
        {
            return View();
        }

        public IActionResult Services()
        {
            return View();
        }

        public IActionResult BuiltinDirectives()
        {
            return View();
        }

        public IActionResult BuiltinFilters()
        {
            return View();
        }
    }
}
