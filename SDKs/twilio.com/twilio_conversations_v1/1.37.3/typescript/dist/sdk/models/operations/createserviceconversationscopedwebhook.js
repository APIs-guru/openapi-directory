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
export var CreateServiceConversationScopedWebhookServerList = [
    "https://conversations.twilio.com",
];
var CreateServiceConversationScopedWebhookPathParams = /** @class */ (function (_super) {
    __extends(CreateServiceConversationScopedWebhookPathParams, _super);
    function CreateServiceConversationScopedWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookPathParams.prototype, "conversationSid", void 0);
    return CreateServiceConversationScopedWebhookPathParams;
}(SpeakeasyBase));
export { CreateServiceConversationScopedWebhookPathParams };
var CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest, _super);
    function CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Filters;" }),
        __metadata("design:type", Array)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "configurationFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.FlowSid;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "configurationFlowSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Method;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "configurationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.ReplayAfter;" }),
        __metadata("design:type", Number)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "configurationReplayAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Triggers;" }),
        __metadata("design:type", Array)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "configurationTriggers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Url;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "configurationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Target;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "target", void 0);
    return CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest;
}(SpeakeasyBase));
export { CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest };
var CreateServiceConversationScopedWebhookSecurity = /** @class */ (function (_super) {
    __extends(CreateServiceConversationScopedWebhookSecurity, _super);
    function CreateServiceConversationScopedWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateServiceConversationScopedWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateServiceConversationScopedWebhookSecurity;
}(SpeakeasyBase));
export { CreateServiceConversationScopedWebhookSecurity };
var CreateServiceConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(CreateServiceConversationScopedWebhookRequest, _super);
    function CreateServiceConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateServiceConversationScopedWebhookPathParams)
    ], CreateServiceConversationScopedWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest)
    ], CreateServiceConversationScopedWebhookRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateServiceConversationScopedWebhookSecurity)
    ], CreateServiceConversationScopedWebhookRequest.prototype, "security", void 0);
    return CreateServiceConversationScopedWebhookRequest;
}(SpeakeasyBase));
export { CreateServiceConversationScopedWebhookRequest };
var CreateServiceConversationScopedWebhookResponse = /** @class */ (function (_super) {
    __extends(CreateServiceConversationScopedWebhookResponse, _super);
    function CreateServiceConversationScopedWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateServiceConversationScopedWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook)
    ], CreateServiceConversationScopedWebhookResponse.prototype, "conversationsV1ServiceServiceConversationServiceConversationScopedWebhook", void 0);
    return CreateServiceConversationScopedWebhookResponse;
}(SpeakeasyBase));
export { CreateServiceConversationScopedWebhookResponse };
