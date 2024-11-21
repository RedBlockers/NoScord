function invalidateToken(){
    alert('Token invalide veuillez vous reconnecter');
    localStorage.removeItem('token');
    window.location.href = './pages/login.html';
}


export class Auth {
    static async authenticateToken(token) {
        try{
            const response = await axios.post('/users/authenticateToken', {token: token});
            if (response.status === 200 && response.data.success) {
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('avatar', response.data.avatar);

            }else{
                invalidateToken()
            }
        }catch(error){
            console.error("erreur lors de l'authentification", error);
            invalidateToken()
        }
    }

    static logOut(){
        localStorage.removeItem('token');
        window.location.href = 'pages/login.html';
    }
}