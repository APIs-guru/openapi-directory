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
export var FetchConversationScopedWebhookServerList = [
    "https://conversations.twilio.com",
];
var FetchConversationScopedWebhookPathParams = /** @class */ (function (_super) {
    __extends(FetchConversationScopedWebhookPathParams, _super);
    function FetchConversationScopedWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], FetchConversationScopedWebhookPathParams.prototype, "conversationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchConversationScopedWebhookPathParams.prototype, "sid", void 0);
    return FetchConversationScopedWebhookPathParams;
}(SpeakeasyBase));
export { FetchConversationScopedWebhookPathParams };
var FetchConversationScopedWebhookSecurity = /** @class */ (function (_super) {
    __extends(FetchConversationScopedWebhookSecurity, _super);
    function FetchConversationScopedWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchConversationScopedWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchConversationScopedWebhookSecurity;
}(SpeakeasyBase));
export { FetchConversationScopedWebhookSecurity };
var FetchConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(FetchConversationScopedWebhookRequest, _super);
    function FetchConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchConversationScopedWebhookRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchConversationScopedWebhookPathParams)
    ], FetchConversationScopedWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchConversationScopedWebhookSecurity)
    ], FetchConversationScopedWebhookRequest.prototype, "security", void 0);
    return FetchConversationScopedWebhookRequest;
}(SpeakeasyBase));
export { FetchConversationScopedWebhookRequest };
var FetchConversationScopedWebhookResponse = /** @class */ (function (_super) {
    __extends(FetchConversationScopedWebhookResponse, _super);
    function FetchConversationScopedWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchConversationScopedWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchConversationScopedWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversationsV1ConversationConversationScopedWebhook)
    ], FetchConversationScopedWebhookResponse.prototype, "conversationsV1ConversationConversationScopedWebhook", void 0);
    return FetchConversationScopedWebhookResponse;
}(SpeakeasyBase));
export { FetchConversationScopedWebhookResponse };
