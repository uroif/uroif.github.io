<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: "Clock",
  props: {
    msg: String
  },
  methods: {
    clock() {
      // Chay function moi 1000 miliseconds
      var r = radius(); // Xac dinh width thuc te cua man hinh de gan cho SVG va vi tri kim
      function radius() {
        var el = document.querySelector("body");
        var x = window.getComputedStyle(el, null).getPropertyValue("max-width");
        x = parseInt(x.slice(0, 3));
        var w = window.innerWidth;
        if (w >= x) {
          document.querySelector("svg").style.width = x;
          document.querySelector("svg").style.height = x;
          return x;
        } else if (w < x) {
          document.querySelector("svg").style.width = w;
          document.querySelector("svg").style.height = w;
          return w;
        }
      }
      function hand(time, deg) {
        // Function xoay kim dong ho me
        time.setAttribute(
          "transform",
          "rotate(" + deg + " " + r / 2 + " " + r / 2 + ")"
        );
      }

      function hand1(time, deg) {
        // Function xoay kim dong ho con
        time.setAttribute(
          "transform",
          "rotate(" + deg + " " + (0.26 * r) / 2 + " " + (0.26 * r) / 2 + ")"
        );
      }

      function hand2(time, deg) {
        // Function xoay kim dong ho con
        time.setAttribute(
          "transform",
          "rotate(" + deg + " " + (0.26 * r) / 2 + " " + (0.26 * r) / 2 + ")"
        );
      }

      function hand3(time, deg) {
        // Function xoay kim dong ho con
        time.setAttribute(
          "transform",
          "rotate(" + deg + " " + (0.26 * r) / 2 + " " + (0.26 * r) / 2 + ")"
        );
      }

      var now = new Date();

      hand(second, 6 * now.getSeconds());
      hand(min, 6 * now.getMinutes());
      hand(hour, 30 * (now.getHours() % 12) + now.getMinutes() / 2);

      hand1(second1, 6 * now.getSeconds());
      hand1(min1, 6 * now.getMinutes());
      hand1(hour1, 30 * (now.getHours() % 12) + now.getMinutes() / 2 + 30);

      hand2(second2, 6 * now.getSeconds());
      hand2(min2, 6 * now.getMinutes());
      hand2(hour2, 30 * (now.getHours() % 12) + now.getMinutes() / 2 + 180);

      hand3(second3, 6 * now.getSeconds());
      hand3(min3, 6 * now.getMinutes());
      hand3(hour3, 30 * (now.getHours() % 12) + now.getMinutes() / 2 + 210);
    }, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  max-width: 600px;
  margin: auto;
  margin-top: 1%;
  position: relative;
}

#container {
  position: absolute;
  width: 100%;
  padding-bottom: 100%;
}

/*-----STYLE FOR MUMMY CLOCK-----*/
.main {
  position: absolute;
  width: 100%;
  padding-top: 100%;
  background-color: #424242;
  border: 1px solid #454545;
  border-radius: 50%;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.8);
  animation: anim_main 1s ease;
}

@keyframes anim_main {
  0% {
    opacity: 0;
    top: 5%;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}

.main .num {
  font-size: 8vmin;
}

.num {
  position: absolute;
  font-family: Arial, sans-serif;
  text-align: center;
  width: 10%;
  color: #ffffff;
}

.n12 {
  top: 1%;
  left: 45%;
}

.n3 {
  top: 45%;
  right: 1%;
}

.n6 {
  left: 45%;
  bottom: 1%;
}

.n9 {
  left: 1%;
  top: 45%;
}

.main_inside {
  position: absolute;
  width: 74%;
  padding-top: 74%;
  background-color: #dddddd;
  border: 1px solid #454545;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  top: 13%;
  left: 13%;
}

.main_txt {
  position: absolute;
  width: 30%;
  top: 20%;
  left: 35%;
  text-align: center;
  font-size: 5vmin;
  font-family: "Courier New", monospace;
}

img {
  position: absolute;
  top: 0;
}

.dash {
  position: absolute;
  width: 6%;
  padding-top: 1.2%;
  background-color: #ffffff;
}

.dash1 {
  top: 11%;
  right: 24.5%;
  transform: rotate(120deg);
}

.dash2 {
  top: 27.5%;
  right: 9%;
  transform: rotate(150deg);
}

.dash3 {
  top: 71%;
  right: 9%;
  transform: rotate(210deg);
}

.dash4 {
  top: 87%;
  right: 25%;
  transform: rotate(240deg);
}

.dash5 {
  top: 87.5%;
  right: 69%;
  transform: rotate(120deg);
}

.dash6 {
  top: 71.5%;
  right: 85%;
  transform: rotate(150deg);
}

.dash7 {
  top: 27.5%;
  right: 85%;
  transform: rotate(210deg);
}

.dash8 {
  top: 11%;
  right: 69%;
  transform: rotate(240deg);
}

.dot {
  position: absolute;
  width: 3%;
  padding-top: 3%;
  background-color: #000000;
  border-radius: 50%;
  left: 48.5%;
  top: 48.5%;
  z-index: 2;
}

/*-----STYLE FOR INSIDE CLOCKS-----*/
.clk {
  position: absolute;
  width: 26%;
  padding-top: 26%;
  background-color: #757575;
  border-radius: 50%;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.5);
}

.clk .num {
  font-size: 2.5vmin;
}

.clk .n12 {
  top: 4%;
  left: 45%;
}

.clk .n3 {
  top: 45%;
  right: 4%;
}

.clk .n6 {
  left: 45%;
  bottom: 4%;
}

.clk .n9 {
  left: 4%;
  top: 45%;
}

.clk_inside {
  position: absolute;
  width: 60%;
  padding-top: 60%;
  background-color: #eceff1;
  border-radius: 50%;
  top: 20%;
  left: 20%;
  /*box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.5);*/
}

.clk_dot {
  position: absolute;
  width: 10%;
  padding-top: 10%;
  background-color: #000000;
  border-radius: 50%;
  left: 45%;
  top: 45%;
  z-index: 2;
}

.txt {
  position: absolute;
  width: 50%;
  top: 16%;
  left: 25%;
  text-align: center;
  font-family: Courier, monospace;
  font-size: 2vmin;
}

.clk1 {
  left: 17%;
  bottom: 37%;
  animation: anim_clk1 0.5s ease;
  animation-delay: 1s;
  animation-fill-mode: backwards;
}

@keyframes anim_clk1 {
  0% {
    opacity: 0;
    left: 37%;
    bottom: 17%;
  }
  100% {
    opacity: 1;
    left: 17%;
    bottom: 37%;
  }
}

.clk2 {
  right: 17%;
  bottom: 37%;
  animation: anim_clk2 0.5s ease;
  animation-delay: 1.5s;
  animation-fill-mode: backwards;
}

@keyframes anim_clk2 {
  0% {
    opacity: 0;
    right: 57%;
    bottom: 37%;
  }
  100% {
    opacity: 1;
    right: 17%;
    bottom: 37%;
  }
}

.clk3 {
  left: 37%;
  bottom: 17%;
  animation: anim_clk3 0.5s ease;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;
}

@keyframes anim_clk3 {
  0% {
    opacity: 0;
    width: 100%;
    padding-top: 100%;
    left: 0%;
    bottom: 0%;
  }
  100% {
    opacity: 1;
    width: 26%;
    padding-top: 26%;
    left: 37%;
    bottom: 17%;
  }
}

.clock_face {
  position: absolute;
  top: 0;
  z-index: 1;
}

/* -----STYLE FOR MUMMY----- */
#hour,
#min,
#second {
  position: absolute;
  stroke: black;
}
#hour {
  stroke-width: 1%;
}
#min {
  stroke-width: 0.6%;
}
#second {
  stroke: #d50000;
  stroke-width: 0.3%;
}

/* STYLE FOR CHILDREN */
#hour1,
#min1,
#second1,
#hour2,
#min2,
#second2,
#hour3,
#min3,
#second3 {
  position: absolute;
  stroke: black;
}
#hour1,
#hour2,
#hour3 {
  stroke-width: 2%;
}
#min1,
#min2,
#min3 {
  stroke-width: 1.5%;
}
#second1,
#second2,
#second3 {
  stroke: #d50000;
  stroke-width: 0.5%;
}
</style>
