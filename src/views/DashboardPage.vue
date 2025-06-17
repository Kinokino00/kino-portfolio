<template>
  <div class="dashboard">
    <div class="relative flex items-center">
      <img class="photo-kino md:hidden" src="@/assets/images/Kino.jpg">
      <div class="area area-work">
        <div class="area-mask grid gap-1.5 w-fit lg:gap-5">
          <div class="area-line area-mask"></div>
          <div class="area-info" v-for="info in certificateItem" :key="info.ad">
            <div class="circle"></div>
            <div class="area-info-detail">
              <p class="font-num">{{ info.ad }}
                <span v-if="info.tenureYear" class="opacity-60">
                  &nbsp;|&nbsp;
                  <span class="number">{{ info.tenureYear }}</span>y
                  <span v-if="info.tenureMonth">
                    <span>{{ info.tenureMonth }}</span>m
                  </span>
                </span>
              </p>
              <div class="flex flex-col md:flex-row md:gap-1">
                <p class="!font-normal">{{ info.job }}</p>
                <p v-if="info.jobAdjunct" class="-mt-[2px] !font-normal">{{ info.jobAdjunct }}</p>
                <div class="hidden lg:block" :style="`width: ${info.ml}px;`"></div>
                <p class="hidden text-base opacity-80 lg:flex">
                  <span class="hidden md:block">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  {{ info.company }}
                </p>
              </div>
              <p class="text-base opacity-80 lg:hidden">{{ info.company }}</p>
            </div>
          </div>
        </div>
      </div>
      <img class="photo-kino hidden md:block" src="@/assets/images/Kino.jpg">
      <div class="title-menu">
        <h1 class="title-name" data-text="Kino"></h1>
        <h1 class="title-portfolio">Portfolio</h1>
        <h1 class="title-portfolio absolute bottom-0 right-0 hidden md:block xl:hidden">folio</h1>
        <h1 class="title-portfolio absolute bottom-0 right-0 opacity-50 hidden md:block xl:hidden">folio</h1>
      </div>
    </div>

    <p class="university">
      世新大學
      <span class="-ml-[2px] text-[10px] tracking-tight opacity-80 xl:text-sm">(2011-2015)&nbsp;&nbsp;</span>
      <span class="text-[10px] opacity-50">圖文傳播暨數位出版學系</span>
    </p>

    <div class="area area-certificate">
      <div class="title-line">
        <h5>證照</h5>
      </div>
      <div class="area-info">
        <div class="area-info-detail">
          <div class="flex flex-col gap-1">
            <div class="area-info-image icon-ITS">
              <div class="ITS hidden md:block"></div>
              <div class="ITS-s md:hidden"></div>
            </div>
            <h2 style="text-decoration: auto; cursor: unset;">ITS Java</h2>
          </div>
          <div class="flex flex-col gap-1">
            <div class="area-info-image">
              <div class="TQC"></div>
            </div>
            <h2 @click="isCertificateShow.tqcjava = !isCertificateShow.tqcjava">物件導向程式語言 Java</h2>
            <div class="grid xl:mt-1">
              <div class="flex items-center gap-1">
                <img class="caret-down-icon" :class="{ '!rotate-0': isRotate }" src="@/assets/images/caret-down.png" alt="展開" @click="isRotate = !isRotate">
                <h2 @click="isCertificateShow.python00 = !isCertificateShow.python00">大數據分析專業人才</h2>
              </div>
              <div v-if="isRotate" class="grid gap-1 w-fit ml-2 pl-3 opacity-90 border-l border-l-primary-600">
                <p @click="isCertificateShow.python03 = !isCertificateShow.python03">軟體開發知識</p>
                <p @click="isCertificateShow.python02 = !isCertificateShow.python02">網頁資料擷取與分析 Python3</p>
                <p @click="isCertificateShow.python01 = !isCertificateShow.python01">程式語言 Python3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="area area-skill">
      <div class="title-line">
        <h5>技能</h5>
      </div>
      <div class="grid gap-1 ml-4 md:grid-cols-2 2xl:gap-3">
        <div class="flex items-center gap-1 md:hidden">
          <img class="icon" src="@/assets/images/Java.png">
          <p>Java</p>
        </div>
        <div class="flex items-center gap-1 md:hidden">
          <img class="icon" src="@/assets/images/SpringBoot.png">
          <p>Spring Boot</p>
        </div>
        <div class="flex items-center gap-1 md:hidden">
          <img class="icon" src="@/assets/images/Python.png">
          <p>Python</p>
        </div>
        <div class="flex items-center gap-1 md:hidden">
          <img class="icon" src="@/assets/images/Selenium.png">
          <p>Selenium</p>
        </div>
        <div class="flex items-center gap-1 md:hidden">
          <img class="icon" src="@/assets/images/BeautifulSoup.png">
          <p>BeautifulSoup</p>
        </div>
        <div class="flex items-center gap-1 md:hidden">
          <img class="icon" src="@/assets/images/Vue.png">
          <p>Vue</p>
        </div>
        <div class="flex items-center gap-1 md:hidden">
          <img class="icon" src="@/assets/images/Tailwindcss.png">
          <p>Tailwindcss</p>
        </div>
        <div class="flex items-center gap-1 md:hidden">
          <img class="icon" src="@/assets/images/Typescript.png">
          <p>Typescript</p>
        </div>
        <div class="flex items-center gap-1 md:hidden">
          <img class="icon" src="@/assets/images/Javascript.png">
          <p>Javascript</p>
        </div>

        <div class="hidden items-center gap-1 md:flex">
          <img class="icon" src="@/assets/images/Java.png">
          <p>Java</p>
        </div>
        <div class="hidden items-center gap-1 md:flex">
        </div>
        <div class="hidden items-center gap-1 md:flex">
          <img class="icon" src="@/assets/images/SpringBoot.png">
          <p>Spring Boot</p>
        </div>
        <div class="hidden items-center gap-1 md:flex">
          <img class="icon" src="@/assets/images/Vue.png">
          <p>Vue</p>
        </div>
        <div class="hidden items-center gap-1 md:flex">
          <img class="icon" src="@/assets/images/Python.png">
          <p>Python</p>
        </div>
        <div class="hidden items-center gap-1 md:flex">
          <img class="icon" src="@/assets/images/Tailwindcss.png">
          <p>Tailwindcss</p>
        </div>
        <div class="hidden items-center gap-1 md:flex">
          <img class="icon" src="@/assets/images/Selenium.png">
          <p>Selenium</p>
        </div>
        <div class="hidden items-center gap-1 md:flex">
          <img class="icon" src="@/assets/images/Typescript.png">
          <p>Typescript</p>
        </div>
        <div class="hidden items-center gap-1 md:flex">
          <img class="icon" src="@/assets/images/BeautifulSoup.png">
          <p>BeautifulSoup</p>
        </div>
        <div class="hidden items-center gap-1 md:flex">
          <img class="icon" src="@/assets/images/Javascript.png">
          <p>Javascript</p>
        </div>
      </div>
    </div>

    <div class="area area-about">
      <div class="title-line">
        <h5>關於我</h5>
      </div>
      <p class="text-justify">
        　　具備兩年後端學習背景，使用語言為 Java、Python，會使用 Java 的 Spring Boot 框架及 Python 的 Selenium、BeautifulSoup 套件，懂資料庫基本操作，已取得 ITS Java、TQC 物件導向程式語言 Java、 TQC 大數據分析專業人才證照。<br><br>
  
        　　兩年前端經驗，於 Vue.js 前端框架專案中負責規劃 RWD 響應式網頁，並進行 API 串接與 CRUD 功能實作。<br><br>

        　　於擔任營業處督導期間，負責行銷企劃、規劃執行、人員管理與溝通協作，這些經驗培養了我良好的團隊合作和溝通能力。擅長跨部門協作，能有效地與團隊成員合作，達成專案目標。<br><br>

        　　我性格謙和、樂觀且活潑，致力於成為一名圓融通達的專業人才。
      </p>
    </div>

    <div class="area area-project">
      <div class="title-line">
        <h5>前端專案經驗</h5>
      </div>
      <div class="grid">
        <a class="title-a" href="https://gems-tw-enterprise-se.ew-demo.com/" target="_blank">智慧能源管理監控系統</a>
        <ol>
          <li>前端框架 - 使用 Vue.js 進行前端開發</li>
          <li>響應式介面 - 利用 Scss + Tailwindcss 之 CSS 框架規劃</li>
          <li>圖形化報表 - amChart.js 設計能源分析比較圖表</li>
          <li>表單動態驗證 - 以 Yup 之 JavaScript 套件進行驗證</li>
          <li>動畫 - 運用 Lottie Animation 製作動態畫面</li>
        </ol>
      </div>
      <div class="grid">
        <a class="title-a" href="https://ghg-test.ewqa.cc/" target="_blank">組織型溫室氣體盤查平台</a>
        <ol>
          <li>i18n 多國語系設定與運用</li>
        </ol>
      </div>
      <div class="title-a" style="text-decoration: none;">SmartSOS 智慧對講門禁求救系統 APP</div>
    </div>

    <div v-if="Object.values(isCertificateShow).some(show => show)" class="certificates" @click="isCertificateShowAll">
      <img v-if="isCertificateShow.tqcjava" class="certificates-img" src="@/assets/images/certificate/certificateTQCjava.jpg" alt="TQC java">
      <img v-if="isCertificateShow.python00" class="certificates-img" src="@/assets/images/certificate/certificate00.jpg" alt="TQC 大數據分析專業人才">
      <img v-if="isCertificateShow.python01" class="certificates-img" src="@/assets/images/certificate/certificate01.jpg" alt="TQC">
      <img v-if="isCertificateShow.python02" class="certificates-img" src="@/assets/images/certificate/certificate02.jpg" alt="TQC">
      <img v-if="isCertificateShow.python03" class="certificates-img" src="@/assets/images/certificate/certificate03.jpg" alt="TQC">
      <img class="close-icon" src="@/assets/images/xmark-solid.png" alt="關閉">
    </div>
  </div>
</template>


<script lang="ts" setup>
import { reactive, ref } from 'vue'

interface CertificateItem {
  tenureYear?: number
  tenureMonth?: number
  ad: string
  job: string
  jobAdjunct?: string
  ml: number
  company: string
}

const certificateItem = ref<CertificateItem[]>([
  {
    tenureYear: 2,
    ad: '2023/05 ~ 2025/06',
    job: 'Front-End Developer',
    ml: 104,
    company: '樺康智雲股份有限公司',
  }, {
    tenureYear: 1,
    tenureMonth: 11,
    ad: '2021/04 ~ 2023/03',
    job: 'Front-End Developer',
    jobAdjunct: '& UI Designer',
    ml: 0,
    company: '登伴有限公司',
  }, {
    tenureYear: 1,
    tenureMonth: 10,
    ad: '2019/05 ~ 2021/02',
    job: 'UI Designer',
    jobAdjunct: '& Graphic Designer',
    ml: 26,
    company: '蝦米智慧股份有限公司',
  }, {
    tenureYear: 1,
    tenureMonth: 8,
    ad: '2015/10 ~ 2017/05',
    job: 'Supervise',
    jobAdjunct: '& Graphic Designer',
    ml: 36,
    company: '錏洲娛樂機械有限公司',
  }
])

const isRotate = ref(false)
const skills = ['Java', 'Vue', 'Python', 'Tailwindcss', 'Selenium', 'Typescript', 'BeautifulSoup', 'Javascript']
const skillsMd = ['Java', 'Python', 'Selenium', 'BeautifulSoup', 'Vue', 'Tailwindcss', 'Typescript', 'Javascript']

const projectItem = ref([
  {
    label: 'Back-end',
    text: [{ name: 'Meet Food' }]
  }, {
    label: 'Front-end',
    text: [{
        year: 2024,
        name: '能源管理系統'
      }, {
        year: 2021,
        name: '龍奉宮'
      }, {
        year: 2020,
        name: '台灣新計畫有限公司',
        web: 'https://rabbitsos.ttoper.com/'
    }]
  }, {
    label: 'Front-end & UI',
    text: [{
        year: 2022,
        name: '樺晟科技股份有限公司',
        web: 'https://robodencable.com/zh/'
      }, {
        year: 2022,
        name: 'Ttoper'
    }]
  },
])

const isCertificateShow = reactive({
  tqcjava: false,
  python00: false,
  python01: false,
  python02: false,
  python03: false
})
const isCertificateShowAll = () => {
  isCertificateShow.tqcjava = false
  isCertificateShow.python00 = false
  isCertificateShow.python01 = false
  isCertificateShow.python02 = false
  isCertificateShow.python03 = false
}
</script>


<style lang="scss" scoped>
h2 {
  @apply font-semibold;
}
.dashboard {
  @apply relative py-[8vh] md:pt-[13vh];
  background: linear-gradient(to right, #F8F6F3 15%, #FFD0A6 15.1%, #FFD0A6 60%, #F8F6F3 60.1%);
  @media screen and (min-width: 630px) {
    background: linear-gradient(to right, #F8F6F3 15%, #FFD0A6 15.1%, #FFD0A6 55.5%, #F8F6F3 55.6%);
  }
  @media screen and (min-width: 840px) {
    background: linear-gradient(to right, #F8F6F3 13%, #FFD0A6 13.1%, #FFD0A6 56%, #F8F6F3 56.1%);
  }
  @media screen and (min-width: 980px) {
    background: linear-gradient(to right, #F8F6F3 12%, #FFD0A6 12.1%, #FFD0A6 54.8%, #F8F6F3 54.9%);
  }
}
p {
  @apply font-light text-xs md:text-sm lg:text-base;
}
.font-num {
  font-family: 'Playfair Display', serif;
  @apply text-xs md:text-sm;
}
.photo-kino {
  @apply z-10 h-fit mb-[8vh] w-[34vw];
  @apply  md:z-auto md:absolute md:bottom-[10%] md:left-[13vw] md:mb-0 md:w-[20vw];
  @apply  lg:-bottom-[15%] lg:left-[9.5vw]  lg:w-[20vw] lg:top-auto;
  @apply  xl:-bottom-[10%] xl:left-[10.9vw];
  @apply 2xl:left-[16vw];
}
.area {
  @apply relative text-white;
  .number {
    @apply text-base xl:text-xl;
  }
  .circle {
    @apply relative min-w-[6px] max-w-[6px] min-h-[6px] bg-white rounded-full;
  }

  &-mask {
    mask-image: linear-gradient(black 84%, transparent 106%);
    @apply relative;
  }

  &-work {
    @apply grid w-full px-[12vw] pt-4 pb-[10vh] -ml-2 bg-secondary-500;
    @apply  md:px-[14%]   md:py-[8%]   md:mr-[13vw]  md:ml-auto md:w-fit md:justify-center;
    @apply  lg:px-[10%]   lg:py-[12%]  lg:mr-[5vw];
    @apply  xl:pt-[10%]   xl:pb-[13%]  xl:mr-[7.5vw] xl:min-h-[40vh] xl:min-w-[66vw];
    @apply 2xl:pl-[24vw] 2xl:pt-[8%]  2xl:mr-[10vw] 2xl:min-h-[34vh];
    .area-line {
      @apply absolute top-3 left-[3px] w-px h-full text-white bg-white;
    }
  }

  &-info {
    @apply flex items-baseline gap-2 2xl:gap-3;
    &-detail {
      @apply flex flex-col gap-1.5;
    }
    &-label {
      @apply relative text-base text-end font-bold md:text-lg;
    }
    .caret-down-icon {
      @apply w-[18px] -rotate-90;
    }
  }

  &-certificate {
    @apply relative mt-[70px] ml-[15vw] whitespace-nowrap;
    @apply  md:mt-[27vh];
    @apply  lg:ml-[13vw];
    @apply  xl:mt-[25vh] xl:ml-[12vw];
    @apply 2xl:mt-[20%];
    .title-line {
      @apply text-primary-700 border-primary-600;
    }
    .area {
      &-info {
        @apply grid gap-1 mt-3 ml-8;
        &-image {
          @apply w-[40px] h-[26px];
          @apply md:w-[130px] md:h-[40px];
          @apply lg:w-[210px] lg:h-[80px];
          @apply xl:w-[240px];
          &.icon-ITS {
            @apply w-[30px] h-[16px] -ml-2;
            @apply md:w-[150px] md:h-[88px];
            @apply lg:w-[216px] lg:h-[124px];
          }
          .ITS, .ITS-s, .TQC {
            @apply h-full;
            background-position: center right;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .ITS {
            @apply -ml-2;
            background-image: url('@/assets/images/ITS.png');
            &-s {
              background-image: url('@/assets/images/ITS-s.png');
            }
          }
          .TQC {
            background-image: url('@/assets/images/TQC.svg');
          }
        }
        &-detail {
          @apply ml-4;
          @apply xl:flex-row xl:items-start xl:gap-5;
          h2, p {
            @apply text-primary-700 cursor-pointer;
            text-decoration: underline;
          }
          h2 {
            @apply pb-1 text-base underline-offset-[3px];
            @apply lg:text-lg;
          }
          p {
            @apply underline-offset-2;
          }
        }
      }
    }
  }

  &-skill {
    @apply relative pl-4 py-3 mt-20 left-[58vw] -translate-x-1/2 w-[60vw] bg-tertiary-500;
    @apply  md:left-[65vw] md:mt-16 md:pl-8 md:py-7;
    @apply  lg:pl-14  lg:pt-12 lg:pb-16;
    @apply  xl:pl-10 xl:left-0 xl:ml-auto xl:mr-[7vw] xl:translate-x-0 xl:w-[40vw];
    @apply 2xl:mt-12 2xl:mr-[5.5vw] 2xl:w-[41vw];
    .title-line {
      @apply -ml-4 mb-3 w-12;
      @apply md:-ml-[2rem] md:mb-6 md:w-[5rem];
      @apply lg:-ml-[3.5rem] lg:w-[7rem];
      @apply xl:-ml-[2.5rem] xl:w-[6rem];
    }
    .icon {
      @apply min-w-fit w-7 h-7;
      @apply lg:w-9 lg:h-9;
    }
  }

  &-about {
    @apply px-6 py-12 mt-6 w-[70vw] bg-secondary-500;
    @apply md:px-10;
    @apply lg:ml-[5vw] lg:w-[66vw];
    @apply xl:px-12 xl:py-11 xl:ml-[3vw] xl:-mt-[22vh] xl:w-[48vw];
    @apply 2xl:px-24 2xl:-mt-[9vh] 2xl:ml-[5.5vw] 2xl:w-[46vw];
    .title-line {
      @apply -ml-6 mb-3 w-14;
      @apply md:-ml-[2.5rem] md:mb-6 md:w-[7.5rem];
      @apply xl:-ml-[6rem] xl:w-[10rem];
    }
  }
  
  &-project {
    @apply relative grid gap-2 pl-6 py-10 -mt-4 ml-auto w-[65vw] bg-secondary-400 text-secondary-900;
    @apply  md:pl-12 md:pr-7;
    @apply  lg:w-[61vw] lg:mr-[9vw];
    @apply  xl:w-[42vw] xl:mr-[10vw] xl:-mt-[13vh] xl:pl-16;
    @apply 2xl:-mt-[16vh];
    .title-line {
      @apply -ml-6 mb-2 w-[100px] text-secondary-900 border-secondary-900;
      @apply md:w-[8.5rem] md:-ml-[3rem] md:mb-6;
      @apply lg:w-[11.5rem];
      @apply xl:-ml-[4rem];
    }
    ol {
      @apply pl-5 text-xs;
      list-style: auto !important;
      letter-spacing: 1px;
    }
  }
}

.university {
  @apply absolute left-[61vw] -translate-x-1/2 w-max font-semibold opacity-50;
  @apply  md:left-[58vw]  md:mt-[7.5rem];
  @apply  lg:left-[55.5vw];
  @apply  xl:left-[53vw]  xl:mt-[.5rem];
  @apply 2xl:left-[53.5vw] 2xl:mt-0.5;
}

.certificates {
  @apply z-20 fixed top-0 left-0 py-6 w-screen h-screen bg-black/50;
  .close-icon {
    @apply absolute left-6 top-6 w-7 h-7 cursor-pointer;
  }
  &-img {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vh];
  }
}

.title {
  &-line {
    @apply relative w-[70px] text-sm text-end text-white leading-6 border-b border-white;
    @apply md:text-base;
    @apply lg:text-xl lg:leading-10;
    @apply xl:w-[120px];
  }

  &-menu {
    @apply absolute grid justify-center left-[32vw] bottom-0 -mt-14 text-4xl;
    @apply  md:left-[calc(50%-16.5vw+3px)] md:-bottom-[7.5rem] md:mt-0;
    @apply  lg:left-[31.5vw];
    @apply  xl:left-[33.8vw] xl:-bottom-2;
    @apply 2xl:left-[37.5vw];
    --stroke-width: 2px;
    --background-gradient: linear-gradient(to right, #ff821c 45%, #2e6d63 45.1%);
    --text-gradient: linear-gradient(to right, #FFD0A6 47%, #91BDB7 47.1%);
    @media screen and (min-width: 630px) {
      --background-gradient: linear-gradient(to right, #ff7300 40%, #ff821c 40.1%);
      --text-gradient: linear-gradient(to right, #e0dcd9 40%, #e0dcd9 40.1%);
    }
    @media screen and (min-width: 840px) {
      --background-gradient: linear-gradient(to right, #ff821c 45%, #ff7300 45.1%);
      --text-gradient: linear-gradient(to right, #ffffff 47%, #e0dcd9 47.1%);
    }
    @media screen and (min-width: 980px) {
      --background-gradient: linear-gradient(to right, #ff7300 40%, #ff821c 40.1%);
      --text-gradient: linear-gradient(to right, #ffffff 40%, #e0dcd9 40.1%);
    }
  }

  &-name {
    @apply relative block w-fit -ml-[34px] text-right text-transparent font-normal tracking-[3px];
    @apply  md:text-[48px]  md:-ml-[62px]   md:-top-[.2rem] md:mix-blend-luminosity;
    @apply  lg:text-[60px]  lg:-ml-[72px];
    @apply  xl:text-[80px]  xl:-ml-[108px]  xl:top-[.3rem];
    @apply 2xl:text-[90px] 2xl:-ml-[116px] 2xl:top-[2rem];
    
    &::before, &::after {
      content: attr(data-text);
      background-clip: text;
    }
    &::before {
      @apply absolute;
      inset: 0;
      background-image: var(--background-gradient);
      -webkit-text-stroke: var(--stroke-width);
    }
    &::after {
      @apply relative z-[1];
      background-image: var(--text-gradient);
    }
  }

  &-portfolio {
    @apply -mt-[27px] ml-[26px] text-7xl font-extralight leading-none tracking-wider mix-blend-overlay;
    @apply md:text-[9vw]  md:-mt-[47px];
    @apply lg:text-[10vw] lg:-mt-[58px] lg:ml-[34px];
    @apply xl:opacity-60  xl:-mt-[66px];
    background: linear-gradient(to right, black 0%, #38605a60 60%, black 100%);
    background-clip: text;
    color: transparent;
    @media screen and (min-width: 630px) {
      color: inherit;
    }
  }

  &-a {
    @apply mb-1 text-xs font-bold underline-offset-2;
    text-decoration: underline;
  }
}
</style>
