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
var GetSavedQueryDistinctColumnNamePathParams = /** @class */ (function (_super) {
    __extends(GetSavedQueryDistinctColumnNamePathParams, _super);
    function GetSavedQueryDistinctColumnNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" }),
        __metadata("design:type", String)
    ], GetSavedQueryDistinctColumnNamePathParams.prototype, "columnName", void 0);
    return GetSavedQueryDistinctColumnNamePathParams;
}(SpeakeasyBase));
export { GetSavedQueryDistinctColumnNamePathParams };
var GetSavedQueryDistinctColumnNameQueryParams = /** @class */ (function (_super) {
    __extends(GetSavedQueryDistinctColumnNameQueryParams, _super);
    function GetSavedQueryDistinctColumnNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetRelatedSchema)
    ], GetSavedQueryDistinctColumnNameQueryParams.prototype, "q", void 0);
    return GetSavedQueryDistinctColumnNameQueryParams;
}(SpeakeasyBase));
export { GetSavedQueryDistinctColumnNameQueryParams };
var GetSavedQueryDistinctColumnNameSecurity = /** @class */ (function (_super) {
    __extends(GetSavedQueryDistinctColumnNameSecurity, _super);
    function GetSavedQueryDistinctColumnNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetSavedQueryDistinctColumnNameSecurity.prototype, "jwt", void 0);
    return GetSavedQueryDistinctColumnNameSecurity;
}(SpeakeasyBase));
export { GetSavedQueryDistinctColumnNameSecurity };
var GetSavedQueryDistinctColumnName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryDistinctColumnName400ApplicationJson, _super);
    function GetSavedQueryDistinctColumnName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryDistinctColumnName400ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryDistinctColumnName400ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryDistinctColumnName400ApplicationJson };
var GetSavedQueryDistinctColumnName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryDistinctColumnName401ApplicationJson, _super);
    function GetSavedQueryDistinctColumnName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryDistinctColumnName401ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryDistinctColumnName401ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryDistinctColumnName401ApplicationJson };
var GetSavedQueryDistinctColumnName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryDistinctColumnName404ApplicationJson, _super);
    function GetSavedQueryDistinctColumnName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryDistinctColumnName404ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryDistinctColumnName404ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryDistinctColumnName404ApplicationJson };
var GetSavedQueryDistinctColumnName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryDistinctColumnName500ApplicationJson, _super);
    function GetSavedQueryDistinctColumnName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryDistinctColumnName500ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryDistinctColumnName500ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryDistinctColumnName500ApplicationJson };
var GetSavedQueryDistinctColumnNameRequest = /** @class */ (function (_super) {
    __extends(GetSavedQueryDistinctColumnNameRequest, _super);
    function GetSavedQueryDistinctColumnNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryDistinctColumnNamePathParams)
    ], GetSavedQueryDistinctColumnNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryDistinctColumnNameQueryParams)
    ], GetSavedQueryDistinctColumnNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryDistinctColumnNameSecurity)
    ], GetSavedQueryDistinctColumnNameRequest.prototype, "security", void 0);
    return GetSavedQueryDistinctColumnNameRequest;
}(SpeakeasyBase));
export { GetSavedQueryDistinctColumnNameRequest };
var GetSavedQueryDistinctColumnNameResponse = /** @class */ (function (_super) {
    __extends(GetSavedQueryDistinctColumnNameResponse, _super);
    function GetSavedQueryDistinctColumnNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSavedQueryDistinctColumnNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DistincResponseSchema)
    ], GetSavedQueryDistinctColumnNameResponse.prototype, "distincResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryDistinctColumnName400ApplicationJson)
    ], GetSavedQueryDistinctColumnNameResponse.prototype, "getSavedQueryDistinctColumnName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryDistinctColumnName401ApplicationJson)
    ], GetSavedQueryDistinctColumnNameResponse.prototype, "getSavedQueryDistinctColumnName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryDistinctColumnName404ApplicationJson)
    ], GetSavedQueryDistinctColumnNameResponse.prototype, "getSavedQueryDistinctColumnName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryDistinctColumnName500ApplicationJson)
    ], GetSavedQueryDistinctColumnNameResponse.prototype, "getSavedQueryDistinctColumnName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSavedQueryDistinctColumnNameResponse.prototype, "statusCode", void 0);
    return GetSavedQueryDistinctColumnNameResponse;
}(SpeakeasyBase));
export { GetSavedQueryDistinctColumnNameResponse };
