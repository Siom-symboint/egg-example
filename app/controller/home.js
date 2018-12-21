const Controller = require('egg').Controller;
const fs = require('mz/fs');
const path = require('path')

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const tpl = path.join(this.app.config.static.dir,  'index.html');
    console.log(ctx.request.url)
    this.ctx.set('Content-Type','text/html');
    this.ctx.body = await fs.readFile(tpl, 'utf-8');
  }
}

module.exports = HomeController;

