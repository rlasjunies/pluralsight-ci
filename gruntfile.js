module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default : {
                src: ["spa/*.ts","Scripts/typings/*.ts"],
                watch: "spa/.",
                sourceMap: true,
                out: "Scripts/spa.js",
                reference: "spa/_references.ts"
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
};