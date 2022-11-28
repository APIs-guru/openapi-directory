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
var GetSavedQueryInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetSavedQueryInfoQueryParams, _super);
    function GetSavedQueryInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetInfoSchema)
    ], GetSavedQueryInfoQueryParams.prototype, "q", void 0);
    return GetSavedQueryInfoQueryParams;
}(SpeakeasyBase));
export { GetSavedQueryInfoQueryParams };
var GetSavedQueryInfoSecurity = /** @class */ (function (_super) {
    __extends(GetSavedQueryInfoSecurity, _super);
    function GetSavedQueryInfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetSavedQueryInfoSecurity.prototype, "jwt", void 0);
    return GetSavedQueryInfoSecurity;
}(SpeakeasyBase));
export { GetSavedQueryInfoSecurity };
var GetSavedQueryInfo200ApplicationJsonFiltersColumnName = /** @class */ (function (_super) {
    __extends(GetSavedQueryInfo200ApplicationJsonFiltersColumnName, _super);
    function GetSavedQueryInfo200ApplicationJsonFiltersColumnName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetSavedQueryInfo200ApplicationJsonFiltersColumnName.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], GetSavedQueryInfo200ApplicationJsonFiltersColumnName.prototype, "operator", void 0);
    return GetSavedQueryInfo200ApplicationJsonFiltersColumnName;
}(SpeakeasyBase));
export { GetSavedQueryInfo200ApplicationJsonFiltersColumnName };
var GetSavedQueryInfo200ApplicationJsonFilters = /** @class */ (function (_super) {
    __extends(GetSavedQueryInfo200ApplicationJsonFilters, _super);
    function GetSavedQueryInfo200ApplicationJsonFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetSavedQueryInfo200ApplicationJsonFiltersColumnName }),
        __metadata("design:type", Array)
    ], GetSavedQueryInfo200ApplicationJsonFilters.prototype, "columnName", void 0);
    return GetSavedQueryInfo200ApplicationJsonFilters;
}(SpeakeasyBase));
export { GetSavedQueryInfo200ApplicationJsonFilters };
var GetSavedQueryInfo200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryInfo200ApplicationJson, _super);
    function GetSavedQueryInfo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_columns" }),
        __metadata("design:type", Map)
    ], GetSavedQueryInfo200ApplicationJson.prototype, "addColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_columns" }),
        __metadata("design:type", Map)
    ], GetSavedQueryInfo200ApplicationJson.prototype, "editColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", GetSavedQueryInfo200ApplicationJsonFilters)
    ], GetSavedQueryInfo200ApplicationJson.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], GetSavedQueryInfo200ApplicationJson.prototype, "permissions", void 0);
    return GetSavedQueryInfo200ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryInfo200ApplicationJson };
var GetSavedQueryInfo400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryInfo400ApplicationJson, _super);
    function GetSavedQueryInfo400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryInfo400ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryInfo400ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryInfo400ApplicationJson };
var GetSavedQueryInfo401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryInfo401ApplicationJson, _super);
    function GetSavedQueryInfo401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryInfo401ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryInfo401ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryInfo401ApplicationJson };
var GetSavedQueryInfo422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryInfo422ApplicationJson, _super);
    function GetSavedQueryInfo422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryInfo422ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryInfo422ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryInfo422ApplicationJson };
var GetSavedQueryInfo500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryInfo500ApplicationJson, _super);
    function GetSavedQueryInfo500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryInfo500ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryInfo500ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryInfo500ApplicationJson };
var GetSavedQueryInfoRequest = /** @class */ (function (_super) {
    __extends(GetSavedQueryInfoRequest, _super);
    function GetSavedQueryInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryInfoQueryParams)
    ], GetSavedQueryInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryInfoSecurity)
    ], GetSavedQueryInfoRequest.prototype, "security", void 0);
    return GetSavedQueryInfoRequest;
}(SpeakeasyBase));
export { GetSavedQueryInfoRequest };
var GetSavedQueryInfoResponse = /** @class */ (function (_super) {
    __extends(GetSavedQueryInfoResponse, _super);
    function GetSavedQueryInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSavedQueryInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryInfo200ApplicationJson)
    ], GetSavedQueryInfoResponse.prototype, "getSavedQueryInfo200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryInfo400ApplicationJson)
    ], GetSavedQueryInfoResponse.prototype, "getSavedQueryInfo400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryInfo401ApplicationJson)
    ], GetSavedQueryInfoResponse.prototype, "getSavedQueryInfo401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryInfo422ApplicationJson)
    ], GetSavedQueryInfoResponse.prototype, "getSavedQueryInfo422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryInfo500ApplicationJson)
    ], GetSavedQueryInfoResponse.prototype, "getSavedQueryInfo500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSavedQueryInfoResponse.prototype, "statusCode", void 0);
    return GetSavedQueryInfoResponse;
}(SpeakeasyBase));
export { GetSavedQueryInfoResponse };
