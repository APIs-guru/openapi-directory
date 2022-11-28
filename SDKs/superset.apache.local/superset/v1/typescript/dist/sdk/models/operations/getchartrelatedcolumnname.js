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
var GetChartRelatedColumnNamePathParams = /** @class */ (function (_super) {
    __extends(GetChartRelatedColumnNamePathParams, _super);
    function GetChartRelatedColumnNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" }),
        __metadata("design:type", String)
    ], GetChartRelatedColumnNamePathParams.prototype, "columnName", void 0);
    return GetChartRelatedColumnNamePathParams;
}(SpeakeasyBase));
export { GetChartRelatedColumnNamePathParams };
var GetChartRelatedColumnNameQueryParams = /** @class */ (function (_super) {
    __extends(GetChartRelatedColumnNameQueryParams, _super);
    function GetChartRelatedColumnNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetRelatedSchema)
    ], GetChartRelatedColumnNameQueryParams.prototype, "q", void 0);
    return GetChartRelatedColumnNameQueryParams;
}(SpeakeasyBase));
export { GetChartRelatedColumnNameQueryParams };
var GetChartRelatedColumnNameSecurity = /** @class */ (function (_super) {
    __extends(GetChartRelatedColumnNameSecurity, _super);
    function GetChartRelatedColumnNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetChartRelatedColumnNameSecurity.prototype, "jwt", void 0);
    return GetChartRelatedColumnNameSecurity;
}(SpeakeasyBase));
export { GetChartRelatedColumnNameSecurity };
var GetChartRelatedColumnName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartRelatedColumnName400ApplicationJson, _super);
    function GetChartRelatedColumnName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartRelatedColumnName400ApplicationJson.prototype, "message", void 0);
    return GetChartRelatedColumnName400ApplicationJson;
}(SpeakeasyBase));
export { GetChartRelatedColumnName400ApplicationJson };
var GetChartRelatedColumnName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartRelatedColumnName401ApplicationJson, _super);
    function GetChartRelatedColumnName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartRelatedColumnName401ApplicationJson.prototype, "message", void 0);
    return GetChartRelatedColumnName401ApplicationJson;
}(SpeakeasyBase));
export { GetChartRelatedColumnName401ApplicationJson };
var GetChartRelatedColumnName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartRelatedColumnName404ApplicationJson, _super);
    function GetChartRelatedColumnName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartRelatedColumnName404ApplicationJson.prototype, "message", void 0);
    return GetChartRelatedColumnName404ApplicationJson;
}(SpeakeasyBase));
export { GetChartRelatedColumnName404ApplicationJson };
var GetChartRelatedColumnName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartRelatedColumnName500ApplicationJson, _super);
    function GetChartRelatedColumnName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartRelatedColumnName500ApplicationJson.prototype, "message", void 0);
    return GetChartRelatedColumnName500ApplicationJson;
}(SpeakeasyBase));
export { GetChartRelatedColumnName500ApplicationJson };
var GetChartRelatedColumnNameRequest = /** @class */ (function (_super) {
    __extends(GetChartRelatedColumnNameRequest, _super);
    function GetChartRelatedColumnNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartRelatedColumnNamePathParams)
    ], GetChartRelatedColumnNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartRelatedColumnNameQueryParams)
    ], GetChartRelatedColumnNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartRelatedColumnNameSecurity)
    ], GetChartRelatedColumnNameRequest.prototype, "security", void 0);
    return GetChartRelatedColumnNameRequest;
}(SpeakeasyBase));
export { GetChartRelatedColumnNameRequest };
var GetChartRelatedColumnNameResponse = /** @class */ (function (_super) {
    __extends(GetChartRelatedColumnNameResponse, _super);
    function GetChartRelatedColumnNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChartRelatedColumnNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartRelatedColumnName400ApplicationJson)
    ], GetChartRelatedColumnNameResponse.prototype, "getChartRelatedColumnName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartRelatedColumnName401ApplicationJson)
    ], GetChartRelatedColumnNameResponse.prototype, "getChartRelatedColumnName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartRelatedColumnName404ApplicationJson)
    ], GetChartRelatedColumnNameResponse.prototype, "getChartRelatedColumnName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartRelatedColumnName500ApplicationJson)
    ], GetChartRelatedColumnNameResponse.prototype, "getChartRelatedColumnName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RelatedResponseSchema)
    ], GetChartRelatedColumnNameResponse.prototype, "relatedResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChartRelatedColumnNameResponse.prototype, "statusCode", void 0);
    return GetChartRelatedColumnNameResponse;
}(SpeakeasyBase));
export { GetChartRelatedColumnNameResponse };
