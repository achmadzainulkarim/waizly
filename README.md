# Waizly Test
## Requirement
- NodeJS
- Mysql
- Redis (optional)

## Getting Started
This is steps to run this service
- `npm i`
- `cp .env.example .env`
- config `.env` file
- `npm run db:migrate`
- `npm run db:seed`

If you want to run dev mode
- `npm run dev`

If you want to run production mode
- `npm run build`
- `npm start`

## Testing
Please import postman collection on src/docs/Waizly.postman_collection.json and kindly test locally