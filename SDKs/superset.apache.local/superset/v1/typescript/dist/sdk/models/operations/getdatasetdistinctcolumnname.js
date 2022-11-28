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
var GetDatasetDistinctColumnNamePathParams = /** @class */ (function (_super) {
    __extends(GetDatasetDistinctColumnNamePathParams, _super);
    function GetDatasetDistinctColumnNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" }),
        __metadata("design:type", String)
    ], GetDatasetDistinctColumnNamePathParams.prototype, "columnName", void 0);
    return GetDatasetDistinctColumnNamePathParams;
}(SpeakeasyBase));
export { GetDatasetDistinctColumnNamePathParams };
var GetDatasetDistinctColumnNameQueryParams = /** @class */ (function (_super) {
    __extends(GetDatasetDistinctColumnNameQueryParams, _super);
    function GetDatasetDistinctColumnNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetRelatedSchema)
    ], GetDatasetDistinctColumnNameQueryParams.prototype, "q", void 0);
    return GetDatasetDistinctColumnNameQueryParams;
}(SpeakeasyBase));
export { GetDatasetDistinctColumnNameQueryParams };
var GetDatasetDistinctColumnNameSecurity = /** @class */ (function (_super) {
    __extends(GetDatasetDistinctColumnNameSecurity, _super);
    function GetDatasetDistinctColumnNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatasetDistinctColumnNameSecurity.prototype, "jwt", void 0);
    return GetDatasetDistinctColumnNameSecurity;
}(SpeakeasyBase));
export { GetDatasetDistinctColumnNameSecurity };
var GetDatasetDistinctColumnName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetDistinctColumnName400ApplicationJson, _super);
    function GetDatasetDistinctColumnName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetDistinctColumnName400ApplicationJson.prototype, "message", void 0);
    return GetDatasetDistinctColumnName400ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetDistinctColumnName400ApplicationJson };
var GetDatasetDistinctColumnName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetDistinctColumnName401ApplicationJson, _super);
    function GetDatasetDistinctColumnName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetDistinctColumnName401ApplicationJson.prototype, "message", void 0);
    return GetDatasetDistinctColumnName401ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetDistinctColumnName401ApplicationJson };
var GetDatasetDistinctColumnName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetDistinctColumnName404ApplicationJson, _super);
    function GetDatasetDistinctColumnName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetDistinctColumnName404ApplicationJson.prototype, "message", void 0);
    return GetDatasetDistinctColumnName404ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetDistinctColumnName404ApplicationJson };
var GetDatasetDistinctColumnName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetDistinctColumnName500ApplicationJson, _super);
    function GetDatasetDistinctColumnName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetDistinctColumnName500ApplicationJson.prototype, "message", void 0);
    return GetDatasetDistinctColumnName500ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetDistinctColumnName500ApplicationJson };
var GetDatasetDistinctColumnNameRequest = /** @class */ (function (_super) {
    __extends(GetDatasetDistinctColumnNameRequest, _super);
    function GetDatasetDistinctColumnNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetDistinctColumnNamePathParams)
    ], GetDatasetDistinctColumnNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetDistinctColumnNameQueryParams)
    ], GetDatasetDistinctColumnNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetDistinctColumnNameSecurity)
    ], GetDatasetDistinctColumnNameRequest.prototype, "security", void 0);
    return GetDatasetDistinctColumnNameRequest;
}(SpeakeasyBase));
export { GetDatasetDistinctColumnNameRequest };
var GetDatasetDistinctColumnNameResponse = /** @class */ (function (_super) {
    __extends(GetDatasetDistinctColumnNameResponse, _super);
    function GetDatasetDistinctColumnNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatasetDistinctColumnNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DistincResponseSchema)
    ], GetDatasetDistinctColumnNameResponse.prototype, "distincResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetDistinctColumnName400ApplicationJson)
    ], GetDatasetDistinctColumnNameResponse.prototype, "getDatasetDistinctColumnName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetDistinctColumnName401ApplicationJson)
    ], GetDatasetDistinctColumnNameResponse.prototype, "getDatasetDistinctColumnName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetDistinctColumnName404ApplicationJson)
    ], GetDatasetDistinctColumnNameResponse.prototype, "getDatasetDistinctColumnName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetDistinctColumnName500ApplicationJson)
    ], GetDatasetDistinctColumnNameResponse.prototype, "getDatasetDistinctColumnName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatasetDistinctColumnNameResponse.prototype, "statusCode", void 0);
    return GetDatasetDistinctColumnNameResponse;
}(SpeakeasyBase));
export { GetDatasetDistinctColumnNameResponse };
