var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var URLSchema = new Schema({
    url: {
        type: String,
        unique: true,
        ref: "Item",
        field: "url"

    }
});

var Url = mongoose.model("Url", URLSchema);

module.exports = Url;