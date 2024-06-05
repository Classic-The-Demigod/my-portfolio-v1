<template>
  <head>
    <link
      href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="bg-dark px-4 md:px-20 py-5">
    <header>
      <nav class="flex items-center justify-between">
        <h1 class="text-white font-secondary font-bold text-lg">{{ name }}</h1>
        <div class="text-white font-primary font-normal text-xs hidde">
          <a href="#"
            ><i class="fa-brands fa-github fa-2xl" style="color: #ffffff"></i
          ></a>
          <a class="mx-2" href="#"
            ><i class="fa-brands fa-twitter fa-2xl" style="color: #ffffff"></i
          ></a>
          <a href="#"
            ><i class="fa-brands fa-linkedin fa-2xl" style="color: #ffffff"></i
          ></a>
        </div>

        <p class="text-white font-primary">{{ date }} <span>WAT</span></p>
      </nav>
    </header>

    <main class="py-20">
      <h3
        class="text-accent font-bold font-primary text-3xl text-center md:text-left"
      >
        Abdullahi Muftau
      </h3>
      <h1
        class="text-white font-secondary font-bold text-7xl md:text-8xl text-center"
      >
        Frontend Engineer
      </h1>
      <p class="text-white font-bold font-primary text-md text-center mt-2">
        I like to craft solid and scalable frontend products with great user
        experiences. Highly skilled at progressive enhancement, design systems &
        UI Engineering. I design, even though I'm probably not the typical
        designer sitting in front of an Illustrator artboard tweaking pixels.
        You can always find me buried in stylesheets, fiddling with font sizes
        and thinking about layouts (~_^). Creating fluid user experiences is
        something I'm committed to doing while looking chic.I have the ideal
        tools for developing JavaScript applications, and I can definitely work
        without them to produce quick, durable solutions that are designed for
        growth – performance and scalability are top objectives on my radar.
      </p>
      <div class="flex items-center justify-center mt-3">
        <div
          class="text-black bg-white border border-white px-4 py-2 rou rounded-l-3xl"
        >
          <p>Download</p>
        </div>
        <button
          class="text-white border-accent border px-4 py-2 rou rounded-r-3xl"
        >
          Resume
        </button>
      </div>
      <div class="scrolling-content flex items-center justify-center space-x-2 mt-6">
        <div
          class="text-black bg-white border border-white px-4 py-2 rou rounded-3xl"
        >
          <p>Download</p>
        </div>
        <div
          class="text-black bg-white border border-white px-4 py-2 rou rounded-3xl"
        >
          <p>Download</p>
        </div>
        <div
          class="text-black bg-white border border-white px-4 py-2 rou rounded-3xl"
        >
          <p>Download</p>
        </div>
        <div
          class="text-black bg-white border border-white px-4 py-2 rou rounded-3xl"
        >
          <p>Download</p>
        </div>
        <div
          class="text-black bg-white border border-white px-4 py-2 rou rounded-3xl"
        >
          <p>Download</p>
        </div>
        <div
          class="text-black bg-white border border-white px-4 py-2 rou rounded-3xl"
        >
          <p>Download</p>
        </div>
        <div
          class="text-black bg-white border border-white px-4 py-2 rou rounded-3xl"
        >
          <p>Download</p>
        </div>
      </div>
      <div>
        <div></div>
      </div>
      <!-- I like to craft solid and scalable frontend products with great user experiences.

Highly skilled at progressive enhancement, design systems & UI Engineering.

Over a two years of experience building products for clients across africa.

Design

I design, even though I'm probably not the typical designer sitting in front of an Illustrator artboard tweaking pixels. You can always find me buried in stylesheets, fiddling with font sizes and thinking about layouts (~_^). Creating fluid user experiences is something I'm committed to doing while looking chic.
Engineering

I have the ideal tools for developing JavaScript applications, and I can definitely work without them to produce quick, durable solutions that are designed for growth – performance and scalability are top objectives on my radar. -->
    </main>
  </body>
</template>

<script>
export default {
  data() {
    return {
      name: "Code Console",
      isVisible: false,
      date: "",
    };
  },
  methods: {
    updateTime() {
      this.date = new Date().toLocaleTimeString("en-US", {
        timezone: "Africa/Lagos",
      });
    },
    // visible() {
    //   this.isVisible = !this.isVisible;
    //   console.log(this.isVisible);
    // },
  },

  created() {
    this.updateTime();
    this.timer = setInterval(this.updateTime, 1000);
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style>
.font-secondary {
  font-family: "Clash Display", sans-serif;
}

.scrolling-content {
  overflow: hidden;
  width: 100%;
  animation: scroll 20s ease-in infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
