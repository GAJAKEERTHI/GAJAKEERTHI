from db_config import db

class Medicine(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.Text)
    usage = db.Column(db.Text)
    mechanism = db.Column(db.Text)
    side_effects = db.Column(db.Text)
    alternatives = db.relationship('Alternative', backref='medicine')
    reviews = db.relationship('Review', backref='medicine')

class Alternative(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    medicine_id = db.Column(db.Integer, db.ForeignKey('medicine.id'))
    name = db.Column(db.String(255))
    salt_content = db.Column(db.String(255))
    price = db.Column(db.Float)

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    medicine_id = db.Column(db.Integer, db.ForeignKey('medicine.id'))
    content = db.Column(db.Text)
    rating = db.Column(db.Integer)
