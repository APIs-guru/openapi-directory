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
var GetChartDataCacheKeyPathParams = /** @class */ (function (_super) {
    __extends(GetChartDataCacheKeyPathParams, _super);
    function GetChartDataCacheKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cache_key" }),
        __metadata("design:type", String)
    ], GetChartDataCacheKeyPathParams.prototype, "cacheKey", void 0);
    return GetChartDataCacheKeyPathParams;
}(SpeakeasyBase));
export { GetChartDataCacheKeyPathParams };
var GetChartDataCacheKeySecurity = /** @class */ (function (_super) {
    __extends(GetChartDataCacheKeySecurity, _super);
    function GetChartDataCacheKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetChartDataCacheKeySecurity.prototype, "jwt", void 0);
    return GetChartDataCacheKeySecurity;
}(SpeakeasyBase));
export { GetChartDataCacheKeySecurity };
var GetChartDataCacheKey400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartDataCacheKey400ApplicationJson, _super);
    function GetChartDataCacheKey400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartDataCacheKey400ApplicationJson.prototype, "message", void 0);
    return GetChartDataCacheKey400ApplicationJson;
}(SpeakeasyBase));
export { GetChartDataCacheKey400ApplicationJson };
var GetChartDataCacheKey401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartDataCacheKey401ApplicationJson, _super);
    function GetChartDataCacheKey401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartDataCacheKey401ApplicationJson.prototype, "message", void 0);
    return GetChartDataCacheKey401ApplicationJson;
}(SpeakeasyBase));
export { GetChartDataCacheKey401ApplicationJson };
var GetChartDataCacheKey404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartDataCacheKey404ApplicationJson, _super);
    function GetChartDataCacheKey404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartDataCacheKey404ApplicationJson.prototype, "message", void 0);
    return GetChartDataCacheKey404ApplicationJson;
}(SpeakeasyBase));
export { GetChartDataCacheKey404ApplicationJson };
var GetChartDataCacheKey422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartDataCacheKey422ApplicationJson, _super);
    function GetChartDataCacheKey422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartDataCacheKey422ApplicationJson.prototype, "message", void 0);
    return GetChartDataCacheKey422ApplicationJson;
}(SpeakeasyBase));
export { GetChartDataCacheKey422ApplicationJson };
var GetChartDataCacheKey500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartDataCacheKey500ApplicationJson, _super);
    function GetChartDataCacheKey500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartDataCacheKey500ApplicationJson.prototype, "message", void 0);
    return GetChartDataCacheKey500ApplicationJson;
}(SpeakeasyBase));
export { GetChartDataCacheKey500ApplicationJson };
var GetChartDataCacheKeyRequest = /** @class */ (function (_super) {
    __extends(GetChartDataCacheKeyRequest, _super);
    function GetChartDataCacheKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartDataCacheKeyPathParams)
    ], GetChartDataCacheKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartDataCacheKeySecurity)
    ], GetChartDataCacheKeyRequest.prototype, "security", void 0);
    return GetChartDataCacheKeyRequest;
}(SpeakeasyBase));
export { GetChartDataCacheKeyRequest };
var GetChartDataCacheKeyResponse = /** @class */ (function (_super) {
    __extends(GetChartDataCacheKeyResponse, _super);
    function GetChartDataCacheKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChartDataResponseSchema)
    ], GetChartDataCacheKeyResponse.prototype, "chartDataResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChartDataCacheKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartDataCacheKey400ApplicationJson)
    ], GetChartDataCacheKeyResponse.prototype, "getChartDataCacheKey400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartDataCacheKey401ApplicationJson)
    ], GetChartDataCacheKeyResponse.prototype, "getChartDataCacheKey401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartDataCacheKey404ApplicationJson)
    ], GetChartDataCacheKeyResponse.prototype, "getChartDataCacheKey404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartDataCacheKey422ApplicationJson)
    ], GetChartDataCacheKeyResponse.prototype, "getChartDataCacheKey422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartDataCacheKey500ApplicationJson)
    ], GetChartDataCacheKeyResponse.prototype, "getChartDataCacheKey500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChartDataCacheKeyResponse.prototype, "statusCode", void 0);
    return GetChartDataCacheKeyResponse;
}(SpeakeasyBase));
export { GetChartDataCacheKeyResponse };
