<template>
  <div class="bg-gradient-to-b from-[#20212E] to-[#000000]">
    <div
      class="mb-[6rem] h-[6px] bg-gradient-to-r from-[#AACCFF] to-[#0DB4F2]"
    />
    <div class="max-w-[1350px] m-auto">
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
              FAQ
            </p>
          </div>
        </div>
        <p
          class="font-cabinet_m text-[50px] text-center leading-[63px] mb-[1rem] bg-gradient-to-br from-[#7A96AC] via-[#FFFFFF] to-[#BCCAD7] text-transparent bg-clip-text"
        >
          Frequently asked question
        </p>
        <p class="text-center text-[16px] text-[#DBDBDB]">
          Find answers to the most common inquiries and<br />get the information
          you need quickly.
        </p>
      </div>
      <div class="max-w-[1000px] m-auto mt-[4rem]">
        <div v-for="(item, index) in faqs" :key="index" class="">
          <button
            class="w-full text-left flex justify-between items-center py-3 text-gray-700 focus:outline-none"
            @click="toggle(index)"
          >
            <span class="text-[23px] font-cabinet_b bg-gradient-to-br from-[#7A96AC] via-[#FFFFFF] to-[#BCCAD7] text-transparent bg-clip-text">{{ item.question }}</span>
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
              <div class="mt-2 w-[80%]">
                <p class="text-[#DBDBDB]">{{ item.answer }}</p>
              </div>
            </div>
          </transition>

          <div
            class="relative h-[1px] my-[1.5rem] w-full bg-gradient-to-r from-[#3A5590] to-[#98baff48]"
          >
            <!-- <div class="line_dot top-[-1.5px] left-0 bg-[#3A5590]"></div>
          <div class="line_dot top-[-1.5px] right-0 bg-[#98baff48]"></div> -->
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-[6rem] h-[6px] bg-gradient-to-r from-[#AACCFF] to-[#0DB4F2]"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

// Array of FAQs
const faqs = ref([
  {
    question: "What is USDS?",
    answer:
      "USDS is an extremely low-overhead, 1:1 backed USD stablecoin issued by BitGo and regulated by the NYDFS. It is globally accessible and provides easy onramps from USD, USDC, and USDT.",
  },
  {
    question: "Why USDS?",
    answer:
      "USDS is an extremely low-overhead, 1:1 backed USD stablecoin issued by BitGo and regulated by the NYDFS. It is globally accessible and provides easy onramps from USD, USDC, and USDT.",
  },
  {
    question: "Why do we need USDS now?",
    answer:
      "USDS is an extremely low-overhead, 1:1 backed USD stablecoin issued by BitGo and regulated by the NYDFS. It is globally accessible and provides easy onramps from USD, USDC, and USDT.",
  },
  {
    question: "Who can use USDS?",
    answer:
      "USDS is an extremely low-overhead, 1:1 backed USD stablecoin issued by BitGo and regulated by the NYDFS. It is globally accessible and provides easy onramps from USD, USDC, and USDT.",
  },
  {
    question: "Who is eligible for rewards from USDS?",
    answer:
      "USDS is an extremely low-overhead, 1:1 backed USD stablecoin issued by BitGo and regulated by the NYDFS. It is globally accessible and provides easy onramps from USD, USDC, and USDT.",
  },
  {
    question: "How do I receive rewards from USDS?",
    answer:
      "USDS is an extremely low-overhead, 1:1 backed USD stablecoin issued by BitGo and regulated by the NYDFS. It is globally accessible and provides easy onramps from USD, USDC, and USDT.",
  },
  {
    question: "How are rewards calculated?",
    answer:
      "USDS is an extremely low-overhead, 1:1 backed USD stablecoin issued by BitGo and regulated by the NYDFS. It is globally accessible and provides easy onramps from USD, USDC, and USDT.",
  },
  {
    question: "What fees does the issuer keep with USDS?",
    answer:
      "USDS is an extremely low-overhead, 1:1 backed USD stablecoin issued by BitGo and regulated by the NYDFS. It is globally accessible and provides easy onramps from USD, USDC, and USDT.",
  },
  {
    question: "How is USDS backed?",
    answer:
      "USDS is an extremely low-overhead, 1:1 backed USD stablecoin issued by BitGo and regulated by the NYDFS. It is globally accessible and provides easy onramps from USD, USDC, and USDT.",
  },
  {
    question: "Who regulates USDS?",
    answer:
      "USDS is an extremely low-overhead, 1:1 backed USD stablecoin issued by BitGo and regulated by the NYDFS. It is globally accessible and provides easy onramps from USD, USDC, and USDT.",
  },
  {
    question: "How does USDS manage proof-of-reserves and auditing?",
    answer:
      "USDS is an extremely low-overhead, 1:1 backed USD stablecoin issued by BitGo and regulated by the NYDFS. It is globally accessible and provides easy onramps from USD, USDC, and USDT.",
  },
  {
    question: "How do I mint and burn USDS?",
    answer:
      "USDS is an extremely low-overhead, 1:1 backed USD stablecoin issued by BitGo and regulated by the NYDFS. It is globally accessible and provides easy onramps from USD, USDC, and USDT.",
  },
  {
    question: "Why do you call this “market-neutrality”?",
    answer:
      "USDS is an extremely low-overhead, 1:1 backed USD stablecoin issued by BitGo and regulated by the NYDFS. It is globally accessible and provides easy onramps from USD, USDC, and USDT.",
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
