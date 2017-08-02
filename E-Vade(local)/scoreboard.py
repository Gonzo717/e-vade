from google.appengine.ext import ndb

#model for scoreboard

class Scoreboard(ndb.Model):
    username = ndb.StringProperty()
    score = ndb.IntegerProperty()
