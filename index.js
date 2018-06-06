function polymorph() {
    var len2func = [];
    for (var i = 0; i < arguments.length; i++)
        if (typeof (arguments[i]) == "function")
            len2func[arguments[i].length] = arguments[i];
    return  function () {
        return  len2func[arguments.length].apply(this, arguments);
    }
}

var gimmeStat = polymorph(
     function () {
        let stat = require('./stat');
        const config = require('./env');
        if (require.main !== module) {
            config.returnString = true;
            var result =  stat(config);
            return result;
        }
        if (require.main === module) {
            stat(config);
        }
    },
    function (object) {
        let stat = require('./stat');
        let config = require('./env');
        config = Object.assign(config, object);
        config.returnString = true;
        return stat(config);
    }
)
if (require.main === module) {
    gimmeStat();
}
module.exports = gimmeStat;