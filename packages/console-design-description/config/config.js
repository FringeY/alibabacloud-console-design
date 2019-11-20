module.exports = {
  presets: [
    [
      "@alicloud/console-toolkit-preset-official",
      {
        moduleName: "@alicloud/console-design-description",
        external: ["@alicloud/console-widget-loader"],
        globals: {
          "@alicloud/console-widget-loader": "widgetLoader",
          "@alicloud/console-design-description": "ConsoleDescription"
        },
        useTypescript: true
      }
    ]
  ]
};