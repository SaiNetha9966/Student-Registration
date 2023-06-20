using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Student_Registration.Model
{
    public class Dal
    {
        public Response Registration(Registration registration, SqlConnection connection)
        {
            Response response = new Response(); 


            SqlCommand cmd = new SqlCommand("INSERT INTO Registration(Name , Email , Password , PhoneNo ,IsActive, IsApproved) VALUES('"+registration.Name+ "' , '"+registration.Email+ "' , '"+registration.Password+ "', '"+registration.PhoneNo+"',1,0 )", connection);
             
            connection.Open();

            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if(i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Registration Successful";
            }
            else
            {
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "Registration Failed";
                }
            }
            return response;
        }

        public Response Login(Registration registration, SqlConnection connection)
        {
            SqlDataAdapter  da =  new SqlDataAdapter(" SELECT * FROM Registration WHERE Email = '" + registration.Email + "' AND Password = '" +registration.Password+ "' ",connection);
            DataTable dt = new DataTable(); 
            da.Fill(dt);
            Response response = new Response();
            if(dt.Rows.Count > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Log In Successfull";
                Registration reg = new Registration();
                reg.Id = Convert.ToInt32(dt.Rows[0]["Id"]);
                registration.Name = Convert.ToString(dt.Rows[0]["Name"]);
                registration.Email = Convert.ToString(dt.Rows[0]["Email"]);
                response.Registration = reg; 

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "LogIn Failed"; 
                response.Registration = null;
            }
            return response;
        }

        public Response UserApproval(Registration registration, SqlConnection connection)
        {
           Response response = new Response();
            SqlCommand cmd = new SqlCommand("UPDATE Registration SET IsApproved = 1 WHERE Id = '" + registration.Id + "' AND IsActive = 1", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if(i > 0)
            {
                 response.StatusCode = 200;
                response.StatusMessage = "User Aprroved";

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "User Aprroval Failed";
            }
            return response;
        }

        public Response AddNews(News news ,  SqlConnection connection)
        {
            Response response= new Response();
            SqlCommand cmd = new SqlCommand("INSERT INTO News(Title ,Content,Email,Createdon) VALUES ('"+news.Title+ "', '"+news.Content+ "' , '"+news.Email+"', GetDate())", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close ();    
            if(i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "News Created";

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "News Creation Failed";
            }
            return response;
        }

        public Response NewsList(SqlConnection connection)
        {
            Response response= new Response();
            
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM News WHERE IsActive =1", connection);
            DataTable dt = new DataTable(); 
            da.Fill(dt);
            List<News> lstNews = new List<News>();
             
            if(dt.Rows.Count > 0)
            {
                for(int i = 0; i< dt.Rows.Count; i++)
                {
                    News news = new News();
                    news.Id = Convert.ToInt32(dt.Rows[i]["ID"]);
                    news.Title = Convert.ToString(dt.Rows[i]["Title"]);
                    news.Content = Convert.ToString(dt.Rows[i]["Content"]);
                    news.Email = Convert.ToString(dt.Rows[i]["Email"]);
                    news.IsActive = Convert.ToInt32(dt.Rows[i]["IsActive"]);
                    news.Createdon = Convert.ToString(dt.Rows[i]["Createdon"]);
                    lstNews.Add(news);
                }     
                if(lstNews.Count > 0)
                {
                    response.StatusCode = 200;
                    response.StatusMessage = "News Data Found";
                    response.listNews = lstNews;
                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "No News Data Found";
                    response.listNews = null;
                }
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "No News Data Found";
                response.listNews = null;
            }

            return response;
        }

        public Response AddArticle(Article article, SqlConnection connection)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("INSERT INTO Article(Title ,Content,Email,Image,IsActive,IsApproved) VALUES ('" + article.Title + "', '" + article.Content + "' , '" + article.Email + "' , '" + article.Image + "' ,1 ,0)", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Article Created";

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Article Creation Failed";
            }
            return response;
        }

        public Response ArticleList(Article article , SqlConnection connection)
        {
            Response response = new Response();
            SqlDataAdapter da = null;
            DataTable dt = new DataTable();
            if(article.type == "User")
            {
                new SqlDataAdapter("SELECT * FROM Article WHERE Email = '"+article.Email+"' IsActive =1)", connection);
            }
            if(article.type == "Page")  
            {
                new SqlDataAdapter("SELECT * FROM Article WHERE IsActive =1)", connection);
            }
            da.Fill(dt);
            List<Article> lstArticle = new List<Article>();

            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Article art = new Article();
                    art.Id = Convert.ToInt32(dt.Rows[i]["ID"]);
                    art.Title = Convert.ToString(dt.Rows[i]["Title"]);
                    art.Content = Convert.ToString(dt.Rows[i]["Content"]);
                    art.Email = Convert.ToString(dt.Rows[i]["Email"]);
                    art.IsActive = Convert.ToInt32(dt.Rows[i]["IsActive"]);
                    art.Image = Convert.ToString(dt.Rows[i]["Image"]);
                    lstArticle.Add(art);
                }
                if (lstArticle.Count > 0)
                {
                    response.StatusCode = 200;
                    response.StatusMessage = "Article Data Found";
                    response.listArticle = lstArticle;
                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "No Article Data Found";
                    response.listArticle = null; 
                }
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "No News Data Found";
                response.listArticle = null;
            }

            return response;
        }

        public Response ArticleApproval(Article article, SqlConnection connection)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("UPDATE Article SET IsApproved = 1 WHERE Id = '" + article.Id + "' AND IsActive = 1", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Article Aprroved";

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Article Aprroval Failed";
            }
            return response;
        }

        public Response StaffRegistration(Staff staff, SqlConnection connection)
        {
            Response response = new Response();

            SqlCommand cmd = new SqlCommand("INSERT INTO Staff(Name , Email , Password  ,IsActive) VALUES('" + staff.Name + "' , '" + staff.Email + "' , '" + staff.Password + "',1)", connection);

            connection.Open();

            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Staff Registration Successful";
            }
            else
            {
                {
                    response.StatusCode = 100;
                    response.StatusMessage =  "Staff Registration Failed";
                }
            }
            return response;
        }


        public Response DeleteStaff(Staff staff, SqlConnection connection)
        {
            Response response = new Response();

            SqlCommand cmd = new SqlCommand("DELETE FROM  Staff WHERE ID = '"+staff.Id+"' AND IsActive = 1", connection);

            connection.Open();

            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Staff Deleted Successful";
            }
            else
            {
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "Staff Deleted Failed";
                }
            }
            return response;
        }

        public Response AddEvent(Events events , SqlConnection connection)
        {
            Response response = new Response();
            //SqlConnection connection = new SqlConnection(strconnection);
            SqlCommand cmd = new SqlCommand("INSERT INTO Events(Title ,Content,Email,Image,IsActive,Createdon) VALUES ('" + events.Title + "', '" + events.Content + "' , '" + events.Email + "' , '" + events.Image + "' ,1,GetDate())", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Events Created";

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Events Creation Failed";
            }
            return response;
        }

        public Response EventList(SqlConnection connection)
        {
            Response response = new Response();
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM Events WHERE IsActive =1", connection);
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Events> lstEvents = new List<Events>();

            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Events evt = new Events();
                    evt.Id = Convert.ToInt32(dt.Rows[i]["ID"]);
                    evt.Title = Convert.ToString(dt.Rows[i]["Title"]);
                    evt.Content = Convert.ToString(dt.Rows[i]["Content"]);
                    evt.Email = Convert.ToString(dt.Rows[i]["Email"]);
                    evt.IsActive = Convert.ToInt32(dt.Rows[i]["IsActive"]);
                    evt.Createdon = Convert.ToString(dt.Rows[i]["Createdon"]);
                    lstEvents.Add(evt);
                }
                if (lstEvents.Count > 0) 
                {
                    response.StatusCode = 200;
                    response.StatusMessage = "Events Data Found";
                    response.listEvents = lstEvents;
                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "No Events Data Found";
                    response.listEvents = null;
                }
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "No Events Data Found";
                response.listNews = null;
            }

            return response;
        }

    }
}
