"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    name: String,
    // sector_names which is string array and requered
    sector_names: {
        type: [String],
        required: true,
    },
});
var UserModel = (0, mongoose_1.model)('User', userSchema);
exports.UserModel = UserModel;
