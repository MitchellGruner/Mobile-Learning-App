export function confirmPasswordValidator(confirmpassword, password) {

    if (!confirmpassword || confirmpassword.length <= 0 ) return "Passwords do not match"
    if (confirmpassword!=password) return "Passwords do not match"
    return ''  
    
  }