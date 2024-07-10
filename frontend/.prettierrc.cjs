module.exports = {
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  importOrder: ["^assets/(.*)$", "^app/(.*)$", "^test/(.*)$", "^[./]"],
  importOrderSeparation: true,
  overrides: [
    {
      files: ["**/*.json", "**/*.yml", "**/*.html", "**/*.css"],
      options: {
        singleQuote: false,
        tabWidth: 2,
      },
    },
  ],
};
