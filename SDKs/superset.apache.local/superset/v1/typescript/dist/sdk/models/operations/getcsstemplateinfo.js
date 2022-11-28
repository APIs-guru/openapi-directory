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
import * as shared from "../shared";
var GetCssTemplateInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetCssTemplateInfoQueryParams, _super);
    function GetCssTemplateInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetInfoSchema)
    ], GetCssTemplateInfoQueryParams.prototype, "q", void 0);
    return GetCssTemplateInfoQueryParams;
}(SpeakeasyBase));
export { GetCssTemplateInfoQueryParams };
var GetCssTemplateInfoSecurity = /** @class */ (function (_super) {
    __extends(GetCssTemplateInfoSecurity, _super);
    function GetCssTemplateInfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetCssTemplateInfoSecurity.prototype, "jwt", void 0);
    return GetCssTemplateInfoSecurity;
}(SpeakeasyBase));
export { GetCssTemplateInfoSecurity };
var GetCssTemplateInfo200ApplicationJsonFiltersColumnName = /** @class */ (function (_super) {
    __extends(GetCssTemplateInfo200ApplicationJsonFiltersColumnName, _super);
    function GetCssTemplateInfo200ApplicationJsonFiltersColumnName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetCssTemplateInfo200ApplicationJsonFiltersColumnName.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], GetCssTemplateInfo200ApplicationJsonFiltersColumnName.prototype, "operator", void 0);
    return GetCssTemplateInfo200ApplicationJsonFiltersColumnName;
}(SpeakeasyBase));
export { GetCssTemplateInfo200ApplicationJsonFiltersColumnName };
var GetCssTemplateInfo200ApplicationJsonFilters = /** @class */ (function (_super) {
    __extends(GetCssTemplateInfo200ApplicationJsonFilters, _super);
    function GetCssTemplateInfo200ApplicationJsonFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetCssTemplateInfo200ApplicationJsonFiltersColumnName }),
        __metadata("design:type", Array)
    ], GetCssTemplateInfo200ApplicationJsonFilters.prototype, "columnName", void 0);
    return GetCssTemplateInfo200ApplicationJsonFilters;
}(SpeakeasyBase));
export { GetCssTemplateInfo200ApplicationJsonFilters };
var GetCssTemplateInfo200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplateInfo200ApplicationJson, _super);
    function GetCssTemplateInfo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_columns" }),
        __metadata("design:type", Map)
    ], GetCssTemplateInfo200ApplicationJson.prototype, "addColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_columns" }),
        __metadata("design:type", Map)
    ], GetCssTemplateInfo200ApplicationJson.prototype, "editColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", GetCssTemplateInfo200ApplicationJsonFilters)
    ], GetCssTemplateInfo200ApplicationJson.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], GetCssTemplateInfo200ApplicationJson.prototype, "permissions", void 0);
    return GetCssTemplateInfo200ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplateInfo200ApplicationJson };
var GetCssTemplateInfo400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplateInfo400ApplicationJson, _super);
    function GetCssTemplateInfo400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplateInfo400ApplicationJson.prototype, "message", void 0);
    return GetCssTemplateInfo400ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplateInfo400ApplicationJson };
var GetCssTemplateInfo401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplateInfo401ApplicationJson, _super);
    function GetCssTemplateInfo401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplateInfo401ApplicationJson.prototype, "message", void 0);
    return GetCssTemplateInfo401ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplateInfo401ApplicationJson };
var GetCssTemplateInfo422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplateInfo422ApplicationJson, _super);
    function GetCssTemplateInfo422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplateInfo422ApplicationJson.prototype, "message", void 0);
    return GetCssTemplateInfo422ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplateInfo422ApplicationJson };
var GetCssTemplateInfo500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplateInfo500ApplicationJson, _super);
    function GetCssTemplateInfo500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplateInfo500ApplicationJson.prototype, "message", void 0);
    return GetCssTemplateInfo500ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplateInfo500ApplicationJson };
var GetCssTemplateInfoRequest = /** @class */ (function (_super) {
    __extends(GetCssTemplateInfoRequest, _super);
    function GetCssTemplateInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateInfoQueryParams)
    ], GetCssTemplateInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateInfoSecurity)
    ], GetCssTemplateInfoRequest.prototype, "security", void 0);
    return GetCssTemplateInfoRequest;
}(SpeakeasyBase));
export { GetCssTemplateInfoRequest };
var GetCssTemplateInfoResponse = /** @class */ (function (_super) {
    __extends(GetCssTemplateInfoResponse, _super);
    function GetCssTemplateInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCssTemplateInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateInfo200ApplicationJson)
    ], GetCssTemplateInfoResponse.prototype, "getCssTemplateInfo200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateInfo400ApplicationJson)
    ], GetCssTemplateInfoResponse.prototype, "getCssTemplateInfo400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateInfo401ApplicationJson)
    ], GetCssTemplateInfoResponse.prototype, "getCssTemplateInfo401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateInfo422ApplicationJson)
    ], GetCssTemplateInfoResponse.prototype, "getCssTemplateInfo422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateInfo500ApplicationJson)
    ], GetCssTemplateInfoResponse.prototype, "getCssTemplateInfo500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCssTemplateInfoResponse.prototype, "statusCode", void 0);
    return GetCssTemplateInfoResponse;
}(SpeakeasyBase));
export { GetCssTemplateInfoResponse };
