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
var GetAnnotationLayerRelatedColumnNamePathParams = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerRelatedColumnNamePathParams, _super);
    function GetAnnotationLayerRelatedColumnNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerRelatedColumnNamePathParams.prototype, "columnName", void 0);
    return GetAnnotationLayerRelatedColumnNamePathParams;
}(SpeakeasyBase));
export { GetAnnotationLayerRelatedColumnNamePathParams };
var GetAnnotationLayerRelatedColumnNameQueryParams = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerRelatedColumnNameQueryParams, _super);
    function GetAnnotationLayerRelatedColumnNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetRelatedSchema)
    ], GetAnnotationLayerRelatedColumnNameQueryParams.prototype, "q", void 0);
    return GetAnnotationLayerRelatedColumnNameQueryParams;
}(SpeakeasyBase));
export { GetAnnotationLayerRelatedColumnNameQueryParams };
var GetAnnotationLayerRelatedColumnNameSecurity = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerRelatedColumnNameSecurity, _super);
    function GetAnnotationLayerRelatedColumnNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetAnnotationLayerRelatedColumnNameSecurity.prototype, "jwt", void 0);
    return GetAnnotationLayerRelatedColumnNameSecurity;
}(SpeakeasyBase));
export { GetAnnotationLayerRelatedColumnNameSecurity };
var GetAnnotationLayerRelatedColumnName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerRelatedColumnName400ApplicationJson, _super);
    function GetAnnotationLayerRelatedColumnName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerRelatedColumnName400ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerRelatedColumnName400ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerRelatedColumnName400ApplicationJson };
var GetAnnotationLayerRelatedColumnName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerRelatedColumnName401ApplicationJson, _super);
    function GetAnnotationLayerRelatedColumnName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerRelatedColumnName401ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerRelatedColumnName401ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerRelatedColumnName401ApplicationJson };
var GetAnnotationLayerRelatedColumnName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerRelatedColumnName404ApplicationJson, _super);
    function GetAnnotationLayerRelatedColumnName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerRelatedColumnName404ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerRelatedColumnName404ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerRelatedColumnName404ApplicationJson };
var GetAnnotationLayerRelatedColumnName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerRelatedColumnName500ApplicationJson, _super);
    function GetAnnotationLayerRelatedColumnName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerRelatedColumnName500ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerRelatedColumnName500ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerRelatedColumnName500ApplicationJson };
var GetAnnotationLayerRelatedColumnNameRequest = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerRelatedColumnNameRequest, _super);
    function GetAnnotationLayerRelatedColumnNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerRelatedColumnNamePathParams)
    ], GetAnnotationLayerRelatedColumnNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerRelatedColumnNameQueryParams)
    ], GetAnnotationLayerRelatedColumnNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerRelatedColumnNameSecurity)
    ], GetAnnotationLayerRelatedColumnNameRequest.prototype, "security", void 0);
    return GetAnnotationLayerRelatedColumnNameRequest;
}(SpeakeasyBase));
export { GetAnnotationLayerRelatedColumnNameRequest };
var GetAnnotationLayerRelatedColumnNameResponse = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerRelatedColumnNameResponse, _super);
    function GetAnnotationLayerRelatedColumnNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAnnotationLayerRelatedColumnNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerRelatedColumnName400ApplicationJson)
    ], GetAnnotationLayerRelatedColumnNameResponse.prototype, "getAnnotationLayerRelatedColumnName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerRelatedColumnName401ApplicationJson)
    ], GetAnnotationLayerRelatedColumnNameResponse.prototype, "getAnnotationLayerRelatedColumnName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerRelatedColumnName404ApplicationJson)
    ], GetAnnotationLayerRelatedColumnNameResponse.prototype, "getAnnotationLayerRelatedColumnName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerRelatedColumnName500ApplicationJson)
    ], GetAnnotationLayerRelatedColumnNameResponse.prototype, "getAnnotationLayerRelatedColumnName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RelatedResponseSchema)
    ], GetAnnotationLayerRelatedColumnNameResponse.prototype, "relatedResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAnnotationLayerRelatedColumnNameResponse.prototype, "statusCode", void 0);
    return GetAnnotationLayerRelatedColumnNameResponse;
}(SpeakeasyBase));
export { GetAnnotationLayerRelatedColumnNameResponse };
