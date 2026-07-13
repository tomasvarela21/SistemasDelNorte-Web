import nextVitals from "eslint-config-next/core-web-vitals"

const eslintConfig = [
  {
    ignores: ["**/.next/**", "out/**", "dist/**", "node_modules/**"],
  },
  ...nextVitals,
]

export default eslintConfig
