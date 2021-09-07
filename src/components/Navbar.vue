<template>
  <header class="flex ">
       <router-link :to="{name: 'Home'}">
            <div >
                 <img class="logo" src="../assets/logo.png" alt="">
                 <p class="sitehead">Nartz</p>
            </div>
        </router-link>

        <div class="navigation flex md:gap-16 lg:gap-40 md:-ml-12 lg:-ml-0">
            <div class="navlinks ml-64 sm:hidden md:flex gap-16">
                <router-link :to="{name: 'Home'}">Marketplace</router-link>
                <router-link :to="{name: 'Home'}">Features</router-link>
                <router-link :to="{name: 'Home'}">Activity</router-link>
            </div>

           
        </div>
         <button @click="this.$router.push({name: 'Connect'})" v-show="!connect" class="connect lg:ml-32 -mt-5">Connect Wallet</button>
            <div v-show="connect" class="upload lg:ml-16 -mt-5">Upload Art</div>
            <div v-show="connect" class="profile"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 27.5C5.5 23.375 11 23.375 13.75 20.625C15.125 19.25 11 19.25 11 12.375C11 7.79213 12.8329 5.5 16.5 5.5C20.1671 5.5 22 7.79213 22 12.375C22 19.25 17.875 19.25 19.25 20.625C22 23.375 27.5 23.375 27.5 27.5" stroke="#A9DEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

  </header>
</template>

<script>
export default {
    data(){
        return {
            connect: false,
        }
    }

}
</script>

<style scoped>
.upload {
    position: absolute;
padding: 21px 0px;
width: 103px;
height: 69px;
font-family: Nunito Sans;
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 150%;
flex: none;
order: 0;
flex-grow: 0;
left: 822px;
top: 67.6px;
/* identical to box height, or 27px */

text-align: center;

/* Dark/100 */

color: #123B53;


/* Primary/100 */

background: #A9DEEE;
}

.profile {
    position: absolute;
    width: 69px;
    height: 69px;
    border: 1px solid#A9DEEE;
    padding: 15px 17px;
    left: 996px;
    top: 47.6px;
}

.logo{
    position: absolute;
    width: 51px;
    height: 41px;
    left: 150px;
    top: 60px;
}

.sitehead {
    display: none;
    position: absolute;
width: 74px;
height: 33px;
left: 143px;
top: 58px;

font-family: Maven Pro;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 33px;
/* identical to box height */


/* Primary/100 */

color: #A9DEEE;

}

.navigation {
    position: absolute;
    width: 51px;
    height: 41px;
    left: 100px;
    top: 68px;
}


a {
  font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 100%;
/* identical to box height, or 18px */


/* Screen/60 */

color: rgba(250, 250, 250, 0.6);

}


.connect {
    background: #123B53;
    padding: 14px 30px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 100%;
    /* identical to box height, or 27px */
    text-align: center;
    /* Primary/100 */
    color: #A9DEEE;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: -12px 10px 0px 10px;
    left: 822px;
top: 67.6px;
position: absolute;

}

 header{
   position: relative;
        z-index: 10;
 }

 @media (min-width: 768px) and (max-width: 1024px) {
     header {
         margin-left: -90px;
     }
     
     .logo{
    left: 120px;
    }

    .sitehead {
        display: block;
        margin: 0px 40px 0px 40px;
    }

     .navigation {
    left: 90px;
    }

    .connect {
      background: #123B53;
      padding: 20px 30px;

      margin: -12px 0px -12px -50px;

}
 }
</style>