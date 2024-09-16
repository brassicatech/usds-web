<template>
  <div class="py-[6rem] bg-gradient-to-b from-[#20212E] to-[#000000]">
    <div class="max-w-[1350px] px-[1.5rem] m-auto">
      <div class="max-w-[650px] m-auto">
        <div
          class="w-fit m-auto mb-[1.5rem] rounded-full bg-gradient-to-t from-[#292A2E] to-[#B1B1B1] p-[1px]"
        >
          <div
            class="flex rounded-full h-full w-fit items-center justify-center bg-[#393A46] back"
          >
            <p
              class="text-center py-[12px] px-[30px] font-cabinet_m text-[#5FACC9]"
            >
              HOW IT COMPARES
            </p>
          </div>
        </div>
        <h1
          class="font-cabinet_b md:text-[50px] text-[30px] text-center md:leading-[60px] leading-[40px] mb-[1rem] bg-gradient-to-br from-[#7A96AC] via-[#FFFFFF] to-[#BCCAD7] text-transparent bg-clip-text"
        >
          How USDS compares
        </h1>
        <p class="text-center text-[#DBDBDB]">
          USDS offers higher distribution rewards and broader global access compared to other major stablecoins
        </p>
      </div>
      <div
        class="md:flex hidden max-w-[1000px] m-auto mt-[4rem] border-[0.5px] border-[#e6effc5b]"
      >
        <div class="basis-[31%]">
          <div
            class="h-[75px] border-b-[0.5px] border-[#e6effc5b] flex items-center px-[20px]"
          >
            <!-- <p class="font-cabinet_b text-[16px]">{{ data?.text }}</p> -->
          </div>
          <div
            v-for="(data, index) in titleData"
            :key="index"
            class="h-[65px] border-b-[0.5px] border-[#e6effc5b] flex items-center px-[20px]"
          >
            <p class="font-cabinet_b text-[16px]">{{ data?.text }}</p>
          </div>
        </div>
        <div
          class="basis-[23%] bg-gradient-to-br from-[#CCE8FE] from-5% via-[#A077CD] via-30% to-[#5A5FC5] to-90% rounded-[13px]"
        >
          <div
            class="h-[75px] border-b-[0.5px] border-[#e6effc5b] flex items-center justify-center"
          >
            <p class="font-cabinet_b text-[22px]">USDS</p>
          </div>
          <div
            v-for="(data, index) in usdsData"
            :key="index"
            class="h-[65px] border-b-[0.5px] border-[#e6effc5b] flex items-center justify-center"
          >
            <p v-if="data?.text" class="font-cabinet_m text-[18px]">
              {{ data?.text }}
            </p>
            <img
              v-if="data?.check === 'yes'"
              src="@/assets/icons/check.svg"
              alt=""
            />
            <img
              v-if="data?.check === 'no'"
              src="@/assets/icons/cancel.svg"
              alt=""
            />
          </div>
        </div>
        <div class="basis-[23%] border-r-[0.5px] border-[#e6effc5b]">
          <div
            class="h-[75px] border-b-[0.5px] border-[#e6effc5b] flex items-center justify-center"
          >
            <p class="font-cabinet_b text-[22px] text-center leading-[22px]">
              USDC
            </p>
          </div>
          <div
            v-for="(data, index) in usdcData"
            :key="index"
            class="h-[65px] border-b-[0.5px] border-[#e6effc5b] flex items-center justify-center"
          >
            <p
              v-if="data?.text"
              class="font-cabinet_r text-[16px] text-center leading-[22px]"
            >
              {{ data?.text }}
            </p>
            <img
              v-if="data?.check === 'yes'"
              src="@/assets/icons/check.svg"
              alt=""
            />
            <img
              v-if="data?.check === 'no'"
              src="@/assets/icons/cancel.svg"
              alt=""
            />
          </div>
        </div>
        <div class="basis-[23%]">
          <div
            class="h-[75px] border-b-[0.5px] border-[#e6effc5b] flex items-center justify-center"
          >
            <p class="font-cabinet_b text-[22px] text-center leading-[22px]">
              USDT
            </p>
          </div>
          <div
            v-for="(data, index) in usdtData"
            :key="index"
            class="h-[65px] border-b-[0.5px] border-[#e6effc5b] flex items-center justify-center"
          >
            <p
              v-if="data?.text"
              class="font-cabinet_r text-[16px] text-center leading-[22px]"
            >
              {{ data?.text }}
            </p>
            <img
              v-if="data?.check === 'yes'"
              src="@/assets/icons/check.svg"
              alt=""
            />
            <img
              v-if="data?.check === 'no'"
              src="@/assets/icons/cancel.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="block md:hidden mt-[4rem]">
        <div v-for="(item, index) in comparesData" :key="index" class="">
          <button
            class="w-full text-left flex justify-between items-center md:py-3 py-1 text-gray-700 focus:outline-none"
            @click="toggle(index)"
          >
            <h4
              class="md:text-[23px] text-[18px] py-[1.5rem] font-cabinet_b bg-gradient-to-br from-[#7A96AC] via-[#FFFFFF] to-[#BCCAD7] text-transparent bg-clip-text"
            >
              {{ item.question }}
            </h4>
            <svg
              v-if="activeIndex !== index"
              class="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Plus Icon -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>

            <svg
              v-else
              class="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Minus Icon -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
            </svg>
          </button>
          <transition name="accordion" @enter="onEnter" @leave="onLeave">
            <div
              v-if="activeIndex === index"
              ref="content"
              class="overflow-hidden text-gray-600"
            >
              <div class="mt-2 flex w-[100%]">
                <!-- <p class="text-[#DBDBDB]">{{ item.answer }}</p> -->
                <div
                  class="basis-full p-4 pb-[2rem] bg-gradient-to-br from-[#CCE8FE] from-5% via-[#A077CD] via-30% to-[#5A5FC5] to-90%"
                >
                  <p class="font-cabinet_b mb-[10px]">USDS</p>
                  <p
                    class="text-[#DBDBDB] font-cabinet_b text-[14px] mb-[10px]"
                    :class="item?.usds?.error ? 'text-[#FF8C8C]' : ''"
                  >
                    {{ item?.usds?.text }}
                  </p>
                  <img
                    class="w-[2.5rem]"
                    v-if="item?.usds?.check === 'yes'"
                    src="@/assets/icons/check.svg"
                    alt=""
                  />
                  <img
                    class="w-[2.5rem]"
                    v-if="item?.usds?.check === 'no'"
                    src="@/assets/icons/cancel.svg"
                    alt=""
                  />
                </div>
                <div class="basis-full p-4">
                  <p
                    class="font-cabinet_b mb-[10px] bg-gradient-to-br from-[#CCE8FE] from-5% via-[#A077CD] via-30% to-[#CCE8FE] to-90% text-transparent bg-clip-text"
                  >
                    USDC
                  </p>
                  <p
                    class="text-[#DBDBDB] font-cabinet_b text-[14px] mb-[10px]"
                    :class="item?.usdc?.error ? 'text-[#FF8C8C]' : ''"
                  >
                    {{ item?.usdc?.text }}
                  </p>
                  <img
                    class="w-[2.5rem]"
                    v-if="item?.usdc?.check === 'yes'"
                    src="@/assets/icons/check.svg"
                    alt=""
                  />
                  <img
                    class="w-[2.5rem]"
                    v-if="item?.usdc?.check === 'no'"
                    src="@/assets/icons/cancel.svg"
                    alt=""
                  />
                </div>
                <div class="basis-full p-4">
                  <p
                    class="font-cabinet_b mb-[10px] bg-gradient-to-br from-[#CCE8FE] from-5% via-[#A077CD] via-30% to-[#CCE8FE] to-90% text-transparent bg-clip-text"
                  >
                    USDT
                  </p>
                  <p
                    class="text-[#DBDBDB] font-cabinet_b text-[14px] mb-[10px]"
                    :class="item?.usdt?.error ? 'text-[#FF8C8C]' : ''"
                  >
                    {{ item?.usdt?.text }}
                  </p>
                  <img
                    class="w-[2.5rem]"
                    v-if="item?.usdt?.check === 'yes'"
                    src="@/assets/icons/check.svg"
                    alt=""
                  />
                  <img
                    class="w-[2.5rem]"
                    v-if="item?.usdt?.check === 'no'"
                    src="@/assets/icons/cancel.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </transition>

          <div
            class="relative h-[1px] w-full bg-gradient-to-r from-[#3A5590] to-[#98baff48]"
          >
            <!-- <div class="line_dot top-[-1.5px] left-0 bg-[#3A5590]"></div>
          <div class="line_dot top-[-1.5px] right-0 bg-[#98baff48]"></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const titleData = ref([
  { text: "Issuer Licenses" },
  { text: "Protection from Issuer Debt Obligations in Bankruptcy" },
  { text: "% Reward Distributed" },
  { text: "Reward Model" },
  { text: "Net Neutral" },
  { text: "Global Access" },
  { text: "Global Trading" },
  { text: "24x7x365" },
  { text: "Audited" },
  { text: "Stablecoin conversion fees" },
  { text: "DeFi compatible rewards" },
  { text: "Available to non-US persons" },
  { text: "Mintable in the USA" },
]);
const usdsData = ref([
  { text: "State Trust Charter" },
  { check: "yes" },
  { text: "~98%" },
  { text: "Ecosystem" },
  { check: "yes" },
  { check: "yes" },
  { check: "yes" },
  { check: "yes" },
  { check: "yes" },
  { text: "0 bps" },
  { check: "yes" },
  { check: "yes" },
  { check: "yes" },
]);
const usdcData = ref([
  { text: "Money Transmission Licenses" },
  { check: "no" },
  { text: "0%", error: true },
  { text: "None", error: true },
  { text: "Coinbase & Circle" },
  { check: "yes" },
  { check: "yes" },
  { check: "yes" },
  { check: "yes" },
  { check: "no" },
  { check: "no" },
  { check: "yes" },
  { check: "yes" },
]);
const usdtData = ref([
  { check: "no" },
  { check: "no" },
  { text: "0%", error: true },
  { text: "None", error: true },
  { text: "Bitfinex" },
  { check: "yes" },
  { check: "yes" },
  { check: "yes" },
  { text: "Unclear", error: true },
  { text: "10 bps", error: true },
  { check: "no" },
  { check: "yes" },
  { check: "no" },
]);

const comparesData = ref([
  {
    question: "Issuer Licenses",
    usds: {
      text: "State Trust Charter",
    },
    usdc: {
      text: "Money Transmission Licenses",
    },
    usdt: {
      check: "no",
    },
  },
  {
    question: "Protection from Issuer Debt Obligations in Bankruptcy",
    usds: {
      check: "yes",
    },
    usdc: {
      check: "no",
    },
    usdt: {
      check: "no",
    },
  },
  {
    question: "% Reward Distributed",
    usds: {
      text: "~98%",
    },
    usdc: {
      text: "0%",
      error: true,
    },
    usdt: {
      text: "0%",
      error: true,
    },
  },
  {
    question: "Reward Model",
    usds: {
      text: "Ecosystem",
    },
    usdc: {
      text: "None",
      error: true,
    },
    usdt: {
      text: "None",
      error: true,
    },
  },
  {
    question: "Net Neutral",
    usds: {
      check: "yes",
    },
    usdc: {
      text: "Coinbase & Circle",
    },
    usdt: {
      text: "Bitfinex",
    },
  },
  {
    question: "Global Access",
    usds: {
      check: "yes",
    },
    usdc: {
      check: "yes",
    },
    usdt: {
      check: "yes",
    },
  },
  {
    question: "Global Trading",
    usds: {
      check: "yes",
    },
    usdc: {
      check: "yes",
    },
    usdt: {
      check: "yes",
    },
  },
  {
    question: "24x7x365",
    usds: {
      check: "yes",
    },
    usdc: {
      check: "yes",
    },
    usdt: {
      check: "yes",
    },
  },
  {
    question: "Audited",
    usds: {
      check: "yes",
    },
    usdc: {
      check: "yes",
    },
    usdt: {
      text: "Unclear",
      error: true,
    },
  },
  {
    question: "Stablecoin conversion fees",
    usds: {
      text: "0 bps",
    },
    usdc: {
      check: "no",
    },
    usdt: {
      text: "0 bps",
      error: true,
    },
  },
  {
    question: "DeFi compatible rewards",
    usds: {
      check: "yes",
    },
    usdc: {
      check: "no",
    },
    usdt: {
      check: "no",
    },
  },
  {
    question: "Available to non-US persons",
    usds: {
      check: "yes",
    },
    usdc: {
      check: "yes",
    },
    usdt: {
      check: "yes",
    },
  },
  {
    question: "Mintable in the USA",
    usds: {
      check: "yes",
    },
    usdc: {
      check: "yes",
    },
    usdt: {
      check: "no",
    },
  },
]);

// To track which FAQ is open
const activeIndex = ref(null);

// Toggle the accordion based on the index
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

// Animation handling
const onEnter = (el) => {
  el.style.height = 0;
  setTimeout(() => {
    el.style.height = el.scrollHeight + "px";
  }, 0);
};

const onLeave = (el) => {
  el.style.height = el.scrollHeight + "px";
  setTimeout(() => {
    el.style.height = 0;
  }, 0);
};
</script>

<style scoped>
/* Transition for accordion open/close */
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0;
}
</style>
