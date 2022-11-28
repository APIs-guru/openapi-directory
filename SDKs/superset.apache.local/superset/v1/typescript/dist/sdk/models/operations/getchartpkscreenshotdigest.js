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
var GetChartPkScreenshotDigestPathParams = /** @class */ (function (_super) {
    __extends(GetChartPkScreenshotDigestPathParams, _super);
    function GetChartPkScreenshotDigestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=digest" }),
        __metadata("design:type", String)
    ], GetChartPkScreenshotDigestPathParams.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetChartPkScreenshotDigestPathParams.prototype, "pk", void 0);
    return GetChartPkScreenshotDigestPathParams;
}(SpeakeasyBase));
export { GetChartPkScreenshotDigestPathParams };
var GetChartPkScreenshotDigestSecurity = /** @class */ (function (_super) {
    __extends(GetChartPkScreenshotDigestSecurity, _super);
    function GetChartPkScreenshotDigestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetChartPkScreenshotDigestSecurity.prototype, "jwt", void 0);
    return GetChartPkScreenshotDigestSecurity;
}(SpeakeasyBase));
export { GetChartPkScreenshotDigestSecurity };
var GetChartPkScreenshotDigest400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkScreenshotDigest400ApplicationJson, _super);
    function GetChartPkScreenshotDigest400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkScreenshotDigest400ApplicationJson.prototype, "message", void 0);
    return GetChartPkScreenshotDigest400ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkScreenshotDigest400ApplicationJson };
var GetChartPkScreenshotDigest401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkScreenshotDigest401ApplicationJson, _super);
    function GetChartPkScreenshotDigest401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkScreenshotDigest401ApplicationJson.prototype, "message", void 0);
    return GetChartPkScreenshotDigest401ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkScreenshotDigest401ApplicationJson };
var GetChartPkScreenshotDigest404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkScreenshotDigest404ApplicationJson, _super);
    function GetChartPkScreenshotDigest404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkScreenshotDigest404ApplicationJson.prototype, "message", void 0);
    return GetChartPkScreenshotDigest404ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkScreenshotDigest404ApplicationJson };
var GetChartPkScreenshotDigest500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkScreenshotDigest500ApplicationJson, _super);
    function GetChartPkScreenshotDigest500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkScreenshotDigest500ApplicationJson.prototype, "message", void 0);
    return GetChartPkScreenshotDigest500ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkScreenshotDigest500ApplicationJson };
var GetChartPkScreenshotDigestRequest = /** @class */ (function (_super) {
    __extends(GetChartPkScreenshotDigestRequest, _super);
    function GetChartPkScreenshotDigestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkScreenshotDigestPathParams)
    ], GetChartPkScreenshotDigestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkScreenshotDigestSecurity)
    ], GetChartPkScreenshotDigestRequest.prototype, "security", void 0);
    return GetChartPkScreenshotDigestRequest;
}(SpeakeasyBase));
export { GetChartPkScreenshotDigestRequest };
var GetChartPkScreenshotDigestResponse = /** @class */ (function (_super) {
    __extends(GetChartPkScreenshotDigestResponse, _super);
    function GetChartPkScreenshotDigestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChartPkScreenshotDigestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetChartPkScreenshotDigestResponse.prototype, "getChartPkScreenshotDigest200ImageWildcardBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkScreenshotDigest400ApplicationJson)
    ], GetChartPkScreenshotDigestResponse.prototype, "getChartPkScreenshotDigest400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkScreenshotDigest401ApplicationJson)
    ], GetChartPkScreenshotDigestResponse.prototype, "getChartPkScreenshotDigest401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkScreenshotDigest404ApplicationJson)
    ], GetChartPkScreenshotDigestResponse.prototype, "getChartPkScreenshotDigest404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkScreenshotDigest500ApplicationJson)
    ], GetChartPkScreenshotDigestResponse.prototype, "getChartPkScreenshotDigest500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChartPkScreenshotDigestResponse.prototype, "statusCode", void 0);
    return GetChartPkScreenshotDigestResponse;
}(SpeakeasyBase));
export { GetChartPkScreenshotDigestResponse };
