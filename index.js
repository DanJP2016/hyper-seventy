'use strict';

const foregroundColor = 'rgba(215, 153, 33, 0.5)';
const backgroundColor = 'rgba(29, 32, 33, 0.5)';
const red = 'rgba(214, 93, 14, 0.5)';
const green = 'rgba(152, 151, 14, 0.5)';
const yellow = 'rgba(215, 53, 33, 0.5)';
//const blue = 'rgba(69, 133, 136, 0.5)';
const magenta = 'rgba(177, 98, 134, 0.5)';
const cyan = 'rgba(104, 157, 106, 0.5)';
const white = 'rgba(235, 279, 178, 0.5)';

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: backgroundColor,
    foregroundColor: foregroundColor,
    borderColor: green,
    cursorColor: red,
    colors: {
      black: backgroundColor,
      red: red,
      green: cyan,
      yellow: yellow,
      blue: cyan,
      magenta: magenta,
      cyan: cyan,
      white: white,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: cyan,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightBlack: backgroundColor,
      lightWhite: white
    },
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: rgba(235, 279, 178, 0.5);
        text-shadow: 0px 0px 5px rgba(235, 279, 178, 0.5), 0px 0px 10px rgba(235, 279, 178, 0.5), 0px 0px 15px rgba(235, 279, 178, 0.5), 0p 0px 20px rgba(152, 151, 26, 0.5), 0px 0px 30px rgba(152, 151, 26, 0.5), 0px 0px 40px rgba(152, 151, 26, 0.5);
              
      }
      
      .tabs_nav .tabs_title {
        color: rgba(235, 279, 178, 0.5);
        text-shadow: 0px 0px 5px rgba(235, 279, 178, 0.5), 0px 0px 10px rgba(235, 279, 178, 0.5), 0px 0px 15px rgba(235, 279, 178, 0.5), 0p 0px 20px rgba(152, 151, 26, 0.5), 0px 0px 30px rgba(152, 151, 26, 0.5), 0px 0px 40px rgba(152, 151, 26, 0.5);
      }

      .tab_active {
        background-color: rgba(215, 53, 33, 0.1);
      }

      .tabs_nav .tabs_list .tab_tab .tab_icon {
        color: rgba(235, 279, 178, 0.8);
      }

      .tabs_nav .tabs_list .tab_active .tab_icon {
        color: rgba(235, 279, 178, 0.8);
      }
      
      .header_appTitle {
        color: rgba(235, 279, 178, 0.5);
        text-shadow: 0px 0px 5px rgba(235, 279, 178, 0.5), 0px 0px 10px rgba(235, 279, 178, 0.5), 0px 0px 15px rgba(235, 279, 178, 0.5), 0p 0px 20px rgba(152, 151, 26, 0.5), 0px 0px 30px rgba(152, 151, 26, 0.5), 0px 0px 40px rgba(152, 151, 26, 0.5);
      }

      .header_header .header_windowControls .header_maximizeWindowLeft, .header_header .header_windowControls .header_shape {
        color: rgba(152, 151, 26, 0.5);
        text-shadow: 0px 0px 5px rgba(235, 279, 178, 0.5), 0px 0px 10px rgba(235, 279, 178, 0.5), 0px 0px 15px rgba(235, 279, 178, 0.5), 0p 0px 20px rgba(152, 151, 26, 0.5), 0px 0px 30px rgba(152, 151, 26, 0.5), 0px 0px 40px rgba(152, 151, 26, 0.5);
        transition: all 400ms ease-in-out;
      }
      
      .header_header .header_windowControls .header_closeWindowLeft, .header_header .header_windowControls .header_closeWindow {
        color: rgba(204, 36, 29, 0.7);
        transition: all 400ms ease-in-out;
      }
      
      .header_header .header_windowHeader .header_hamburgerMenuRight, .header_header .header_windowHeader .header_hamburgerMenuLeft {
        color: rgba(152, 151, 26, 0.5);
        text-shadow: 0px 0px 5px rgba(235, 279, 178, 0.5), 0px 0px 10px rgba(235, 279, 178, 0.5), 0px 0px 15px rgba(235, 279, 178, 0.5), 0p 0px 20px rgba(152, 151, 26, 0.5), 0px 0px 30px rgba(152, 151, 26, 0.5), 0px 0px 40px rgba(152, 151, 26, 0.5);
        transition: all 400ms ease-in-out;
      }
    `
  });
};
