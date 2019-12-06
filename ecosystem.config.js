module.exports = {
    apps: [
        {
            name: 'api',
            script: 'app.js',
            cwd: "./",
            log_date_format: "YYYY-MM-DD HH:mm:ss",
            out_file: "./logs/out-0.log",
            error_file: "./logs/err-0.log",
            watch: true,
            exec_interpreter: "babel-node",//此配置就是使用babel-node去执行nodejs文件
            exec_mode: "fork",
            env: {
                COMMON_VARIABLE: 'true'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
}