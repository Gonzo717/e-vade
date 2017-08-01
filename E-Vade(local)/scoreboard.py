from google.appengine.ext import ndb
import webapp2
import os
#import urllib2
#import urllib
import jinja2

jinja_environment = jinja2.Environment(
    loader = jinja2.FileSystemLoader(os.path.dirname(__file__)))
class Entry(ndb.Model):
    name = ndb.StringProperty(required = True)
    score = ndb.IntegerProperty(repeated = True)

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template("templates/rankings.html")
        userName = self.request.get("name")
        points = int(self.request.get("score"))
        self.response.write(userName)
        self.response.write(points)
        my_snack = Snack(name = userName, score = points)
        my_snack.put()

class DisplayHandler(webapp2.RequestHandler):
    def get(self):
        query = Entry.query()
        results = query.fetch()
        length = len(results)

        for i in range(length):
            self.response.write(results[i].kind)
            self.response.write("<br>")
