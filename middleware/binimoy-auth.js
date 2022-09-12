export default function (context){


if(!window.localStorage.getItem('token')){
    context.redirect('/auth/login')

}
    
}