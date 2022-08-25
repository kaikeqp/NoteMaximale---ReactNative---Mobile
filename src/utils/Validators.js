export function loginIsValid(user, password) {
  return noBlankFieldsCheck(user, null, password, null);
}

export function registerIsValid(user, email, password, passwordConfirm) {
  if (!noBlankFieldsCheck(user, email, password, passwordConfirm)) {
    return;
  }
  return samePassword(password, passwordConfirm);
}

function noBlankFieldsCheck(user, email, password, passwordConfirm) {
  let userTrim = user?.trim();
  let emailTrim = email?.trim();
  let campos = [userTrim, emailTrim, password, passwordConfirm];
  if (campos.some((x) => x?.length === 0)) {
    alert("Certifique-se de preencher corretamente todos os campos");
    return;
  }
  return true;
}

function samePassword(password, passwordConfirm) {
  console.log(password, passwordConfirm);
  if (password !== passwordConfirm) {
    alert("Sem correspondência de senha.");
    return;
  }
  return true;
}
