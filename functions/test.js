exports.handelr = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'BOOGIE',
            age: 32,
            email: 'boogie.bogiegie@gmail.com'
        })
    }
}