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
export var UPDATECONVERSATION_SERVERS = [
    "https://conversations.twilio.com",
];
var UpdateConversationPathParams = /** @class */ (function (_super) {
    __extends(UpdateConversationPathParams, _super);
    function UpdateConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateConversationPathParams.prototype, "sid", void 0);
    return UpdateConversationPathParams;
}(SpeakeasyBase));
export { UpdateConversationPathParams };
var UpdateConversationHeaders = /** @class */ (function (_super) {
    __extends(UpdateConversationHeaders, _super);
    function UpdateConversationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], UpdateConversationHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return UpdateConversationHeaders;
}(SpeakeasyBase));
export { UpdateConversationHeaders };
var UpdateConversationUpdateConversationRequest = /** @class */ (function (_super) {
    __extends(UpdateConversationUpdateConversationRequest, _super);
    function UpdateConversationUpdateConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateConversationUpdateConversationRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], UpdateConversationUpdateConversationRequest.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], UpdateConversationUpdateConversationRequest.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateConversationUpdateConversationRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=MessagingServiceSid;" }),
        __metadata("design:type", String)
    ], UpdateConversationUpdateConversationRequest.prototype, "messagingServiceSid", void 0);
    __decorate([
        Metadata({ data: "form, name=State;" }),
        __metadata("design:type", String)
    ], UpdateConversationUpdateConversationRequest.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "form, name=Timers.Closed;" }),
        __metadata("design:type", String)
    ], UpdateConversationUpdateConversationRequest.prototype, "timersClosed", void 0);
    __decorate([
        Metadata({ data: "form, name=Timers.Inactive;" }),
        __metadata("design:type", String)
    ], UpdateConversationUpdateConversationRequest.prototype, "timersInactive", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateConversationUpdateConversationRequest.prototype, "uniqueName", void 0);
    return UpdateConversationUpdateConversationRequest;
}(SpeakeasyBase));
export { UpdateConversationUpdateConversationRequest };
var UpdateConversationSecurity = /** @class */ (function (_super) {
    __extends(UpdateConversationSecurity, _super);
    function UpdateConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateConversationSecurity;
}(SpeakeasyBase));
export { UpdateConversationSecurity };
var UpdateConversationRequest = /** @class */ (function (_super) {
    __extends(UpdateConversationRequest, _super);
    function UpdateConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConversationPathParams)
    ], UpdateConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConversationHeaders)
    ], UpdateConversationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateConversationUpdateConversationRequest)
    ], UpdateConversationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConversationSecurity)
    ], UpdateConversationRequest.prototype, "security", void 0);
    return UpdateConversationRequest;
}(SpeakeasyBase));
export { UpdateConversationRequest };
var UpdateConversationResponse = /** @class */ (function (_super) {
    __extends(UpdateConversationResponse, _super);
    function UpdateConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConversationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateConversationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1Conversation)
    ], UpdateConversationResponse.prototype, "conversationsV1Conversation", void 0);
    return UpdateConversationResponse;
}(SpeakeasyBase));
export { UpdateConversationResponse };
