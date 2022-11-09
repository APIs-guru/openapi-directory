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
export var CREATEMESSAGE_SERVERS = [
    "https://chat.twilio.com",
];
var CreateMessagePathParams = /** @class */ (function (_super) {
    __extends(CreateMessagePathParams, _super);
    function CreateMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], CreateMessagePathParams.prototype, "channelSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateMessagePathParams.prototype, "serviceSid", void 0);
    return CreateMessagePathParams;
}(SpeakeasyBase));
export { CreateMessagePathParams };
var CreateMessageHeaders = /** @class */ (function (_super) {
    __extends(CreateMessageHeaders, _super);
    function CreateMessageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], CreateMessageHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return CreateMessageHeaders;
}(SpeakeasyBase));
export { CreateMessageHeaders };
var CreateMessageCreateMessageRequest = /** @class */ (function (_super) {
    __extends(CreateMessageCreateMessageRequest, _super);
    function CreateMessageCreateMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=Body;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "body", void 0);
    __decorate([
        Metadata({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], CreateMessageCreateMessageRequest.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], CreateMessageCreateMessageRequest.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "form, name=From;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "form, name=LastUpdatedBy;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "lastUpdatedBy", void 0);
    __decorate([
        Metadata({ data: "form, name=MediaSid;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "mediaSid", void 0);
    return CreateMessageCreateMessageRequest;
}(SpeakeasyBase));
export { CreateMessageCreateMessageRequest };
var CreateMessageSecurity = /** @class */ (function (_super) {
    __extends(CreateMessageSecurity, _super);
    function CreateMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateMessageSecurity;
}(SpeakeasyBase));
export { CreateMessageSecurity };
var CreateMessageRequest = /** @class */ (function (_super) {
    __extends(CreateMessageRequest, _super);
    function CreateMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateMessageRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateMessagePathParams)
    ], CreateMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateMessageHeaders)
    ], CreateMessageRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateMessageCreateMessageRequest)
    ], CreateMessageRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateMessageSecurity)
    ], CreateMessageRequest.prototype, "security", void 0);
    return CreateMessageRequest;
}(SpeakeasyBase));
export { CreateMessageRequest };
var CreateMessageResponse = /** @class */ (function (_super) {
    __extends(CreateMessageResponse, _super);
    function CreateMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateMessageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ChatV2ServiceChannelMessage)
    ], CreateMessageResponse.prototype, "chatV2ServiceChannelMessage", void 0);
    return CreateMessageResponse;
}(SpeakeasyBase));
export { CreateMessageResponse };
