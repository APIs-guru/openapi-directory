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
var GetChartPkThumbnailDigestPathParams = /** @class */ (function (_super) {
    __extends(GetChartPkThumbnailDigestPathParams, _super);
    function GetChartPkThumbnailDigestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=digest" }),
        __metadata("design:type", String)
    ], GetChartPkThumbnailDigestPathParams.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetChartPkThumbnailDigestPathParams.prototype, "pk", void 0);
    return GetChartPkThumbnailDigestPathParams;
}(SpeakeasyBase));
export { GetChartPkThumbnailDigestPathParams };
var GetChartPkThumbnailDigestSecurity = /** @class */ (function (_super) {
    __extends(GetChartPkThumbnailDigestSecurity, _super);
    function GetChartPkThumbnailDigestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetChartPkThumbnailDigestSecurity.prototype, "jwt", void 0);
    return GetChartPkThumbnailDigestSecurity;
}(SpeakeasyBase));
export { GetChartPkThumbnailDigestSecurity };
var GetChartPkThumbnailDigest400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkThumbnailDigest400ApplicationJson, _super);
    function GetChartPkThumbnailDigest400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkThumbnailDigest400ApplicationJson.prototype, "message", void 0);
    return GetChartPkThumbnailDigest400ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkThumbnailDigest400ApplicationJson };
var GetChartPkThumbnailDigest401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkThumbnailDigest401ApplicationJson, _super);
    function GetChartPkThumbnailDigest401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkThumbnailDigest401ApplicationJson.prototype, "message", void 0);
    return GetChartPkThumbnailDigest401ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkThumbnailDigest401ApplicationJson };
var GetChartPkThumbnailDigest404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkThumbnailDigest404ApplicationJson, _super);
    function GetChartPkThumbnailDigest404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkThumbnailDigest404ApplicationJson.prototype, "message", void 0);
    return GetChartPkThumbnailDigest404ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkThumbnailDigest404ApplicationJson };
var GetChartPkThumbnailDigest500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkThumbnailDigest500ApplicationJson, _super);
    function GetChartPkThumbnailDigest500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkThumbnailDigest500ApplicationJson.prototype, "message", void 0);
    return GetChartPkThumbnailDigest500ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkThumbnailDigest500ApplicationJson };
var GetChartPkThumbnailDigestRequest = /** @class */ (function (_super) {
    __extends(GetChartPkThumbnailDigestRequest, _super);
    function GetChartPkThumbnailDigestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkThumbnailDigestPathParams)
    ], GetChartPkThumbnailDigestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkThumbnailDigestSecurity)
    ], GetChartPkThumbnailDigestRequest.prototype, "security", void 0);
    return GetChartPkThumbnailDigestRequest;
}(SpeakeasyBase));
export { GetChartPkThumbnailDigestRequest };
var GetChartPkThumbnailDigestResponse = /** @class */ (function (_super) {
    __extends(GetChartPkThumbnailDigestResponse, _super);
    function GetChartPkThumbnailDigestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChartPkThumbnailDigestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetChartPkThumbnailDigestResponse.prototype, "getChartPkThumbnailDigest200ImageWildcardBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkThumbnailDigest400ApplicationJson)
    ], GetChartPkThumbnailDigestResponse.prototype, "getChartPkThumbnailDigest400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkThumbnailDigest401ApplicationJson)
    ], GetChartPkThumbnailDigestResponse.prototype, "getChartPkThumbnailDigest401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkThumbnailDigest404ApplicationJson)
    ], GetChartPkThumbnailDigestResponse.prototype, "getChartPkThumbnailDigest404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkThumbnailDigest500ApplicationJson)
    ], GetChartPkThumbnailDigestResponse.prototype, "getChartPkThumbnailDigest500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChartPkThumbnailDigestResponse.prototype, "statusCode", void 0);
    return GetChartPkThumbnailDigestResponse;
}(SpeakeasyBase));
export { GetChartPkThumbnailDigestResponse };
