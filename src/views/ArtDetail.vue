<template>
  <Navbar />
    <div class="gloss"></div>
  <div class="art flex gap-40">
      <div class="image"></div>
      <div class="">
          <h1 class="artheader mt-12">Sound Wave v1</h1>
          <div v-show="!bid" class="artbody text-justify mt-5 pr-16 flex-grow-0">
              Created with love, inspired by audio spectrum with abstract style so I re-created it in 3D software so it will look awesome, <span class="font-bold text-lightblue"> Read More...</span>
              <div class="artistbox mt-10 flex gap-3">
                  <div class="artist flex">
                      <div class="artistimage m-4"></div>
                      <div>
                        <p class="desig pt-2">Artist</p>
                        <h6 class="name pr-3 pt-4">Samuel.zero73</h6>
                    </div>
                  </div>
                  <div class="artist flex">
                      <div class="artistimage m-4"></div>
                      <div>
                        <p class="desig pt-2">Artist</p>
                        <h6 class="name pr-3 pt-4">Samuel.zero73</h6>
                    </div>
                  </div>
              </div>

              <div class="w-full info mt-6 flex gap-32">
                  <div class="">
                      <p class="">Last Bid</p>
                      <h6>1.431 ETH</h6>
                  </div>
                  <div class="">
                      <p class="">List Price</p>
                      <h6>2.50 ETH</h6>
                  </div>
          </div>
          <div class="flex cover w-full gap-4 mt-12">
            <button @click="bid = true" class="bidbutton">Place a Bid</button>
            <button class="buybutton">Buy Now</button>
        </div>
      </div>
      <div v-show="bid" class="artbody2">

          <div class="place p-4">Place a Bid</div>

          <div v-show="bid && !success" class="activeprice p-4 flex gap-6">
                <button @click="sub" class="minus px-6 py-2">-</button>

                <div class="price px-6 py-2">{{price}} ETH</div>

                <button @click="add" class="plus px-6 py-2">+</button>
          </div>
          <div v-show="success" class="bidsuccess flex ml-24">
                      <div class="artistimage m-4"></div>
                      <div>
                        <p class="desig pt-2">Last Bid by Julio</p>
                        <h6 class="successbid pr-3 pt-4">{{price}} ETH</h6>
                    </div>
                  </div>

           <div v-show="!success" class="flex cover px-6 w-full gap-4 mt-12">
            <button @click="success = !success" class="bidbutton">Place a Bid</button>
            <button class="buybutton">Buy Now</button>
        </div>

        <div v-show="success" class="flex cover px-6 w-full gap-4 mt-12">
            <button @click="success = !success" class="bidbutton">Bid Again</button>
            <button class="buybutton">Buy Now</button>
        </div>
      </div>

       <div class="w-full info mt-6 flex gap-32">
                  <div class="">
                      <p class="">Last Bid</p>
                      <h6>1.431 ETH</h6>
                  </div>
                  <div class="">
                      <p class="">List Price</p>
                      <h6>2.50 ETH</h6>
                  </div>
          </div>
    </div>
  </div>

  <div class="gloss2"></div>

 <div class="flex gap-96 md:mt-60 lg:mt-4 md:gap-32 more">
          <h4>More works by Samuel</h4>
          <button class="view">view all</button>
          </div>
  <div class="works flex gap-2">

      <div class="display">
          <div class="gradient">
              <div class="pic"></div>
              <div class="title mt-16">Teal Block</div>
          </div>
      </div>

       <div class="display">
          <div class="gradient">
              <div class="pic"></div>
              <div class="title mt-16">Teal Block</div>
          </div>
      </div>

       <div class="display">
          <div class="gradient">
              <div class="pic"></div>
              <div class="title mt-16">Teal Block</div>
          </div>
      </div>

       <div class="display">
          <div class="gradient">
              <div class="pic"></div>
              <div class="title mt-16">Teal Block</div>
          </div>
      </div>
  </div>
    <Subscribe class="subscribe"/>
    <Footer class="footer"/>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Subscribe from '@/components/Subscribe.vue'
import Footer from '@/components/Footer.vue'
export default {
    data(){
        return{
            bid: false,
            price: 0.5,
            success: false,
        }
    },
    components: {Navbar, Subscribe, Footer},
    methods: {
        sub(){
            this.price = (this.price-0.01).toFixed(2)
        },
        add(){
            this.price = this.price++
        }
    }

}
</script>

<style scoped>
.subscribe {
    top: 1500px;
}

.footer {
    top: 1900px;
}

.gloss {
    position: absolute;
width: 553.2px;
height: 379.5px;
left: -148px;
top: 130.11px;

background: rgba(169, 222, 238, 0.35);
filter: blur(190px);
transform: rotate(-11.51deg);

}

    .art {
    width: 100%;
     position: absolute;
    height: 511px;
    top: 169px;
    flex-grow: unset;
}

.image {
    width: 447px;
    height: 100%;


    background: url('../assets/art.png');
    filter: drop-shadow(0px 4px 60px rgba(104, 104, 104, 0.1));
}

.artheader {
    font-family: Maven Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 140%;
    color: #FFFFFF;
}

.artbody {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    width: 377px;
    /* or 18px */


    /* Screen/80 */

    color: rgba(250, 250, 250, 0.8);
}

.artbody2 {
    background: rgba(250, 250, 250, 0.1);
backdrop-filter: blur(90px);
width: 377px;
height: 324px;
}

.artistbox {
    width: 100%;
    height: 75px;
}

.artist {
    width: 185px;
    height: 75px;
    background: rgba(169, 222, 238, 0.1);
}

.bidsuccess {
    width: 185px;
    height: 75px;
    background: #123B53;
}

.artistimage {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: url('../assets/profile.png');
}

.desig {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height */


    /* Screen/60 */
    color: rgba(250, 250, 250, 0.6);
}

.name {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 31px */


    /* White/100 */

    color: #FFFFFF;
}

.successbid {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 140%;
    /* identical to box height, or 31px */


    /* White/100 */

    color: #FFFFFF;
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

.bidbutton {
    display: block;
    padding: 21px 30px;
    width: 60%;
    height: 69px;
    background: #A9DEEE;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 150%;

    text-align: center;

/* Dark/100 */

color: #123B53;
}

.buybutton {
    padding: 21px 20px;
    width: 138px;
    height: 69px;
    background: rgba(169, 222, 238, 0.1);
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 150%;
    /* identical to box height, or 27px */

    text-align: center;

    /* Primary/100 */

    color: #A9DEEE;
}

.cover {
    height: 69px;
}

.gloss2 {
    position: absolute;
    width: 617.78px;
    height: 423.81px;
    left: 127px;
    top: 876.18px;

    background: rgba(169, 222, 238, 0.35);
    filter: blur(200px);
    transform: rotate(-37.75deg);
}

.works {
    position: absolute;
    width: 100%;
    height: 466px;
    left: 80px;
    top: 898px;
    position: relative;
        overflow: hidden;
}

.display {
    width: 360px;
    height: 466px;
    background: rgba(169, 222, 238, 0.1);
     animation: slideshow 12s linear infinite;
}

@keyframes slideshow{
        0% {transform: translateX(0);}
        100% {transform: translateX(-100%);}
    }


.gradient {
    height: 360px;
    width: 100%;
    background: url('../assets/glass.png');
    padding: 20px;
}

.pic {
    width: 310px;
    height: 310px;
    background: url('../assets/hero.png');
    filter: drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.15));
   
}

.title {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    /* identical to box height, or 36px */


    /* White/100 */

    color: #FFFFFF;
}


.more {
position: absolute;
width: 100%;
height: 48px;
left: 190px;
top: calc(200% - 48px/2 - 379.5px);

}

.more h4 {
    font-family: Maven Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 140%;
/* identical to box height, or 48px */


/* White/100 */

    color: #FFFFFF;
}

.view {
    font-family: Nunito Sans;
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 150%;
/* identical to box height, or 27px */

text-align: right;

/* Primary/100 */

color: #A9DEEE;
}

.place {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    /* identical to box height, or 30px */

    /* White/100 */

    color: #FFFFFF;
}

.activeprice {
    width: 100%;
    height: 98px;
}

.minus {
    width: 60px;
    height: 60px;
    background: #123B53;
     font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    /* identical to box height, or 36px */


    /* White/100 */

    color: #A9DEEE;
}

.price {
    width: 177px;
    height: 98px;
    background: #123B53;
    font-family: Maven Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 140%;
/* identical to box height, or 48px */

    display: flex;
    align-items: center;

/* White/100 */

    color: #FFFFFF;
}

.plus {
    width: 60px;
    height: 60px;
    background: #A9DEEE;
     font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    /* identical to box height, or 36px */


    /* White/100 */

    color: #123B53;

}

@media (min-width: 768px) and (max-width: 1024px) {
        .more {
position: absolute;
width: 100%;
height: 48px;
left: 80px;
top: calc(90% - 48px/2 - 379.5px);

}
    }
</style>