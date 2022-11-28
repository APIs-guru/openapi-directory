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
var GetDatasetRelatedColumnNamePathParams = /** @class */ (function (_super) {
    __extends(GetDatasetRelatedColumnNamePathParams, _super);
    function GetDatasetRelatedColumnNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" }),
        __metadata("design:type", String)
    ], GetDatasetRelatedColumnNamePathParams.prototype, "columnName", void 0);
    return GetDatasetRelatedColumnNamePathParams;
}(SpeakeasyBase));
export { GetDatasetRelatedColumnNamePathParams };
var GetDatasetRelatedColumnNameQueryParams = /** @class */ (function (_super) {
    __extends(GetDatasetRelatedColumnNameQueryParams, _super);
    function GetDatasetRelatedColumnNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetRelatedSchema)
    ], GetDatasetRelatedColumnNameQueryParams.prototype, "q", void 0);
    return GetDatasetRelatedColumnNameQueryParams;
}(SpeakeasyBase));
export { GetDatasetRelatedColumnNameQueryParams };
var GetDatasetRelatedColumnNameSecurity = /** @class */ (function (_super) {
    __extends(GetDatasetRelatedColumnNameSecurity, _super);
    function GetDatasetRelatedColumnNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatasetRelatedColumnNameSecurity.prototype, "jwt", void 0);
    return GetDatasetRelatedColumnNameSecurity;
}(SpeakeasyBase));
export { GetDatasetRelatedColumnNameSecurity };
var GetDatasetRelatedColumnName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetRelatedColumnName400ApplicationJson, _super);
    function GetDatasetRelatedColumnName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetRelatedColumnName400ApplicationJson.prototype, "message", void 0);
    return GetDatasetRelatedColumnName400ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetRelatedColumnName400ApplicationJson };
var GetDatasetRelatedColumnName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetRelatedColumnName401ApplicationJson, _super);
    function GetDatasetRelatedColumnName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetRelatedColumnName401ApplicationJson.prototype, "message", void 0);
    return GetDatasetRelatedColumnName401ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetRelatedColumnName401ApplicationJson };
var GetDatasetRelatedColumnName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetRelatedColumnName404ApplicationJson, _super);
    function GetDatasetRelatedColumnName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetRelatedColumnName404ApplicationJson.prototype, "message", void 0);
    return GetDatasetRelatedColumnName404ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetRelatedColumnName404ApplicationJson };
var GetDatasetRelatedColumnName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetRelatedColumnName500ApplicationJson, _super);
    function GetDatasetRelatedColumnName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetRelatedColumnName500ApplicationJson.prototype, "message", void 0);
    return GetDatasetRelatedColumnName500ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetRelatedColumnName500ApplicationJson };
var GetDatasetRelatedColumnNameRequest = /** @class */ (function (_super) {
    __extends(GetDatasetRelatedColumnNameRequest, _super);
    function GetDatasetRelatedColumnNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetRelatedColumnNamePathParams)
    ], GetDatasetRelatedColumnNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetRelatedColumnNameQueryParams)
    ], GetDatasetRelatedColumnNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetRelatedColumnNameSecurity)
    ], GetDatasetRelatedColumnNameRequest.prototype, "security", void 0);
    return GetDatasetRelatedColumnNameRequest;
}(SpeakeasyBase));
export { GetDatasetRelatedColumnNameRequest };
var GetDatasetRelatedColumnNameResponse = /** @class */ (function (_super) {
    __extends(GetDatasetRelatedColumnNameResponse, _super);
    function GetDatasetRelatedColumnNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatasetRelatedColumnNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetRelatedColumnName400ApplicationJson)
    ], GetDatasetRelatedColumnNameResponse.prototype, "getDatasetRelatedColumnName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetRelatedColumnName401ApplicationJson)
    ], GetDatasetRelatedColumnNameResponse.prototype, "getDatasetRelatedColumnName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetRelatedColumnName404ApplicationJson)
    ], GetDatasetRelatedColumnNameResponse.prototype, "getDatasetRelatedColumnName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetRelatedColumnName500ApplicationJson)
    ], GetDatasetRelatedColumnNameResponse.prototype, "getDatasetRelatedColumnName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RelatedResponseSchema)
    ], GetDatasetRelatedColumnNameResponse.prototype, "relatedResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatasetRelatedColumnNameResponse.prototype, "statusCode", void 0);
    return GetDatasetRelatedColumnNameResponse;
}(SpeakeasyBase));
export { GetDatasetRelatedColumnNameResponse };
