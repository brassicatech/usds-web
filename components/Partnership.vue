<template>
  <div id="partnership" class="py-[6rem] bg-gradient-to-b from-[#20212E] to-[#000000]">
    <div class="max-w-[1350px] w-[70%] m-auto flex justify-between">
      <div class="basis-[45%]">
        <div
          class="w-fit mb-[1.5rem] rounded-full bg-gradient-to-t from-[#292A2E] to-[#B1B1B1] p-[1px]"
        >
          <div
            class="flex rounded-full h-full w-fit items-center justify-center bg-[#393A46] back"
          >
            <p class="py-[12px] px-[30px] font-cabinet_m text-[#5FACC9]">
              PARTNERSHIP
            </p>
          </div>
        </div>
        <p
          class="font-cabinet_m text-[50px] leading-[63px] mb-[1rem] bg-gradient-to-br from-[#7A96AC] via-[#FFFFFF] to-[#BCCAD7] text-transparent bg-clip-text"
        >
          How you can be<br />partners with USDS
        </p>
        <p class="text-[16px] text-[#DBDBDB]">
          Find answers to the most common inquiries and<br />get the information
          you need quickly.
        </p>
      </div>
      <div class="basis-[45%]">
        <form class="form">
          <div class="form-group">
            <input type="text" id="company_name" class="input" required />
            <label for="company_name" class="label">Company Name</label>
          </div>
          <div class="form-group">
            <input type="text" id="contact_person" class="input" required />
            <label for="contact_person" class="label">Contact Person</label>
          </div>
          <div class="form-group">
            <input type="email" id="email" class="input" required />
            <label for="email" class="label">Email Address</label>
          </div>
          <div class="form-group">
            <textarea name="description" id="description" class="input textarea" required></textarea>
            <label for="description" class="label">Brief Description of Your Businesse</label>
          </div>
          <button
            class="bg-[#06B1F1] h-[50px] w-full mt-[1rem] font-cabinet_b rounded-lg"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
    <!-- <div
      class="mt-[6rem] h-[6px] bg-gradient-to-r from-[#AACCFF] to-[#0DB4F2]"
    /> -->
  </div>
</template>

<script></script>

<style scoped></style>
