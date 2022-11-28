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
var GetQueryDistinctColumnNamePathParams = /** @class */ (function (_super) {
    __extends(GetQueryDistinctColumnNamePathParams, _super);
    function GetQueryDistinctColumnNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" }),
        __metadata("design:type", String)
    ], GetQueryDistinctColumnNamePathParams.prototype, "columnName", void 0);
    return GetQueryDistinctColumnNamePathParams;
}(SpeakeasyBase));
export { GetQueryDistinctColumnNamePathParams };
var GetQueryDistinctColumnNameQueryParams = /** @class */ (function (_super) {
    __extends(GetQueryDistinctColumnNameQueryParams, _super);
    function GetQueryDistinctColumnNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetRelatedSchema)
    ], GetQueryDistinctColumnNameQueryParams.prototype, "q", void 0);
    return GetQueryDistinctColumnNameQueryParams;
}(SpeakeasyBase));
export { GetQueryDistinctColumnNameQueryParams };
var GetQueryDistinctColumnNameSecurity = /** @class */ (function (_super) {
    __extends(GetQueryDistinctColumnNameSecurity, _super);
    function GetQueryDistinctColumnNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetQueryDistinctColumnNameSecurity.prototype, "jwt", void 0);
    return GetQueryDistinctColumnNameSecurity;
}(SpeakeasyBase));
export { GetQueryDistinctColumnNameSecurity };
var GetQueryDistinctColumnName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryDistinctColumnName400ApplicationJson, _super);
    function GetQueryDistinctColumnName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQueryDistinctColumnName400ApplicationJson.prototype, "message", void 0);
    return GetQueryDistinctColumnName400ApplicationJson;
}(SpeakeasyBase));
export { GetQueryDistinctColumnName400ApplicationJson };
var GetQueryDistinctColumnName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryDistinctColumnName401ApplicationJson, _super);
    function GetQueryDistinctColumnName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQueryDistinctColumnName401ApplicationJson.prototype, "message", void 0);
    return GetQueryDistinctColumnName401ApplicationJson;
}(SpeakeasyBase));
export { GetQueryDistinctColumnName401ApplicationJson };
var GetQueryDistinctColumnName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryDistinctColumnName404ApplicationJson, _super);
    function GetQueryDistinctColumnName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQueryDistinctColumnName404ApplicationJson.prototype, "message", void 0);
    return GetQueryDistinctColumnName404ApplicationJson;
}(SpeakeasyBase));
export { GetQueryDistinctColumnName404ApplicationJson };
var GetQueryDistinctColumnName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryDistinctColumnName500ApplicationJson, _super);
    function GetQueryDistinctColumnName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQueryDistinctColumnName500ApplicationJson.prototype, "message", void 0);
    return GetQueryDistinctColumnName500ApplicationJson;
}(SpeakeasyBase));
export { GetQueryDistinctColumnName500ApplicationJson };
var GetQueryDistinctColumnNameRequest = /** @class */ (function (_super) {
    __extends(GetQueryDistinctColumnNameRequest, _super);
    function GetQueryDistinctColumnNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryDistinctColumnNamePathParams)
    ], GetQueryDistinctColumnNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryDistinctColumnNameQueryParams)
    ], GetQueryDistinctColumnNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryDistinctColumnNameSecurity)
    ], GetQueryDistinctColumnNameRequest.prototype, "security", void 0);
    return GetQueryDistinctColumnNameRequest;
}(SpeakeasyBase));
export { GetQueryDistinctColumnNameRequest };
var GetQueryDistinctColumnNameResponse = /** @class */ (function (_super) {
    __extends(GetQueryDistinctColumnNameResponse, _super);
    function GetQueryDistinctColumnNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQueryDistinctColumnNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DistincResponseSchema)
    ], GetQueryDistinctColumnNameResponse.prototype, "distincResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryDistinctColumnName400ApplicationJson)
    ], GetQueryDistinctColumnNameResponse.prototype, "getQueryDistinctColumnName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryDistinctColumnName401ApplicationJson)
    ], GetQueryDistinctColumnNameResponse.prototype, "getQueryDistinctColumnName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryDistinctColumnName404ApplicationJson)
    ], GetQueryDistinctColumnNameResponse.prototype, "getQueryDistinctColumnName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryDistinctColumnName500ApplicationJson)
    ], GetQueryDistinctColumnNameResponse.prototype, "getQueryDistinctColumnName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQueryDistinctColumnNameResponse.prototype, "statusCode", void 0);
    return GetQueryDistinctColumnNameResponse;
}(SpeakeasyBase));
export { GetQueryDistinctColumnNameResponse };
