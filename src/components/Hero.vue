<template>
  <div class="hero">

      <div class="herotext">
          <h1 class="md:-ml-14 lg:-ml-0">Modern Concept Artist Connector.</h1>
          <p class="body md:-ml-14 lg:-ml-0 md:pr-24 lg:pr-0">Discover 1000+ digital artwork and collect all of them directly in one platform with safe payment.</p>
          <button class="md:-ml-14 lg:-ml-0">Start Collecting</button>
          <a class="see md:-ml-20 lg:-ml-0">See How it Works</a>
      </div>

      <div class="sidebar md:-ml-24 lg:-ml-0">
          <div class="rectangle md:-ml-24 lg:-ml-0">
              <div class="sidebarimage"></div>
              <div class="sidebarinfo">
                  <p class="infotext md:ml-8 md:my-6">A Crushed Eternal</p>
                  <div class="infobox">
                      <span class="md:my-4 md:mx-6">Current Bid </span>
                      <h6 class="md:my-12 md:mx-6">2.781 ETH</h6>
                  </div>
              </div>
          </div>
      </div>
      <div class="heroImage"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero {
    position: absolute;
width: 77%;
height: 678px;
left: 176px;
top: 156px;
background-repeat: no-repeat;
background: rgba(250, 250, 250, 0.15);
backdrop-filter: blur(90px);
}

.herotext {
    display: none;
}

.sidebar {
    display: none;
}

.heroImage {
    position: absolute;
    width: 90%;
    height: 588.49px;
    left: 45.96px;
    top: 50.76px;
    background-repeat: no-repeat;
    background: url('../assets/hero.png')
}

 @media (min-width: 768px) and (max-width: 1024px) {
     .hero {
         width: 100%;
         left: 0;
         background: none;
     }

    .herotext {
        display: block;
        position: absolute;
        width: 429px;
        height: 148px;
        left: 80px;
        top: 80px;
    }

    h1 {
        position: absolute;
        font-family: Maven Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 53px;
        line-height: 140%;
        /* or 74px */


        /* White/100 */

        color: #FFFFFF;
    }

    .body {
        position: absolute;
        top: 185px;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 150%;
        /* or 18px */


        /* Screen/80 */

        color: rgba(250, 250, 250, 0.8);
    }

    button {
        padding: 21px 30px;

        position: absolute;
        width: 193px;
        height: 69px;
        top: 340px;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 150%;
        /* identical to box height, or 27px */

        text-align: center;

        /* Dark/100 */

        color: #123B53;
        /* Primary/100 */

        background: #A9DEEE;
    }

    .see {
        position: absolute;
        height: 25px;
        left: 249px;
        top: 362px;

/* Nunito Sans / Bold / Display */

        font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 25px;
/* identical to box height, or 156% */
        color: #A9DEEE;
    }

     .heroImage {
         display: none;
     }

     .sidebar {
        display: block;
        position: absolute;
        width: 100%;
        height: 10074.17px;
        left: 431px;
        top: -156.2px;
        background: url('../assets/tab.png');
        background-repeat: no-repeat;

     }

     .sidebarimage {
         position: absolute;
         width: 376px;
         height: 376px;
         left: 47px;
         top: 30px;

         background: url('../assets/sidebar.png');
     }

     .rectangle {
         position: absolute;
        width: 440px;
        height: 440px;
        left: 204px;
        top: 182px;
        background: rgba(250, 250, 250, 0.15);
        backdrop-filter: blur(90px);
/* Note: backdrop-filter has minimal browser support */
     }

     .sidebarinfo {
         position: absolute;
        width: 288px;
        height: 183px;
        left: -40px;
        top: 296px;

        /* Dark/100 */

        background: #123B53;
        box-shadow: -30px 20px 100px rgba(18, 59, 83, 0.25);
     }

     .infotext {
         position: absolute;
         font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 170%;
        text-align: center;
        /* identical to box height, or 31px */


        /* White/100 */

        color: #FFFFFF;

     }

     .infobox {
        position: absolute;
        width: 238px;
        height: 87px;
        left: 25px;
        top: 67px;

        /* Primary/10 */

        background: rgba(169, 222, 238, 0.1);
     }

     span {
         position: absolute;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 18px;
        /* identical to box height */


        /* Screen/60 */

        color: rgba(250, 250, 250, 0.6);

     }

     h6 {
         font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 150%;
        /* identical to box height, or 30px */


        /* White/100 */

        color: #FFFFFF;

     }
 }
</style>