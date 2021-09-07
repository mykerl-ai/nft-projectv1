<template>
  <Navbar />
  <div class="gloss"></div>
  <div class="bar">
    
    <div class="sia">Connect Wallet</div>
    <div class="crypto md:mx-80 lg:mx-96 md:mt-2">
        <button class="button md:ml-24 lg:-ml-0 -mt-12">
          See How it Works
      </button>
      </div>
  </div>

  <div class="wallets md:mt-16 lg:mt-0 grid lg:grid-cols-3 md:px-44 lg:px-0 md:grid-cols-1 md:gap-y-10 lg:gap-y-0 lg:gap-1">
      <button class="wallet focus:ring-4 focus:ring-lightblue-600">
          <div class="metamask md:mx-16 md:my-8"></div>
          <p class="walletname">MetaMask</p>
      </button>
      <button class="wallet focus:ring-4 focus:ring-lightblue-600">
          <div class="rec md:mx-10 md:-mt-5 py-3"><p class="px-8">Recommended</p></div>
          <p class="walletname md:mt-40 md:mb-24">FortMatic</p>
      </button>
      <button class="wallet focus:ring-4 focus:ring-lightblue-600">
          <div class="fortmatic md:mx-16 md:my-8"></div>
          <p class="walletname md:mx-16 md:my-8">Coinbase</p>

      </button>
    <button @click="isModalVisible = true" class="continue lg:ml-96 lg:mt-12 md:ml-16">Continue</button>
  </div>
  <div class="gloss2"></div>

  
  <Modal
    v-if="isModalVisible"
    @close="isModalVisible = false"
  >
    <template v-slot:header>
        <div class="grid grid-cols-1">
      <h1 v-if="!success" class="head mt-6">Paste Wallet Address</h1> 
      <h1 v-if="success" class="head mt-6">Wallet Connected!</h1> 
      <p v-if="!success" class="headertext block mt-6 px-10">Enter or paste your FortMatic Ethereum wallet address, or you can connect it directly</p>
      <p v-if="success" class="headertext block mt-6 px-10">You have sucessfully connected your wallet, now you can start bidding or upload your own art!</p>
      </div>
    </template>

    <template v-slot:body>
      <div v-if="!success" class="addressinput mt-6 pl-20 pt-8 pb-6 flex">
          <i class="-mr-16 mt-7 z-10"><svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.02844 27.625C6.02844 26.6857 6.40158 25.7848 7.06577 25.1206C7.72996 24.4565 8.6308 24.0833 9.57011 24.0833H28.6951" stroke="#A9DEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.57011 2.83331H28.6951V31.1666H9.57011C8.6308 31.1666 7.72996 30.7935 7.06577 30.1293C6.40158 29.4651 6.02844 28.5643 6.02844 27.625V6.37498C6.02844 5.43567 6.40158 4.53483 7.06577 3.87064C7.72996 3.20645 8.6308 2.83331 9.57011 2.83331V2.83331Z" stroke="#A9DEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></i>
          <input v-model="address"  type="text" class="input" placeholder="Enter wallet address">
      </div>

      <p v-show="!address && !success" class="or mt-2">-or-</p>

      <button v-show="!address && !success" class="direct ml-36 mt-10">Direct FortMatic Connect</button>

       <button @click="success = true" v-show="address && !success" class="connect ml-36 mt-10">Connect Now</button>
       

       <button v-if="success" class="connect ml-36 mt-10">Discover Arts</button>
       <button v-if="success" class="direct ml-36 mt-10">Upload My Own Art</button>
    </template>
  </Modal>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Modal from '@/components/Modal.vue'
export default {
    data(){
        return{
            connect: false,
            isModalVisible: false,
            address: null,
            fill: false,
            success: false
        }
    },
    components: {Navbar, Modal},
    methods: {
        connectWallet(){
            
        } 
    },



       
}
</script>

<style scoped>
 /* Modal styles */
     


 .head {
     font-family: Maven Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 140%;
/* identical to box height, or 48px */
    text-align: center;
/* White/100 */
    color: #FFFFFF;
 }

 .headertext {
     font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    /* or 18px */
    text-align: center;
    /* Screen/80 */
    color: rgba(250, 250, 250, 0.8);
 }

    .addressinput {
        width: 100%;
        height: 168px;
        background: rgba(250, 250, 250, 0.1);
        backdrop-filter: blur(90px);
    }

    .book {
        width: 34px;
        height: 34px;
        background: url('../assets/book.png');
    }

    .input {
        width: 90%;
        height: 98px;
        background: #123B53;
        padding: 0px 80px;
    }

    ::placeholder {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 100%;
        color: rgba(250, 250, 250, 0.6);
    }

    input[type=text]{
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 100%;
        color: #ffff
    }

    .or {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 100%;
        text-align: center;
        color: rgba(250, 250, 250, 0.8);
    }

        .direct {
            width: 274px;
            height: 69px;
            background: rgba(169, 222, 238, 0.1);
            font-family: Nunito Sans;
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 150%;
            text-align: center;
            color: #A9DEEE;
        }


        .connect {
            width: 274px;
            height: 69px;
            padding: 21px 30px;
            background: #A9DEEE;
            font-family: Nunito Sans;
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 150%;
            text-align: center;
            color: #123B53;
        }

    /*Modal style end*/ 
    
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

    .bar {
      top: 159px;
      height: 125px;
      position: absolute;
      width: 100%;
      left: 0px;
      background: rgba(250, 250, 250, 0.1);
      backdrop-filter: blur(90px);
      }

      .crypto {
        position: absolute;
        width: 168.49px;
        height: 23.7px;
        left: 14.81%;
        right: 33.68%;
        top: 48.69%;
        bottom: 61.26%;
        
      }

      .sia {
        position: absolute;
        width: 385px;
        height: 35.04px;
        top: 18.09%;
        bottom: 81.14%;
        left: 7.81%;
        font-family: Maven Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 43px;
        line-height: 140%;
        /* or 74px */


color: #FFFFFF;

      }

      
.button {
    position: absolute;
  

    /* Dark/100 */


    padding: 21px 30px;

width: 214px;
height: 69px;


/* Dark/100 */

background: #123B53;
font-family: Nunito Sans;
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 150%;
/* identical to box height, or 27px */


/* Primary/100 */

color: #A9DEEE;
}

.wallets {
    position: absolute;
    left: 8%;
    right: 0%;
    top: 55%;
    bottom: 0%;
    height: 266px;
}

.wallet {
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
width: 268px;
height: 266px;

/* Primary/10 */

background: rgba(169, 222, 238, 0.1);
}

.metamask {
    width: 135px;
    height :135px;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

background: url('../assets/metamask.png');
}

.fortmatic {
     width: 135px;
    height :135px;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
}

.walletname {
    font-family: Maven Pro;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 140%;
/* identical to box height, or 48px */

text-align: center;

/* White/100 */

color: #FFFFFF;

}

.rec {
    width: 196px;
    height: 53px;


/* Primary/100 */

    background: #A9DEEE;
    backdrop-filter: blur(90px);
    
}

.rec p {
    font-family: Nunito Sans;
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 150%;
/* identical to box height, or 27px */


/* Dark/100 */

color: #123B53;
}

.continue {
    width: 136px;
    height: 69px;
    left: 444px;
    top: 661px;
    padding: 0px 10px;

    /* Dark/100 */
    background: #A9DEEE;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 150%;
    z-index: 10;
/* identical to box height, or 27px */


/* Grey/100 */

color: #123B53;
}

    @media (min-width: 768px) and (max-width: 1024px) {
        .wallets {
            position: absolute;
            left: 8%;
            right: 0%;
            top: 25%;
            bottom: 0%;
            height: 266px;
        }

        .continue {
            width: 136px;
            height: 69px;
            left: 444px;
            top: 661px;
            padding: 0px 10px;

    /* Dark/100 */
            background: #A9DEEE;
            font-family: Nunito Sans;
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 150%;
/* identical to box height, or 27px */


/* Grey/100 */

        color: #123B53;
}
    }

    @media (min-width: 1281px) {
        .continue {
    width: 136px;
    height: 69px;
    left: 444px;
    top: 661px;
    padding: 0px 10px;

    /* Dark/100 */
    background: #A9DEEE;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 150%;
    z-index: 10;
/* identical to box height, or 27px */


/* Grey/100 */

color: #123B53;
}
    }
</style>