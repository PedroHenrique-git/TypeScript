type VerififyUserFn = (user: User, sentValue: User) => boolean;
type User = {
  username: string;
  password: string;
};
const verifyUser: VerififyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser: User = { username: "pedro", password: "123" };
const senUser: User = { username: "pedro", password: "123" };

console.log(verifyUser(bdUser, senUser));
