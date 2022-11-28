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
export var FetchVerificationAttemptServerList = [
    "https://verify.twilio.com",
];
var FetchVerificationAttemptPathParams = /** @class */ (function (_super) {
    __extends(FetchVerificationAttemptPathParams, _super);
    function FetchVerificationAttemptPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchVerificationAttemptPathParams.prototype, "sid", void 0);
    return FetchVerificationAttemptPathParams;
}(SpeakeasyBase));
export { FetchVerificationAttemptPathParams };
var FetchVerificationAttemptSecurity = /** @class */ (function (_super) {
    __extends(FetchVerificationAttemptSecurity, _super);
    function FetchVerificationAttemptSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchVerificationAttemptSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchVerificationAttemptSecurity;
}(SpeakeasyBase));
export { FetchVerificationAttemptSecurity };
var FetchVerificationAttemptRequest = /** @class */ (function (_super) {
    __extends(FetchVerificationAttemptRequest, _super);
    function FetchVerificationAttemptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchVerificationAttemptRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchVerificationAttemptPathParams)
    ], FetchVerificationAttemptRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchVerificationAttemptSecurity)
    ], FetchVerificationAttemptRequest.prototype, "security", void 0);
    return FetchVerificationAttemptRequest;
}(SpeakeasyBase));
export { FetchVerificationAttemptRequest };
var FetchVerificationAttemptResponse = /** @class */ (function (_super) {
    __extends(FetchVerificationAttemptResponse, _super);
    function FetchVerificationAttemptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchVerificationAttemptResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchVerificationAttemptResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyV2VerificationAttempt)
    ], FetchVerificationAttemptResponse.prototype, "verifyV2VerificationAttempt", void 0);
    return FetchVerificationAttemptResponse;
}(SpeakeasyBase));
export { FetchVerificationAttemptResponse };
