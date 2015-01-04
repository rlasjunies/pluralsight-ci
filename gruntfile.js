module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            commonjs : {
                //src: ["spa/**/*.ts", "Scripts/typings/**/*.ts"],
                watch: ".",
                sourceMap: true,
                //out: "Scripts/spa.js",
                //outDir: "public/gruntcompile",
                files: [
                    { src: ['spa/**/*.ts', "Scripts/typings/**/*.ts"], dest: 'public/spa' },
                    { src: ['spa-test/**/*.ts', "Scripts/typings/**/*.ts"], dest: 'public/spa-test' }],
                reference: "spa/_references.ts",
                options: {
                    module: "commonjs",
                    fast: "never"
                }
            },
            //onefile : {
            //    src: ["spa/**/*.ts", "Scripts/typings/**/*.ts"],
            //    watch: "spa/.",
            //    sourceMap: true,
            //    out: "Scripts/spa.js",
            //    //outDir: "Scripts",
            //    reference: "spa/_references.ts",
            //}

        },
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default",["ts"]);
};