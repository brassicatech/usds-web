<template>
  <div
    id="partnership"
    class="py-[6rem] bg-gradient-to-b from-[#20212E] to-[#000000]"
  >
    <div
      class="max-w-[1350px] md:w-[70%] w-full px-[1.5rem] m-auto md:flex justify-between"
    >
      <div class="basis-[45%]">
        <div
          class="w-fit md:m-0 m-auto mb-[1.5rem] rounded-full bg-gradient-to-t from-[#292A2E] to-[#B1B1B1] p-[1px]"
        >
          <div
            class="flex rounded-full h-full w-fit items-center justify-center bg-[#393A46] back"
          >
            <p class="py-[12px] px-[30px] font-cabinet_m text-[#5FACC9]">
              PARTNERSHIP
            </p>
          </div>
        </div>
        <h1
          class="font-cabinet_b md:text-[50px] text-[30px] md:text-left text-center md:leading-[60px] leading-[40px] mb-[1rem] bg-gradient-to-br from-[#7A96AC] via-[#FFFFFF] to-[#BCCAD7] text-transparent bg-clip-text"
        >
          How you can be<br />partners with USDS
        </h1>
        <p class="text-[#DBDBDB] md:text-left text-center">
          Find answers to the most common inquiries and<br />get the information
          you need quickly.
        </p>
      </div>
      <div class="md:basis-[45%] basis-full mt-[50px] md:mt-0">
        <div id="hubspotForm" v-once></div>
        <!-- <form class="form">
          <div class="form-group">
            <input type="text" id="first_name" class="input" required />
            <label for="first_name" class="label">First Name</label>
          </div>
          <div class="form-group">
            <input type="text" id="last_name" class="input" required />
            <label for="last_name" class="label">Last Name</label>
          </div>
          <div class="form-group">
            <input
              type="email_address"
              id="email_address"
              class="input"
              required
            />
            <label for="email_address" class="label">Email Address</label>
          </div>
          <div class="form-group">
            <input type="text" id="company_name" class="input" required />
            <label for="company_name" class="label">Company</label>
          </div>
          <div class="form-group">
            <input type="text" id="contact_person" class="input" required />
            <label for="contact_person" class="label">Contact Person</label>
          </div>
          <div class="form-group">
            <textarea
              name="message"
              id="message"
              class="input textarea"
              required
            ></textarea>
            <label for="message" class="label"
              >Brief Description of Your Business</label
            >
          </div>
          <button
            class="bg-[#06B1F1] h-[50px] w-full mt-[1rem] font-cabinet_b rounded-lg"
          >
            Join Waitlist
          </button>
        </form> -->
      </div>
    </div>
    <!-- <div
      class="mt-[6rem] h-[6px] bg-gradient-to-r from-[#AACCFF] to-[#0DB4F2]"
    /> -->
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          target: '#hubspotForm',
          region: "na1",
          portalId: "8157599",
          formId: "0a02419a-3885-4edb-879a-c799c3bdd7a4",
          css:''
        });
      }
    });
  },
};
</script>

<style scoped>
.hs-form-field label:not(.hs-error-msg) {
  color: red !important;
}
</style>
