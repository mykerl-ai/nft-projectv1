<template>
  <Navbar />
  <div class="gloss"></div>
  <div class="upload flex flex-wrap md:gap-16 lg:gap-16">
      <div class="uploadbox bg-glass">
          <div class="steps w-full mt-56">
              <div class="send  ml-44"><svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.5834 4.4165L24.2917 28.7082" stroke="#A9DEEE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M48.5834 4.4165L33.1251 48.5832L24.2917 28.7082L4.41675 19.8748L48.5834 4.4165Z" stroke="#A9DEEE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
              </div>

              <div class="h5 mt-4">Drag or Drop an Image</div>
              <div class="p mt-4">2000 x 2000px PNG or JPG files recommended</div>
          </div>
      </div>

      <div class="imagedetails w-full">
          <form action="">
              <p>Item Title</p>
              <input class="bg-glass pl-4 py-3 mt-4 mb-3 input focus:bg-darkblue focus:outline-none text-lightblue focus:text-lightblue" placeholder="Enter item Title" name="title" type="text">

                <p>Description</p>
                <textarea placeholder="Tell us about your Items" class="bg-glass input pl-4 pt-6 mt-4 mb-3 focus:bg-darkblue focus:outline-none text-lightblue focus:text-lightblue" name="" id="" cols="30" rows="3"></textarea>
          </form>
          
          <div class="numbers flex gap-4">
          <div class="open">
             <p>Open Bid</p>
             <div class="eth w-full flex gap-16">
                 <input class="bg-glass eth w-full input focus:bg-darkblue focus:outline-none text-lightblue focus:text-lightblue" placeholder="e.g 0.2 SOL" name="title" type="text">

             </div>
          </div>
          <div class="open">
              <p>List Price</p>
              <div class="eth w-full flex gap-0">
                  <input class="bg-glass eth w-full  input focus:bg-darkblue focus:outline-none text-lightblue focus:text-lightblue" placeholder="e.g 0.2 SOL" name="title" type="text">
    
              </div>
          </div>
          </div>
      </div>
        <div class="buttons flex md:gap-6 lg:gap-32 md:w-96 lg:w-full">
            <button @click="isModalVisible = true" class="schedule">
                Schedule
            </button>

            <button class="publish">
                Publish Now
            </button>
        </div>

  </div>

  <!-- <Footer class="footer"/> -->

    <Modal
    v-if="isModalVisible"
    @close="isModalVisible = false"
  >
    <template v-slot:header>
        <div class="">
           <h2 class="head text-center mt-7">Schedule Post</h2>
           <p class="body text-center pt-3">Enter your date and time so your artwork will uploaded automatically after you set it.</p>
      </div>
    </template>

    <template v-slot:body>
      <div class="form ml-32">
         <form action="">
              <p class="mt-16">Select Date</p>
            <div class="select">
                <select class="focus:bg-darkblue focus:outline-none text-lightblue focus:text-lightblue">
                    <option value="1"></option>
                    <option value="2">No JS</option>
                    <option value="3">Nice!</option>
                </select>
            </div>
            <p class="mt-8">Select Date</p>
            <div class="select mt-3">
                <select class="focus:bg-darkblue focus:outline-none text-lightblue focus:text-lightblue">
                    <option value="1"></option>
                    <option value="2">No JS</option>
                    <option value="3">Nice!</option>
                </select>
            </div>

            <button class="action -ml-16 mt-16">Schedule</button>
          </form>
          
      </div>

      
    </template>
  </Modal>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
// import Footer from '@/components/Footer.vue'
import Modal from '@/components/Modal.vue'
export default {
    components: {Navbar, Modal},
    data(){
        return {
            isModalVisible: false,
        }
    }
}
</script>

<style scoped>

.action {
    padding: 21px 30px;
    width: 434px;
    height: 69px;
    /* Primary/100 */
    background: #A9DEEE;
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

.footer {
    /* margin-top: 157000px; */
    display: none;
}


.schedule {
    padding: 21px 30px;

width: 268px;
height: 69px;

/* Primary/10 */

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

.head {
    font-family: Maven Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 140%;
/* identical to box height, or 48px */


/* White/100 */

    color: #FFFFFF;
}

.body {
    font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 100%;
/* or 18px */


/* Screen/80 */

color: rgba(250, 250, 250, 0.8);
}

.publish {
padding: 21px 30px;

width: 566px;
height: 69px;
/* Primary/100 */

background: #A9DEEE;
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

.upload {
    position: absolute;
    width: 90%;
    height: 511px;
    left: 80px;
    top: 169px;
}

.uploadbox {
    width: 447px;
    height: 511px;
    border: 2px dashed #A9DEEE;
}

.send {
    width: 53px;
    height: 53px;
}

.h5 {
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

.p {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 100%;
/* identical to box height, or 18px */

    text-align: center;

/* White/60 */

    color: rgba(255, 255, 255, 0.6);
}

.imagedetails {
     width: 447px;
     height: 511px;
}

.imagedetails p {
    font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 150%;
/* identical to box height, or 30px */


/* White/100 */

color: #FFFFFF;

}

.input {
    width: 377px;
}

.numbers {
    width: 100%;
    height: 134px;
}

.open {
    width: 178px;
    height: 134px;
   
}

.open p {
     font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
/* identical to box height, or 30px */


/* White/100 */

    color: #FFFFFF;
}

.eth {
    height: 84px;
}

.eth p {
    font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 100%;
/* identical to box height, or 18px */


/* Screen/60 */

color: rgba(250, 250, 250, 0.6);
}

.eth h6 {
    font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 26px;
/* identical to box height, or 162% */


/* Primary/100 */

color: #A9DEEE;
}

::placeholder {
    font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 100%;
/* identical to box height, or 18px */


/* Screen/60 */

color: rgba(250, 250, 250, 0.6);
}

.gloss {
    position: absolute;
width: 617.78px;
height: 423.81px;
left: 127px;
top: 800.18px;

background: rgba(169, 222, 238, 0.35);
filter: blur(200px);
transform: rotate(-37.75deg);
}


/*Select */

select {
  /* Reset Select */
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  /* Personalize */
  flex: 1;
  padding: 0 1em;
  color: #fff;
  background: rgba(169, 222, 238, 0.1);
  background-image: none;
  cursor: pointer;
}
/* Remove IE arrow */

/* Custom Select wrapper */
.select {
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  overflow: hidden;
}
/* Arrow */
.select::after {
  content: '\2304';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em 1em;
  transition: .25s all ease;
  pointer-events: none;
  color: #A9DEEE;
}
/* Transition */

.form {
    width: 50%;
}

.form p {
    font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 150%;
/* identical to box height, or 30px */

display: flex;
align-items: center;

/* White/100 */

color: #FFFFFF;

}

/* Other styles*/


@media (min-width: 768px) and (max-width: 1024px) {
    .footer {
    /* top: 1600px; */
    display: none;
    }

    .buttons {
        margin-top: -100px;
    }

}


</style>