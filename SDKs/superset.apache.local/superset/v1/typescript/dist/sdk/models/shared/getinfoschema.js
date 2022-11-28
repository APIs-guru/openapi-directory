var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var GetInfoSchemaAddColumns = /** @class */ (function (_super) {
    __extends(GetInfoSchemaAddColumns, _super);
    function GetInfoSchemaAddColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetInfoSchemaAddColumns.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], GetInfoSchemaAddColumns.prototype, "pageSize", void 0);
    return GetInfoSchemaAddColumns;
}(SpeakeasyBase));
export { GetInfoSchemaAddColumns };
var GetInfoSchemaEditColumns = /** @class */ (function (_super) {
    __extends(GetInfoSchemaEditColumns, _super);
    function GetInfoSchemaEditColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetInfoSchemaEditColumns.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], GetInfoSchemaEditColumns.prototype, "pageSize", void 0);
    return GetInfoSchemaEditColumns;
}(SpeakeasyBase));
export { GetInfoSchemaEditColumns };
export var GetInfoSchemaKeysEnum;
(function (GetInfoSchemaKeysEnum) {
    GetInfoSchemaKeysEnum["AddColumns"] = "add_columns";
    GetInfoSchemaKeysEnum["EditColumns"] = "edit_columns";
    GetInfoSchemaKeysEnum["Filters"] = "filters";
    GetInfoSchemaKeysEnum["Permissions"] = "permissions";
    GetInfoSchemaKeysEnum["AddTitle"] = "add_title";
    GetInfoSchemaKeysEnum["EditTitle"] = "edit_title";
    GetInfoSchemaKeysEnum["None"] = "none";
})(GetInfoSchemaKeysEnum || (GetInfoSchemaKeysEnum = {}));
var GetInfoSchema = /** @class */ (function (_super) {
    __extends(GetInfoSchema, _super);
    function GetInfoSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_columns", elemType: GetInfoSchemaAddColumns }),
        __metadata("design:type", Map)
    ], GetInfoSchema.prototype, "addColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_columns", elemType: GetInfoSchemaEditColumns }),
        __metadata("design:type", Map)
    ], GetInfoSchema.prototype, "editColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys" }),
        __metadata("design:type", Array)
    ], GetInfoSchema.prototype, "keys", void 0);
    return GetInfoSchema;
}(SpeakeasyBase));
export { GetInfoSchema };
