const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin12345';
  const hash = '$2b$10$BvXqJcpy/dr275g5zWZqQuPozVN4TAq5ZQ7Ws5MAICJCUTaah7sCK';
  const isMatch = await bcrypt.compare(myPassword, hash); 
  console.log(isMatch);
};

verifyPassword();