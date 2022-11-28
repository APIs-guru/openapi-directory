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
var GetDashboardInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetDashboardInfoQueryParams, _super);
    function GetDashboardInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetInfoSchema)
    ], GetDashboardInfoQueryParams.prototype, "q", void 0);
    return GetDashboardInfoQueryParams;
}(SpeakeasyBase));
export { GetDashboardInfoQueryParams };
var GetDashboardInfoSecurity = /** @class */ (function (_super) {
    __extends(GetDashboardInfoSecurity, _super);
    function GetDashboardInfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDashboardInfoSecurity.prototype, "jwt", void 0);
    return GetDashboardInfoSecurity;
}(SpeakeasyBase));
export { GetDashboardInfoSecurity };
var GetDashboardInfo200ApplicationJsonFiltersColumnName = /** @class */ (function (_super) {
    __extends(GetDashboardInfo200ApplicationJsonFiltersColumnName, _super);
    function GetDashboardInfo200ApplicationJsonFiltersColumnName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDashboardInfo200ApplicationJsonFiltersColumnName.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], GetDashboardInfo200ApplicationJsonFiltersColumnName.prototype, "operator", void 0);
    return GetDashboardInfo200ApplicationJsonFiltersColumnName;
}(SpeakeasyBase));
export { GetDashboardInfo200ApplicationJsonFiltersColumnName };
var GetDashboardInfo200ApplicationJsonFilters = /** @class */ (function (_super) {
    __extends(GetDashboardInfo200ApplicationJsonFilters, _super);
    function GetDashboardInfo200ApplicationJsonFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetDashboardInfo200ApplicationJsonFiltersColumnName }),
        __metadata("design:type", Array)
    ], GetDashboardInfo200ApplicationJsonFilters.prototype, "columnName", void 0);
    return GetDashboardInfo200ApplicationJsonFilters;
}(SpeakeasyBase));
export { GetDashboardInfo200ApplicationJsonFilters };
var GetDashboardInfo200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardInfo200ApplicationJson, _super);
    function GetDashboardInfo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_columns" }),
        __metadata("design:type", Map)
    ], GetDashboardInfo200ApplicationJson.prototype, "addColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_columns" }),
        __metadata("design:type", Map)
    ], GetDashboardInfo200ApplicationJson.prototype, "editColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", GetDashboardInfo200ApplicationJsonFilters)
    ], GetDashboardInfo200ApplicationJson.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], GetDashboardInfo200ApplicationJson.prototype, "permissions", void 0);
    return GetDashboardInfo200ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardInfo200ApplicationJson };
var GetDashboardInfo400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardInfo400ApplicationJson, _super);
    function GetDashboardInfo400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardInfo400ApplicationJson.prototype, "message", void 0);
    return GetDashboardInfo400ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardInfo400ApplicationJson };
var GetDashboardInfo401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardInfo401ApplicationJson, _super);
    function GetDashboardInfo401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardInfo401ApplicationJson.prototype, "message", void 0);
    return GetDashboardInfo401ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardInfo401ApplicationJson };
var GetDashboardInfo422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardInfo422ApplicationJson, _super);
    function GetDashboardInfo422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardInfo422ApplicationJson.prototype, "message", void 0);
    return GetDashboardInfo422ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardInfo422ApplicationJson };
var GetDashboardInfo500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardInfo500ApplicationJson, _super);
    function GetDashboardInfo500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardInfo500ApplicationJson.prototype, "message", void 0);
    return GetDashboardInfo500ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardInfo500ApplicationJson };
var GetDashboardInfoRequest = /** @class */ (function (_super) {
    __extends(GetDashboardInfoRequest, _super);
    function GetDashboardInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardInfoQueryParams)
    ], GetDashboardInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardInfoSecurity)
    ], GetDashboardInfoRequest.prototype, "security", void 0);
    return GetDashboardInfoRequest;
}(SpeakeasyBase));
export { GetDashboardInfoRequest };
var GetDashboardInfoResponse = /** @class */ (function (_super) {
    __extends(GetDashboardInfoResponse, _super);
    function GetDashboardInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDashboardInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardInfo200ApplicationJson)
    ], GetDashboardInfoResponse.prototype, "getDashboardInfo200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardInfo400ApplicationJson)
    ], GetDashboardInfoResponse.prototype, "getDashboardInfo400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardInfo401ApplicationJson)
    ], GetDashboardInfoResponse.prototype, "getDashboardInfo401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardInfo422ApplicationJson)
    ], GetDashboardInfoResponse.prototype, "getDashboardInfo422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardInfo500ApplicationJson)
    ], GetDashboardInfoResponse.prototype, "getDashboardInfo500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDashboardInfoResponse.prototype, "statusCode", void 0);
    return GetDashboardInfoResponse;
}(SpeakeasyBase));
export { GetDashboardInfoResponse };
