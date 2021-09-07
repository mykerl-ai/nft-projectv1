<template>
  <div class="rectangle md:-ml-12 lg:-ml-0">
      <div class="subgloss"></div>
      <h2 class="-mt-72 mx-40 px-6 text-center">Subscribe to our Newsletter</h2>
      <div class="input md:-ml-24 lg:-ml-0 -mt-12">
          <form class="w-full h-full bg-darkblue" action="">
              <div class="mail"></div>
              <input class="w-full h-full bg-darkblue px-32 focus:outline-none text-white" type="text" placeholder="Email address here">
              <button class="formbtn -ml-44 my-4">Subscribe</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.rectangle {
    position: absolute;
    width: 85%;
    height: 441px;
    left: 100px;
    top: 3400px;

    background: #A9DEEE;
}

.subgloss {
    
width: 1159.57px;
height: 307.53px;
left: 1605.11px;
top: 2105.88px;

background: rgba(255, 255, 255, 0.5);
filter: blur(90px);
transform: matrix(-1, 0, 0, 1, 0, 0);
}

h2 {
    position: absolute;
    font-family: Maven Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 53px;
    line-height: 140%;
    color: #123B53;
}

.input {
    position: absolute;
    width: 549px;
    height: 98px;
    left: 279px;
    top: 312px;
    /* Dark/100 */
    background: #123B53;
}

.mail {
    position: absolute;
    left: 12.5%;
    right: 12.5%;
    top: 25%;
    bottom: 45.83%;
    /* Primary/100 */
    background: url('../assets/mail.png');
    background-repeat: no-repeat;
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

.formbtn {
    padding: 21px 30px;
    position: absolute;
    width: 144px;
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


    @media (min-width: 768px) and (max-width: 1024px) {
        .rectangle {
    position: absolute;
    width: 81%;
    height: 441px;
    left: 100px;
    top: 3660px;

    background: #A9DEEE;
}

.input {
    position: absolute;
    width: 549px;
    height: 98px;
    left: 139px;
    top: 312px;
    /* Dark/100 */
    background: #123B53;
}

.mail {
    position: absolute;
    left: 12.5%;
    right: 12.5%;
    top: 25%;
    bottom: 45.83%;
    /* Primary/100 */
    background: url('../assets/mail.png');
    background-repeat: no-repeat;
}
    }
</style>