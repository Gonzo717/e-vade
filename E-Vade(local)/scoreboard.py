from google.appengine.ext import ndb

class Entry(ndb.Model):
    name = ndb.StringProperty(required = True)
    score = ndb.IntegerProperty(repeated = True)
