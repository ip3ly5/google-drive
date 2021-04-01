<template>
    <div class="login-container">
    <h2>Login</h2>
        <form id="frm-login" onsubmit="return false">
            <div class="input-pair">
                <label for="name">Username</label>
                <input name="username" type="text" value="developer+sbk@easytranslate.com">
            </div>
            <div class="input-pair">
                <label for="name">Password</label>
                <input name="password" type="password" value="*******">
            </div>
            <div class="form-footer">
                <div class="standard-button" @click="Login">Login</div>
            </div>
        </form>
    </div>
</template>
<script>
import Api from '@/services/api'

export default {
    name: 'login',
    computed: {
        user(){ return this.$store.getters.getUser }
    },
    methods: {
        Login() {
            let form = new FormData()
            form.append('grant_type', 'password')
            form.append('scope', 'dashboard')
            form.append('client_id', process.env.VUE_APP_CLIENT_ID)
            form.append('client_secret', process.env.VUE_APP_CLIENT_SECRET)
            form.append('username', process.env.VUE_APP_LOGIN_USERNAME)
            form.append('password', process.env.VUE_APP_LOGIN_PASSWORD)

            Api().post('oauth/token', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }}).then(response=> {
                    if(response.status != 200) {
                        console.log('error'); return
                    }

                    localStorage.token = response.data.access_token
                    // NOTE: Localstorage is an insecure method of storing auth tokens, 
                    // I would normally receive it via a cookie but this is a frontend test so we'll make do for now :)
                    this.$router.push({name: 'Home'})
            }).catch(err=>{
                console.log(err)
                console.error(
                    `You likely need to make an .env file in root directory with the following params: 
                    VUE_APP_CLIENT_ID=*****
                    VUE_APP_CLIENT_SECRET=*****
                    VUE_APP_LOGIN_PASSWORD=*****
                    VUE_APP_LOGIN_USERNAME=****`)
            })
        }
    },
    beforeRouteLeave(to, from, next){
        if(from.name == 'Login' && to.name == 'Home'){
            if(localStorage.token){
                this.$store.dispatch('fetchUser').then((res)=>{
                    this.$store.dispatch('fetchFolders', this.user.included[0].attributes.team_identifier)
                    this.$store.dispatch('fetchProjects', this.user.included[0].attributes.team_identifier)
                }).then(()=>{
                    next()  
                })
            }
        }
    }
}
</script>

<style scoped>
.login-container {
    position:absolute;
    grid-gap: 1rem;
    width: 30%;
    padding: 1rem;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    margin: 0;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    display:flex;
    flex-direction:column;
}

.input-pair {
    display:flex;
    flex-direction:column;
}

.standard-button {
    width:3em;
}
</style>