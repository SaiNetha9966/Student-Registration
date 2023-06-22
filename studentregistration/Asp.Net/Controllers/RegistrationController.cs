using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Student_Registration.Model;
using System.Data.SqlClient;

namespace Student_Registration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private object sqlConnection;

        public RegistrationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        [Route("Registration")]

        public Response Registration(Registration registration)
        {
            Response response = new Response();

            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("CRUDCS"));

            Dal dal = new Dal();
            response = dal.Registration(registration, connection);


            return response;
        }
        [HttpPost]
        [Route("Login")]

        public Response LogIn(Registration registration)
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("CRUDCS"));

            Dal dal = new Dal();

            response = dal.Login(registration, connection);
            return response;


        }
        [HttpPost]
        [Route("UserApproval")]

        public Response UserApproval(Registration registration)
        {
            Response response = new Response();

            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("CRUDCS").ToString());
            Dal dal = new Dal();
            response = dal.UserApproval(registration, connection);
            return response;

        }

        [HttpPost]
        [Route("ArticleApproval")]

        public Response ArticleApproval(Article article)
        {
            Response response = new Response();

            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("CRUDCS").ToString());
            Dal dal = new Dal();
            response = dal.ArticleApproval(article, connection);
            return response;

        }
        [HttpPost]
        [Route("StaffRegistration")]

        public Response StaffRegistration(Staff staff)
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("CRUDCS").ToString());
            Dal dal = new Dal();
            response = dal.StaffRegistration(staff, connection);
            return response;

        }
        [HttpPost]
        [Route("DeleteStaff")]

        public Response DeleteStaff(Staff staff) 
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("CRUDCS").ToString());
            Dal dal = new Dal();
            response = dal.DeleteStaff(staff, connection);
            return response;

        }
    }
  
}


