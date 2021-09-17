<template>
<div class="mapgloss"></div>
    <h2 class="text-5xl font-bold">Roadmap</h2>
    <h2 class="heading md:-ml-24 lg:-ml-0 text-5xl font-bold">How to <span class="text-lightblue"> Collecting </span> Art at Nartz.</h2>
        <div class="map grid grid-col-1 md:grid-cols-3 grid-flow-row gap-2 px-6">
            <div v-for="map in maps" :key="map.id"  class="mapbox md:-ml-16 lg:-ml-0">
                <div class="xl:ml-32 md:ml-16 ml-24">
                <div class="boxshadow ml-2"></div>
                <div class="box  -mt-14">{{map.id}}</div>
                </div>
                <h3 class="xl:mt-16 md:mt-10 md:mx-10 lg:mx-0">{{map.header}}</h3>
                <p class="lg:my-4 md:pb-12 lg:pb-0 md:mx-10 lg:mx-4">{{map.text}}</p>
            </div>

        </div>
        <div class="mapgloss2"></div>
</template>

<script>
export default {
    data(){
        return {
            maps : [
                {id: 1, header: 'NFT Comicbook to holders', text: 'Drop NFT Comicbook to holders' },
                {id: 2, header: 'NFT Item Marketplace', text: 'Start discover and find theart  you like, you can sortand filter from the date added,most popular, price filter, and more.'},
                {id: 3, header: 'P2E game launching', text: 'Final step, after you find the artyou like, place a bid and wait. If youwin when the auction ends,pay it, and it’s yours!'},
                ]
        }
    }

}
</script>

<style scoped>
    .mapgloss {
        position: absolute;
width: 617.78px;
height: 356.68px;
left: -72.74px;
top: 2600px;

background: rgba(169, 222, 238, 0.35);
filter: blur(210px);
transform: rotate(9.08deg);

    }

    h2 {
       position: absolute;
        left: 470px;
        top: 3100px;

        /* Maven Pro / Bold / H2 */

        font-family: Maven Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 83px;
        line-height: 140%;
        /* or 74px */

        text-align: center;

        /* White/100 */

        color: #FFFFFF;  
    }

    .heading {
        display: none;
    }

    .map {
       position: absolute;
        left: 30px;
        top: 3250px;
    }

    .mapbox {
       
        width: 360px;
        height: 301px;
        
         padding: 35px 40px;
        /* Primary/10 */
        background: rgba(169, 222, 238, 0.1);
    }

    .box {
       
        width: 45px;
        height: 45px;
        left: calc(15% - 45px/2 - 3.5px);
        top: 35px;

        /* Primary/100 */

        background: #A9DEEE;
        font-family: Maven Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 150%;
        /* identical to box height, or 27px */

        text-align: center;

        /* Dark/100 */

        color: #123B53;
    }

    .boxshadow {
        width: 45px;
        height: 45px;
        left: calc(50% - 45px/2 + 3.5px);
        top: 42px;

        /* Primary/20 */

        background: rgba(169, 222, 238, 0.2);
    }

    h3 {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 150%;
        /* identical to box height, or 36px */

        text-align: center;

        /* White/100 */

        color: #FFFFFF;
    }

    p {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        /* or 18px */

        text-align: center;

        /* Screen/80 */

        color: rgba(250, 250, 250, 0.8);
    }

    .mapgloss2 {
        position: absolute;
        width: 617.78px;
        height: 356.68px;
        left: 1627.49px;
        top: 3666.52px;

        background: rgba(169, 222, 238, 0.35);
        filter: blur(210px);
        transform: rotate(127.17deg);

    }

    @media (min-width: 768px) and (max-width: 1024px) {

        h2 {
            display: none;
        }

        .heading {
        display: block;
        position: absolute;
        left: 248px;
        top: 3100px;
        width: 483px;
        height: 148px;
        /* Maven Pro / Bold / H2 */

        font-family: Maven Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 53px;
        line-height: 140%;
        /* or 74px */

        text-align: center;

        /* White/100 */

        color: #FFFFFF;
        }

        .map {
       position: absolute;
        left: 90px;
        top: 3360px;
    }

    .mapbox {
       
        width: 275px;
        height: 326px;
        
         padding: 35px 20px;
        /* Primary/10 */
        background: rgba(169, 222, 238, 0.1);
    }

     .box {
       
        width: 45px;
        height: 45px;
        left: calc(5% - 45px/2 - 3.5px);
        top: 35px;

        /* Primary/100 */

        background: #A9DEEE;
        font-family: Maven Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 150%;
        /* identical to box height, or 27px */

        text-align: center;

        /* Dark/100 */

        color: #123B53;
    }

    .boxshadow {
        width: 45px;
        height: 45px;
        left: calc(20% - 45px/2 + 3.5px);
        top: 42px;

        /* Primary/20 */

        background: rgba(169, 222, 238, 0.2);
    }
    }
   
       @media (min-width: 320px) and (max-width: 480px) {
           h2 {
            display: none;
        }

        .heading {
        display: block;
        position: absolute;
width: 325px;
height: 96px;
left: 25px;
top: 3152px;

/* Maven Pro / Bold / H3 */

font-family: Maven Pro;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 140%;
/* or 48px */

text-align: center;

/* White/100 */

color: #FFFFFF;
        }

        .map {
       position: absolute;
        left: 25px;
        top: 3300px;
    }

    .mapbox {
       
        width: 275px;
        height: 326px;
        
         padding: 35px 20px;
        /* Primary/10 */
        background: rgba(169, 222, 238, 0.1);
    }

     .box {
       
        width: 45px;
        height: 45px;
        top: 35px;

        /* Primary/100 */

        background: #A9DEEE;
        font-family: Maven Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 150%;
        /* identical to box height, or 27px */

        text-align: center;

        /* Dark/100 */

        color: #123B53;
    }

    .boxshadow {
        width: 45px;
        height: 45px;
        top: 42px;

        /* Primary/20 */

        background: rgba(169, 222, 238, 0.2);
    }
       }
</style>