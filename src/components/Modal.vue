<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <transition name="modal-fade">
    <div @click.self="close" class="modal-backdrop z-10">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            This is the default tile!
          </slot>
          
        </header>

        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            This is the default body!
          </slot>
        </section>

        <!-- <footer class="modal-footer">
          <slot name="footer">
            <p class="text-center text-sm my-4">WeGo Network</p>
          </slot>
        
        </footer> -->
      </div>
    </div>
  </transition>
</template>

<style>
  .modal-backdrop {
   position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(39, 60, 72, 0.8);
backdrop-filter: blur(30px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #123B53;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 566px;
    height: 566px;
    
  }

  .modal-header,
  .modal-footer {
    padding: 8px 20px;
    display: flex;
  }

  .modal-header {
    position: relative;
    justify-content: space-between;
    
  }

  .modal-footer {
    flex-direction: column;
  }

  .modal-body {
    position: relative;
    padding: 10px 0px;
  }


  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

  @media (min-width: 320px) and (max-width: 480px) {
        .modal {
    background: #123B53;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 325px;
    height: 545px;
    
  }
  }
</style>