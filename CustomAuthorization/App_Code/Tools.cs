using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace CustomAuthorization.App_Code
{
    public class Tools
    {
        /// <summary>
        /// 將字串進行SHA512加密
        /// </summary>
        /// <param name="str">轉換字串</param>
        /// <returns></returns>
        public string SHA512(string str)
        {
            //將字串轉為Byte[]
            byte[] source = Encoding.Default.GetBytes(str);
            using (var hash = System.Security.Cryptography.SHA512.Create())
            {
                //進行SHA512加密
                var crypto = hash.ComputeHash(source);
                //把加密後的字串從Byte[]轉為字串
                var hashedInputStringBuilder = new StringBuilder(128);
                foreach (var b in crypto)
                    hashedInputStringBuilder.Append(b.ToString("X2"));
                return hashedInputStringBuilder.ToString().ToLower();
            }
        }


    }
}