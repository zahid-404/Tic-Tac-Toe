import { tsParticles as f } from "https://cdn.jsdelivr.net/npm/tsparticles-engine/+esm";
import { loadFull as y } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) c(n);
  new MutationObserver((n) => {
    for (const a of n)
      if (a.type === "childList")
        for (const d of a.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && c(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const a = {};
    return (
      n.integrity && (a.integrity = n.integrity),
      n.referrerPolicy && (a.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function c(n) {
    if (n.ep) return;
    n.ep = !0;
    const a = t(n);
    fetch(n.href, a);
  }
})();
async function v(e) {
  await y(f), await f.load(e);
}
const w = 5,
  h = w / 0.5,
  b = {
    fullScreen: { zIndex: 1 },
    particles: {
      number: { value: 0 },
      color: { value: ["#00FFFC", "#FC00FF", "#fffc00"] },
      shape: { type: ["circle", "square"], options: {} },
      opacity: {
        value: 1,
        animation: {
          enable: !0,
          minimumValue: 0,
          speed: 5,
          startValue: "max",
          destroy: "min",
        },
      },
      size: { value: 4, random: { enable: !0, minimumValue: 2 } },
      links: { enable: !1 },
      life: { count: 1 },
      move: {
        enable: !0,
        gravity: { enable: !0, acceleration: 10 },
        speed: { min: 10, max: 20 },
        decay: 0.1,
        direction: "none",
        straight: !1,
        outModes: { default: "destroy", top: "none" },
      },
      rotate: {
        value: { min: 0, max: 360 },
        direction: "random",
        move: !0,
        animation: { enable: !0, speed: 60 },
      },
      tilt: {
        direction: "random",
        enable: !0,
        move: !0,
        value: { min: 0, max: 360 },
        animation: { enable: !0, speed: 60 },
      },
      roll: {
        darken: { enable: !0, value: 25 },
        enable: !0,
        speed: { min: 15, max: 25 },
      },
      wobble: {
        distance: 30,
        enable: !0,
        move: !0,
        speed: { min: -15, max: 15 },
      },
    },
    emitters: {
      life: { count: h, duration: 0.1, delay: 0.4 },
      rate: { delay: 0.1, quantity: 150 },
      size: { width: 0, height: 0 },
    },
  };
async function g() {
  const e = new Audio(
    "https://cdn.pixabay.com/download/audio/2022/03/10/audio_3ed75a4a80.mp3?filename=corn-popper-with-accents-34016.mp3&g-recaptcha-response=03AAYGu2Rp7sZIAt0RCY-l_YzpTagXMv2_nCDXw8wD-gXdswu9Y1M0p9JF_k0Uft2wGq4CxqW25DEb3QjJAR57quvvkQEya67XIFcsOTJFla78jMyPHQ2Mjsaytb0X3tWRhsHItR0yKWiUpz7V0gWRzUJFYe8JW5aFgZ8rIeu8FP36TkykYmxm4SryOuaTJTwRXOOeA0wE8NvtOuqxW3ZGmr8HUUaEB9PbnSflWM78OdvHWhMfWAtrNUlPJXR2Sh-1jNh9TwB0oyJmiBx6jmU8UaWNbAXoUIsO21Jy-R90AD2oKcn7v8ooK1U_fdt_JuSuRlf2zxl3N9l_la0Wq8BVMOIHwVCJIsonngijP2BtA9eaRZooYPGLJzNRIZ8ZF9X1W98R8uINyrWFrkceaYwixrWgB5pMSfGtxxCSQOqPlqrbAiHy_lfuy5CEw1iN0qhHhXAo8w0YqmAsnj3IpAdvhTSHcl0se4CcKIfnPtYJNDcw1xvi6msV9_nIy930JFK8ynbJk1p4lbU-Ld2kwoFYZyY9UIdpGRAsXA&remote_template=1"
  );
  e.play(),
    setTimeout(() => {
      e.pause(), (e.currentTime = 0);
    }, 3e3);
}
const m = new Audio("https://assets.mixkit.co/active_storage/sfx/223/223.wav");
async function x() {
  m.play(),
    setTimeout(() => {
      m.pause(), (m.currentTime = 0);
    }, 1 * 1e3);
}
const o = document.querySelectorAll(".box"),
  u = document.querySelector(".game-info"),
  l = document.querySelector(".btnw");
let s, r;
const A = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
p();
function p() {
  (s = "X"),
    (r = ["", "", "", "", "", "", "", "", ""]),
    o.forEach((e, i) => {
      (e.innerText = ""),
        (e.style.pointerEvents = "all"),
        (e.classList = `box box${i + 1}`);
    }),
    l.classList.remove("active"),
    (u.innerText = `Current Player - ${s}`);
}
o.forEach((e, i) => {
  e.addEventListener("click", () => {
    E(i);
  });
});
function E(e) {
  r[e] === "" &&
    ((o[e].innerText = s),
    (r[e] = s),
    (o[e].style.pointerEvents = "none"),
    P(),
    T());
}
function P() {
  s === "X" ? (s = "0") : (s = "X"), (u.innerText = `Current Player - ${s}`);
}
function T() {
  let e = "";
  if (
    (A.forEach((t) => {
      (r[t[0]] !== "" || r[t[1]] !== "" || r[t[2]] !== "") &&
        r[t[0]] === r[t[1]] &&
        r[t[1]] === r[t[2]] &&
        (r[t[0]] === "X" ? (e = "X") : (e = "0"),
        o.forEach((c) => {
          c.style.pointerEvents = "none";
        }),
        o[t[0]].classList.add("win"),
        o[t[1]].classList.add("win"),
        o[t[2]].classList.add("win"));
    }),
    e !== "")
  ) {
    (u.innerText = `Winner Player - ${e}`),
      l.classList.add("active"),
      v(b),
      g();
    return;
  }
  let i = 0;
  r.forEach((t) => {
    t !== "" && i++;
  }),
    i === 9 && ((u.innerText = "Game Tied!"), l.classList.add("active"));
}
l.addEventListener("click", p);
l.addEventListener("click", x);
