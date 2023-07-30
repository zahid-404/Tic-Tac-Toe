import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles-engine/+esm";
import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";

async function loadParticles(options) {
  await loadFull(tsParticles);

  await tsParticles.load(options);
}

const totalDuration = 5 /* * 60 * 60*/,
  emittersLifeCount = totalDuration / 0.5;

const configs = {
  fullScreen: {
    zIndex: 1,
  },
  particles: {
    number: {
      value: 0,
    },
    color: {
      value: ["#00FFFC", "#FC00FF", "#fffc00"],
    },
    shape: {
      type: ["circle", "square"],
      options: {},
    },
    opacity: {
      value: 1,
      animation: {
        enable: true,
        minimumValue: 0,
        speed: 5,
        startValue: "max",
        destroy: "min",
      },
    },
    size: {
      value: 4,
      random: {
        enable: true,
        minimumValue: 2,
      },
    },
    links: {
      enable: false,
    },
    life: {
      count: 1,
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: 10,
      },
      speed: {
        min: 10,
        max: 20,
      },
      decay: 0.1,
      direction: "none",
      straight: false,
      outModes: {
        default: "destroy",
        top: "none",
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: "random",
      move: true,
      animation: {
        enable: true,
        speed: 60,
      },
    },
    tilt: {
      direction: "random",
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 60,
      },
    },
    roll: {
      darken: {
        enable: true,
        value: 25,
      },
      enable: true,
      speed: {
        min: 15,
        max: 25,
      },
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15,
      },
    },
  },
  emitters: {
    life: {
      count: emittersLifeCount,
      duration: 0.1,
      delay: 0.4,
    },
    rate: {
      delay: 0.1,
      quantity: 150,
    },
    size: {
      width: 0,
      height: 0,
    },
  },
};
// Animation end

// Popper sound
async function popperSound() {
  const audioElement = new Audio(
    "https://cdn.pixabay.com/download/audio/2022/03/10/audio_3ed75a4a80.mp3?filename=corn-popper-with-accents-34016.mp3&g-recaptcha-response=03AAYGu2Rp7sZIAt0RCY-l_YzpTagXMv2_nCDXw8wD-gXdswu9Y1M0p9JF_k0Uft2wGq4CxqW25DEb3QjJAR57quvvkQEya67XIFcsOTJFla78jMyPHQ2Mjsaytb0X3tWRhsHItR0yKWiUpz7V0gWRzUJFYe8JW5aFgZ8rIeu8FP36TkykYmxm4SryOuaTJTwRXOOeA0wE8NvtOuqxW3ZGmr8HUUaEB9PbnSflWM78OdvHWhMfWAtrNUlPJXR2Sh-1jNh9TwB0oyJmiBx6jmU8UaWNbAXoUIsO21Jy-R90AD2oKcn7v8ooK1U_fdt_JuSuRlf2zxl3N9l_la0Wq8BVMOIHwVCJIsonngijP2BtA9eaRZooYPGLJzNRIZ8ZF9X1W98R8uINyrWFrkceaYwixrWgB5pMSfGtxxCSQOqPlqrbAiHy_lfuy5CEw1iN0qhHhXAo8w0YqmAsnj3IpAdvhTSHcl0se4CcKIfnPtYJNDcw1xvi6msV9_nIy930JFK8ynbJk1p4lbU-Ld2kwoFYZyY9UIdpGRAsXA&remote_template=1"
  );
  audioElement.play();

  setTimeout(() => {
    audioElement.pause();
    audioElement.currentTime = 0;
  }, 3000);
}
// Popper sound end

// btn sound
const audioBtnElement = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/223/223.wav"
);
async function btnSound() {
  audioBtnElement.play();
  const durationInSeconds = 1;
  setTimeout(() => {
    audioBtnElement.pause();
    audioBtnElement.currentTime = 0;
  }, durationInSeconds * 1000);
}
// btn sound end

// grid click sound
async function gridSound() {
  const audioBtnElement = new Audio("./assets/grid-click.mp3");
  audioBtnElement.play();
  setTimeout(() => {
    audioBtnElement.pause();
    audioBtnElement.currentTime = 0;
  }, 800);
}
// grid click sound

// function for stopping
function stopFunc() {
  // Clear the timeout using the stored timeoutId
  clearTimeout(timeoutId);
}

// Exporting functions
export { loadParticles, popperSound, btnSound, gridSound, configs };
