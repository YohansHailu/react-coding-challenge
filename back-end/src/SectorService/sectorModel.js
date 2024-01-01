"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sector = void 0;
var mongoose_1 = require("mongoose");
var sectorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    parent: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Sector',
        unique: true,
    },
    children: [{
            type: mongoose_1.Types.ObjectId,
            ref: 'Sector',
        }],
});
var Sector = (0, mongoose_1.model)('Sector', sectorSchema);
exports.Sector = Sector;
