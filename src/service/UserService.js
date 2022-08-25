import { insertObject, read } from "../Storage";

class UserService {
  async register(data) {
    try {
      read(data.user)
        .then((user) => {
          if (user) {
            alert("Usuário já existente");
            return;
          } else {
            return insertObject(data.user, data)
              .then((response) => {
                return Promise.resolve(response);
              })
              .catch((error) => {
                return Promise.reject(error);
              });
          }
        })
        .catch(() => alert("Erro ao tentar consultar o usuário"));
      return null;
    } catch (error) {
      alert("Ops, ocorreu um problema ao tentar registrar o usuário.");
    }
  }

  async login(data) {
    try {
      return read(data.user)
        .then((r) => {
          const response = JSON.parse(r);
          if (data.password != response?.password) {
            return Promise.reject("Ops, senha ou usuário inválido.");
          }
          return Promise.resolve(response);
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    } catch (error) {
      alert("Ops, ocorreu um problema ao tentar logar com o usuário.");
    }
  }
}
const userService = new UserService();
export default userService;
