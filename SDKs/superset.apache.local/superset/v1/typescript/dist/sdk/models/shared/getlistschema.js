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
var GetListSchemaFilters = /** @class */ (function (_super) {
    __extends(GetListSchemaFilters, _super);
    function GetListSchemaFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=col" }),
        __metadata("design:type", String)
    ], GetListSchemaFilters.prototype, "col", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opr" }),
        __metadata("design:type", String)
    ], GetListSchemaFilters.prototype, "opr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], GetListSchemaFilters.prototype, "value", void 0);
    return GetListSchemaFilters;
}(SpeakeasyBase));
export { GetListSchemaFilters };
export var GetListSchemaKeysEnum;
(function (GetListSchemaKeysEnum) {
    GetListSchemaKeysEnum["ListColumns"] = "list_columns";
    GetListSchemaKeysEnum["OrderColumns"] = "order_columns";
    GetListSchemaKeysEnum["LabelColumns"] = "label_columns";
    GetListSchemaKeysEnum["DescriptionColumns"] = "description_columns";
    GetListSchemaKeysEnum["ListTitle"] = "list_title";
    GetListSchemaKeysEnum["None"] = "none";
})(GetListSchemaKeysEnum || (GetListSchemaKeysEnum = {}));
export var GetListSchemaOrderDirectionEnum;
(function (GetListSchemaOrderDirectionEnum) {
    GetListSchemaOrderDirectionEnum["Asc"] = "asc";
    GetListSchemaOrderDirectionEnum["Desc"] = "desc";
})(GetListSchemaOrderDirectionEnum || (GetListSchemaOrderDirectionEnum = {}));
var GetListSchema = /** @class */ (function (_super) {
    __extends(GetListSchema, _super);
    function GetListSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columns" }),
        __metadata("design:type", Array)
    ], GetListSchema.prototype, "columns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters", elemType: GetListSchemaFilters }),
        __metadata("design:type", Array)
    ], GetListSchema.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys" }),
        __metadata("design:type", Array)
    ], GetListSchema.prototype, "keys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_column" }),
        __metadata("design:type", String)
    ], GetListSchema.prototype, "orderColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_direction" }),
        __metadata("design:type", String)
    ], GetListSchema.prototype, "orderDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetListSchema.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], GetListSchema.prototype, "pageSize", void 0);
    return GetListSchema;
}(SpeakeasyBase));
export { GetListSchema };
