const presets = [
  [
    "@babel/env",
    {
      targets: { 
        chrome: "64",
        android: "64",
        firefox: "50",
        safari: "11.1",
        edge: "15"
      },
      useBuiltIns: "usage",
      corejs: "3.4.1" 
    }
  ],
];

module.exports = { presets };