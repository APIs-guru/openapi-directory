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
var GetQueryRelatedColumnNamePathParams = /** @class */ (function (_super) {
    __extends(GetQueryRelatedColumnNamePathParams, _super);
    function GetQueryRelatedColumnNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" }),
        __metadata("design:type", String)
    ], GetQueryRelatedColumnNamePathParams.prototype, "columnName", void 0);
    return GetQueryRelatedColumnNamePathParams;
}(SpeakeasyBase));
export { GetQueryRelatedColumnNamePathParams };
var GetQueryRelatedColumnNameQueryParams = /** @class */ (function (_super) {
    __extends(GetQueryRelatedColumnNameQueryParams, _super);
    function GetQueryRelatedColumnNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetRelatedSchema)
    ], GetQueryRelatedColumnNameQueryParams.prototype, "q", void 0);
    return GetQueryRelatedColumnNameQueryParams;
}(SpeakeasyBase));
export { GetQueryRelatedColumnNameQueryParams };
var GetQueryRelatedColumnNameSecurity = /** @class */ (function (_super) {
    __extends(GetQueryRelatedColumnNameSecurity, _super);
    function GetQueryRelatedColumnNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetQueryRelatedColumnNameSecurity.prototype, "jwt", void 0);
    return GetQueryRelatedColumnNameSecurity;
}(SpeakeasyBase));
export { GetQueryRelatedColumnNameSecurity };
var GetQueryRelatedColumnName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryRelatedColumnName400ApplicationJson, _super);
    function GetQueryRelatedColumnName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQueryRelatedColumnName400ApplicationJson.prototype, "message", void 0);
    return GetQueryRelatedColumnName400ApplicationJson;
}(SpeakeasyBase));
export { GetQueryRelatedColumnName400ApplicationJson };
var GetQueryRelatedColumnName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryRelatedColumnName401ApplicationJson, _super);
    function GetQueryRelatedColumnName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQueryRelatedColumnName401ApplicationJson.prototype, "message", void 0);
    return GetQueryRelatedColumnName401ApplicationJson;
}(SpeakeasyBase));
export { GetQueryRelatedColumnName401ApplicationJson };
var GetQueryRelatedColumnName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryRelatedColumnName404ApplicationJson, _super);
    function GetQueryRelatedColumnName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQueryRelatedColumnName404ApplicationJson.prototype, "message", void 0);
    return GetQueryRelatedColumnName404ApplicationJson;
}(SpeakeasyBase));
export { GetQueryRelatedColumnName404ApplicationJson };
var GetQueryRelatedColumnName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryRelatedColumnName500ApplicationJson, _super);
    function GetQueryRelatedColumnName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQueryRelatedColumnName500ApplicationJson.prototype, "message", void 0);
    return GetQueryRelatedColumnName500ApplicationJson;
}(SpeakeasyBase));
export { GetQueryRelatedColumnName500ApplicationJson };
var GetQueryRelatedColumnNameRequest = /** @class */ (function (_super) {
    __extends(GetQueryRelatedColumnNameRequest, _super);
    function GetQueryRelatedColumnNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryRelatedColumnNamePathParams)
    ], GetQueryRelatedColumnNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryRelatedColumnNameQueryParams)
    ], GetQueryRelatedColumnNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryRelatedColumnNameSecurity)
    ], GetQueryRelatedColumnNameRequest.prototype, "security", void 0);
    return GetQueryRelatedColumnNameRequest;
}(SpeakeasyBase));
export { GetQueryRelatedColumnNameRequest };
var GetQueryRelatedColumnNameResponse = /** @class */ (function (_super) {
    __extends(GetQueryRelatedColumnNameResponse, _super);
    function GetQueryRelatedColumnNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQueryRelatedColumnNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryRelatedColumnName400ApplicationJson)
    ], GetQueryRelatedColumnNameResponse.prototype, "getQueryRelatedColumnName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryRelatedColumnName401ApplicationJson)
    ], GetQueryRelatedColumnNameResponse.prototype, "getQueryRelatedColumnName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryRelatedColumnName404ApplicationJson)
    ], GetQueryRelatedColumnNameResponse.prototype, "getQueryRelatedColumnName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryRelatedColumnName500ApplicationJson)
    ], GetQueryRelatedColumnNameResponse.prototype, "getQueryRelatedColumnName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RelatedResponseSchema)
    ], GetQueryRelatedColumnNameResponse.prototype, "relatedResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQueryRelatedColumnNameResponse.prototype, "statusCode", void 0);
    return GetQueryRelatedColumnNameResponse;
}(SpeakeasyBase));
export { GetQueryRelatedColumnNameResponse };
