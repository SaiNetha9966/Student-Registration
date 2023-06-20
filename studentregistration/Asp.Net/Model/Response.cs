﻿namespace Student_Registration.Model
{
    public class Response
    {
        public int StatusCode { get; set; }

        public string StatusMessage { get; set; }

        public List<Registration> listRegistrations { get; set; }

        public Registration Registration { get; set; } 
        public List<Article> listArticle { get; set; }

        public List<News> listNews { get; set; }

        public List<Events> listEvents { get; set; }





    }
}