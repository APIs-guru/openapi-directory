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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var FETCHBUCKET_SERVERS = [
    "https://verify.twilio.com",
];
var FetchBucketPathParams = /** @class */ (function (_super) {
    __extends(FetchBucketPathParams, _super);
    function FetchBucketPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RateLimitSid" }),
        __metadata("design:type", String)
    ], FetchBucketPathParams.prototype, "rateLimitSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchBucketPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchBucketPathParams.prototype, "sid", void 0);
    return FetchBucketPathParams;
}(SpeakeasyBase));
export { FetchBucketPathParams };
var FetchBucketSecurity = /** @class */ (function (_super) {
    __extends(FetchBucketSecurity, _super);
    function FetchBucketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchBucketSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchBucketSecurity;
}(SpeakeasyBase));
export { FetchBucketSecurity };
var FetchBucketRequest = /** @class */ (function (_super) {
    __extends(FetchBucketRequest, _super);
    function FetchBucketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchBucketRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchBucketPathParams)
    ], FetchBucketRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchBucketSecurity)
    ], FetchBucketRequest.prototype, "security", void 0);
    return FetchBucketRequest;
}(SpeakeasyBase));
export { FetchBucketRequest };
var FetchBucketResponse = /** @class */ (function (_super) {
    __extends(FetchBucketResponse, _super);
    function FetchBucketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchBucketResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchBucketResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VerifyV2ServiceRateLimitBucket)
    ], FetchBucketResponse.prototype, "verifyV2ServiceRateLimitBucket", void 0);
    return FetchBucketResponse;
}(SpeakeasyBase));
export { FetchBucketResponse };
