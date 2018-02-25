import rp from 'request-promise';
class indexModel{
    constructor(ctx){
        this.ctx = ctx;
    }
    updateNum(){
        const options={
            uri:'http://localhost/phpdemo/praise.php',
            method:'GET'
        };
        return new Promise((resolve,reject)=>{
            rp(options).then(function(result){
                const info = JSON.parse(result);
                // console.log("eee"+request);
                if(info){
                    resolve({data:info.result});
                }else{
                    reject({});
                }
            })
        })
    }
}

export default indexModel;