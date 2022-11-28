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
export var UpdateConversationScopedWebhookServerList = [
    "https://conversations.twilio.com",
];
var UpdateConversationScopedWebhookPathParams = /** @class */ (function (_super) {
    __extends(UpdateConversationScopedWebhookPathParams, _super);
    function UpdateConversationScopedWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], UpdateConversationScopedWebhookPathParams.prototype, "conversationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateConversationScopedWebhookPathParams.prototype, "sid", void 0);
    return UpdateConversationScopedWebhookPathParams;
}(SpeakeasyBase));
export { UpdateConversationScopedWebhookPathParams };
var UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest, _super);
    function UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Filters;" }),
        __metadata("design:type", Array)
    ], UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest.prototype, "configurationFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.FlowSid;" }),
        __metadata("design:type", String)
    ], UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest.prototype, "configurationFlowSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Method;" }),
        __metadata("design:type", String)
    ], UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest.prototype, "configurationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Triggers;" }),
        __metadata("design:type", Array)
    ], UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest.prototype, "configurationTriggers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Url;" }),
        __metadata("design:type", String)
    ], UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest.prototype, "configurationUrl", void 0);
    return UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest;
}(SpeakeasyBase));
export { UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest };
var UpdateConversationScopedWebhookSecurity = /** @class */ (function (_super) {
    __extends(UpdateConversationScopedWebhookSecurity, _super);
    function UpdateConversationScopedWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateConversationScopedWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateConversationScopedWebhookSecurity;
}(SpeakeasyBase));
export { UpdateConversationScopedWebhookSecurity };
var UpdateConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(UpdateConversationScopedWebhookRequest, _super);
    function UpdateConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateConversationScopedWebhookRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateConversationScopedWebhookPathParams)
    ], UpdateConversationScopedWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest)
    ], UpdateConversationScopedWebhookRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateConversationScopedWebhookSecurity)
    ], UpdateConversationScopedWebhookRequest.prototype, "security", void 0);
    return UpdateConversationScopedWebhookRequest;
}(SpeakeasyBase));
export { UpdateConversationScopedWebhookRequest };
var UpdateConversationScopedWebhookResponse = /** @class */ (function (_super) {
    __extends(UpdateConversationScopedWebhookResponse, _super);
    function UpdateConversationScopedWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateConversationScopedWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateConversationScopedWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversationsV1ConversationConversationScopedWebhook)
    ], UpdateConversationScopedWebhookResponse.prototype, "conversationsV1ConversationConversationScopedWebhook", void 0);
    return UpdateConversationScopedWebhookResponse;
}(SpeakeasyBase));
export { UpdateConversationScopedWebhookResponse };
