<template>
  <div class="footer flex w-full">
      <div class="icons w-full h-full">
            <router-link :to="{name: 'Home'}">
            <div >
                 <img class="logo" src="../assets/logo.png" alt="">
            </div>
        </router-link>
        
        <p class="footertext">One stop NFT marketplace with 100% safe payment and trusted for more than 3 years.</p>

        <div class="social flex gap-3">
            <img src="../assets/discord.png" alt="">
            <img src="../assets/twitter.png" alt="">

        </div>
      </div>

      <div class="list lg:ml-44 md:ml-24 flex">
            <ul class="lg:ml-96 md:ml-60">
                <li class="listheader">Menu</li>
                <li class="listbody">Home</li>
                <li class="listbody">Mint</li>
                <li class="listbody">About</li>
                <li class="listbody">Roadmap</li>
            </ul>

             <ul class="lg:ml-40 md:ml-24">
                <li class="listheader">Social</li>
                <li class="listbody">Twitter</li>
                <li class="listbody">Discord</li>
                <li class="listbody">Email</li>
            </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer {
    position: absolute;
    height: 100px;
    left: 117.58px;
    top: 4000px;
}

.logo{
   position: absolute;
width: 51px;
height: 41px;

top: 134.71px;

}

.footertext {
    position: absolute;
width: 280px;
height: 54px;
;
top: 200px;
bottom: 259px;
    font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 150%;
/* or 18px */


/* Screen/80 */

color: rgba(250, 250, 250, 0.8);
}

.social {
    position: absolute;
width: 38px;
height: 44px;
top: 348px;

}

.list {
    position: absolute;
    top: 134.71px;
   
}

.listheader {
     font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 150%;
/* identical to box height, or 36px */


/* Screen/100 */

    color: #FAFAFA;

    opacity: 0.85;
}

.listbody {
    font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 100%;
/* identical to box height, or 18px */
margin: 24px 0px;

/* Screen/60 */

color: rgba(250, 250, 250, 0.6);
}

@media (min-width: 768px) and (max-width: 1024px) {
    .footer {
    position: absolute;
    left: 117.58px;
    top: 4200px;
}
}
</style>