from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime, timedelta
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient(os.getenv('MONGODB_URI'))
db = client.nextjs_demo

# User collection
users = db.users

@app.route('/api/analytics', methods=['GET'])
def get_analytics():
    try:
        # Get user statistics
        total_users = users.count_documents({})
        active_users = users.count_documents({
            'last_active': {'$gte': datetime.utcnow() - timedelta(minutes=5)}
        })
        admin_users = users.count_documents({'role': 'admin'})
        
        # Get system metrics
        system_metrics = {
            'cpu_usage': 45.2,  # In a real app, you would get this from system metrics
            'memory_usage': 62.5,
            'disk_usage': 78.3
        }
        
        return jsonify({
            'total_users': total_users,
            'active_users': active_users,
            'admin_users': admin_users,
            'system_metrics': system_metrics
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/activity', methods=['GET'])
def get_activity():
    try:
        # Get recent activity
        recent_activity = list(users.find(
            {},
            {'email': 1, 'last_active': 1, 'role': 1}
        ).sort('last_active', -1).limit(10))
        
        return jsonify({
            'recent_activity': recent_activity
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.utcnow().isoformat()
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000) 
