/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: false,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    css: ["./src/assets/styles/custom.css"],
    options: {
      safelist: [],
      safelistPatterns: [],
      keyframes: true,
      fontFace: true,
    },
    // extract: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
  important: true,
  theme: {
    screens: {
      // specifying screens is mandatory in every tailwind.config file
      xs: "480px", //min-width 480px
      xsm: "560px",
      sm: "640px",
      xmd: "720px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: {
        50: "#141414",
        200: "#000000",
      },
      red: {
        10: "#FF0000",
      },
      blue: {
        150: "#250C50",
      },
      orange: {
        10: "#EF972D",
      },
      green: {
        10: "#00A825",
        60: "#00DAD9",
      },
      violet: {
        10: "#9B53E0",
        20: "#8551E6",
        50: "#7B61FF",
        60: "#6549F6",
      },
      pink: {
        10: "#cec6ff",
        20: "#F4EEFF",
      },
      grey: {
        10: "#C4C4C4",
        20: "#D9D9D9",
        30: "#F0F0F0",
        40: "#F8F7FD",
      },
    },

    fontSize: {
      // `[fontSize, { letterSpacing, lineHeight }]`
      "ft-12": [
        "12px",
        {
          letterSpacing: "0em",
          lineHeight: "14px",
        },
      ],
      "ft-14": [
        "14px",
        {
          letterSpacing: "0em",
          lineHeight: "16.8px",
        },
      ],
      "ft-15": [
        "15px",
        {
          letterSpacing: "0em",
          lineHeight: "17.92px",
        },
      ],
      "ft-16": [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "19.89px",
        },
      ],
      "ft-16_1": [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "28px",
        },
      ],
      "ft-18": [
        "18px",
        {
          letterSpacing: "0em",
          lineHeight: "22.01px",
        },
      ],
      "ft-18_1": [
        "18px",
        {
          letterSpacing: "0em",
          lineHeight: "22.37px",
        },
      ],
      "ft-18_2": [
        "18px",
        {
          letterSpacing: "0em",
          lineHeight: "21.6px",
        },
      ],
      "ft-20": [
        "20px",
        {
          letterSpacing: "0em",
          lineHeight: "25.13px",
        },
      ],
      "ft-22": [
        "22px",
        {
          letterSpacing: "0em",
          lineHeight: "26.4px",
        },
      ],
      "ft-22_1": [
        "22px",
        {
          letterSpacing: "0em",
          lineHeight: "35.2px",
        },
      ],
      "ft-22_2": [
        "22px",
        {
          letterSpacing: "0em",
          lineHeight: "24px",
        },
      ],
      "ft-24": [
        "24px",
        {
          letterSpacing: "0em",
          lineHeight: "28.74px",
        },
      ],
      "ft-26": [
        "26px",
        {
          letterSpacing: "0em",
          lineHeight: "32.32px",
        },
      ],
      "ft-27": [
        "27px",
        {
          letterSpacing: "0em",
          lineHeight: "32.91px",
        },
      ],
      "ft-32": [
        "32px",
        {
          letterSpacing: "0em",
          lineHeight: "39.78px",
        },
      ],
      "ft-34": [
        "34px",
        {
          letterSpacing: "0em",
          lineHeight: "34px",
        },
      ],
      "ft-36": [
        "36px",
        {
          letterSpacing: "0em",
          lineHeight: "44px",
        },
      ],
      "ft-44": [
        "44px",
        {
          letterSpacing: "0em",
          lineHeight: "44px",
        },
      ],
      "ft-45": [
        "45px",
        {
          letterSpacing: "0em",
          lineHeight: "54px",
        },
      ],
      "ft-125": [
        "125px",
        {
          letterSpacing: "0em",
          lineHeight: "150px",
        },
      ],
    },

    fontFamily: {
      TerminaBold: ["Termina-Bold", "sans-serif"],
      NeueHaasMedium: ["NeueHaas-Medium", "sans-serif"],
      NeueHaasBold: ["NeueHaas-Bold", "sans-serif"],
      NeueHaasLight: ["NeueHaas-Light", "sans-serif"],
      PoppinsMedium: ["Poppins-Medium", "sans-serif"],
      PoppinsBold: ["Poppins-Bold", "sans-serif"],
    },

    boxShadow: {
      none: "0",
      inner: "inset 0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
      xs: "0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
      xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
      DEFAULT:
        "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
      "2xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 3px 0 rgba(0, 0, 0, 0.5)",
      lg: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
      md: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
      outline: "0px 0px 0px 3px rgba(0, 0, 0, 0.5)",
    },

    extend: {
      //theme options are to be extended with custom variants and not overridden (1 unit = 4px)
      spacing: {
        //common for width, height, padding, margin
        2.5: "10px",
        4.5: "18px",
        5.5: "22px",
        "27px": "27px",
        7.5: "30px",
        "37px": "37px",
        "43px": "43px",
        "45px": "45px",
        11.5: "46px",
        13: "52px",
        13.5: "54px",
        "53px": "53px",
        15: "60px",
        17.5: "70px",
        22: "88px",
        "95px": "95px",
        27.5: "110px",
        30: "120px",
        32.5: "130px",
        "143px": "143px",
        "147px": "147px",
        "153px": "153px",
        "187px": "187px",
        "173px": "173px",
        52.5: "210px",
        53.5: "214px",
        54: "216px",
        55.5: "222px",
        "255px": "255px",
        65: "260px",
        "261px": "261px",
        72.5: "290px",
        74.5: "298px",
        "315px": "315px",
        81: "324px",
        87: "348px",
        "345px": "345px",
        91.5: "366px",
        94.5: "378px",
        100: "400px",
        104: "416px",
        118: "472px",
        128: "512px",
        129.5: "518px",
        150: "600px",
        180: "720px",
        192: "768px",
        250.5: "1002px",
        300: "1200px",
        324.5: "1298px",
      },
      borderWidth: {},
      borderRadius: {
        //same as border width
        10: "10px",
        20: "20px",
        12: "12px",
        "5-5xl": "34px",
        50: "50px",
      },
      maxWidth: {
        400: "400px",
        753: "753px",
        883: "883px",
        1000: "1000px",
        1210: "1210px",
        1400: "1400px",
      },
      minHeight: {
        760: "760px",
        1298: "1298px",
      },
      maxHeight: {
        1200: "1200px",
      },
      backgroundImage: (theme) => ({
        hero: "url('/public/images/heroBg.jpg')", //tailwind class => bg-dummy
      }),
      zIndex: {
        "-1": "-1",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
      },
    },
  },

  variants: {
    //there are few css properties which don't support features/events like responsive, hover etc. by default, so to make them supportive for those css properties, we write them down as below
    width: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "group-hover"],
    transform: ["responsive", "hover", "focus", "group-hover"],
    scale: ["responsive", "hover", "focus", "group-hover"],
    fill: ["responsive", "hover", "focus", "group-hover"],
    extend: {
      animation: ["hover", "focus", "group-hover"],
      grayscale: ["hover", "focus", "group-hover"],
      backgroundImage: ["hover", "focus"],
    },
  },
  plugins: [],
  darkMode: false,
};
