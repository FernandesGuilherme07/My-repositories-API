import bcrypt from 'bcryptjs';

const createPasswordHash = async (password) => {
  bcrypt.hash(password, 8);
};

export default createPasswordHash;
