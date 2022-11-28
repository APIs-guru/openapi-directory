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
var GetDatasetInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetDatasetInfoQueryParams, _super);
    function GetDatasetInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetInfoSchema)
    ], GetDatasetInfoQueryParams.prototype, "q", void 0);
    return GetDatasetInfoQueryParams;
}(SpeakeasyBase));
export { GetDatasetInfoQueryParams };
var GetDatasetInfoSecurity = /** @class */ (function (_super) {
    __extends(GetDatasetInfoSecurity, _super);
    function GetDatasetInfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatasetInfoSecurity.prototype, "jwt", void 0);
    return GetDatasetInfoSecurity;
}(SpeakeasyBase));
export { GetDatasetInfoSecurity };
var GetDatasetInfo200ApplicationJsonFiltersColumnName = /** @class */ (function (_super) {
    __extends(GetDatasetInfo200ApplicationJsonFiltersColumnName, _super);
    function GetDatasetInfo200ApplicationJsonFiltersColumnName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDatasetInfo200ApplicationJsonFiltersColumnName.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], GetDatasetInfo200ApplicationJsonFiltersColumnName.prototype, "operator", void 0);
    return GetDatasetInfo200ApplicationJsonFiltersColumnName;
}(SpeakeasyBase));
export { GetDatasetInfo200ApplicationJsonFiltersColumnName };
var GetDatasetInfo200ApplicationJsonFilters = /** @class */ (function (_super) {
    __extends(GetDatasetInfo200ApplicationJsonFilters, _super);
    function GetDatasetInfo200ApplicationJsonFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetDatasetInfo200ApplicationJsonFiltersColumnName }),
        __metadata("design:type", Array)
    ], GetDatasetInfo200ApplicationJsonFilters.prototype, "columnName", void 0);
    return GetDatasetInfo200ApplicationJsonFilters;
}(SpeakeasyBase));
export { GetDatasetInfo200ApplicationJsonFilters };
var GetDatasetInfo200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetInfo200ApplicationJson, _super);
    function GetDatasetInfo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_columns" }),
        __metadata("design:type", Map)
    ], GetDatasetInfo200ApplicationJson.prototype, "addColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_columns" }),
        __metadata("design:type", Map)
    ], GetDatasetInfo200ApplicationJson.prototype, "editColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", GetDatasetInfo200ApplicationJsonFilters)
    ], GetDatasetInfo200ApplicationJson.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], GetDatasetInfo200ApplicationJson.prototype, "permissions", void 0);
    return GetDatasetInfo200ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetInfo200ApplicationJson };
var GetDatasetInfo400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetInfo400ApplicationJson, _super);
    function GetDatasetInfo400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetInfo400ApplicationJson.prototype, "message", void 0);
    return GetDatasetInfo400ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetInfo400ApplicationJson };
var GetDatasetInfo401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetInfo401ApplicationJson, _super);
    function GetDatasetInfo401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetInfo401ApplicationJson.prototype, "message", void 0);
    return GetDatasetInfo401ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetInfo401ApplicationJson };
var GetDatasetInfo422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetInfo422ApplicationJson, _super);
    function GetDatasetInfo422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetInfo422ApplicationJson.prototype, "message", void 0);
    return GetDatasetInfo422ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetInfo422ApplicationJson };
var GetDatasetInfo500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetInfo500ApplicationJson, _super);
    function GetDatasetInfo500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetInfo500ApplicationJson.prototype, "message", void 0);
    return GetDatasetInfo500ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetInfo500ApplicationJson };
var GetDatasetInfoRequest = /** @class */ (function (_super) {
    __extends(GetDatasetInfoRequest, _super);
    function GetDatasetInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetInfoQueryParams)
    ], GetDatasetInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetInfoSecurity)
    ], GetDatasetInfoRequest.prototype, "security", void 0);
    return GetDatasetInfoRequest;
}(SpeakeasyBase));
export { GetDatasetInfoRequest };
var GetDatasetInfoResponse = /** @class */ (function (_super) {
    __extends(GetDatasetInfoResponse, _super);
    function GetDatasetInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatasetInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetInfo200ApplicationJson)
    ], GetDatasetInfoResponse.prototype, "getDatasetInfo200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetInfo400ApplicationJson)
    ], GetDatasetInfoResponse.prototype, "getDatasetInfo400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetInfo401ApplicationJson)
    ], GetDatasetInfoResponse.prototype, "getDatasetInfo401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetInfo422ApplicationJson)
    ], GetDatasetInfoResponse.prototype, "getDatasetInfo422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetInfo500ApplicationJson)
    ], GetDatasetInfoResponse.prototype, "getDatasetInfo500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatasetInfoResponse.prototype, "statusCode", void 0);
    return GetDatasetInfoResponse;
}(SpeakeasyBase));
export { GetDatasetInfoResponse };
