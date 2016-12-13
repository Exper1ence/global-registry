/**
 * Created by Exper1ence on 2016/12/13.
 */
const _ = require('lodash');
const func = require('typical-function');

module.exports = func(Object, (obj) => {
    _.forOwn(obj, (value, key) => {
        if (!_.isUndefined(global[key]))throw new Error(`The property '${key}' has been defined.`);
        Object.defineProperty(global, key, {
            enumerable: true,
            configurable: false,
            writable: false,
            value,
        });
    });
});