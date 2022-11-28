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
var GetSavedQueryRelatedColumnNamePathParams = /** @class */ (function (_super) {
    __extends(GetSavedQueryRelatedColumnNamePathParams, _super);
    function GetSavedQueryRelatedColumnNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" }),
        __metadata("design:type", String)
    ], GetSavedQueryRelatedColumnNamePathParams.prototype, "columnName", void 0);
    return GetSavedQueryRelatedColumnNamePathParams;
}(SpeakeasyBase));
export { GetSavedQueryRelatedColumnNamePathParams };
var GetSavedQueryRelatedColumnNameQueryParams = /** @class */ (function (_super) {
    __extends(GetSavedQueryRelatedColumnNameQueryParams, _super);
    function GetSavedQueryRelatedColumnNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetRelatedSchema)
    ], GetSavedQueryRelatedColumnNameQueryParams.prototype, "q", void 0);
    return GetSavedQueryRelatedColumnNameQueryParams;
}(SpeakeasyBase));
export { GetSavedQueryRelatedColumnNameQueryParams };
var GetSavedQueryRelatedColumnNameSecurity = /** @class */ (function (_super) {
    __extends(GetSavedQueryRelatedColumnNameSecurity, _super);
    function GetSavedQueryRelatedColumnNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetSavedQueryRelatedColumnNameSecurity.prototype, "jwt", void 0);
    return GetSavedQueryRelatedColumnNameSecurity;
}(SpeakeasyBase));
export { GetSavedQueryRelatedColumnNameSecurity };
var GetSavedQueryRelatedColumnName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryRelatedColumnName400ApplicationJson, _super);
    function GetSavedQueryRelatedColumnName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryRelatedColumnName400ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryRelatedColumnName400ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryRelatedColumnName400ApplicationJson };
var GetSavedQueryRelatedColumnName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryRelatedColumnName401ApplicationJson, _super);
    function GetSavedQueryRelatedColumnName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryRelatedColumnName401ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryRelatedColumnName401ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryRelatedColumnName401ApplicationJson };
var GetSavedQueryRelatedColumnName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryRelatedColumnName404ApplicationJson, _super);
    function GetSavedQueryRelatedColumnName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryRelatedColumnName404ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryRelatedColumnName404ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryRelatedColumnName404ApplicationJson };
var GetSavedQueryRelatedColumnName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryRelatedColumnName500ApplicationJson, _super);
    function GetSavedQueryRelatedColumnName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryRelatedColumnName500ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryRelatedColumnName500ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryRelatedColumnName500ApplicationJson };
var GetSavedQueryRelatedColumnNameRequest = /** @class */ (function (_super) {
    __extends(GetSavedQueryRelatedColumnNameRequest, _super);
    function GetSavedQueryRelatedColumnNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryRelatedColumnNamePathParams)
    ], GetSavedQueryRelatedColumnNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryRelatedColumnNameQueryParams)
    ], GetSavedQueryRelatedColumnNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryRelatedColumnNameSecurity)
    ], GetSavedQueryRelatedColumnNameRequest.prototype, "security", void 0);
    return GetSavedQueryRelatedColumnNameRequest;
}(SpeakeasyBase));
export { GetSavedQueryRelatedColumnNameRequest };
var GetSavedQueryRelatedColumnNameResponse = /** @class */ (function (_super) {
    __extends(GetSavedQueryRelatedColumnNameResponse, _super);
    function GetSavedQueryRelatedColumnNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSavedQueryRelatedColumnNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryRelatedColumnName400ApplicationJson)
    ], GetSavedQueryRelatedColumnNameResponse.prototype, "getSavedQueryRelatedColumnName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryRelatedColumnName401ApplicationJson)
    ], GetSavedQueryRelatedColumnNameResponse.prototype, "getSavedQueryRelatedColumnName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryRelatedColumnName404ApplicationJson)
    ], GetSavedQueryRelatedColumnNameResponse.prototype, "getSavedQueryRelatedColumnName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryRelatedColumnName500ApplicationJson)
    ], GetSavedQueryRelatedColumnNameResponse.prototype, "getSavedQueryRelatedColumnName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RelatedResponseSchema)
    ], GetSavedQueryRelatedColumnNameResponse.prototype, "relatedResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSavedQueryRelatedColumnNameResponse.prototype, "statusCode", void 0);
    return GetSavedQueryRelatedColumnNameResponse;
}(SpeakeasyBase));
export { GetSavedQueryRelatedColumnNameResponse };
