const {schema, model} = require ('mongoose');
const reactionSchema = require ('./reaction');
const thoughtsschema = new schema({
    userName: {
        type: String,
    },
    reactions:[
        reactionSchema
    ]

})
const thoughts= model('thought', thoughtsschema);
module.exports = thoughts;