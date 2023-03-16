from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Watchlist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    currency = db.Column(db.String(32))
