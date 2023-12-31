import dotenv from 'dotenv';
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  // null / undefined 모두 트루 ==인경우만
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  // 여기서 리턴을 안해주면 value가 undefined가 나옴!
  return value;
}

// 숫자는 parseInt로 해줘야 에러가 발생하지않음!
export const config = {
  jwt: {
    secretKey: required('JWT_SECRET'),
    expiresInSec: parseInt(required('JWT_EXPIRES_SEC', 86400)),
  },
  bcrypt: {
    saltRounds: parseInt(required('BCRYPT_SALT_ROUNDS', 12)),
  },
  host: {
    port: parseInt(required('HOST_PORT', 8080)),
  },
};
