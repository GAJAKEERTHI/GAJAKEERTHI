from flask import Flask, jsonify
from flask_cors import CORS
from models import db, Medicine

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:password@localhost/medicinedb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
CORS(app)

@app.route('/api/medicine/<int:id>', methods=['GET'])
def get_medicine(id):
    med = Medicine.query.get(id)
    if not med:
        return jsonify({'error': 'Medicine not found'}), 404

    return jsonify({
        'id': med.id,
        'name': med.name,
        'description': med.description,
        'usage': med.usage,
        'mechanism': med.mechanism,
        'side_effects': med.side_effects,
        'alternatives': [
            {
                'name': a.name,
                'salt_content': a.salt_content,
                'price': a.price
            } for a in med.alternatives
        ],
        'reviews': [
            {
                'content': r.content,
                'rating': r.rating
            } for r in med.reviews
        ]
    })

if __name__ == '__main__':
    app.run(debug=True)
