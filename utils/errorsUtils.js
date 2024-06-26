module.exports.signUpErrors = (err) => {
    let errors = { name: "", email: "", password: "" };
  
    if (err.message.includes("name"))
      errors.pseudo = "nom incorrect ou déjà pris";
  
    if (err.message.includes("email")) errors.email = "email incorrect";
  
    if (err.message.includes("password"))
      errors.password = "Le mot de passe doit faire 6 caractères minimum";
  
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
      errors.email = "Cet email est déjà enregistré";
  
    return errors;
  };

  module.exports.signUpErrors = (err) => {
    let errors = { email: "", password: "" };
  
    if (err.message.includes("email")) errors.email = "Email inconnu";
  
    if (err.message.includes("password"))
      errors.password = "Le mot de passe ne correspond pas";
  
    return errors;
  };