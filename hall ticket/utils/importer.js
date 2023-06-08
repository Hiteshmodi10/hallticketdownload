class Import {
    constructor(path){
        this.path = path;
    }

    async load() {
        return new Promise((resolve,reject)=>{
            $.getScript(this.path,function(){
                $(document).ready(resolve)
            })
        })
    }

}