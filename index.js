const getValuebyKeyInArray = (key = '', data) => {
    if (!isEmpty(data)) {
        let obj = data?.find((o) => o?.key_name === key);
        if (obj?.key_value != 0) {
            return obj?.key_value;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
};

module.exports = getValuebyKeyInArray;
