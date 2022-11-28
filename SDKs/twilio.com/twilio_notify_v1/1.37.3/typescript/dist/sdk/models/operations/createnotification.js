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
    "https://notify.twilio.com",
];
var CreateNotificationPathParams = /** @class */ (function (_super) {
    __extends(CreateNotificationPathParams, _super);
    function CreateNotificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
        SpeakeasyMetadata({ data: "form, name=Action;" }),
        __metadata("design:type", String)
    ], CreateNotificationCreateNotificationRequest.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Alexa;" }),
        __metadata("design:type", Object)
    ], CreateNotificationCreateNotificationRequest.prototype, "alexa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Apn;" }),
        __metadata("design:type", Object)
    ], CreateNotificationCreateNotificationRequest.prototype, "apn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Body;" }),
        __metadata("design:type", String)
    ], CreateNotificationCreateNotificationRequest.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], CreateNotificationCreateNotificationRequest.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DeliveryCallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateNotificationCreateNotificationRequest.prototype, "deliveryCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FacebookMessenger;" }),
        __metadata("design:type", Object)
    ], CreateNotificationCreateNotificationRequest.prototype, "facebookMessenger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Fcm;" }),
        __metadata("design:type", Object)
    ], CreateNotificationCreateNotificationRequest.prototype, "fcm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Gcm;" }),
        __metadata("design:type", Object)
    ], CreateNotificationCreateNotificationRequest.prototype, "gcm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Identity;" }),
        __metadata("design:type", Array)
    ], CreateNotificationCreateNotificationRequest.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Priority;" }),
        __metadata("design:type", String)
    ], CreateNotificationCreateNotificationRequest.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Segment;" }),
        __metadata("design:type", Array)
    ], CreateNotificationCreateNotificationRequest.prototype, "segment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Sms;" }),
        __metadata("design:type", Object)
    ], CreateNotificationCreateNotificationRequest.prototype, "sms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Sound;" }),
        __metadata("design:type", String)
    ], CreateNotificationCreateNotificationRequest.prototype, "sound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Tag;" }),
        __metadata("design:type", Array)
    ], CreateNotificationCreateNotificationRequest.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Title;" }),
        __metadata("design:type", String)
    ], CreateNotificationCreateNotificationRequest.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ToBinding;" }),
        __metadata("design:type", Array)
    ], CreateNotificationCreateNotificationRequest.prototype, "toBinding", void 0);
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
        __metadata("design:type", shared.NotifyV1ServiceNotification)
    ], CreateNotificationResponse.prototype, "notifyV1ServiceNotification", void 0);
    return CreateNotificationResponse;
}(SpeakeasyBase));
export { CreateNotificationResponse };
