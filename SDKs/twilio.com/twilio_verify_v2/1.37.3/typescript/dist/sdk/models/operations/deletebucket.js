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
export var DeleteBucketServerList = [
    "https://verify.twilio.com",
];
var DeleteBucketPathParams = /** @class */ (function (_super) {
    __extends(DeleteBucketPathParams, _super);
    function DeleteBucketPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RateLimitSid" }),
        __metadata("design:type", String)
    ], DeleteBucketPathParams.prototype, "rateLimitSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteBucketPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteBucketPathParams.prototype, "sid", void 0);
    return DeleteBucketPathParams;
}(SpeakeasyBase));
export { DeleteBucketPathParams };
var DeleteBucketSecurity = /** @class */ (function (_super) {
    __extends(DeleteBucketSecurity, _super);
    function DeleteBucketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteBucketSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteBucketSecurity;
}(SpeakeasyBase));
export { DeleteBucketSecurity };
var DeleteBucketRequest = /** @class */ (function (_super) {
    __extends(DeleteBucketRequest, _super);
    function DeleteBucketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteBucketRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteBucketPathParams)
    ], DeleteBucketRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteBucketSecurity)
    ], DeleteBucketRequest.prototype, "security", void 0);
    return DeleteBucketRequest;
}(SpeakeasyBase));
export { DeleteBucketRequest };
var DeleteBucketResponse = /** @class */ (function (_super) {
    __extends(DeleteBucketResponse, _super);
    function DeleteBucketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteBucketResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteBucketResponse.prototype, "statusCode", void 0);
    return DeleteBucketResponse;
}(SpeakeasyBase));
export { DeleteBucketResponse };
