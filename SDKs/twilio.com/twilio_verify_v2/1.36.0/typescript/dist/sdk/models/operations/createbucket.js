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
export var CREATEBUCKET_SERVERS = [
    "https://verify.twilio.com",
];
var CreateBucketPathParams = /** @class */ (function (_super) {
    __extends(CreateBucketPathParams, _super);
    function CreateBucketPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RateLimitSid" }),
        __metadata("design:type", String)
    ], CreateBucketPathParams.prototype, "rateLimitSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateBucketPathParams.prototype, "serviceSid", void 0);
    return CreateBucketPathParams;
}(SpeakeasyBase));
export { CreateBucketPathParams };
var CreateBucketCreateBucketRequest = /** @class */ (function (_super) {
    __extends(CreateBucketCreateBucketRequest, _super);
    function CreateBucketCreateBucketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Interval;" }),
        __metadata("design:type", Number)
    ], CreateBucketCreateBucketRequest.prototype, "interval", void 0);
    __decorate([
        Metadata({ data: "form, name=Max;" }),
        __metadata("design:type", Number)
    ], CreateBucketCreateBucketRequest.prototype, "max", void 0);
    return CreateBucketCreateBucketRequest;
}(SpeakeasyBase));
export { CreateBucketCreateBucketRequest };
var CreateBucketSecurity = /** @class */ (function (_super) {
    __extends(CreateBucketSecurity, _super);
    function CreateBucketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateBucketSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateBucketSecurity;
}(SpeakeasyBase));
export { CreateBucketSecurity };
var CreateBucketRequest = /** @class */ (function (_super) {
    __extends(CreateBucketRequest, _super);
    function CreateBucketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateBucketRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateBucketPathParams)
    ], CreateBucketRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateBucketCreateBucketRequest)
    ], CreateBucketRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateBucketSecurity)
    ], CreateBucketRequest.prototype, "security", void 0);
    return CreateBucketRequest;
}(SpeakeasyBase));
export { CreateBucketRequest };
var CreateBucketResponse = /** @class */ (function (_super) {
    __extends(CreateBucketResponse, _super);
    function CreateBucketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateBucketResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateBucketResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VerifyV2ServiceRateLimitBucket)
    ], CreateBucketResponse.prototype, "verifyV2ServiceRateLimitBucket", void 0);
    return CreateBucketResponse;
}(SpeakeasyBase));
export { CreateBucketResponse };
