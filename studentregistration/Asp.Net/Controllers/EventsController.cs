using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Student_Registration.Model;
using System.Data.SqlClient;

namespace Student_Registration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public EventsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        [Route("AddEvent")]

        public Response AddEvent(Events events)
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("CRUDCS"));
            //string connection = _configuration.GetConnectionString("CRUDCS").ToString();

            Dal dal = new Dal();
            // Dal dal = new();
            response = dal.AddEvent(events, connection);
            return response;
        }

        [HttpGet]
        [Route("EventList")]

        public Response EventList()
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("CRUDCS"));
            Dal dal = new Dal();
            response = dal.EventList(connection);
            return response;
        }
    }
}
