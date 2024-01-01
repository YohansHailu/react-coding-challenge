"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullSectorGraph = exports.getRootSectors = exports.deleteSectorById = exports.updateSector = exports.getSectorById = exports.getAllSectors = exports.createSectorUsingParentName = exports.createSector = void 0;
var sectorRepository_1 = require("./sectorRepository");
function createSector(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, parent, sector, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, name = _a.name, parent = _a.parent;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    if (!name) {
                        res.status(400).json({ error: "Name is required" });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, sectorRepository_1.default.createSector(name, parent)];
                case 2:
                    sector = _b.sent();
                    res.json(sector);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    res.status(500).json({ error: error_1.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.createSector = createSector;
;
function createSectorUsingParentName(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, parentName, sector, parent_1, parent_id, sector, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, name = _a.name, parentName = _a.parentName;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 8, , 9]);
                    if (!name) {
                        // return bad request status code
                        res.status(400).json({ error: "name and name are required" });
                        return [2 /*return*/];
                    }
                    if (!!parentName) return [3 /*break*/, 3];
                    return [4 /*yield*/, sectorRepository_1.default.createSector(name, "")];
                case 2:
                    sector = _b.sent();
                    res.json(sector);
                    return [2 /*return*/];
                case 3: return [4 /*yield*/, sectorRepository_1.default.getSectorByName(parentName)];
                case 4:
                    parent_1 = _b.sent();
                    if (!parent_1) return [3 /*break*/, 6];
                    parent_id = parent_1._id;
                    return [4 /*yield*/, sectorRepository_1.default.createSector(name, parent_id)];
                case 5:
                    sector = _b.sent();
                    res.json(sector);
                    return [3 /*break*/, 7];
                case 6:
                    res.status(404).json({ error: "Parent not found" });
                    _b.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    error_2 = _b.sent();
                    res.status(500).json({ error: error_2.message });
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.createSectorUsingParentName = createSectorUsingParentName;
function getAllSectors(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var sectors, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, sectorRepository_1.default.getAllSectors()];
                case 1:
                    sectors = _a.sent();
                    res.json(sectors);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    res.status(500).json({ error: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllSectors = getAllSectors;
;
function getRootSectors(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var sectors, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, sectorRepository_1.default.getRootSectors()];
                case 1:
                    sectors = _a.sent();
                    res.json(sectors);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    res.status(500).json({ error: error_4.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getRootSectors = getRootSectors;
;
function getFullSectorGraph(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var sectors, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, sectorRepository_1.default.getFullSectorGraph()];
                case 1:
                    sectors = _a.sent();
                    res.json(sectors);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    res.status(500).json({ error: error_5.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getFullSectorGraph = getFullSectorGraph;
;
function getSectorById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, sector, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, sectorRepository_1.default.getSectorById(id)];
                case 2:
                    sector = _a.sent();
                    if (!sector) {
                        res.status(404).json({ error: "Sector not found" });
                        return [2 /*return*/];
                    }
                    res.json(sector);
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    res.status(500).json({ error: error_6.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getSectorById = getSectorById;
;
function updateSector(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, _a, name, parent, updatedSector, error_7;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.params.id;
                    _a = req.body, name = _a.name, parent = _a.parent;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, sectorRepository_1.default.updateSector(id, name, parent)];
                case 2:
                    updatedSector = _b.sent();
                    res.json(updatedSector);
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _b.sent();
                    res.status(500).json({ error: error_7.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateSector = updateSector;
;
function deleteSectorById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, sector, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, sectorRepository_1.default.getSectorById(id)];
                case 2:
                    sector = _a.sent();
                    if (!sector) {
                        res.status(404).json({ error: "Sector not found" });
                        return [2 /*return*/];
                    }
                    if (sector && sector.children && sector.children.length > 0) {
                        res.status(400).json({ error: "Sector has children" });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, sectorRepository_1.default.deleteSectorById(id)];
                case 3:
                    _a.sent();
                    res.json({ message: 'Sector deleted successfully' });
                    return [3 /*break*/, 5];
                case 4:
                    error_8 = _a.sent();
                    res.status(500).json({ error: error_8.message });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.deleteSectorById = deleteSectorById;
;
