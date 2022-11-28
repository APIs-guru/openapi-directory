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
export var CreateRateLimitServerList = [
    "https://verify.twilio.com",
];
var CreateRateLimitPathParams = /** @class */ (function (_super) {
    __extends(CreateRateLimitPathParams, _super);
    function CreateRateLimitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateRateLimitPathParams.prototype, "serviceSid", void 0);
    return CreateRateLimitPathParams;
}(SpeakeasyBase));
export { CreateRateLimitPathParams };
var CreateRateLimitCreateRateLimitRequest = /** @class */ (function (_super) {
    __extends(CreateRateLimitCreateRateLimitRequest, _super);
    function CreateRateLimitCreateRateLimitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Description;" }),
        __metadata("design:type", String)
    ], CreateRateLimitCreateRateLimitRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateRateLimitCreateRateLimitRequest.prototype, "uniqueName", void 0);
    return CreateRateLimitCreateRateLimitRequest;
}(SpeakeasyBase));
export { CreateRateLimitCreateRateLimitRequest };
var CreateRateLimitSecurity = /** @class */ (function (_super) {
    __extends(CreateRateLimitSecurity, _super);
    function CreateRateLimitSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateRateLimitSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateRateLimitSecurity;
}(SpeakeasyBase));
export { CreateRateLimitSecurity };
var CreateRateLimitRequest = /** @class */ (function (_super) {
    __extends(CreateRateLimitRequest, _super);
    function CreateRateLimitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRateLimitRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRateLimitPathParams)
    ], CreateRateLimitRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateRateLimitCreateRateLimitRequest)
    ], CreateRateLimitRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRateLimitSecurity)
    ], CreateRateLimitRequest.prototype, "security", void 0);
    return CreateRateLimitRequest;
}(SpeakeasyBase));
export { CreateRateLimitRequest };
var CreateRateLimitResponse = /** @class */ (function (_super) {
    __extends(CreateRateLimitResponse, _super);
    function CreateRateLimitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRateLimitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateRateLimitResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyV2ServiceRateLimit)
    ], CreateRateLimitResponse.prototype, "verifyV2ServiceRateLimit", void 0);
    return CreateRateLimitResponse;
}(SpeakeasyBase));
export { CreateRateLimitResponse };
