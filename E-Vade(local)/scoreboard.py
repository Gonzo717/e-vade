from google.appengine.ext import ndb

#model for scoreboard

class Scoreboard(ndb.Model):
    username = ndb.StringProperty()
<<<<<<< HEAD
    score = ndb.IntegerProperty() 
=======
    score = ndb.IntegerProperty(repeated = True)
>>>>>>> 2a52ce024ce5f9c765335c1b6241c6e5fbd8854d
