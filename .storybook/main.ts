import type { StorybookConfig } from "@storybook/vue3-vite";
const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    framework: {
        name: "@storybook/vue3-vite",
        options: {}
    },
    docs: {
        autodocs: "tag"
    }
};
export default config;
