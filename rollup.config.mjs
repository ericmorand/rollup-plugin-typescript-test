import typescript from "@rollup/plugin-typescript";

/**
 * @type {Array<import('rollup').RollupOptions>}
 */
const configurations = [
    {
        input: 'index.ts',
        plugins: [
            typescript({
                tsconfig: "./tsconfig.json"
            })
        ]
    }
];

export default configurations;
