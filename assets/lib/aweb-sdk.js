function atwebSDK(){
    var app = {
        user:new Object(),
        project:new Object(),
        doc:new Object()
    };
    var BaseModel = function (key,Base){
        Base.get = function(vo){
            console.log('hello', key);
            console.log('hello', vo);
            var param_url = "/"+key;
            $.ajax({
                type: "GET",
                url: param_url+"/get",
                data: {
                    _id:vo._id
                },
                dataType: "json",
                async: false,
                success:function(data){
                    console.log(data);
                }
            });
        };
        Base.find = function(vo){
            console.log('hi', key);
            console.log('hi', vo);
            var param_url = "/"+key;
            $.ajax({
                type: "POST",
                url: param_url+"/find",
                data: {
                    _id:vo._id
                },
                dataType: "json",
                async: false,
                success:function(data){
                    console.log(data);
                }
            });
        };
        return Base;
    };
    for(key in app){
        BaseModel(key,app[key]);
    }
    return app;
};