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
var GetCssTemplateRelatedColumnNamePathParams = /** @class */ (function (_super) {
    __extends(GetCssTemplateRelatedColumnNamePathParams, _super);
    function GetCssTemplateRelatedColumnNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" }),
        __metadata("design:type", String)
    ], GetCssTemplateRelatedColumnNamePathParams.prototype, "columnName", void 0);
    return GetCssTemplateRelatedColumnNamePathParams;
}(SpeakeasyBase));
export { GetCssTemplateRelatedColumnNamePathParams };
var GetCssTemplateRelatedColumnNameQueryParams = /** @class */ (function (_super) {
    __extends(GetCssTemplateRelatedColumnNameQueryParams, _super);
    function GetCssTemplateRelatedColumnNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetRelatedSchema)
    ], GetCssTemplateRelatedColumnNameQueryParams.prototype, "q", void 0);
    return GetCssTemplateRelatedColumnNameQueryParams;
}(SpeakeasyBase));
export { GetCssTemplateRelatedColumnNameQueryParams };
var GetCssTemplateRelatedColumnNameSecurity = /** @class */ (function (_super) {
    __extends(GetCssTemplateRelatedColumnNameSecurity, _super);
    function GetCssTemplateRelatedColumnNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetCssTemplateRelatedColumnNameSecurity.prototype, "jwt", void 0);
    return GetCssTemplateRelatedColumnNameSecurity;
}(SpeakeasyBase));
export { GetCssTemplateRelatedColumnNameSecurity };
var GetCssTemplateRelatedColumnName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplateRelatedColumnName400ApplicationJson, _super);
    function GetCssTemplateRelatedColumnName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplateRelatedColumnName400ApplicationJson.prototype, "message", void 0);
    return GetCssTemplateRelatedColumnName400ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplateRelatedColumnName400ApplicationJson };
var GetCssTemplateRelatedColumnName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplateRelatedColumnName401ApplicationJson, _super);
    function GetCssTemplateRelatedColumnName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplateRelatedColumnName401ApplicationJson.prototype, "message", void 0);
    return GetCssTemplateRelatedColumnName401ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplateRelatedColumnName401ApplicationJson };
var GetCssTemplateRelatedColumnName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplateRelatedColumnName404ApplicationJson, _super);
    function GetCssTemplateRelatedColumnName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplateRelatedColumnName404ApplicationJson.prototype, "message", void 0);
    return GetCssTemplateRelatedColumnName404ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplateRelatedColumnName404ApplicationJson };
var GetCssTemplateRelatedColumnName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplateRelatedColumnName500ApplicationJson, _super);
    function GetCssTemplateRelatedColumnName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplateRelatedColumnName500ApplicationJson.prototype, "message", void 0);
    return GetCssTemplateRelatedColumnName500ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplateRelatedColumnName500ApplicationJson };
var GetCssTemplateRelatedColumnNameRequest = /** @class */ (function (_super) {
    __extends(GetCssTemplateRelatedColumnNameRequest, _super);
    function GetCssTemplateRelatedColumnNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateRelatedColumnNamePathParams)
    ], GetCssTemplateRelatedColumnNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateRelatedColumnNameQueryParams)
    ], GetCssTemplateRelatedColumnNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateRelatedColumnNameSecurity)
    ], GetCssTemplateRelatedColumnNameRequest.prototype, "security", void 0);
    return GetCssTemplateRelatedColumnNameRequest;
}(SpeakeasyBase));
export { GetCssTemplateRelatedColumnNameRequest };
var GetCssTemplateRelatedColumnNameResponse = /** @class */ (function (_super) {
    __extends(GetCssTemplateRelatedColumnNameResponse, _super);
    function GetCssTemplateRelatedColumnNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCssTemplateRelatedColumnNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateRelatedColumnName400ApplicationJson)
    ], GetCssTemplateRelatedColumnNameResponse.prototype, "getCssTemplateRelatedColumnName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateRelatedColumnName401ApplicationJson)
    ], GetCssTemplateRelatedColumnNameResponse.prototype, "getCssTemplateRelatedColumnName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateRelatedColumnName404ApplicationJson)
    ], GetCssTemplateRelatedColumnNameResponse.prototype, "getCssTemplateRelatedColumnName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateRelatedColumnName500ApplicationJson)
    ], GetCssTemplateRelatedColumnNameResponse.prototype, "getCssTemplateRelatedColumnName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RelatedResponseSchema)
    ], GetCssTemplateRelatedColumnNameResponse.prototype, "relatedResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCssTemplateRelatedColumnNameResponse.prototype, "statusCode", void 0);
    return GetCssTemplateRelatedColumnNameResponse;
}(SpeakeasyBase));
export { GetCssTemplateRelatedColumnNameResponse };
