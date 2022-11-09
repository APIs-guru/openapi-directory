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
export var FETCHCONVERSATIONMESSAGE_SERVERS = [
    "https://conversations.twilio.com",
];
var FetchConversationMessagePathParams = /** @class */ (function (_super) {
    __extends(FetchConversationMessagePathParams, _super);
    function FetchConversationMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], FetchConversationMessagePathParams.prototype, "conversationSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchConversationMessagePathParams.prototype, "sid", void 0);
    return FetchConversationMessagePathParams;
}(SpeakeasyBase));
export { FetchConversationMessagePathParams };
var FetchConversationMessageSecurity = /** @class */ (function (_super) {
    __extends(FetchConversationMessageSecurity, _super);
    function FetchConversationMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchConversationMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchConversationMessageSecurity;
}(SpeakeasyBase));
export { FetchConversationMessageSecurity };
var FetchConversationMessageRequest = /** @class */ (function (_super) {
    __extends(FetchConversationMessageRequest, _super);
    function FetchConversationMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchConversationMessageRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchConversationMessagePathParams)
    ], FetchConversationMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchConversationMessageSecurity)
    ], FetchConversationMessageRequest.prototype, "security", void 0);
    return FetchConversationMessageRequest;
}(SpeakeasyBase));
export { FetchConversationMessageRequest };
var FetchConversationMessageResponse = /** @class */ (function (_super) {
    __extends(FetchConversationMessageResponse, _super);
    function FetchConversationMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchConversationMessageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchConversationMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ConversationConversationMessage)
    ], FetchConversationMessageResponse.prototype, "conversationsV1ConversationConversationMessage", void 0);
    return FetchConversationMessageResponse;
}(SpeakeasyBase));
export { FetchConversationMessageResponse };
