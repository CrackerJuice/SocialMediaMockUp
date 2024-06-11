const {schema, model} = require ('mongoose');
const userschema = new schema({
    userName: {
        type: String,
    },
    thoughts: [{
        type: schema.Types.ObjectId
    }],
    Friends: [{
        type: schema.Types.ObjectId,
        ref: 'user'
    }]
})