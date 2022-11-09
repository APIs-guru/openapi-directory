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
export var LISTSERVICECONVERSATIONSCOPEDWEBHOOK_SERVERS = [
    "https://conversations.twilio.com",
];
var ListServiceConversationScopedWebhookPathParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationScopedWebhookPathParams, _super);
    function ListServiceConversationScopedWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], ListServiceConversationScopedWebhookPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], ListServiceConversationScopedWebhookPathParams.prototype, "conversationSid", void 0);
    return ListServiceConversationScopedWebhookPathParams;
}(SpeakeasyBase));
export { ListServiceConversationScopedWebhookPathParams };
var ListServiceConversationScopedWebhookQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationScopedWebhookQueryParams, _super);
    function ListServiceConversationScopedWebhookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListServiceConversationScopedWebhookQueryParams.prototype, "pageSize", void 0);
    return ListServiceConversationScopedWebhookQueryParams;
}(SpeakeasyBase));
export { ListServiceConversationScopedWebhookQueryParams };
var ListServiceConversationScopedWebhookSecurity = /** @class */ (function (_super) {
    __extends(ListServiceConversationScopedWebhookSecurity, _super);
    function ListServiceConversationScopedWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListServiceConversationScopedWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return ListServiceConversationScopedWebhookSecurity;
}(SpeakeasyBase));
export { ListServiceConversationScopedWebhookSecurity };
var ListServiceConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(ListServiceConversationScopedWebhookRequest, _super);
    function ListServiceConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListServiceConversationScopedWebhookRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceConversationScopedWebhookPathParams)
    ], ListServiceConversationScopedWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceConversationScopedWebhookQueryParams)
    ], ListServiceConversationScopedWebhookRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceConversationScopedWebhookSecurity)
    ], ListServiceConversationScopedWebhookRequest.prototype, "security", void 0);
    return ListServiceConversationScopedWebhookRequest;
}(SpeakeasyBase));
export { ListServiceConversationScopedWebhookRequest };
var ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta = /** @class */ (function (_super) {
    __extends(ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta, _super);
    function ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta.prototype, "url", void 0);
    return ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta;
}(SpeakeasyBase));
export { ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta };
var ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse, _super);
    function ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta)
    ], ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=webhooks", elemType: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook }),
        __metadata("design:type", Array)
    ], ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse.prototype, "webhooks", void 0);
    return ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse;
}(SpeakeasyBase));
export { ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse };
var ListServiceConversationScopedWebhookResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationScopedWebhookResponse, _super);
    function ListServiceConversationScopedWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListServiceConversationScopedWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse)
    ], ListServiceConversationScopedWebhookResponse.prototype, "listServiceConversationScopedWebhookResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListServiceConversationScopedWebhookResponse.prototype, "statusCode", void 0);
    return ListServiceConversationScopedWebhookResponse;
}(SpeakeasyBase));
export { ListServiceConversationScopedWebhookResponse };
