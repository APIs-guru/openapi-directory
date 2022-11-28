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
export var CreateNotificationServerList = [
    "https://verify.twilio.com",
];
var CreateNotificationPathParams = /** @class */ (function (_super) {
    __extends(CreateNotificationPathParams, _super);
    function CreateNotificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChallengeSid" }),
        __metadata("design:type", String)
    ], CreateNotificationPathParams.prototype, "challengeSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], CreateNotificationPathParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateNotificationPathParams.prototype, "serviceSid", void 0);
    return CreateNotificationPathParams;
}(SpeakeasyBase));
export { CreateNotificationPathParams };
var CreateNotificationCreateNotificationRequest = /** @class */ (function (_super) {
    __extends(CreateNotificationCreateNotificationRequest, _super);
    function CreateNotificationCreateNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], CreateNotificationCreateNotificationRequest.prototype, "ttl", void 0);
    return CreateNotificationCreateNotificationRequest;
}(SpeakeasyBase));
export { CreateNotificationCreateNotificationRequest };
var CreateNotificationSecurity = /** @class */ (function (_super) {
    __extends(CreateNotificationSecurity, _super);
    function CreateNotificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateNotificationSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateNotificationSecurity;
}(SpeakeasyBase));
export { CreateNotificationSecurity };
var CreateNotificationRequest = /** @class */ (function (_super) {
    __extends(CreateNotificationRequest, _super);
    function CreateNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNotificationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNotificationPathParams)
    ], CreateNotificationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateNotificationCreateNotificationRequest)
    ], CreateNotificationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNotificationSecurity)
    ], CreateNotificationRequest.prototype, "security", void 0);
    return CreateNotificationRequest;
}(SpeakeasyBase));
export { CreateNotificationRequest };
var CreateNotificationResponse = /** @class */ (function (_super) {
    __extends(CreateNotificationResponse, _super);
    function CreateNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNotificationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNotificationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyV2ServiceEntityChallengeNotification)
    ], CreateNotificationResponse.prototype, "verifyV2ServiceEntityChallengeNotification", void 0);
    return CreateNotificationResponse;
}(SpeakeasyBase));
export { CreateNotificationResponse };
