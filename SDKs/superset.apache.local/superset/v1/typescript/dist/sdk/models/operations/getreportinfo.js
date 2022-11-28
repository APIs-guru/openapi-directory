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
var GetReportInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetReportInfoQueryParams, _super);
    function GetReportInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetInfoSchema)
    ], GetReportInfoQueryParams.prototype, "q", void 0);
    return GetReportInfoQueryParams;
}(SpeakeasyBase));
export { GetReportInfoQueryParams };
var GetReportInfoSecurity = /** @class */ (function (_super) {
    __extends(GetReportInfoSecurity, _super);
    function GetReportInfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetReportInfoSecurity.prototype, "jwt", void 0);
    return GetReportInfoSecurity;
}(SpeakeasyBase));
export { GetReportInfoSecurity };
var GetReportInfo200ApplicationJsonFiltersColumnName = /** @class */ (function (_super) {
    __extends(GetReportInfo200ApplicationJsonFiltersColumnName, _super);
    function GetReportInfo200ApplicationJsonFiltersColumnName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetReportInfo200ApplicationJsonFiltersColumnName.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], GetReportInfo200ApplicationJsonFiltersColumnName.prototype, "operator", void 0);
    return GetReportInfo200ApplicationJsonFiltersColumnName;
}(SpeakeasyBase));
export { GetReportInfo200ApplicationJsonFiltersColumnName };
var GetReportInfo200ApplicationJsonFilters = /** @class */ (function (_super) {
    __extends(GetReportInfo200ApplicationJsonFilters, _super);
    function GetReportInfo200ApplicationJsonFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetReportInfo200ApplicationJsonFiltersColumnName }),
        __metadata("design:type", Array)
    ], GetReportInfo200ApplicationJsonFilters.prototype, "columnName", void 0);
    return GetReportInfo200ApplicationJsonFilters;
}(SpeakeasyBase));
export { GetReportInfo200ApplicationJsonFilters };
var GetReportInfo200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportInfo200ApplicationJson, _super);
    function GetReportInfo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_columns" }),
        __metadata("design:type", Map)
    ], GetReportInfo200ApplicationJson.prototype, "addColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_columns" }),
        __metadata("design:type", Map)
    ], GetReportInfo200ApplicationJson.prototype, "editColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", GetReportInfo200ApplicationJsonFilters)
    ], GetReportInfo200ApplicationJson.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], GetReportInfo200ApplicationJson.prototype, "permissions", void 0);
    return GetReportInfo200ApplicationJson;
}(SpeakeasyBase));
export { GetReportInfo200ApplicationJson };
var GetReportInfo400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportInfo400ApplicationJson, _super);
    function GetReportInfo400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportInfo400ApplicationJson.prototype, "message", void 0);
    return GetReportInfo400ApplicationJson;
}(SpeakeasyBase));
export { GetReportInfo400ApplicationJson };
var GetReportInfo401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportInfo401ApplicationJson, _super);
    function GetReportInfo401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportInfo401ApplicationJson.prototype, "message", void 0);
    return GetReportInfo401ApplicationJson;
}(SpeakeasyBase));
export { GetReportInfo401ApplicationJson };
var GetReportInfo422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportInfo422ApplicationJson, _super);
    function GetReportInfo422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportInfo422ApplicationJson.prototype, "message", void 0);
    return GetReportInfo422ApplicationJson;
}(SpeakeasyBase));
export { GetReportInfo422ApplicationJson };
var GetReportInfo500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportInfo500ApplicationJson, _super);
    function GetReportInfo500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportInfo500ApplicationJson.prototype, "message", void 0);
    return GetReportInfo500ApplicationJson;
}(SpeakeasyBase));
export { GetReportInfo500ApplicationJson };
var GetReportInfoRequest = /** @class */ (function (_super) {
    __extends(GetReportInfoRequest, _super);
    function GetReportInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportInfoQueryParams)
    ], GetReportInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportInfoSecurity)
    ], GetReportInfoRequest.prototype, "security", void 0);
    return GetReportInfoRequest;
}(SpeakeasyBase));
export { GetReportInfoRequest };
var GetReportInfoResponse = /** @class */ (function (_super) {
    __extends(GetReportInfoResponse, _super);
    function GetReportInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReportInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportInfo200ApplicationJson)
    ], GetReportInfoResponse.prototype, "getReportInfo200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportInfo400ApplicationJson)
    ], GetReportInfoResponse.prototype, "getReportInfo400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportInfo401ApplicationJson)
    ], GetReportInfoResponse.prototype, "getReportInfo401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportInfo422ApplicationJson)
    ], GetReportInfoResponse.prototype, "getReportInfo422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportInfo500ApplicationJson)
    ], GetReportInfoResponse.prototype, "getReportInfo500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReportInfoResponse.prototype, "statusCode", void 0);
    return GetReportInfoResponse;
}(SpeakeasyBase));
export { GetReportInfoResponse };
