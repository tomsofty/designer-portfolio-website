import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: dict, context) -> dict:
    '''API для управления отзывами клиентов'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }

    database_url = os.environ.get('DATABASE_URL')
    schema_name = os.environ.get('MAIN_DB_SCHEMA', 'public')

    if method == 'GET':
        conn = psycopg2.connect(database_url)
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        
        cursor.execute(f"SELECT id, name, role, content, avatar, created_at FROM {schema_name}.testimonials WHERE approved = TRUE ORDER BY created_at DESC")
        testimonials = cursor.fetchall()
        
        cursor.close()
        conn.close()

        for t in testimonials:
            if t.get('created_at'):
                t['created_at'] = t['created_at'].isoformat()

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'testimonials': testimonials}),
            'isBase64Encoded': False
        }

    if method == 'POST':
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '').strip()
        role = body.get('role', '').strip()
        content = body.get('content', '').strip()
        avatar = body.get('avatar', '')

        if not name or not role or not content:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Все поля обязательны'}),
                'isBase64Encoded': False
            }

        conn = psycopg2.connect(database_url)
        cursor = conn.cursor()

        cursor.execute(
            f"INSERT INTO {schema_name}.testimonials (name, role, content, avatar, approved) VALUES (%s, %s, %s, %s, %s)",
            (name, role, content, avatar, False)
        )
        conn.commit()

        cursor.close()
        conn.close()

        return {
            'statusCode': 201,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'message': 'Отзыв отправлен на модерацию'}),
            'isBase64Encoded': False
        }

    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Метод не поддерживается'}),
        'isBase64Encoded': False
    }
