#!/bin/bash
set -e

echo "=== Installing Python dependencies ==="
pip install -r requirements.txt

echo "=== Installing Node.js dependencies & building frontend ==="
cd frontend
npm install
npm run build
cd ..

echo "=== Running migrations ==="
python manage.py migrate --noinput

echo "=== Seeding demo data ==="
python seed_data.py || echo "Seed skipped (data may already exist)"

echo "=== Collecting static files ==="
python manage.py collectstatic --noinput

echo "=== Build complete ==="
