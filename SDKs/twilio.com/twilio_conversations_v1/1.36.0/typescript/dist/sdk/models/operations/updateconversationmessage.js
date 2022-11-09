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
export var UPDATECONVERSATIONMESSAGE_SERVERS = [
    "https://conversations.twilio.com",
];
var UpdateConversationMessagePathParams = /** @class */ (function (_super) {
    __extends(UpdateConversationMessagePathParams, _super);
    function UpdateConversationMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], UpdateConversationMessagePathParams.prototype, "conversationSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateConversationMessagePathParams.prototype, "sid", void 0);
    return UpdateConversationMessagePathParams;
}(SpeakeasyBase));
export { UpdateConversationMessagePathParams };
var UpdateConversationMessageHeaders = /** @class */ (function (_super) {
    __extends(UpdateConversationMessageHeaders, _super);
    function UpdateConversationMessageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], UpdateConversationMessageHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return UpdateConversationMessageHeaders;
}(SpeakeasyBase));
export { UpdateConversationMessageHeaders };
var UpdateConversationMessageUpdateConversationMessageRequest = /** @class */ (function (_super) {
    __extends(UpdateConversationMessageUpdateConversationMessageRequest, _super);
    function UpdateConversationMessageUpdateConversationMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateConversationMessageUpdateConversationMessageRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=Author;" }),
        __metadata("design:type", String)
    ], UpdateConversationMessageUpdateConversationMessageRequest.prototype, "author", void 0);
    __decorate([
        Metadata({ data: "form, name=Body;" }),
        __metadata("design:type", String)
    ], UpdateConversationMessageUpdateConversationMessageRequest.prototype, "body", void 0);
    __decorate([
        Metadata({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], UpdateConversationMessageUpdateConversationMessageRequest.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], UpdateConversationMessageUpdateConversationMessageRequest.prototype, "dateUpdated", void 0);
    return UpdateConversationMessageUpdateConversationMessageRequest;
}(SpeakeasyBase));
export { UpdateConversationMessageUpdateConversationMessageRequest };
var UpdateConversationMessageSecurity = /** @class */ (function (_super) {
    __extends(UpdateConversationMessageSecurity, _super);
    function UpdateConversationMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateConversationMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateConversationMessageSecurity;
}(SpeakeasyBase));
export { UpdateConversationMessageSecurity };
var UpdateConversationMessageRequest = /** @class */ (function (_super) {
    __extends(UpdateConversationMessageRequest, _super);
    function UpdateConversationMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConversationMessageRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConversationMessagePathParams)
    ], UpdateConversationMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConversationMessageHeaders)
    ], UpdateConversationMessageRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateConversationMessageUpdateConversationMessageRequest)
    ], UpdateConversationMessageRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConversationMessageSecurity)
    ], UpdateConversationMessageRequest.prototype, "security", void 0);
    return UpdateConversationMessageRequest;
}(SpeakeasyBase));
export { UpdateConversationMessageRequest };
var UpdateConversationMessageResponse = /** @class */ (function (_super) {
    __extends(UpdateConversationMessageResponse, _super);
    function UpdateConversationMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConversationMessageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateConversationMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ConversationConversationMessage)
    ], UpdateConversationMessageResponse.prototype, "conversationsV1ConversationConversationMessage", void 0);
    return UpdateConversationMessageResponse;
}(SpeakeasyBase));
export { UpdateConversationMessageResponse };
