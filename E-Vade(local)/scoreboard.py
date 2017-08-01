from google.appengine.ext import ndb

<<<<<<< HEAD
#model for scoreboard

class Scoreboard(ndb.Model)
    username = ndb.StringProperty()
    score = ndb.IntegerProperty(repeated = True) )
=======
class Entry(ndb.Model):
    name = ndb.StringProperty(required = True)
    score = ndb.IntegerProperty(repeated = True)
>>>>>>> 66bc905683bf6c468ca40adf9c91c2b024285a19
