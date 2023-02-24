module.exports = {
  apps: [
    {
      name: 'gladcc',
      exec_mode: 'fork',
      instances: '1',
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: "development",
        NITRO_PORT: 9527,
        NITRO_HOST: '0.0.0.0'
      },
      env_test:{
        NODE_ENV: "test",
        NITRO_PORT: 9528,
        NITRO_HOST: '0.0.0.0'
      },
      env_prod: {
        NODE_ENV: "prod",
        NITRO_PORT: 9529,
        NITRO_HOST: '0.0.0.0'
      }
    }
  ]
}