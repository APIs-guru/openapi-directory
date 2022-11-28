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
var GetDatabaseInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetDatabaseInfoQueryParams, _super);
    function GetDatabaseInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetInfoSchema)
    ], GetDatabaseInfoQueryParams.prototype, "q", void 0);
    return GetDatabaseInfoQueryParams;
}(SpeakeasyBase));
export { GetDatabaseInfoQueryParams };
var GetDatabaseInfoSecurity = /** @class */ (function (_super) {
    __extends(GetDatabaseInfoSecurity, _super);
    function GetDatabaseInfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatabaseInfoSecurity.prototype, "jwt", void 0);
    return GetDatabaseInfoSecurity;
}(SpeakeasyBase));
export { GetDatabaseInfoSecurity };
var GetDatabaseInfo200ApplicationJsonFiltersColumnName = /** @class */ (function (_super) {
    __extends(GetDatabaseInfo200ApplicationJsonFiltersColumnName, _super);
    function GetDatabaseInfo200ApplicationJsonFiltersColumnName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDatabaseInfo200ApplicationJsonFiltersColumnName.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], GetDatabaseInfo200ApplicationJsonFiltersColumnName.prototype, "operator", void 0);
    return GetDatabaseInfo200ApplicationJsonFiltersColumnName;
}(SpeakeasyBase));
export { GetDatabaseInfo200ApplicationJsonFiltersColumnName };
var GetDatabaseInfo200ApplicationJsonFilters = /** @class */ (function (_super) {
    __extends(GetDatabaseInfo200ApplicationJsonFilters, _super);
    function GetDatabaseInfo200ApplicationJsonFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetDatabaseInfo200ApplicationJsonFiltersColumnName }),
        __metadata("design:type", Array)
    ], GetDatabaseInfo200ApplicationJsonFilters.prototype, "columnName", void 0);
    return GetDatabaseInfo200ApplicationJsonFilters;
}(SpeakeasyBase));
export { GetDatabaseInfo200ApplicationJsonFilters };
var GetDatabaseInfo200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabaseInfo200ApplicationJson, _super);
    function GetDatabaseInfo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_columns" }),
        __metadata("design:type", Map)
    ], GetDatabaseInfo200ApplicationJson.prototype, "addColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_columns" }),
        __metadata("design:type", Map)
    ], GetDatabaseInfo200ApplicationJson.prototype, "editColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", GetDatabaseInfo200ApplicationJsonFilters)
    ], GetDatabaseInfo200ApplicationJson.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], GetDatabaseInfo200ApplicationJson.prototype, "permissions", void 0);
    return GetDatabaseInfo200ApplicationJson;
}(SpeakeasyBase));
export { GetDatabaseInfo200ApplicationJson };
var GetDatabaseInfo400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabaseInfo400ApplicationJson, _super);
    function GetDatabaseInfo400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabaseInfo400ApplicationJson.prototype, "message", void 0);
    return GetDatabaseInfo400ApplicationJson;
}(SpeakeasyBase));
export { GetDatabaseInfo400ApplicationJson };
var GetDatabaseInfo401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabaseInfo401ApplicationJson, _super);
    function GetDatabaseInfo401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabaseInfo401ApplicationJson.prototype, "message", void 0);
    return GetDatabaseInfo401ApplicationJson;
}(SpeakeasyBase));
export { GetDatabaseInfo401ApplicationJson };
var GetDatabaseInfo422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabaseInfo422ApplicationJson, _super);
    function GetDatabaseInfo422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabaseInfo422ApplicationJson.prototype, "message", void 0);
    return GetDatabaseInfo422ApplicationJson;
}(SpeakeasyBase));
export { GetDatabaseInfo422ApplicationJson };
var GetDatabaseInfo500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabaseInfo500ApplicationJson, _super);
    function GetDatabaseInfo500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabaseInfo500ApplicationJson.prototype, "message", void 0);
    return GetDatabaseInfo500ApplicationJson;
}(SpeakeasyBase));
export { GetDatabaseInfo500ApplicationJson };
var GetDatabaseInfoRequest = /** @class */ (function (_super) {
    __extends(GetDatabaseInfoRequest, _super);
    function GetDatabaseInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseInfoQueryParams)
    ], GetDatabaseInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseInfoSecurity)
    ], GetDatabaseInfoRequest.prototype, "security", void 0);
    return GetDatabaseInfoRequest;
}(SpeakeasyBase));
export { GetDatabaseInfoRequest };
var GetDatabaseInfoResponse = /** @class */ (function (_super) {
    __extends(GetDatabaseInfoResponse, _super);
    function GetDatabaseInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatabaseInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseInfo200ApplicationJson)
    ], GetDatabaseInfoResponse.prototype, "getDatabaseInfo200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseInfo400ApplicationJson)
    ], GetDatabaseInfoResponse.prototype, "getDatabaseInfo400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseInfo401ApplicationJson)
    ], GetDatabaseInfoResponse.prototype, "getDatabaseInfo401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseInfo422ApplicationJson)
    ], GetDatabaseInfoResponse.prototype, "getDatabaseInfo422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseInfo500ApplicationJson)
    ], GetDatabaseInfoResponse.prototype, "getDatabaseInfo500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatabaseInfoResponse.prototype, "statusCode", void 0);
    return GetDatabaseInfoResponse;
}(SpeakeasyBase));
export { GetDatabaseInfoResponse };
