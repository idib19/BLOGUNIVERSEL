import jwt from 'jsonwebtoken';

export function verifierAuthentication(req) {
  const cookies = req.cookies;
  const token = cookies.tokenjwt;
  if (!token) {
    return false;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    return true;

    // getuserbyid
  } catch (error) {
    console.log(error);
    return false;
  }
}






  
//   function getCookie(name) {
//     // Helper function to get a cookie by name
//     const cookies = document.cookie.split(';')
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim()
//       if (cookie.startsWith(name + '=')) {
//         return cookie.substring(name.length + 1, cookie.length)
//       }
//     }
//     return ''
//   }