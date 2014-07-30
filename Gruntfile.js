module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        jsduck : {
            main: {
                // source paths with your code
                src: [
                    "../acharts/src"
                    // globbing supported!
                ],

                // docs output dir
                dest: 'api',

                // extra options
                options: {
                    'builtin-classes': true,
                    //'tags':['fileOverview'],
                    'warnings': [ '-dup_member', '-link_ambiguous','-tag'],
                    'external': ['window','HTMLDocument','HTMLElement','DocumentFragment','XMLHttpRequest','jQuery'],
                    'title' : 'acharts Docs'
                }
            }
        }
    });
    // 载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-jsduck');
    // 注册任务
    grunt.registerTask('default', ['jsduck']);
}; 