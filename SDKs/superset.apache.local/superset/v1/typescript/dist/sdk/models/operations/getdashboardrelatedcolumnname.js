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
var GetDashboardRelatedColumnNamePathParams = /** @class */ (function (_super) {
    __extends(GetDashboardRelatedColumnNamePathParams, _super);
    function GetDashboardRelatedColumnNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" }),
        __metadata("design:type", String)
    ], GetDashboardRelatedColumnNamePathParams.prototype, "columnName", void 0);
    return GetDashboardRelatedColumnNamePathParams;
}(SpeakeasyBase));
export { GetDashboardRelatedColumnNamePathParams };
var GetDashboardRelatedColumnNameQueryParams = /** @class */ (function (_super) {
    __extends(GetDashboardRelatedColumnNameQueryParams, _super);
    function GetDashboardRelatedColumnNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetRelatedSchema)
    ], GetDashboardRelatedColumnNameQueryParams.prototype, "q", void 0);
    return GetDashboardRelatedColumnNameQueryParams;
}(SpeakeasyBase));
export { GetDashboardRelatedColumnNameQueryParams };
var GetDashboardRelatedColumnNameSecurity = /** @class */ (function (_super) {
    __extends(GetDashboardRelatedColumnNameSecurity, _super);
    function GetDashboardRelatedColumnNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDashboardRelatedColumnNameSecurity.prototype, "jwt", void 0);
    return GetDashboardRelatedColumnNameSecurity;
}(SpeakeasyBase));
export { GetDashboardRelatedColumnNameSecurity };
var GetDashboardRelatedColumnName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardRelatedColumnName400ApplicationJson, _super);
    function GetDashboardRelatedColumnName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardRelatedColumnName400ApplicationJson.prototype, "message", void 0);
    return GetDashboardRelatedColumnName400ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardRelatedColumnName400ApplicationJson };
var GetDashboardRelatedColumnName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardRelatedColumnName401ApplicationJson, _super);
    function GetDashboardRelatedColumnName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardRelatedColumnName401ApplicationJson.prototype, "message", void 0);
    return GetDashboardRelatedColumnName401ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardRelatedColumnName401ApplicationJson };
var GetDashboardRelatedColumnName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardRelatedColumnName404ApplicationJson, _super);
    function GetDashboardRelatedColumnName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardRelatedColumnName404ApplicationJson.prototype, "message", void 0);
    return GetDashboardRelatedColumnName404ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardRelatedColumnName404ApplicationJson };
var GetDashboardRelatedColumnName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardRelatedColumnName500ApplicationJson, _super);
    function GetDashboardRelatedColumnName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardRelatedColumnName500ApplicationJson.prototype, "message", void 0);
    return GetDashboardRelatedColumnName500ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardRelatedColumnName500ApplicationJson };
var GetDashboardRelatedColumnNameRequest = /** @class */ (function (_super) {
    __extends(GetDashboardRelatedColumnNameRequest, _super);
    function GetDashboardRelatedColumnNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardRelatedColumnNamePathParams)
    ], GetDashboardRelatedColumnNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardRelatedColumnNameQueryParams)
    ], GetDashboardRelatedColumnNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardRelatedColumnNameSecurity)
    ], GetDashboardRelatedColumnNameRequest.prototype, "security", void 0);
    return GetDashboardRelatedColumnNameRequest;
}(SpeakeasyBase));
export { GetDashboardRelatedColumnNameRequest };
var GetDashboardRelatedColumnNameResponse = /** @class */ (function (_super) {
    __extends(GetDashboardRelatedColumnNameResponse, _super);
    function GetDashboardRelatedColumnNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDashboardRelatedColumnNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardRelatedColumnName400ApplicationJson)
    ], GetDashboardRelatedColumnNameResponse.prototype, "getDashboardRelatedColumnName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardRelatedColumnName401ApplicationJson)
    ], GetDashboardRelatedColumnNameResponse.prototype, "getDashboardRelatedColumnName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardRelatedColumnName404ApplicationJson)
    ], GetDashboardRelatedColumnNameResponse.prototype, "getDashboardRelatedColumnName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardRelatedColumnName500ApplicationJson)
    ], GetDashboardRelatedColumnNameResponse.prototype, "getDashboardRelatedColumnName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RelatedResponseSchema)
    ], GetDashboardRelatedColumnNameResponse.prototype, "relatedResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDashboardRelatedColumnNameResponse.prototype, "statusCode", void 0);
    return GetDashboardRelatedColumnNameResponse;
}(SpeakeasyBase));
export { GetDashboardRelatedColumnNameResponse };
