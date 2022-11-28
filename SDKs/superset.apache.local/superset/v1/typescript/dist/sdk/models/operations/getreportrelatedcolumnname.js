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
var GetReportRelatedColumnNamePathParams = /** @class */ (function (_super) {
    __extends(GetReportRelatedColumnNamePathParams, _super);
    function GetReportRelatedColumnNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" }),
        __metadata("design:type", String)
    ], GetReportRelatedColumnNamePathParams.prototype, "columnName", void 0);
    return GetReportRelatedColumnNamePathParams;
}(SpeakeasyBase));
export { GetReportRelatedColumnNamePathParams };
var GetReportRelatedColumnNameQueryParams = /** @class */ (function (_super) {
    __extends(GetReportRelatedColumnNameQueryParams, _super);
    function GetReportRelatedColumnNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetRelatedSchema)
    ], GetReportRelatedColumnNameQueryParams.prototype, "q", void 0);
    return GetReportRelatedColumnNameQueryParams;
}(SpeakeasyBase));
export { GetReportRelatedColumnNameQueryParams };
var GetReportRelatedColumnNameSecurity = /** @class */ (function (_super) {
    __extends(GetReportRelatedColumnNameSecurity, _super);
    function GetReportRelatedColumnNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetReportRelatedColumnNameSecurity.prototype, "jwt", void 0);
    return GetReportRelatedColumnNameSecurity;
}(SpeakeasyBase));
export { GetReportRelatedColumnNameSecurity };
var GetReportRelatedColumnName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportRelatedColumnName400ApplicationJson, _super);
    function GetReportRelatedColumnName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportRelatedColumnName400ApplicationJson.prototype, "message", void 0);
    return GetReportRelatedColumnName400ApplicationJson;
}(SpeakeasyBase));
export { GetReportRelatedColumnName400ApplicationJson };
var GetReportRelatedColumnName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportRelatedColumnName401ApplicationJson, _super);
    function GetReportRelatedColumnName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportRelatedColumnName401ApplicationJson.prototype, "message", void 0);
    return GetReportRelatedColumnName401ApplicationJson;
}(SpeakeasyBase));
export { GetReportRelatedColumnName401ApplicationJson };
var GetReportRelatedColumnName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportRelatedColumnName404ApplicationJson, _super);
    function GetReportRelatedColumnName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportRelatedColumnName404ApplicationJson.prototype, "message", void 0);
    return GetReportRelatedColumnName404ApplicationJson;
}(SpeakeasyBase));
export { GetReportRelatedColumnName404ApplicationJson };
var GetReportRelatedColumnName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportRelatedColumnName500ApplicationJson, _super);
    function GetReportRelatedColumnName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportRelatedColumnName500ApplicationJson.prototype, "message", void 0);
    return GetReportRelatedColumnName500ApplicationJson;
}(SpeakeasyBase));
export { GetReportRelatedColumnName500ApplicationJson };
var GetReportRelatedColumnNameRequest = /** @class */ (function (_super) {
    __extends(GetReportRelatedColumnNameRequest, _super);
    function GetReportRelatedColumnNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportRelatedColumnNamePathParams)
    ], GetReportRelatedColumnNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportRelatedColumnNameQueryParams)
    ], GetReportRelatedColumnNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportRelatedColumnNameSecurity)
    ], GetReportRelatedColumnNameRequest.prototype, "security", void 0);
    return GetReportRelatedColumnNameRequest;
}(SpeakeasyBase));
export { GetReportRelatedColumnNameRequest };
var GetReportRelatedColumnNameResponse = /** @class */ (function (_super) {
    __extends(GetReportRelatedColumnNameResponse, _super);
    function GetReportRelatedColumnNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReportRelatedColumnNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportRelatedColumnName400ApplicationJson)
    ], GetReportRelatedColumnNameResponse.prototype, "getReportRelatedColumnName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportRelatedColumnName401ApplicationJson)
    ], GetReportRelatedColumnNameResponse.prototype, "getReportRelatedColumnName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportRelatedColumnName404ApplicationJson)
    ], GetReportRelatedColumnNameResponse.prototype, "getReportRelatedColumnName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportRelatedColumnName500ApplicationJson)
    ], GetReportRelatedColumnNameResponse.prototype, "getReportRelatedColumnName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RelatedResponseSchema)
    ], GetReportRelatedColumnNameResponse.prototype, "relatedResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReportRelatedColumnNameResponse.prototype, "statusCode", void 0);
    return GetReportRelatedColumnNameResponse;
}(SpeakeasyBase));
export { GetReportRelatedColumnNameResponse };
