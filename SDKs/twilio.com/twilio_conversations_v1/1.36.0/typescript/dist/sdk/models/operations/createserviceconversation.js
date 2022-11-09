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
export var CREATESERVICECONVERSATION_SERVERS = [
    "https://conversations.twilio.com",
];
var CreateServiceConversationPathParams = /** @class */ (function (_super) {
    __extends(CreateServiceConversationPathParams, _super);
    function CreateServiceConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], CreateServiceConversationPathParams.prototype, "chatServiceSid", void 0);
    return CreateServiceConversationPathParams;
}(SpeakeasyBase));
export { CreateServiceConversationPathParams };
var CreateServiceConversationHeaders = /** @class */ (function (_super) {
    __extends(CreateServiceConversationHeaders, _super);
    function CreateServiceConversationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], CreateServiceConversationHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return CreateServiceConversationHeaders;
}(SpeakeasyBase));
export { CreateServiceConversationHeaders };
var CreateServiceConversationCreateServiceConversationRequest = /** @class */ (function (_super) {
    __extends(CreateServiceConversationCreateServiceConversationRequest, _super);
    function CreateServiceConversationCreateServiceConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=MessagingServiceSid;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "messagingServiceSid", void 0);
    __decorate([
        Metadata({ data: "form, name=State;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "form, name=Timers.Closed;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "timersClosed", void 0);
    __decorate([
        Metadata({ data: "form, name=Timers.Inactive;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "timersInactive", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "uniqueName", void 0);
    return CreateServiceConversationCreateServiceConversationRequest;
}(SpeakeasyBase));
export { CreateServiceConversationCreateServiceConversationRequest };
var CreateServiceConversationSecurity = /** @class */ (function (_super) {
    __extends(CreateServiceConversationSecurity, _super);
    function CreateServiceConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateServiceConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateServiceConversationSecurity;
}(SpeakeasyBase));
export { CreateServiceConversationSecurity };
var CreateServiceConversationRequest = /** @class */ (function (_super) {
    __extends(CreateServiceConversationRequest, _super);
    function CreateServiceConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateServiceConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateServiceConversationPathParams)
    ], CreateServiceConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateServiceConversationHeaders)
    ], CreateServiceConversationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateServiceConversationCreateServiceConversationRequest)
    ], CreateServiceConversationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateServiceConversationSecurity)
    ], CreateServiceConversationRequest.prototype, "security", void 0);
    return CreateServiceConversationRequest;
}(SpeakeasyBase));
export { CreateServiceConversationRequest };
var CreateServiceConversationResponse = /** @class */ (function (_super) {
    __extends(CreateServiceConversationResponse, _super);
    function CreateServiceConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateServiceConversationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateServiceConversationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConversation)
    ], CreateServiceConversationResponse.prototype, "conversationsV1ServiceServiceConversation", void 0);
    return CreateServiceConversationResponse;
}(SpeakeasyBase));
export { CreateServiceConversationResponse };
