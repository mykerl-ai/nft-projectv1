<template>
  <div class="discover h4 flex flex-wrap md:flex-nowrap gap-12 md:gap-32">
      <div>
          <h3><span>Discover h4</span>  Nextverse special NFTs.</h3>
          <h4><span>Discover</span>  Nextverse Marketplace.</h4>
          <h5><span>Highest</span>  Art Price Sold on Nartz</h5>
      </div>
      <div>
          <p class="md:mr-0 md:pr-40 lg:pr-56 md:-ml-32 lg:-ml-0 md:mt-4">Discover 1000+ collectibles artwork from professional artist all around the world, happy bidding!</p>
          </div>

  </div>

  
      <div class="headbase">

      </div>

      <div class="more md:mt-72 md:mb-32">
          <p class="md:-ml-24 pr-24 md:pr-12 lg:pr-0 lg:-ml-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis vitae, praesentium minima, quos corrupti tempore quasi, est sequi assumenda nulla totam possimus? Ratione obcaecati tenetur sunt quis autem eius numquam.</p>
          
          <button class="mt-12 lg:ml-12 ml-12 md:ml-1">Discover More Art</button>
          </div>
</template>

<script>
import glass from '@/assets/glass.png'
import glassImage from '@/assets/front.png'
import profile from '@/assets/profile.png'


export default {
    data(){
        return {
            glass, 
            glassImage,
            profile,
            arts: [
                {id: 1, firstImage: glass, secondImage: glassImage, glassText: 'Nextverse Special NFT #2', glassText2: 'Bright Vluids', bid: 'Current Bid', bidPrice: '1.431 ETH', list: 'List Price', listPrice: '2.50 ETH', profileImage: profile, desig: 'Artist', name: 'Samuel.zero73'},
                {id: 2, firstImage: glass, secondImage: glassImage, glassText: 'Nextverse Special NFT #2', glassText2: 'Bright Vluids', bid: 'Current Bid', bidPrice: '1.431 ETH', list: 'List Price', listPrice: '2.50 ETH', profileImage: profile, desig: 'Artist', name: 'Samuel.zero73'}
            ]
        }
    },

    
     mounted () {
         console.log(glass)
//   this.glass = glass
//   this.glassImage = glassImage
//   this.profile = profile
},

 
}
</script>

<style scoped>
    .discover {
        position: absolute;
        width: 100%;
        height: 148px;
        left: 150px;
        top: 1690px;
    }

    .discover span {
        color: rgba(169, 222, 238, 1);
    }

    h3 {
        font-family: Maven Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 140%;
        color: #ffffff;
    }

    h4 {
        display: none;
    }

    h5 {
        display: none;
    }

    .discover p {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 170%;
        /* or 18px */


        /* Screen/80 */

        color: rgba(250, 250, 250, 0.8);
    }

    .headbase {
         position: absolute;
        width: 100%;
        height: 1461px;
        left: 0px;
        top: 1900px;
        background: url('../assets/anime.png');

    }

.glass {
height: 360px;
left: 0%;
right: 0%;
top: 0px;
background: url('../assets/glass.png');
}

.lightglass {
height: 360px;
left: 0%;
right: 0%;
top: 0px;
background: url('../assets/lightglass.png');
}

.colorglass {
height: 360px;
left: 0%;
right: 0%;
top: 0px;
background: url('../assets/colorglass.png');
}

.glasstext {
    /* Nunito Sans / Bold / H2 */
position: absolute;
width: 289px;
height: 36px;
top: 390px;
margin-left: 20px;
font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 150%;
/* identical to box height, or 36px */


/* White/100 */

color: #FFFFFF;
}

.glasstext2 {
    display: none;
}

.glass div {
    position: absolute;
    width: 310px;
    height: 310px;
    left: calc(13% - 310px/2);
    top: 4px;

    filter: drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.15));          
}

.lightglass div {
 
    width: 310px;
    height: 310px;
    left: calc(13% - 310px/2);
    top: 4px;

    background: url('../assets/front2.png');
    filter: drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.15));          
}

.colorglass div {
    
    width: 310px;
    height: 310px;
    left: calc(13% - 310px/2);
    top: 4px;

    background: url('../assets/front.png');
    filter: drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.15));          
}

.info, .profile, .name, .desig, .profilebutton, .more {
    display: none;
}

@media (min-width: 768px) and (max-width: 1024px) {

      .discover {
        position: absolute;
        width: 100%;
        height: 148px;
        left: 130px;
        top: 1505px;
    }

    h3 {
        display: none;
    }

    h4 {
        display: block;
        width: 373px;
        font-family: Maven Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 38px;
        line-height: 140%;
        color: #ffffff;
    }

    h5 {
        display: none;
    }

    .headbase {
        background: url('../assets/anime.png');
        width: 100%;
        height: 100%;
        left: 0px;
        top: 1500px;
        position: absolute;
    }

.glass div {
    position: absolute;
    width: 310px;
    height: 310px;
    left: calc(13% - 310px/2);
    top: 4px;

    background: url('../assets/front.png');
    filter: drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.15));          
}

.lightglass div {
 
    width: 310px;
    height: 310px;
    left: calc(13% - 310px/2);
    top: 4px;

    background: url('../assets/front2.png');
    filter: drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.15));          
}

.colorglass div {
    
    width: 310px;
    height: 310px;
    left: calc(13% - 310px/2);
    top: 4px;

    background: url('../assets/front.png');
    filter: drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.15));          
}

.glasstext {
    display: none;
}

.glasstext2 {
    /* Nunito Sans / Bold / H2 */
display: block;
position: absolute;
width: 289px;
height: 36px;
top: 390px;
margin-left: 15px;
font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 150%;
/* identical to box height, or 36px */
/* White/100 */
color: #FFFFFF;
}

.info {
    display: block;
    width: 145px;
    height: 98px;
    left: 461px;
    margin: 80px 0px 20px 0px;
    /* Primary/10 */
    background: rgba(169, 222, 238, 0.1);
}

.info p {
    font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 18px;
/* identical to box height */


/* Screen/60 */

color: rgba(250, 250, 250, 0.6);
}

.info h6 {
    font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 150%;
/* identical to box height, or 30px */


/* White/100 */

color: #FFFFFF;
}

.profile {
    display: block;
    width: 53px;
    height: 53px;
    border-radius: 50%;
    left: 461px;
    margin: 80px 0px 20px 12px;
    background: url('../assets/profile.png');
    /* Primary/10 */
}
.desig {
    display: block;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height */


    /* Screen/60 */
    margin: 80px 0px 20px 12px;
    color: rgba(250, 250, 250, 0.6);
}

.name {
    display: block;
    font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 140%;
/* identical to box height, or 31px */


/* White/100 */

color: #FFFFFF;
}

.profilebutton {
    display: block;
    padding: 21px 30px;
width: 90%;
    height: 69px;
    left: 461px;
    margin: 80px 10px 20px 10px;
    /* Primary/10 */


/* Primary/100 */

background: #A9DEEE;
}

.more {
    display: block;
    position: absolute;
    width: 436px;
    height: 36px;
    left: 294px;
    top: 2420px;
}

.more p {
    font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 150%;
/* or 18px */

text-align: justify center;

/* Screen/80 */

color: rgba(250, 250, 250, 0.8);

}

.more button {
    padding: 21px 30px;
width: 214px;
height: 69px;
background: #A9DEEE;
font-family: Nunito Sans;
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 100%;
/* identical to box height, or 27px */

text-align: center;

/* Dark/100 */

color: #123B53;

}

}

    @media (min-width: 320px) and (max-width: 480px) {
           .discover {
        position: absolute;
        width: 100%;
        height: 248px;
        left: 27px;
        top: 1805px;
    }

    h3 {
        display: none;
    }

    h4 {
        display: none;
    }

    h5 {
        display: block;
        font-family: Maven Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 34px;
        line-height: 140%;
        /* or 48px */

        text-align: center;
        color: #fff;
        padding-right: 30px;
    }

    .discover h5 span {
        content: 'Art Price';
        color: rgba(169, 222, 238, 1);
    }

       .headbase {
        
        width: 100%;
        height: 100%;
        left: 0px;
        top: 1900px;
        position: absolute;
    }



.glass div {
    position: absolute;
    width: 310px;
    height: 310px;
    left: calc(13% - 310px/2);
    top: 4px;

    background: url('../assets/front.png');
    filter: drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.15));          
}

.lightglass div {
 
    width: 310px;
    height: 310px;
    left: calc(13% - 310px/2);
    top: 4px;

    background: url('../assets/front2.png');
    filter: drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.15));          
}

.colorglass div {
    
    width: 310px;
    height: 310px;
    left: calc(13% - 310px/2);
    top: 4px;

    background: url('../assets/front.png');
    filter: drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.15));          
}

.glasstext {
    display: none;
}

.glasstext2 {
    /* Nunito Sans / Bold / H2 */
display: block;
position: absolute;
width: 289px;
height: 36px;
top: 390px;
margin-left: 15px;
font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 150%;
/* identical to box height, or 36px */
/* White/100 */
color: #FFFFFF;
}

.info {
    display: block;
    width: 145px;
    height: 98px;
    left: 461px;
    margin: 80px 0px 20px 0px;
    /* Primary/10 */
    background: rgba(169, 222, 238, 0.1);
}

.info p {
    font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 18px;
/* identical to box height */


/* Screen/60 */

color: rgba(250, 250, 250, 0.6);
}

.info h6 {
    font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 150%;
/* identical to box height, or 30px */


/* White/100 */

color: #FFFFFF;
}

.profile {
    display: block;
    width: 53px;
    height: 53px;
    border-radius: 50%;
    left: 461px;
    margin: 80px 0px 20px 12px;
    background: url('../assets/profile.png');
    /* Primary/10 */
}
.desig {
    display: block;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height */


    /* Screen/60 */
    margin: 80px 0px 20px 12px;
    color: rgba(250, 250, 250, 0.6);
}

.name {
    display: block;
    font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 140%;
/* identical to box height, or 31px */


/* White/100 */

color: #FFFFFF;
}

.profilebutton {
    display: block;
    padding: 21px 30px;
width: 90%;
    height: 69px;
    left: 461px;
    margin: 80px 10px 20px 10px;
    /* Primary/10 */


/* Primary/100 */

background: #A9DEEE;
}

.more {
    display: block;
    position: absolute;
    width: 436px;
    height: 36px;
    left: 25px;
    top: 2777px;
}

.more p {
    font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 150%;
/* or 18px */

text-align: justify center;

/* Screen/80 */

color: rgba(250, 250, 250, 0.8);

}

.more button {
    padding: 21px 30px;
width: 214px;
height: 69px;
background: #A9DEEE;
font-family: Nunito Sans;
font-style: normal;
font-weight: 800;
font-size: 14px;
line-height: 100%;
/* identical to box height, or 27px */

text-align: center;

/* Dark/100 */

color: #123B53;

}
    }

</style>