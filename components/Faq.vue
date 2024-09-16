<template>
  <div class="bg-gradient-to-b from-[#20212E] to-[#000000]">
    <div
      class="mb-[6rem] h-[6px] bg-gradient-to-r from-[#AACCFF] to-[#0DB4F2]"
    />
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
              FAQ
            </p>
          </div>
        </div>
        <h1
          class="font-cabinet_b md:text-[50px] text-[30px] text-center md:leading-[60px] leading-[40px] mb-[1rem] bg-gradient-to-br from-[#7A96AC] via-[#FFFFFF] to-[#BCCAD7] text-transparent bg-clip-text"
        >
          Frequently asked question
        </h1>
        <p class="text-center text-[#DBDBDB]">
          Find answers to the most common inquiries and<br />get the information
          you need quickly.
        </p>
      </div>
      <div class="max-w-[1000px] m-auto mt-[4rem]">
        <div v-for="(item, index) in faqs" :key="index" class="">
          <button
            class="w-full text-left flex justify-between items-center md:py-3 py-1 text-gray-700 focus:outline-none"
            @click="toggle(index)"
          >
            <h4
              class="md:text-[23px] text-[18px] font-cabinet_b bg-gradient-to-br from-[#7A96AC] via-[#FFFFFF] to-[#BCCAD7] text-transparent bg-clip-text"
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
              <div class="mt-2 md:w-[80%] w-[100%]">
                <p class="text-[#DBDBDB]">{{ item.answer }}</p>
                <p class="text-[#DBDBDB] mt-[1rem]">{{ item.answer2 }}</p>
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
      "USDS is a USD-backed stablecoin issued 1:1 by BitGo's New York Trust Company. It provides easy onramps from USD, USDC, and USDT",
  },
  {
    question: "Why USDS?",
    answer:
      "Our industry's success is built on collective effort, and taking it to the next level requires even greater collaboration among institutions, developers, and users. USDS is designed with this principle at its core—intentionally rewarding users who adopt the product and help scale it globally across blockchain ecosystems.",
    answer2:
      "Unlike many stablecoins that primarily generate profits for their issuers by keeping most of the interest income from reserves, BitGo aims to change that with USDS. As a leading regulated custodian, BitGo commits to allocating up to 98% of the interest income from USDS reserves to compensate eligible institutions, developers, and users that contribute to the growth and support of USDS in the ecosystem, fairly recognizing everyone’s value.",
  },
  {
    question: "Why do we need USDS now?",
    answer:
      "The U.S. needs a stablecoin that rewards all participants in the ecosystem—not just the issuer. Current stablecoins like USDC and USDT often don't incentivize ecosystem contributors; their issuers keep most or all of the interest profits or share them with only a select few. Exchanges, custodians, prime brokers, network builders, dApp developers, and end users who help distribute and support stablecoins deserve fair compensation for the value they create. BitGo and USDS aim to provide exactly that incentive and compensation to ecosystem participants.",
  },
  {
    question: "Who can use USDS?",
    answer:
      "USDS is accessible globally for institutions and individuals alike and will be available on centralized and decentralized applications.",
  },
  {
    question: "Who is eligible for rewards from USDS?",
    answer:
      "USDS will only succeed if the ecosystem adopts it and creates a deep network of liquidity.",
    answer2:
      "To encourage this, any institutional exchange, liquidity provider, or user who generates sufficient liquidity and registers with BitGo is eligible for rewards. Unlike other issuers, we aim to make minting, burning, and earning rewards accessible to as many qualified users as possible",
  },
  {
    question: "How do I receive rewards from USDS?",
    answer:
      "Reward participants register with BitGo, who will qualify the participant.  Once approved, participants prove ownership of the addresses where they store USDS via the USDS portal.",
    answer2:
      "These addresses are used to compute daily balances and ensure fair calculation of rewards to participants",
  },
  {
    question: "How are rewards calculated?",
    answer:
      "BitGo will provide differing compensation tiers to participants based on the USDS under custody with each participant. Total compensation for each eligible participant will be paid monthly, and will be based on the distribution revenue share (“DRS”) earned by the participant. The DRS will be calculated based on total revenue generated by USDS, minus BitGo’s monthly administration fee. Each participant will earn DRS based on the amount of their USDS holdings.",
  },
  {
    question: "What fees does the issuer keep with USDS?",
    answer: "BitGo’s annual administration fee is based on total Assets Under Management (AUM) of USDS and is calculated from the total revenue generated by USDS reserves. This fee is deducted monthly from the compensation owed to the network participants, based on their USDS holdings. All remaining revenue is used for compensating and incentivizing participants to increase adoption of the USDS network.",
  },
  {
    question: "How is USDS backed?",
    answer: "USDS is backed by a combination of cash and liquid investments such as short-duration T-bills, and overnight repos",
  },
  {
    question: "Who issues USDS?",
    answer: "USDS would be issued by the BitGo New York Trust Company.  The BitGo New York Trust Company is a regulated trust company, formed in 2021 under the laws of the State of New York",
  },
  {
    question: "How does USDS manage proof-of-reserves and auditing?",
    answer: "USDS will publish its proof-of-reserves in real-time to usdstandard.com where users can see the daily backing balances held on behalf of USDS token holders. In addition, USDS will conduct monthly audits performed by a top tier accounting firm and publish those results",
  },
  {
    question: "How do I mint and burn USDS?",
    answer: "Anyone, anywhere can simply sign up with BitGo to get started. Once approved to join the network, users can mint USDS with USD, USDC, or USDT. Similarly, users can burn USDS and receive USD, USDC, or USDT. There is no cost associated with minting or burning as BitGo will cover any fees",
  },
  {
    question: "Why do you call this “market-neutrality”?",
    answer: "Unlike other stablecoins, USDS recognizes that its usefulness depends on the entire ecosystem, not just the issuer. Therefore, our core principle has been to distribute the majority of rewards to participants and key players in the network. Striving for market neutrality, BitGo doesn’t compete with other market participants as an exchange. Instead, we plan to further incentivize growth and adoption of the entire ecosystem",
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
