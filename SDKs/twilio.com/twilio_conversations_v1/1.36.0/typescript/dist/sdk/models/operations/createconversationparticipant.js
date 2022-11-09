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
export var CREATECONVERSATIONPARTICIPANT_SERVERS = [
    "https://conversations.twilio.com",
];
var CreateConversationParticipantPathParams = /** @class */ (function (_super) {
    __extends(CreateConversationParticipantPathParams, _super);
    function CreateConversationParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], CreateConversationParticipantPathParams.prototype, "conversationSid", void 0);
    return CreateConversationParticipantPathParams;
}(SpeakeasyBase));
export { CreateConversationParticipantPathParams };
var CreateConversationParticipantHeaders = /** @class */ (function (_super) {
    __extends(CreateConversationParticipantHeaders, _super);
    function CreateConversationParticipantHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], CreateConversationParticipantHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return CreateConversationParticipantHeaders;
}(SpeakeasyBase));
export { CreateConversationParticipantHeaders };
var CreateConversationParticipantCreateConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(CreateConversationParticipantCreateConversationParticipantRequest, _super);
    function CreateConversationParticipantCreateConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateConversationParticipantCreateConversationParticipantRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], CreateConversationParticipantCreateConversationParticipantRequest.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], CreateConversationParticipantCreateConversationParticipantRequest.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], CreateConversationParticipantCreateConversationParticipantRequest.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "form, name=MessagingBinding.Address;" }),
        __metadata("design:type", String)
    ], CreateConversationParticipantCreateConversationParticipantRequest.prototype, "messagingBindingAddress", void 0);
    __decorate([
        Metadata({ data: "form, name=MessagingBinding.ProjectedAddress;" }),
        __metadata("design:type", String)
    ], CreateConversationParticipantCreateConversationParticipantRequest.prototype, "messagingBindingProjectedAddress", void 0);
    __decorate([
        Metadata({ data: "form, name=MessagingBinding.ProxyAddress;" }),
        __metadata("design:type", String)
    ], CreateConversationParticipantCreateConversationParticipantRequest.prototype, "messagingBindingProxyAddress", void 0);
    __decorate([
        Metadata({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], CreateConversationParticipantCreateConversationParticipantRequest.prototype, "roleSid", void 0);
    return CreateConversationParticipantCreateConversationParticipantRequest;
}(SpeakeasyBase));
export { CreateConversationParticipantCreateConversationParticipantRequest };
var CreateConversationParticipantSecurity = /** @class */ (function (_super) {
    __extends(CreateConversationParticipantSecurity, _super);
    function CreateConversationParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateConversationParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateConversationParticipantSecurity;
}(SpeakeasyBase));
export { CreateConversationParticipantSecurity };
var CreateConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(CreateConversationParticipantRequest, _super);
    function CreateConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateConversationParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateConversationParticipantPathParams)
    ], CreateConversationParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateConversationParticipantHeaders)
    ], CreateConversationParticipantRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateConversationParticipantCreateConversationParticipantRequest)
    ], CreateConversationParticipantRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateConversationParticipantSecurity)
    ], CreateConversationParticipantRequest.prototype, "security", void 0);
    return CreateConversationParticipantRequest;
}(SpeakeasyBase));
export { CreateConversationParticipantRequest };
var CreateConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(CreateConversationParticipantResponse, _super);
    function CreateConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateConversationParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateConversationParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ConversationConversationParticipant)
    ], CreateConversationParticipantResponse.prototype, "conversationsV1ConversationConversationParticipant", void 0);
    return CreateConversationParticipantResponse;
}(SpeakeasyBase));
export { CreateConversationParticipantResponse };
