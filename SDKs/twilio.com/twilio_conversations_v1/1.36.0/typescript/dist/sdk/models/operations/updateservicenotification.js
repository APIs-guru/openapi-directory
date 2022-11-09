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
export var UPDATESERVICENOTIFICATION_SERVERS = [
    "https://conversations.twilio.com",
];
var UpdateServiceNotificationPathParams = /** @class */ (function (_super) {
    __extends(UpdateServiceNotificationPathParams, _super);
    function UpdateServiceNotificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], UpdateServiceNotificationPathParams.prototype, "chatServiceSid", void 0);
    return UpdateServiceNotificationPathParams;
}(SpeakeasyBase));
export { UpdateServiceNotificationPathParams };
var UpdateServiceNotificationUpdateServiceNotificationRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceNotificationUpdateServiceNotificationRequest, _super);
    function UpdateServiceNotificationUpdateServiceNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AddedToConversation.Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceNotificationUpdateServiceNotificationRequest.prototype, "addedToConversationEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=AddedToConversation.Sound;" }),
        __metadata("design:type", String)
    ], UpdateServiceNotificationUpdateServiceNotificationRequest.prototype, "addedToConversationSound", void 0);
    __decorate([
        Metadata({ data: "form, name=AddedToConversation.Template;" }),
        __metadata("design:type", String)
    ], UpdateServiceNotificationUpdateServiceNotificationRequest.prototype, "addedToConversationTemplate", void 0);
    __decorate([
        Metadata({ data: "form, name=LogEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceNotificationUpdateServiceNotificationRequest.prototype, "logEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=NewMessage.BadgeCountEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceNotificationUpdateServiceNotificationRequest.prototype, "newMessageBadgeCountEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=NewMessage.Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceNotificationUpdateServiceNotificationRequest.prototype, "newMessageEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=NewMessage.Sound;" }),
        __metadata("design:type", String)
    ], UpdateServiceNotificationUpdateServiceNotificationRequest.prototype, "newMessageSound", void 0);
    __decorate([
        Metadata({ data: "form, name=NewMessage.Template;" }),
        __metadata("design:type", String)
    ], UpdateServiceNotificationUpdateServiceNotificationRequest.prototype, "newMessageTemplate", void 0);
    __decorate([
        Metadata({ data: "form, name=NewMessage.WithMedia.Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceNotificationUpdateServiceNotificationRequest.prototype, "newMessageWithMediaEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=NewMessage.WithMedia.Template;" }),
        __metadata("design:type", String)
    ], UpdateServiceNotificationUpdateServiceNotificationRequest.prototype, "newMessageWithMediaTemplate", void 0);
    __decorate([
        Metadata({ data: "form, name=RemovedFromConversation.Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceNotificationUpdateServiceNotificationRequest.prototype, "removedFromConversationEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=RemovedFromConversation.Sound;" }),
        __metadata("design:type", String)
    ], UpdateServiceNotificationUpdateServiceNotificationRequest.prototype, "removedFromConversationSound", void 0);
    __decorate([
        Metadata({ data: "form, name=RemovedFromConversation.Template;" }),
        __metadata("design:type", String)
    ], UpdateServiceNotificationUpdateServiceNotificationRequest.prototype, "removedFromConversationTemplate", void 0);
    return UpdateServiceNotificationUpdateServiceNotificationRequest;
}(SpeakeasyBase));
export { UpdateServiceNotificationUpdateServiceNotificationRequest };
var UpdateServiceNotificationSecurity = /** @class */ (function (_super) {
    __extends(UpdateServiceNotificationSecurity, _super);
    function UpdateServiceNotificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateServiceNotificationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateServiceNotificationSecurity;
}(SpeakeasyBase));
export { UpdateServiceNotificationSecurity };
var UpdateServiceNotificationRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceNotificationRequest, _super);
    function UpdateServiceNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceNotificationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceNotificationPathParams)
    ], UpdateServiceNotificationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateServiceNotificationUpdateServiceNotificationRequest)
    ], UpdateServiceNotificationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceNotificationSecurity)
    ], UpdateServiceNotificationRequest.prototype, "security", void 0);
    return UpdateServiceNotificationRequest;
}(SpeakeasyBase));
export { UpdateServiceNotificationRequest };
var UpdateServiceNotificationResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceNotificationResponse, _super);
    function UpdateServiceNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceNotificationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateServiceNotificationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConfigurationServiceNotification)
    ], UpdateServiceNotificationResponse.prototype, "conversationsV1ServiceServiceConfigurationServiceNotification", void 0);
    return UpdateServiceNotificationResponse;
}(SpeakeasyBase));
export { UpdateServiceNotificationResponse };
