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
export var CreateConversationMessageServerList = [
    "https://conversations.twilio.com",
];
var CreateConversationMessagePathParams = /** @class */ (function (_super) {
    __extends(CreateConversationMessagePathParams, _super);
    function CreateConversationMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], CreateConversationMessagePathParams.prototype, "conversationSid", void 0);
    return CreateConversationMessagePathParams;
}(SpeakeasyBase));
export { CreateConversationMessagePathParams };
var CreateConversationMessageHeaders = /** @class */ (function (_super) {
    __extends(CreateConversationMessageHeaders, _super);
    function CreateConversationMessageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], CreateConversationMessageHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return CreateConversationMessageHeaders;
}(SpeakeasyBase));
export { CreateConversationMessageHeaders };
var CreateConversationMessageCreateConversationMessageRequest = /** @class */ (function (_super) {
    __extends(CreateConversationMessageCreateConversationMessageRequest, _super);
    function CreateConversationMessageCreateConversationMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateConversationMessageCreateConversationMessageRequest.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Author;" }),
        __metadata("design:type", String)
    ], CreateConversationMessageCreateConversationMessageRequest.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Body;" }),
        __metadata("design:type", String)
    ], CreateConversationMessageCreateConversationMessageRequest.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], CreateConversationMessageCreateConversationMessageRequest.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], CreateConversationMessageCreateConversationMessageRequest.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MediaSid;" }),
        __metadata("design:type", String)
    ], CreateConversationMessageCreateConversationMessageRequest.prototype, "mediaSid", void 0);
    return CreateConversationMessageCreateConversationMessageRequest;
}(SpeakeasyBase));
export { CreateConversationMessageCreateConversationMessageRequest };
var CreateConversationMessageSecurity = /** @class */ (function (_super) {
    __extends(CreateConversationMessageSecurity, _super);
    function CreateConversationMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateConversationMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateConversationMessageSecurity;
}(SpeakeasyBase));
export { CreateConversationMessageSecurity };
var CreateConversationMessageRequest = /** @class */ (function (_super) {
    __extends(CreateConversationMessageRequest, _super);
    function CreateConversationMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateConversationMessageRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateConversationMessagePathParams)
    ], CreateConversationMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateConversationMessageHeaders)
    ], CreateConversationMessageRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateConversationMessageCreateConversationMessageRequest)
    ], CreateConversationMessageRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateConversationMessageSecurity)
    ], CreateConversationMessageRequest.prototype, "security", void 0);
    return CreateConversationMessageRequest;
}(SpeakeasyBase));
export { CreateConversationMessageRequest };
var CreateConversationMessageResponse = /** @class */ (function (_super) {
    __extends(CreateConversationMessageResponse, _super);
    function CreateConversationMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateConversationMessageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateConversationMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversationsV1ConversationConversationMessage)
    ], CreateConversationMessageResponse.prototype, "conversationsV1ConversationConversationMessage", void 0);
    return CreateConversationMessageResponse;
}(SpeakeasyBase));
export { CreateConversationMessageResponse };
