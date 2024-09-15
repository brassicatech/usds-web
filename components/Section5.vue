<template>
  <div class="py-[6rem] bg-gradient-to-b from-[#20212E] to-[#000000]">
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
              COMPARES
            </p>
          </div>
        </div>
        <p
          class="font-cabinet_m text-[50px] text-center leading-[63px] mb-[1rem] bg-gradient-to-br from-[#7A96AC] via-[#FFFFFF] to-[#BCCAD7] text-transparent bg-clip-text"
        >
          How USDS compares
        </p>
        <p class="text-center text-[16px] text-[#DBDBDB]">
          USDS offers higher yields and broader global<br />access compared to
          traditional stablecoins
        </p>
      </div>
      <div
        class="flex max-w-[1000px] m-auto mt-[4rem] border-[0.5px] border-[#e6effc5b]"
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
    </div>
  </div>
</template>

<script setup>
const titleData = ref([
  { text: "Regulator" },
  { text: "Protection from Issuer Debt Obligations in Bankruptcy" },
  { text: "% Reward Distributed" },
  { text: "Reward Model" },
  { text: "Net Neutral" },
  { text: "Global Access" },
  { text: "Global Trading" },
  { text: "24x7x365" },
  { text: "Audited" },
  { text: "Fee to convert from USDC" },
  { text: "DeFi compatible rewards" },
  { text: "Available to non-US persons" },
  { text: "Mintable in the USA" },
]);
const usdsData = ref([
  { text: "NYDFS" },
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
  { text: "Coinbase" },
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
</script>

<style scoped></style>
