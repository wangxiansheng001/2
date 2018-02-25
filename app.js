import Koa from 'koa';
import router from 'koa-simple-router';
import controllerInit from './controller/initController';
import serve from'koa-static';
import  render  from'koa-swig';
import Config from './config/config';
import co  from'co';
const app = new Koa();
 
controllerInit.init(app,router);

app.context.render = co.wrap(render({
  
   root: Config.get('viewDir'),
   autoescape:true,
   cache:'memory',
   ext:'html'

}));
app.use(serve(Config.get('staticDir')));

app.listen(Config.get('port'),function(){
    console.log('koa server listening on port ' + Config.get('port'));
});
export default app
