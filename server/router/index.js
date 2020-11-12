 /*
 * @description: 路由管理
 * @Author: along
 * @Date: 2019-11-12
 */
const router = require('koa-router')();

const indexPage = {
    async indexPage ( ctx ) {
        const title = 'admin page'
        await ctx.render('index', {
            title
        })
    }
}
const home = router.get('/', indexPage.indexPage)
router.use('/', home.routes(), home.allowedMethods());

module.exports = router;