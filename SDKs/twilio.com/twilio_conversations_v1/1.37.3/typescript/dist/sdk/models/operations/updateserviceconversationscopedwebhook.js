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
export var UpdateServiceConversationScopedWebhookServerList = [
    "https://conversations.twilio.com",
];
var UpdateServiceConversationScopedWebhookPathParams = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationScopedWebhookPathParams, _super);
    function UpdateServiceConversationScopedWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationScopedWebhookPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationScopedWebhookPathParams.prototype, "conversationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationScopedWebhookPathParams.prototype, "sid", void 0);
    return UpdateServiceConversationScopedWebhookPathParams;
}(SpeakeasyBase));
export { UpdateServiceConversationScopedWebhookPathParams };
var UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest, _super);
    function UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Filters;" }),
        __metadata("design:type", Array)
    ], UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest.prototype, "configurationFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.FlowSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest.prototype, "configurationFlowSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Method;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest.prototype, "configurationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Triggers;" }),
        __metadata("design:type", Array)
    ], UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest.prototype, "configurationTriggers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Url;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest.prototype, "configurationUrl", void 0);
    return UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest;
}(SpeakeasyBase));
export { UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest };
var UpdateServiceConversationScopedWebhookSecurity = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationScopedWebhookSecurity, _super);
    function UpdateServiceConversationScopedWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateServiceConversationScopedWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateServiceConversationScopedWebhookSecurity;
}(SpeakeasyBase));
export { UpdateServiceConversationScopedWebhookSecurity };
var UpdateServiceConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationScopedWebhookRequest, _super);
    function UpdateServiceConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateServiceConversationScopedWebhookRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateServiceConversationScopedWebhookPathParams)
    ], UpdateServiceConversationScopedWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest)
    ], UpdateServiceConversationScopedWebhookRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateServiceConversationScopedWebhookSecurity)
    ], UpdateServiceConversationScopedWebhookRequest.prototype, "security", void 0);
    return UpdateServiceConversationScopedWebhookRequest;
}(SpeakeasyBase));
export { UpdateServiceConversationScopedWebhookRequest };
var UpdateServiceConversationScopedWebhookResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationScopedWebhookResponse, _super);
    function UpdateServiceConversationScopedWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateServiceConversationScopedWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateServiceConversationScopedWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook)
    ], UpdateServiceConversationScopedWebhookResponse.prototype, "conversationsV1ServiceServiceConversationServiceConversationScopedWebhook", void 0);
    return UpdateServiceConversationScopedWebhookResponse;
}(SpeakeasyBase));
export { UpdateServiceConversationScopedWebhookResponse };
