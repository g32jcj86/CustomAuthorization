using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using CustomAuthorization.Models;

namespace CustomAuthorization.App_Code
{
    public class BaseController : Controller
    {
        protected LabEntities db = new LabEntities();
        protected string username;

        protected override void Initialize(System.Web.Routing.RequestContext requestContext)
        {
            base.Initialize(requestContext);

            if (requestContext.HttpContext.User.Identity.IsAuthenticated)
                username = requestContext.HttpContext.User.Identity.Name;
        }

        /// <summary>
        /// 使用者身分驗證
        /// </summary>
        [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, Inherited = true, AllowMultiple = true)]
        protected class CustomRole : AuthorizeAttribute
        {
            protected override bool AuthorizeCore(HttpContextBase context)
            {
                //判斷是否有認證名稱
                if (string.IsNullOrEmpty(context.User.Identity.Name))
                    return false;
                var username = context.User.Identity.Name;
                LabEntities db = new LabEntities();
                //取得路由控制器名稱
                string routeController = context.Request.RequestContext.RouteData.GetRequiredString("controller");
                //取得訪問頁面
                string routeAction = context.Request.RequestContext.RouteData.GetRequiredString("action");
                context.Session["Group"] = db.RoleBasedAuthorizationMembers.First(o => o.Mbr_ID == username).Mbr_Role;
                if (db.RoleBasedAuthorizationMembers.Count(o => o.Mbr_ID == username) == 1)
                {
                    var m = db.RoleBasedAuthorizationMembers.First(o => o.Mbr_ID == username);
                    //判斷是否為管理員
                    if (routeController == "System" && m.Mbr_Role != "admin")
                    {
                        //重新導引到錯誤畫面(權限不足)
                        context.Response.Redirect("~/Error/Index");
                        return false;
                    }
                    //如果登入中被關閉帳號則清除登入權限
                    if ((bool)m.Mbr_Enabled)
                        return true;
                    else
                    {
                        FormsAuthentication.SignOut();
                        //清除所有的 session
                        context.Session.RemoveAll();

                        //建立一個同名的 Cookie 來覆蓋原本的 Cookie
                        HttpCookie cookie1 = new HttpCookie(FormsAuthentication.FormsCookieName, "");
                        cookie1.Expires = DateTime.Now.AddYears(-1);
                        context.Response.Cookies.Add(cookie1);
                        return false;
                    }
                }
                else
                    return false;
            }
        }

    }
}