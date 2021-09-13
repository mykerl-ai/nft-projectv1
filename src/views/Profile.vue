<template>
  <Navbar />

    <div class="bar"></div>

    <div class="profile">
        <div class="layout  flex flex-wrap  lg:gap-16">
            <div class="profilebar bg-glass">
                <div class="persona"></div>
                <h2 class="py-3">bu.darmani1</h2>
                <p class="py-2">Kate Chris Darmani</p>
                <p class="text py-2 px-4">3D artist based on the USA with a wavy style ready to kick your own art gallery! </p>
                <button class="follow mt-24 mb-8">Follow</button>

                <div class="flex gap-5">
                    <button class="hire">Available for Hire</button>
                    <button class="mail pl-4">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.5 6.25H2.5V23.75H27.5V6.25Z" stroke="#A9DEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.75 7.5L15 16.25L26.25 7.5" stroke="#A9DEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    
                </div>
                <p class="category py-8">3D, Illustration, Abstract, Arts, Gradient, Minimalist, Trendy</p>
            </div>

            <div class="profilebar">
                <div class="set flex gap-6">

                    <div class="timeframe">
                        <p>TimeFrame</p>
                        <select class="time px-5 focus:bg-darkblue focus:outline-none text-lightblue focus:text-lightblue">
                        <option value="1">TimeFrame</option>
                        <option value="1"></option>
                        <option value="1"></option>
                        </select>
                    </div>

                    <div class="sort">
                        <p>Sort</p>
                        <select class="time px-5 focus:bg-darkblue focus:outline-none text-lightblue focus:text-lightblue">
                        <option value="">Sort by</option>
                        <option value=""></option>
                        <option value=""></option>
                        </select>
                    </div>
                </div>

                <div class=" images mt-12">
                    <div class="display">
                        <div class="gradient">
                            <div class="pic"></div>
                            <div class="title mt-16">Teal Block</div>
                        </div>
                    </div>

                     
                </div>

               
            </div>

             <div class="flex flex-wrap lg:gap-32 md:gap-24 lg:mt-0 md:mt-12">
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
        </div>

             <button class="load mt-32 mx-80">
                Load More
            </button>

     

    </div>

          <Footer class="footer"/>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {Navbar, Footer} 

}
</script>

<style scoped>

    .footer {
        top: 3000px;
        margin-top: 500px;
    }

    .load {
        padding: 21px 30px;
        width: 254px;
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

    .display {
    width: 360px;
    height: 466px;
    background: rgba(169, 222, 238, 0.1);
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

    .bar {
        position: absolute;
        width: 100%;
        height: 130px;
        left: 0px;
        top: 159px;
        background: rgba(250, 250, 250, 0.1);
        backdrop-filter: blur(90px);
        background: url('../assets/bar.png');
    }

    .profile {
        position: absolute;
        width: 100%;
        left: 0%;
        right: 0%;
        top: 49.0%;
        bottom: 0%;
        padding: 0px 50px;
    }

    .profilebar {
        width: 417px;
        height: 668px;
    }

    .persona {
        width: 172px;
        height: 172px;
        border-radius: 50%;
        background: url('../assets/persona.png');
        margin-top: -20%;
        margin-left: 27%;
    }

    .profilebar h2 {
        font-family: Maven Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 34px;    
        line-height: 140%;
        text-align: center;
        color: #FFFFFF;
    }

    .profilebar p {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 150%;
        text-align: center;
        color: #FAFAFA;
    }

    .text {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 100%;
        text-align: center;
        color: rgba(255, 255, 255, 0.6);
    }

    .follow {
        padding: 21px 30px;
        background: #A9DEEE;
        width: 339px;
        height: 69px;
        margin-left: 10%;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 150%;
        text-align: center;
        color: #123B53;
    }

    .hire {
        width: 253px;
        height: 66px;
        margin-left: 10%;
        background: rgba(169, 222, 238, 0.2);
        opacity: 0.5;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 26px;
        text-align: center;
        color: #A9DEEE;
    }

    .mail {
        width: 66px;
        height: 66px;
        background: rgba(169, 222, 238, 0.2);
        opacity: 0.5;
    }

    .category {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 27px;
        text-align: center;
        color: rgba(255, 255, 255, 0.4);
    }

    .time {
        background: rgba(169, 222, 238, 0.1);
        width: 198px;
        height: 98.78px;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 150%;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }

.time::after {
  content: '\2304';
  color: #A9DEEE;
}

.timeframe p, .sort p {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;

    display: flex;
    align-items: center;
    color: #FFFFFF;
    margin: 15px;
}

</style>