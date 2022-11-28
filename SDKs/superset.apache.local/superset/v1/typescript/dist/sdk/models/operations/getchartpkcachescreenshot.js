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
var GetChartPkCacheScreenshotPathParams = /** @class */ (function (_super) {
    __extends(GetChartPkCacheScreenshotPathParams, _super);
    function GetChartPkCacheScreenshotPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetChartPkCacheScreenshotPathParams.prototype, "pk", void 0);
    return GetChartPkCacheScreenshotPathParams;
}(SpeakeasyBase));
export { GetChartPkCacheScreenshotPathParams };
var GetChartPkCacheScreenshotQueryParams = /** @class */ (function (_super) {
    __extends(GetChartPkCacheScreenshotQueryParams, _super);
    function GetChartPkCacheScreenshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.ScreenshotQuerySchema)
    ], GetChartPkCacheScreenshotQueryParams.prototype, "q", void 0);
    return GetChartPkCacheScreenshotQueryParams;
}(SpeakeasyBase));
export { GetChartPkCacheScreenshotQueryParams };
var GetChartPkCacheScreenshotSecurity = /** @class */ (function (_super) {
    __extends(GetChartPkCacheScreenshotSecurity, _super);
    function GetChartPkCacheScreenshotSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetChartPkCacheScreenshotSecurity.prototype, "jwt", void 0);
    return GetChartPkCacheScreenshotSecurity;
}(SpeakeasyBase));
export { GetChartPkCacheScreenshotSecurity };
var GetChartPkCacheScreenshot400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkCacheScreenshot400ApplicationJson, _super);
    function GetChartPkCacheScreenshot400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkCacheScreenshot400ApplicationJson.prototype, "message", void 0);
    return GetChartPkCacheScreenshot400ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkCacheScreenshot400ApplicationJson };
var GetChartPkCacheScreenshot401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkCacheScreenshot401ApplicationJson, _super);
    function GetChartPkCacheScreenshot401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkCacheScreenshot401ApplicationJson.prototype, "message", void 0);
    return GetChartPkCacheScreenshot401ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkCacheScreenshot401ApplicationJson };
var GetChartPkCacheScreenshot404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkCacheScreenshot404ApplicationJson, _super);
    function GetChartPkCacheScreenshot404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkCacheScreenshot404ApplicationJson.prototype, "message", void 0);
    return GetChartPkCacheScreenshot404ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkCacheScreenshot404ApplicationJson };
var GetChartPkCacheScreenshot500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkCacheScreenshot500ApplicationJson, _super);
    function GetChartPkCacheScreenshot500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkCacheScreenshot500ApplicationJson.prototype, "message", void 0);
    return GetChartPkCacheScreenshot500ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkCacheScreenshot500ApplicationJson };
var GetChartPkCacheScreenshotRequest = /** @class */ (function (_super) {
    __extends(GetChartPkCacheScreenshotRequest, _super);
    function GetChartPkCacheScreenshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkCacheScreenshotPathParams)
    ], GetChartPkCacheScreenshotRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkCacheScreenshotQueryParams)
    ], GetChartPkCacheScreenshotRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkCacheScreenshotSecurity)
    ], GetChartPkCacheScreenshotRequest.prototype, "security", void 0);
    return GetChartPkCacheScreenshotRequest;
}(SpeakeasyBase));
export { GetChartPkCacheScreenshotRequest };
var GetChartPkCacheScreenshotResponse = /** @class */ (function (_super) {
    __extends(GetChartPkCacheScreenshotResponse, _super);
    function GetChartPkCacheScreenshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChartCacheScreenshotResponseSchema)
    ], GetChartPkCacheScreenshotResponse.prototype, "chartCacheScreenshotResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChartPkCacheScreenshotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkCacheScreenshot400ApplicationJson)
    ], GetChartPkCacheScreenshotResponse.prototype, "getChartPkCacheScreenshot400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkCacheScreenshot401ApplicationJson)
    ], GetChartPkCacheScreenshotResponse.prototype, "getChartPkCacheScreenshot401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkCacheScreenshot404ApplicationJson)
    ], GetChartPkCacheScreenshotResponse.prototype, "getChartPkCacheScreenshot404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkCacheScreenshot500ApplicationJson)
    ], GetChartPkCacheScreenshotResponse.prototype, "getChartPkCacheScreenshot500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChartPkCacheScreenshotResponse.prototype, "statusCode", void 0);
    return GetChartPkCacheScreenshotResponse;
}(SpeakeasyBase));
export { GetChartPkCacheScreenshotResponse };
