from google.appengine.ext import ndb

#model for scoreboard

class Scoreboard(ndb.Model):
    username = ndb.StringProperty()
<<<<<<< HEAD

    score = ndb.IntegerProperty()

=======
>>>>>>> 0ee894a558aeaa6b46ac28a5b6463026aa32a872
    score = ndb.IntegerProperty(repeated = True)
