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
export var CREATESERVICECONVERSATIONMESSAGE_SERVERS = [
    "https://conversations.twilio.com",
];
var CreateServiceConversationMessagePathParams = /** @class */ (function (_super) {
    __extends(CreateServiceConversationMessagePathParams, _super);
    function CreateServiceConversationMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], CreateServiceConversationMessagePathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], CreateServiceConversationMessagePathParams.prototype, "conversationSid", void 0);
    return CreateServiceConversationMessagePathParams;
}(SpeakeasyBase));
export { CreateServiceConversationMessagePathParams };
var CreateServiceConversationMessageHeaders = /** @class */ (function (_super) {
    __extends(CreateServiceConversationMessageHeaders, _super);
    function CreateServiceConversationMessageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], CreateServiceConversationMessageHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return CreateServiceConversationMessageHeaders;
}(SpeakeasyBase));
export { CreateServiceConversationMessageHeaders };
var CreateServiceConversationMessageCreateServiceConversationMessageRequest = /** @class */ (function (_super) {
    __extends(CreateServiceConversationMessageCreateServiceConversationMessageRequest, _super);
    function CreateServiceConversationMessageCreateServiceConversationMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationMessageCreateServiceConversationMessageRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=Author;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationMessageCreateServiceConversationMessageRequest.prototype, "author", void 0);
    __decorate([
        Metadata({ data: "form, name=Body;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationMessageCreateServiceConversationMessageRequest.prototype, "body", void 0);
    __decorate([
        Metadata({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], CreateServiceConversationMessageCreateServiceConversationMessageRequest.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], CreateServiceConversationMessageCreateServiceConversationMessageRequest.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "form, name=MediaSid;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationMessageCreateServiceConversationMessageRequest.prototype, "mediaSid", void 0);
    return CreateServiceConversationMessageCreateServiceConversationMessageRequest;
}(SpeakeasyBase));
export { CreateServiceConversationMessageCreateServiceConversationMessageRequest };
var CreateServiceConversationMessageSecurity = /** @class */ (function (_super) {
    __extends(CreateServiceConversationMessageSecurity, _super);
    function CreateServiceConversationMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateServiceConversationMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateServiceConversationMessageSecurity;
}(SpeakeasyBase));
export { CreateServiceConversationMessageSecurity };
var CreateServiceConversationMessageRequest = /** @class */ (function (_super) {
    __extends(CreateServiceConversationMessageRequest, _super);
    function CreateServiceConversationMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateServiceConversationMessageRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateServiceConversationMessagePathParams)
    ], CreateServiceConversationMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateServiceConversationMessageHeaders)
    ], CreateServiceConversationMessageRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateServiceConversationMessageCreateServiceConversationMessageRequest)
    ], CreateServiceConversationMessageRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateServiceConversationMessageSecurity)
    ], CreateServiceConversationMessageRequest.prototype, "security", void 0);
    return CreateServiceConversationMessageRequest;
}(SpeakeasyBase));
export { CreateServiceConversationMessageRequest };
var CreateServiceConversationMessageResponse = /** @class */ (function (_super) {
    __extends(CreateServiceConversationMessageResponse, _super);
    function CreateServiceConversationMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateServiceConversationMessageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateServiceConversationMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConversationServiceConversationMessage)
    ], CreateServiceConversationMessageResponse.prototype, "conversationsV1ServiceServiceConversationServiceConversationMessage", void 0);
    return CreateServiceConversationMessageResponse;
}(SpeakeasyBase));
export { CreateServiceConversationMessageResponse };
