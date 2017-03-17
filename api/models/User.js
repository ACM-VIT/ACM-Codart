
module.exports = {

    schema: true,

    attributes: {
        name:{
            type:'string',
            required:true
        },
        regno:{
            type:'string',
            required:true
        },
        phone:{
            type:'string',
            required:true
        },
        email:{
            type:'string',
            required:true,
            unique : false
        },

        noofpeople:{
            type:'integer',
            required:false
        },

        hackerrank:{
            type:'string',
            required:true
        },
        s_name : {
            type : 'string',
            required : false
        },
        team  : {
            type : 'string',
            required : false
        },




        toJSON: function() {
            var obj = this.toObject();
            delete obj._csrf;
            return obj;
        }
    }
};
