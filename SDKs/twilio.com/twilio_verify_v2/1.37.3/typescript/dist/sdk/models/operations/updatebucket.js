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
export var UpdateBucketServerList = [
    "https://verify.twilio.com",
];
var UpdateBucketPathParams = /** @class */ (function (_super) {
    __extends(UpdateBucketPathParams, _super);
    function UpdateBucketPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RateLimitSid" }),
        __metadata("design:type", String)
    ], UpdateBucketPathParams.prototype, "rateLimitSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateBucketPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateBucketPathParams.prototype, "sid", void 0);
    return UpdateBucketPathParams;
}(SpeakeasyBase));
export { UpdateBucketPathParams };
var UpdateBucketUpdateBucketRequest = /** @class */ (function (_super) {
    __extends(UpdateBucketUpdateBucketRequest, _super);
    function UpdateBucketUpdateBucketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Interval;" }),
        __metadata("design:type", Number)
    ], UpdateBucketUpdateBucketRequest.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Max;" }),
        __metadata("design:type", Number)
    ], UpdateBucketUpdateBucketRequest.prototype, "max", void 0);
    return UpdateBucketUpdateBucketRequest;
}(SpeakeasyBase));
export { UpdateBucketUpdateBucketRequest };
var UpdateBucketSecurity = /** @class */ (function (_super) {
    __extends(UpdateBucketSecurity, _super);
    function UpdateBucketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateBucketSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateBucketSecurity;
}(SpeakeasyBase));
export { UpdateBucketSecurity };
var UpdateBucketRequest = /** @class */ (function (_super) {
    __extends(UpdateBucketRequest, _super);
    function UpdateBucketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateBucketRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBucketPathParams)
    ], UpdateBucketRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateBucketUpdateBucketRequest)
    ], UpdateBucketRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBucketSecurity)
    ], UpdateBucketRequest.prototype, "security", void 0);
    return UpdateBucketRequest;
}(SpeakeasyBase));
export { UpdateBucketRequest };
var UpdateBucketResponse = /** @class */ (function (_super) {
    __extends(UpdateBucketResponse, _super);
    function UpdateBucketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateBucketResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateBucketResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyV2ServiceRateLimitBucket)
    ], UpdateBucketResponse.prototype, "verifyV2ServiceRateLimitBucket", void 0);
    return UpdateBucketResponse;
}(SpeakeasyBase));
export { UpdateBucketResponse };
