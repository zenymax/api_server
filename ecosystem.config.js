module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   * 
   * TUTORIAL HERE
   * http://pm2.keymetrics.io/docs/usage/application-declaration/#javascript-format
   * 
   * pm2 start ecosystem.config.js --env development
   * pm2 restart ecosystem.config.js --env development
   * 
   * pm2 start ecosystem.config.js --env production
   * 
   * pm2 logs [id]
   * pm2 stop [id]
   * pm2 delete [id|all]
   * 
   * 
   */
  apps : [

    // First application
    {
      name      : 'TSTMKRS API',
      script    : 'server.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    // Second application
    {
      name      : 'WEB',
      script    : 'web.js'
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
