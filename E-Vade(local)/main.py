#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
from google.appengine.ext import ndb
import webapp2
import jinja2
import os
from random import randint
from scoreboard import Scoreboard


jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))


class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/e-vade.html')
        self.response.out.write(template.render())


class TutorialHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/tutorial.html')
        self.response.out.write(template.render())

class RankHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template("templates/rankings.html")
        username = self.request.get("username")
        score = self.request.get("score")
        if score != "":
            score = int(score)
            my_score = Scoreboard(username = username, score = score)
            my_score.put()
        query = Scoreboard.query().order(-Scoreboard.score)
        render_data={}
        render_data['scoreboard']=query.fetch(20)
        self.response.write(template.render(render_data))

class AboutHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/about.html')
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/tutorial', TutorialHandler),
    ('/about', AboutHandler),
    ('/rankings', RankHandler)

], debug=True)
