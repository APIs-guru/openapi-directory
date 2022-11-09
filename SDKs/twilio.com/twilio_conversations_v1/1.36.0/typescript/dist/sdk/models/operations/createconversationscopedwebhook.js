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
export var CREATECONVERSATIONSCOPEDWEBHOOK_SERVERS = [
    "https://conversations.twilio.com",
];
var CreateConversationScopedWebhookPathParams = /** @class */ (function (_super) {
    __extends(CreateConversationScopedWebhookPathParams, _super);
    function CreateConversationScopedWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], CreateConversationScopedWebhookPathParams.prototype, "conversationSid", void 0);
    return CreateConversationScopedWebhookPathParams;
}(SpeakeasyBase));
export { CreateConversationScopedWebhookPathParams };
var CreateConversationScopedWebhookCreateConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(CreateConversationScopedWebhookCreateConversationScopedWebhookRequest, _super);
    function CreateConversationScopedWebhookCreateConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Configuration.Filters;" }),
        __metadata("design:type", Array)
    ], CreateConversationScopedWebhookCreateConversationScopedWebhookRequest.prototype, "configurationFilters", void 0);
    __decorate([
        Metadata({ data: "form, name=Configuration.FlowSid;" }),
        __metadata("design:type", String)
    ], CreateConversationScopedWebhookCreateConversationScopedWebhookRequest.prototype, "configurationFlowSid", void 0);
    __decorate([
        Metadata({ data: "form, name=Configuration.Method;" }),
        __metadata("design:type", String)
    ], CreateConversationScopedWebhookCreateConversationScopedWebhookRequest.prototype, "configurationMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=Configuration.ReplayAfter;" }),
        __metadata("design:type", Number)
    ], CreateConversationScopedWebhookCreateConversationScopedWebhookRequest.prototype, "configurationReplayAfter", void 0);
    __decorate([
        Metadata({ data: "form, name=Configuration.Triggers;" }),
        __metadata("design:type", Array)
    ], CreateConversationScopedWebhookCreateConversationScopedWebhookRequest.prototype, "configurationTriggers", void 0);
    __decorate([
        Metadata({ data: "form, name=Configuration.Url;" }),
        __metadata("design:type", String)
    ], CreateConversationScopedWebhookCreateConversationScopedWebhookRequest.prototype, "configurationUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=Target;" }),
        __metadata("design:type", String)
    ], CreateConversationScopedWebhookCreateConversationScopedWebhookRequest.prototype, "target", void 0);
    return CreateConversationScopedWebhookCreateConversationScopedWebhookRequest;
}(SpeakeasyBase));
export { CreateConversationScopedWebhookCreateConversationScopedWebhookRequest };
var CreateConversationScopedWebhookSecurity = /** @class */ (function (_super) {
    __extends(CreateConversationScopedWebhookSecurity, _super);
    function CreateConversationScopedWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateConversationScopedWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateConversationScopedWebhookSecurity;
}(SpeakeasyBase));
export { CreateConversationScopedWebhookSecurity };
var CreateConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(CreateConversationScopedWebhookRequest, _super);
    function CreateConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateConversationScopedWebhookRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateConversationScopedWebhookPathParams)
    ], CreateConversationScopedWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateConversationScopedWebhookCreateConversationScopedWebhookRequest)
    ], CreateConversationScopedWebhookRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateConversationScopedWebhookSecurity)
    ], CreateConversationScopedWebhookRequest.prototype, "security", void 0);
    return CreateConversationScopedWebhookRequest;
}(SpeakeasyBase));
export { CreateConversationScopedWebhookRequest };
var CreateConversationScopedWebhookResponse = /** @class */ (function (_super) {
    __extends(CreateConversationScopedWebhookResponse, _super);
    function CreateConversationScopedWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateConversationScopedWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateConversationScopedWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ConversationConversationScopedWebhook)
    ], CreateConversationScopedWebhookResponse.prototype, "conversationsV1ConversationConversationScopedWebhook", void 0);
    return CreateConversationScopedWebhookResponse;
}(SpeakeasyBase));
export { CreateConversationScopedWebhookResponse };
