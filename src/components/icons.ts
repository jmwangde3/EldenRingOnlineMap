/**
 * 自定义地图图标
 * @description 导出的是生成图标数据的函数，用法：`L.divIcon(iconname(size, fontcolor)(title))`
 */

import L from 'leaflet';
export const MapIcon = {
  default:
    (showImage: boolean = false, size: number = 10, fontcolor: string = 'white') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<div style="width:${size}px; height:${size}px; border-radius:${size}px; position: absolute; background-color: white; box-shadow: 0 0 5px 0 black;"></div>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor}; margin-left: ${size + 1}px">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  cifu:
    (showImage: boolean = false, size: number = 20, fontcolor: string = 'white') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<img src="./resource/icons/fireicon.png" width="${size}px" height="${size}px"/>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor};">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  boss:
    (showImage: boolean = false, size: number = 30, fontcolor: string = 'yellow') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<img src="./resource/icons/boss.png" width="${size}px" height="${size}px"/>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor};">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  littleboss:
    (showImage: boolean = false, size: number = 28, fontcolor: string = 'yellow') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<img src="./resource/icons/littleboss.png" width="${size}px" height="${size}px"/>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor};">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  portal:
    (showImage: boolean = false, size: number = 24, fontcolor: string = 'white') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<img src="./resource/icons/portal.png" width="${size}px" height="${size}px"/>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor};">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  message:
    (showImage: boolean = false, size: number = 20, fontcolor: string = 'white') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<img src="./resource/icons/message.png" width="${size}px" height="${size}px"/>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor};">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  warning:
    (showImage: boolean = false, size: number = 15, fontcolor: string = 'white') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<img src="./resource/icons/warning.png" width="${size}px" height="${size}px"/>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor};">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  question:
    (showImage: boolean = false, size: number = 15, fontcolor: string = 'white') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<img src="./resource/icons/question.png" width="${size}px" height="${size}px"/>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor};">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  collect:
    (showImage: boolean = false, size: number = 20, fontcolor: string = 'white') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<img src="./resource/icons/collect.png" width="${size}px" height="${size}px"/>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor};">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  white:
    (showImage: boolean = false, size: number = 10, fontcolor: string = 'white') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<div style="width:${size}px; height:${size}px; border-radius:${size}px; position: absolute; background-color: white; box-shadow: 0 0 5px 0 black;"></div>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor}; margin-left: ${size + 1}px">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  yellow:
    (showImage: boolean = false, size: number = 10, fontcolor: string = 'white') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<div style="width:${size}px; height:${size}px; border-radius:${size}px; position: absolute; background-color: #ffeb3b; box-shadow: 0 0 5px 0 black;"></div>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor}; margin-left: ${size + 1}px">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  green:
    (showImage: boolean = false, size: number = 10, fontcolor: string = 'white') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<div style="width:${size}px; height:${size}px; border-radius:${size}px; position: absolute; background-color: #46ce46; box-shadow: 0 0 5px 0 black;"></div>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor}; margin-left: ${size + 1}px">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  blue:
    (showImage: boolean = false, size: number = 10, fontcolor: string = 'white') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<div style="width:${size}px; height:${size}px; border-radius:${size}px; position: absolute; background-color: #38f; box-shadow: 0 0 5px 0 black;"></div>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor}; margin-left: ${size + 1}px">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  red:
    (showImage: boolean = false, size: number = 10, fontcolor: string = 'white') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<div style="width:${size}px; height:${size}px; border-radius:${size}px; position: absolute; background-color: #ce1919; box-shadow: 0 0 5px 0 black;"></div>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor}; margin-left: ${size + 1}px">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
  purple:
    (showImage: boolean = false, size: number = 10, fontcolor: string = 'white') =>
    (title?: string, fontSize: string = '0.8em') => {
      return {
        html: `
        <div class="icon">
        ${!showImage ? '' : `<div style="width:${size}px; height:${size}px; border-radius:${size}px; position: absolute; background-color: purple; box-shadow: 0 0 5px 0 black;"></div>`}
        
        <p style="font-size: ${fontSize}; color: ${fontcolor}; margin-left: ${size + 1}px">${title}</p>
        </div>
    `,
        className: '',
        iconSize: L.point(size, size),
        iconArchor: L.point(size / 2, size / 2),
      };
    },
};
