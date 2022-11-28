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
export var UpdateServiceServerList = [
    "https://notify.twilio.com",
];
var UpdateServicePathParams = /** @class */ (function (_super) {
    __extends(UpdateServicePathParams, _super);
    function UpdateServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateServicePathParams.prototype, "sid", void 0);
    return UpdateServicePathParams;
}(SpeakeasyBase));
export { UpdateServicePathParams };
var UpdateServiceUpdateServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceUpdateServiceRequest, _super);
    function UpdateServiceUpdateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AlexaSkillId;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "alexaSkillId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ApnCredentialSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "apnCredentialSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DefaultAlexaNotificationProtocolVersion;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "defaultAlexaNotificationProtocolVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DefaultApnNotificationProtocolVersion;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "defaultApnNotificationProtocolVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DefaultFcmNotificationProtocolVersion;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "defaultFcmNotificationProtocolVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DefaultGcmNotificationProtocolVersion;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "defaultGcmNotificationProtocolVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DeliveryCallbackEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "deliveryCallbackEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DeliveryCallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "deliveryCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FacebookMessengerPageId;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "facebookMessengerPageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FcmCredentialSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "fcmCredentialSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=GcmCredentialSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "gcmCredentialSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=LogEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "logEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MessagingServiceSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "messagingServiceSid", void 0);
    return UpdateServiceUpdateServiceRequest;
}(SpeakeasyBase));
export { UpdateServiceUpdateServiceRequest };
var UpdateServiceSecurity = /** @class */ (function (_super) {
    __extends(UpdateServiceSecurity, _super);
    function UpdateServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateServiceSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateServiceSecurity;
}(SpeakeasyBase));
export { UpdateServiceSecurity };
var UpdateServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceRequest, _super);
    function UpdateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateServiceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateServicePathParams)
    ], UpdateServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateServiceUpdateServiceRequest)
    ], UpdateServiceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateServiceSecurity)
    ], UpdateServiceRequest.prototype, "security", void 0);
    return UpdateServiceRequest;
}(SpeakeasyBase));
export { UpdateServiceRequest };
var UpdateServiceResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceResponse, _super);
    function UpdateServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotifyV1Service)
    ], UpdateServiceResponse.prototype, "notifyV1Service", void 0);
    return UpdateServiceResponse;
}(SpeakeasyBase));
export { UpdateServiceResponse };
