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
var GetChartInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetChartInfoQueryParams, _super);
    function GetChartInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetInfoSchema)
    ], GetChartInfoQueryParams.prototype, "q", void 0);
    return GetChartInfoQueryParams;
}(SpeakeasyBase));
export { GetChartInfoQueryParams };
var GetChartInfoSecurity = /** @class */ (function (_super) {
    __extends(GetChartInfoSecurity, _super);
    function GetChartInfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetChartInfoSecurity.prototype, "jwt", void 0);
    return GetChartInfoSecurity;
}(SpeakeasyBase));
export { GetChartInfoSecurity };
var GetChartInfo200ApplicationJsonFiltersColumnName = /** @class */ (function (_super) {
    __extends(GetChartInfo200ApplicationJsonFiltersColumnName, _super);
    function GetChartInfo200ApplicationJsonFiltersColumnName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetChartInfo200ApplicationJsonFiltersColumnName.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], GetChartInfo200ApplicationJsonFiltersColumnName.prototype, "operator", void 0);
    return GetChartInfo200ApplicationJsonFiltersColumnName;
}(SpeakeasyBase));
export { GetChartInfo200ApplicationJsonFiltersColumnName };
var GetChartInfo200ApplicationJsonFilters = /** @class */ (function (_super) {
    __extends(GetChartInfo200ApplicationJsonFilters, _super);
    function GetChartInfo200ApplicationJsonFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetChartInfo200ApplicationJsonFiltersColumnName }),
        __metadata("design:type", Array)
    ], GetChartInfo200ApplicationJsonFilters.prototype, "columnName", void 0);
    return GetChartInfo200ApplicationJsonFilters;
}(SpeakeasyBase));
export { GetChartInfo200ApplicationJsonFilters };
var GetChartInfo200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartInfo200ApplicationJson, _super);
    function GetChartInfo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_columns" }),
        __metadata("design:type", Map)
    ], GetChartInfo200ApplicationJson.prototype, "addColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_columns" }),
        __metadata("design:type", Map)
    ], GetChartInfo200ApplicationJson.prototype, "editColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", GetChartInfo200ApplicationJsonFilters)
    ], GetChartInfo200ApplicationJson.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], GetChartInfo200ApplicationJson.prototype, "permissions", void 0);
    return GetChartInfo200ApplicationJson;
}(SpeakeasyBase));
export { GetChartInfo200ApplicationJson };
var GetChartInfo400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartInfo400ApplicationJson, _super);
    function GetChartInfo400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartInfo400ApplicationJson.prototype, "message", void 0);
    return GetChartInfo400ApplicationJson;
}(SpeakeasyBase));
export { GetChartInfo400ApplicationJson };
var GetChartInfo401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartInfo401ApplicationJson, _super);
    function GetChartInfo401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartInfo401ApplicationJson.prototype, "message", void 0);
    return GetChartInfo401ApplicationJson;
}(SpeakeasyBase));
export { GetChartInfo401ApplicationJson };
var GetChartInfo422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartInfo422ApplicationJson, _super);
    function GetChartInfo422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartInfo422ApplicationJson.prototype, "message", void 0);
    return GetChartInfo422ApplicationJson;
}(SpeakeasyBase));
export { GetChartInfo422ApplicationJson };
var GetChartInfo500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartInfo500ApplicationJson, _super);
    function GetChartInfo500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartInfo500ApplicationJson.prototype, "message", void 0);
    return GetChartInfo500ApplicationJson;
}(SpeakeasyBase));
export { GetChartInfo500ApplicationJson };
var GetChartInfoRequest = /** @class */ (function (_super) {
    __extends(GetChartInfoRequest, _super);
    function GetChartInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartInfoQueryParams)
    ], GetChartInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartInfoSecurity)
    ], GetChartInfoRequest.prototype, "security", void 0);
    return GetChartInfoRequest;
}(SpeakeasyBase));
export { GetChartInfoRequest };
var GetChartInfoResponse = /** @class */ (function (_super) {
    __extends(GetChartInfoResponse, _super);
    function GetChartInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChartInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartInfo200ApplicationJson)
    ], GetChartInfoResponse.prototype, "getChartInfo200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartInfo400ApplicationJson)
    ], GetChartInfoResponse.prototype, "getChartInfo400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartInfo401ApplicationJson)
    ], GetChartInfoResponse.prototype, "getChartInfo401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartInfo422ApplicationJson)
    ], GetChartInfoResponse.prototype, "getChartInfo422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartInfo500ApplicationJson)
    ], GetChartInfoResponse.prototype, "getChartInfo500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChartInfoResponse.prototype, "statusCode", void 0);
    return GetChartInfoResponse;
}(SpeakeasyBase));
export { GetChartInfoResponse };
