webpackJsonp([38],{61:function(n,r){n.exports="## Omiu \r\n\r\nOmiu is the official UI component library of Omi, based on Omio(IE8+) and compatible with Omi, using the design style of Wechat 7.0.\r\n\r\n## Colors\r\n\r\n|  **Color**  | **Meaning**  |\r\n| ------------- |:-------------:|\r\n| #07C160  | Noble Vigorous Green | \r\n| #171717  | Steady Elegant Black |   \r\n| #FEFEFE  | Transcendent White |   \r\n| #F95050  | Temperament Eye-catching Red |   \r\n| #ECECEC  | Lost Indifferent Gray |   \r\n\r\n\r\n## Use it immediately\r\n\r\n```\r\nnpm i omi-cli -g             \r\nomi init my-app   \r\ncd my-app           \r\nnpm start                     \r\nnpm run build    \r\n```\r\n\r\n> `npx omi-cli init my-app` is also supported(npm v5.2.0+).\r\n\r\n## Use it in existing project\r\n\r\n```js\r\nnpm i omiu\r\n```\r\n\r\n```js\r\nimport { WeElement, define, render } from 'omi'\r\nimport 'omiu/button'\r\n\r\ndefine('my-app', class extends WeElement {\r\n  onClick = () => {\r\n    console.log('Hello omiu!');\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <o-button onClick={this.onClick}>I am button.</o-button>\r\n    )\r\n  }\r\n})\r\n\r\nrender(<my-app />, 'body')\r\n```\r\n\r\n\r\n"}});
//# sourceMappingURL=38.1ae1a5bd.chunk.js.map