using CustomAuthorization.App_Code;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CustomAuthorization.Controllers
{
    [CustomRole]
    public class SystemController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}