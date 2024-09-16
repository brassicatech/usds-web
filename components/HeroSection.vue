<template>
  <div
    class="h-[90vh] bg-[url('assets/images/hero-bg.jpg')] bg-cover bg-no-repeat bg-center"
  >
    <div class="relative h-full flex-col justify-between overflow-hidden">
      <div class="relative z-10 h-full max-w-[1350px] m-auto">
        <div class="h-full flex flex-col justify-center items-center pb-[4rem] md:pb-0">
          <p
            class="text-[16px] mb-[1rem] font-cabinet_l text-[#EFE9E9] block md:hidden"
          >
            Open Participation Stablecoin
          </p>
          <div class="flex items-center">
            <h1
              class="font-cabinet_black text-[65px] leading-[60px] md:leading-[120px] md:text-[150px] bg-gradient-to-br from-[#7A96AC] via-[#FFFFFF] to-[#BCCAD7] text-transparent bg-clip-text"
            >
              The USD
            </h1>
            <p
              class="text-[25px] ml-4 font-cabinet_l text-[#EFE9E9] leading-[34px] hidden md:block"
            >
              Open<br />Participation<br />Stablecoin
            </p>
          </div>
          <div
            class="flex items-center md:mt-[-30px] mt-[-20px] pl-0 md:pl-[100px]"
          >
            <h1
              class="font-cabinet_black text-[65px] md:text-[150px] bg-gradient-to-br from-[#7A96AC] via-[#FFFFFF] to-[#BCCAD7] text-transparent bg-clip-text"
            >
              Standard
            </h1>
            <div class="w-[3rem] md:w-full">
              <img src="@/assets/icons/logo-icon.svg" alt="" />
            </div>
          </div>
          <button
            class="bg-[#06B1F1] h-[50px] w-[10rem] font-cabinet_b rounded-lg"
            @click="navigateTo('/#partnership')"
          >
            Join Waitlist
          </button>
          <div class="">
            <p
              class="text-[#00AEEF] text-center font-cabinet_b mt-[20px] md:hidden block"
            >
              Q1 2025 LAUNCH
            </p>
          </div>
        </div>
      </div>
      <video
        src="@/assets/images/Bitgo-BG.mp4"
        autoplay="{true}"
        loop
        muted
        class="absolute top-0 z-1 w-auto min-w-full min-h-full max-w-none"
      ></video>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
