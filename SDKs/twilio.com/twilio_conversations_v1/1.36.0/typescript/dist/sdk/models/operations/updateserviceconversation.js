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
export var UPDATESERVICECONVERSATION_SERVERS = [
    "https://conversations.twilio.com",
];
var UpdateServiceConversationPathParams = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationPathParams, _super);
    function UpdateServiceConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationPathParams.prototype, "sid", void 0);
    return UpdateServiceConversationPathParams;
}(SpeakeasyBase));
export { UpdateServiceConversationPathParams };
var UpdateServiceConversationHeaders = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationHeaders, _super);
    function UpdateServiceConversationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return UpdateServiceConversationHeaders;
}(SpeakeasyBase));
export { UpdateServiceConversationHeaders };
var UpdateServiceConversationUpdateServiceConversationRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationUpdateServiceConversationRequest, _super);
    function UpdateServiceConversationUpdateServiceConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationUpdateServiceConversationRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], UpdateServiceConversationUpdateServiceConversationRequest.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], UpdateServiceConversationUpdateServiceConversationRequest.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationUpdateServiceConversationRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=MessagingServiceSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationUpdateServiceConversationRequest.prototype, "messagingServiceSid", void 0);
    __decorate([
        Metadata({ data: "form, name=State;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationUpdateServiceConversationRequest.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "form, name=Timers.Closed;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationUpdateServiceConversationRequest.prototype, "timersClosed", void 0);
    __decorate([
        Metadata({ data: "form, name=Timers.Inactive;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationUpdateServiceConversationRequest.prototype, "timersInactive", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationUpdateServiceConversationRequest.prototype, "uniqueName", void 0);
    return UpdateServiceConversationUpdateServiceConversationRequest;
}(SpeakeasyBase));
export { UpdateServiceConversationUpdateServiceConversationRequest };
var UpdateServiceConversationSecurity = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationSecurity, _super);
    function UpdateServiceConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateServiceConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateServiceConversationSecurity;
}(SpeakeasyBase));
export { UpdateServiceConversationSecurity };
var UpdateServiceConversationRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationRequest, _super);
    function UpdateServiceConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceConversationPathParams)
    ], UpdateServiceConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceConversationHeaders)
    ], UpdateServiceConversationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateServiceConversationUpdateServiceConversationRequest)
    ], UpdateServiceConversationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceConversationSecurity)
    ], UpdateServiceConversationRequest.prototype, "security", void 0);
    return UpdateServiceConversationRequest;
}(SpeakeasyBase));
export { UpdateServiceConversationRequest };
var UpdateServiceConversationResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationResponse, _super);
    function UpdateServiceConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceConversationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateServiceConversationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConversation)
    ], UpdateServiceConversationResponse.prototype, "conversationsV1ServiceServiceConversation", void 0);
    return UpdateServiceConversationResponse;
}(SpeakeasyBase));
export { UpdateServiceConversationResponse };
