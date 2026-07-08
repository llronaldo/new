#!/bin/bash
set -e

echo "=== Installing Python dependencies ==="
pip install -r requirements.txt

echo "=== Setting up Node.js ==="
# Render 等平台默认安装了 Node.js，如果没装则自动安装
if ! command -v node &> /dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi
echo "Node.js $(node -v), npm $(npm -v)"

echo "=== Installing frontend dependencies & building ==="
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
