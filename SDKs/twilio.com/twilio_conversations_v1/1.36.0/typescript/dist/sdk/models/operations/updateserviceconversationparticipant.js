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
export var UPDATESERVICECONVERSATIONPARTICIPANT_SERVERS = [
    "https://conversations.twilio.com",
];
var UpdateServiceConversationParticipantPathParams = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationParticipantPathParams, _super);
    function UpdateServiceConversationParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantPathParams.prototype, "conversationSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantPathParams.prototype, "sid", void 0);
    return UpdateServiceConversationParticipantPathParams;
}(SpeakeasyBase));
export { UpdateServiceConversationParticipantPathParams };
var UpdateServiceConversationParticipantHeaders = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationParticipantHeaders, _super);
    function UpdateServiceConversationParticipantHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return UpdateServiceConversationParticipantHeaders;
}(SpeakeasyBase));
export { UpdateServiceConversationParticipantHeaders };
var UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest, _super);
    function UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "form, name=LastReadMessageIndex;" }),
        __metadata("design:type", Number)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "lastReadMessageIndex", void 0);
    __decorate([
        Metadata({ data: "form, name=LastReadTimestamp;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "lastReadTimestamp", void 0);
    __decorate([
        Metadata({ data: "form, name=MessagingBinding.ProjectedAddress;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "messagingBindingProjectedAddress", void 0);
    __decorate([
        Metadata({ data: "form, name=MessagingBinding.ProxyAddress;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "messagingBindingProxyAddress", void 0);
    __decorate([
        Metadata({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "roleSid", void 0);
    return UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest;
}(SpeakeasyBase));
export { UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest };
var UpdateServiceConversationParticipantSecurity = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationParticipantSecurity, _super);
    function UpdateServiceConversationParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateServiceConversationParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateServiceConversationParticipantSecurity;
}(SpeakeasyBase));
export { UpdateServiceConversationParticipantSecurity };
var UpdateServiceConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationParticipantRequest, _super);
    function UpdateServiceConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceConversationParticipantPathParams)
    ], UpdateServiceConversationParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceConversationParticipantHeaders)
    ], UpdateServiceConversationParticipantRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest)
    ], UpdateServiceConversationParticipantRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceConversationParticipantSecurity)
    ], UpdateServiceConversationParticipantRequest.prototype, "security", void 0);
    return UpdateServiceConversationParticipantRequest;
}(SpeakeasyBase));
export { UpdateServiceConversationParticipantRequest };
var UpdateServiceConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationParticipantResponse, _super);
    function UpdateServiceConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateServiceConversationParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant)
    ], UpdateServiceConversationParticipantResponse.prototype, "conversationsV1ServiceServiceConversationServiceConversationParticipant", void 0);
    return UpdateServiceConversationParticipantResponse;
}(SpeakeasyBase));
export { UpdateServiceConversationParticipantResponse };
