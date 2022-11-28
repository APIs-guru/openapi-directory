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
var GetDashboardPkThumbnailDigestPathParams = /** @class */ (function (_super) {
    __extends(GetDashboardPkThumbnailDigestPathParams, _super);
    function GetDashboardPkThumbnailDigestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=digest" }),
        __metadata("design:type", String)
    ], GetDashboardPkThumbnailDigestPathParams.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetDashboardPkThumbnailDigestPathParams.prototype, "pk", void 0);
    return GetDashboardPkThumbnailDigestPathParams;
}(SpeakeasyBase));
export { GetDashboardPkThumbnailDigestPathParams };
var GetDashboardPkThumbnailDigestQueryParams = /** @class */ (function (_super) {
    __extends(GetDashboardPkThumbnailDigestQueryParams, _super);
    function GetDashboardPkThumbnailDigestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.ThumbnailQuerySchema)
    ], GetDashboardPkThumbnailDigestQueryParams.prototype, "q", void 0);
    return GetDashboardPkThumbnailDigestQueryParams;
}(SpeakeasyBase));
export { GetDashboardPkThumbnailDigestQueryParams };
var GetDashboardPkThumbnailDigestSecurity = /** @class */ (function (_super) {
    __extends(GetDashboardPkThumbnailDigestSecurity, _super);
    function GetDashboardPkThumbnailDigestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDashboardPkThumbnailDigestSecurity.prototype, "jwt", void 0);
    return GetDashboardPkThumbnailDigestSecurity;
}(SpeakeasyBase));
export { GetDashboardPkThumbnailDigestSecurity };
var GetDashboardPkThumbnailDigest202ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardPkThumbnailDigest202ApplicationJson, _super);
    function GetDashboardPkThumbnailDigest202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardPkThumbnailDigest202ApplicationJson.prototype, "message", void 0);
    return GetDashboardPkThumbnailDigest202ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardPkThumbnailDigest202ApplicationJson };
var GetDashboardPkThumbnailDigest401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardPkThumbnailDigest401ApplicationJson, _super);
    function GetDashboardPkThumbnailDigest401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardPkThumbnailDigest401ApplicationJson.prototype, "message", void 0);
    return GetDashboardPkThumbnailDigest401ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardPkThumbnailDigest401ApplicationJson };
var GetDashboardPkThumbnailDigest404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardPkThumbnailDigest404ApplicationJson, _super);
    function GetDashboardPkThumbnailDigest404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardPkThumbnailDigest404ApplicationJson.prototype, "message", void 0);
    return GetDashboardPkThumbnailDigest404ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardPkThumbnailDigest404ApplicationJson };
var GetDashboardPkThumbnailDigest422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardPkThumbnailDigest422ApplicationJson, _super);
    function GetDashboardPkThumbnailDigest422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardPkThumbnailDigest422ApplicationJson.prototype, "message", void 0);
    return GetDashboardPkThumbnailDigest422ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardPkThumbnailDigest422ApplicationJson };
var GetDashboardPkThumbnailDigest500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardPkThumbnailDigest500ApplicationJson, _super);
    function GetDashboardPkThumbnailDigest500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardPkThumbnailDigest500ApplicationJson.prototype, "message", void 0);
    return GetDashboardPkThumbnailDigest500ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardPkThumbnailDigest500ApplicationJson };
var GetDashboardPkThumbnailDigestRequest = /** @class */ (function (_super) {
    __extends(GetDashboardPkThumbnailDigestRequest, _super);
    function GetDashboardPkThumbnailDigestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardPkThumbnailDigestPathParams)
    ], GetDashboardPkThumbnailDigestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardPkThumbnailDigestQueryParams)
    ], GetDashboardPkThumbnailDigestRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardPkThumbnailDigestSecurity)
    ], GetDashboardPkThumbnailDigestRequest.prototype, "security", void 0);
    return GetDashboardPkThumbnailDigestRequest;
}(SpeakeasyBase));
export { GetDashboardPkThumbnailDigestRequest };
var GetDashboardPkThumbnailDigestResponse = /** @class */ (function (_super) {
    __extends(GetDashboardPkThumbnailDigestResponse, _super);
    function GetDashboardPkThumbnailDigestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDashboardPkThumbnailDigestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDashboardPkThumbnailDigestResponse.prototype, "getDashboardPkThumbnailDigest200ImageWildcardBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardPkThumbnailDigest202ApplicationJson)
    ], GetDashboardPkThumbnailDigestResponse.prototype, "getDashboardPkThumbnailDigest202ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardPkThumbnailDigest401ApplicationJson)
    ], GetDashboardPkThumbnailDigestResponse.prototype, "getDashboardPkThumbnailDigest401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardPkThumbnailDigest404ApplicationJson)
    ], GetDashboardPkThumbnailDigestResponse.prototype, "getDashboardPkThumbnailDigest404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardPkThumbnailDigest422ApplicationJson)
    ], GetDashboardPkThumbnailDigestResponse.prototype, "getDashboardPkThumbnailDigest422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardPkThumbnailDigest500ApplicationJson)
    ], GetDashboardPkThumbnailDigestResponse.prototype, "getDashboardPkThumbnailDigest500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDashboardPkThumbnailDigestResponse.prototype, "statusCode", void 0);
    return GetDashboardPkThumbnailDigestResponse;
}(SpeakeasyBase));
export { GetDashboardPkThumbnailDigestResponse };
