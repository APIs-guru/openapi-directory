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
export var UPDATECONVERSATIONPARTICIPANT_SERVERS = [
    "https://conversations.twilio.com",
];
var UpdateConversationParticipantPathParams = /** @class */ (function (_super) {
    __extends(UpdateConversationParticipantPathParams, _super);
    function UpdateConversationParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantPathParams.prototype, "conversationSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantPathParams.prototype, "sid", void 0);
    return UpdateConversationParticipantPathParams;
}(SpeakeasyBase));
export { UpdateConversationParticipantPathParams };
var UpdateConversationParticipantHeaders = /** @class */ (function (_super) {
    __extends(UpdateConversationParticipantHeaders, _super);
    function UpdateConversationParticipantHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return UpdateConversationParticipantHeaders;
}(SpeakeasyBase));
export { UpdateConversationParticipantHeaders };
var UpdateConversationParticipantUpdateConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(UpdateConversationParticipantUpdateConversationParticipantRequest, _super);
    function UpdateConversationParticipantUpdateConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "form, name=LastReadMessageIndex;" }),
        __metadata("design:type", Number)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "lastReadMessageIndex", void 0);
    __decorate([
        Metadata({ data: "form, name=LastReadTimestamp;" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "lastReadTimestamp", void 0);
    __decorate([
        Metadata({ data: "form, name=MessagingBinding.ProjectedAddress;" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "messagingBindingProjectedAddress", void 0);
    __decorate([
        Metadata({ data: "form, name=MessagingBinding.ProxyAddress;" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "messagingBindingProxyAddress", void 0);
    __decorate([
        Metadata({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "roleSid", void 0);
    return UpdateConversationParticipantUpdateConversationParticipantRequest;
}(SpeakeasyBase));
export { UpdateConversationParticipantUpdateConversationParticipantRequest };
var UpdateConversationParticipantSecurity = /** @class */ (function (_super) {
    __extends(UpdateConversationParticipantSecurity, _super);
    function UpdateConversationParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateConversationParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateConversationParticipantSecurity;
}(SpeakeasyBase));
export { UpdateConversationParticipantSecurity };
var UpdateConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(UpdateConversationParticipantRequest, _super);
    function UpdateConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConversationParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConversationParticipantPathParams)
    ], UpdateConversationParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConversationParticipantHeaders)
    ], UpdateConversationParticipantRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateConversationParticipantUpdateConversationParticipantRequest)
    ], UpdateConversationParticipantRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConversationParticipantSecurity)
    ], UpdateConversationParticipantRequest.prototype, "security", void 0);
    return UpdateConversationParticipantRequest;
}(SpeakeasyBase));
export { UpdateConversationParticipantRequest };
var UpdateConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(UpdateConversationParticipantResponse, _super);
    function UpdateConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConversationParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateConversationParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ConversationConversationParticipant)
    ], UpdateConversationParticipantResponse.prototype, "conversationsV1ConversationConversationParticipant", void 0);
    return UpdateConversationParticipantResponse;
}(SpeakeasyBase));
export { UpdateConversationParticipantResponse };
