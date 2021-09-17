<template>
  <div class="gloss"></div>
  <div class="bar">
    
    <div class="sia"></div>
    <div class="binance md:mx-32 md:mt-1"></div>
    <div class="crypto md:mx-80 lg:mx-96 md:mt-2"></div>
    <div class="valley md:ml-12"></div>
  </div>
  <section class="flex ">
  <div>
      <div class="lightgloss"></div>
      <div class="bluegloss"></div>
      <div class="sidebar md:-ml-12 lg:-ml-0"></div>
      <div class="miniHero md:-ml-40 lg:-ml-0"><div class="miniHeroImage md:-ml-2 lg:-ml-0"></div></div>
      <div class="info md:-ml-40 lg:-ml-0">
        <p class="mx-4 mt-5">Special NFT #1 </p>
        <div class="inforectangle  mx-4 mt-2 md:mt-6">
          <p class="my-3 ml-4">cyberpunk girl</p>
          <h6 class="ml-4">190 ETH <span>($463,888)</span></h6>

    </div>
      </div>
  </div>

      <div class="infohead md:-ml-52 lg:-ml-0">
        <h2>Minting <br> coming soon!</h2>
        <p class="my-10 leading-32 md:pr-24 lg:pr-16">Nextverse is a collection programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 7,777 randomly assembled characters.</p>
        <button class="infobtn"> <p>Next</p> </button>
      </div>  

      <div class="infohead2 md:-ml-60 lg:-ml-10">
        <h2 class=" md:pr-10 lg:pr-0">Highest Art Price <br> Sold on Nartz. </h2>
        <p class="my-10 leading-32 md:pr-24 lg:pr-16">High price sold on Nartz, sign up as an artist and start post your art so you can earn some money!.</p>
        <button class="infobtn2"> <p>Register as an Artist</p> </button>
      </div>  
  </section>

</template>

<script>
export default {

}
</script>

<style scoped>
    .gloss {
    
    position: absolute;
    width: 617.78px;
    height: 423.81px;
    left: 259.11px;
    top: 988.13px;

    background: rgba(169, 222, 238, 0.35);
    filter: blur(200px);
    transform: rotate(-37.75deg);
  }

  .bar {
    position: absolute;
    width: 100%;
    height: 186px;
    left: 0px;
    top: 680px;

    background: rgba(250, 250, 250, 0.1);
    backdrop-filter: blur(90px);
  }
  

  .lightgloss {
    position: absolute;
    width: 603.18px;
    height: 418.4px;
    left: 41.9px;
    top: 1200.32px;

    background: rgba(255, 255, 255, 0.5);
    filter: blur(90px);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .bluegloss {
    position: absolute;
    width: 568.19px;
    height: 455.17px;
    left: -533.15px;
    top: 1220.85px;

    background: rgba(255, 255, 255, 0.5);
    filter: blur(90px);
    transform: matrix(0.82, 0.41, 0.71, -0.86, 0, 0);
  }

  .sidebar {
    position: absolute;
    width: 593px;
    height: 600px;
    left: -43px;
    top: 865px;

    background: url('../assets/Vector.png');
  }

  .miniHero {
    position: absolute;
    width: 509px;
    height: 509px;
    left: 130px;
    top: 1006px;

    background: rgba(250, 250, 250, 0.15);
    backdrop-filter: blur(90px);
  }

  .miniHeroImage {
    position: absolute;
    width: 441.8px;
    height: 441.8px;
    left: 23.6px;
    top: 29.6px;
     background: url('../assets/hero.png');
  }

  .info {
    position: absolute;
    width: 274px;
    height: 179px;
    left: 80px;
    top: 1197px;

/* Dark/100 */

    background: #123B53;
    box-shadow: -30px 20px 100px rgba(18, 59, 83, 0.25);
   

  }

  .info p {
     font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 170%;
/* identical to box height, or 31px */


/* White/100 */

    color: #FFFFFF;
  }

  .inforectangle {
    position: absolute;
    width: 234px;
    height: 92px;
    
    

    /* Primary/10 */

    background: rgba(169, 222, 238, 0.1);
  }

  .inforectangle p{
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height */


    /* Screen/60 */

    color: rgba(250, 250, 250, 0.6);
  }

  .inforectangle h6 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    /* or 30px */


    /* White/100 */

    color: #FFFFFF;

  }

  .inforectangle h6 span {
    color: rgba(250, 250, 250, 0.6);
    font-size: 18px;
    line-height: 21px;
    font-style: normal;
    font-weight: normal;
  }

  .infohead {
    position: absolute;
    width: 488px;
    height: 203px;
    left: 62.77%;
    top: 995px;
  }

  .infohead2 {
    display: none;
  }

  .infohead h2 {
    /* Maven Pro / Bold / H2 */

    font-family: Maven Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 53px;
    line-height: 140%;
    color: rgba(169, 222, 238, 1)
    /* or 74px */
  }

  .infohead p {
    /* Nunito Sans / Regular / Label */

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 170%;
   
    /* Screen/80 */

    color: rgba(250, 250, 250, 0.8);
  }

  .infobtn {
    padding: 21px 30px;
    width: 99px;
    height: 69px;
    left: 856px;
    top: 1559px;

    /* Primary/100 */

    background: #A9DEEE;
  }

  .infobtn p {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 150%;
    /* identical to box height, or 27px */

    text-align: center;

    /* Dark/100 */

    color: #123B53;
  }

   @media (min-width: 768px) and (max-width: 1024px) {
      .bar {
      top: 765px;
      height: 135px;
      }

      .crypto {
        position: absolute;
        width: 168.49px;
        height: 23.7px;
        left: 7.81%;
        right: 33.68%;
        top: 18.09%;
        bottom: 81.26%;
        background: url('../assets/crypto.png');
      }

      .sia {
        position: absolute;
        width: 61.47px;
        height: 35.04px;
        top: 18.09%;
        bottom: 81.14%;
        left: 7.81%;
        background: url('../assets/sia.png');
      }

      .binance {
        position: absolute;
        width: 175.65px;
        height: 33.89px;
        left: 7.81%;
        top: 18.09%;

        background: url('../assets/binance.png');
      }

      .valley {
       position: absolute;
        width: 165.61px;
        height: 31.77px;
      left: 68.81%;
      right: 7.81%;
      top: 18.15%;
      background: url('../assets/valley.png');
      }

      .sidebar {
    position: absolute;
    width: 446.73px;
    height: 452px;
    left: -43px;
    top: 899px;

    background: url('../assets/Vector.png');
  }

  .miniHero {
    position: absolute;
    width: 395px;
    height: 395px;
    left: 130px;
    top: 991px;

    background: rgba(250, 250, 250, 0.15);
    backdrop-filter: blur(90px);
  }

  .miniHeroImage {
    position: absolute;
    width: 342.85px;
    height: 342.85px;
    left: 23.6px;
    top: 29.6px;
     background: url('../assets/hero.png');
  }

  .info {
    position: absolute;
    width: 274px;
    height: 179px;
    left: 185px;
    top: 1162px;

/* Dark/100 */

    background: #123B53;
    box-shadow: -30px 20px 100px rgba(18, 59, 83, 0.25);
   

  }

  .info p {
     font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 170%;
/* identical to box height, or 31px */


/* White/100 */

    color: #FFFFFF;
  }

  .inforectangle {
    position: absolute;
    width: 234px;
    height: 92px;
    
    

    /* Primary/10 */

    background: rgba(169, 222, 238, 0.1);
  }

  .inforectangle p{
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height */


    /* Screen/60 */

    color: rgba(250, 250, 250, 0.6);
  }

  .inforectangle h6 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    /* or 30px */


    /* White/100 */

    color: #FFFFFF;

  }

  .inforectangle h6 span {
    color: rgba(250, 250, 250, 0.6);
    font-size: 18px;
    line-height: 21px;
    font-style: normal;
    font-weight: normal;
  }

  .infohead {
    display: none;
  }

  .infohead2 {
    display: block;
    position: absolute;
    width: 434px;
    height: 148px;
    left: 630px;
    top: 1000px;
  }

  .infohead2 h2 {
    /* Maven Pro / Bold / H2 */

    font-family: Maven Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 53px;
    line-height: 140%;
    color: rgba(169, 222, 238, 1)
    /* or 74px */
  }

  .infohead2 p {
    /* Nunito Sans / Regular / Label */

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 170%;
   
    /* Screen/80 */

    color: rgba(250, 250, 250, 0.8);
  }

  .infobtn2 {
    padding: 21px 30px;
    width: 234px;
    height: 69px;
    left: 856px;
    top: 1559px;

    /* Primary/100 */

    background: #A9DEEE;
  }

  .infobtn2 p {
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

    @media (min-width: 320px) and (max-width: 480px) {
      .bar {
      position: absolute;
      width:100%;
      height: 147px;
      top: 835px;
      height: 135px;
      }

      .crypto {
        position: absolute;
        width: 168.49px;
        height: 23.7px;
        left: 4.81%;
        right: 33.68%;
        top: 48.09%;
        bottom: 81.26%;
        background: url('../assets/crypto.png');
      }

      .sia {
        display: block;
        position: absolute;
         width: 61.47px;
        height: 35.04px;
        left: 30px;
        background: url('../assets/sia.png');
        background-repeat: no-repeat;
      }

      .binance {
        position: absolute;
         width: 175.65px;
        height: 33.89px;
        left: 45.81%;
        top: 6.09%;

        background: url('../assets/binance.png');
      }

      .valley {
       position: absolute;
        width: 165.61px;
        height: 31.77px;
      left: 52.81%;
      right: 7.81%;
      top: 48.15%;
      background: url('../assets/valley.png');
      }

      .sidebar {
        left: -150px;
        margin-top: 105px;
        height: 345px;
      }

      
  .miniHero {
    position: absolute;
    width: 279px;
    height: 279px;
    left: 80px;
    top: 1046px;

    background: rgba(250, 250, 250, 0.15);
    backdrop-filter: blur(90px);
  }

  .miniHeroImage {
    position: absolute;
    width: 242.17px;
    height: 242.17px;
    left: 23.6px;
    top: 23.0px;
     background: url('../assets/hero.png');
  }
  

    .info {
    position: absolute;
    width: 245px;
height: 162px;
    left: 40px;
    top: 1000px;

/* Dark/100 */

    background: #123B53;
    box-shadow: -30px 20px 100px rgba(18, 59, 83, 0.25);
   

  }

  .info p {
     font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 170%;
/* identical to box height, or 31px */


/* White/100 */

    color: #FFFFFF;
  }

  .inforectangle {
    position: absolute;
    width: 205px;
    height: 82px;
    
    

    /* Primary/10 */

    background: rgba(169, 222, 238, 0.1);
  }

  .inforectangle p{
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height */


    /* Screen/60 */

    color: rgba(250, 250, 250, 0.6);
  }

  .inforectangle h6 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    /* or 30px */


    /* White/100 */

    color: #FFFFFF;

  }

  .inforectangle h6 span {
    color: rgba(250, 250, 250, 0.6);
    font-size: 18px;
    line-height: 21px;
    font-style: normal;
    font-weight: normal;
  }

  .infohead {
    display: none;
  }

  .infohead2 {
    display: block;
    position: absolute;
    width: 279px;
    height: 98px;
    left: 25px;
    top: 1359px;
  }

  .infohead2 h2 {
    /* Maven Pro / Bold / H2 */

   font-family: Maven Pro;
   font-style: normal;
   font-weight: bold;
   font-size: 34px;
   line-height: 140%;
    color: rgba(169, 222, 238, 1)
    /* or 74px */
  }

  .infohead2 p {
    /* Nunito Sans / Regular / Label */

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 170%;
   
    /* Screen/80 */

    color: rgba(250, 250, 250, 0.8);
  }

  .infobtn2 {
    padding: 21px 30px;
    width: 234px;
    height: 69px;
    left: 856px;
    top: 1559px;

    /* Primary/100 */

    background: #A9DEEE;
  }

  .infobtn2 p {
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