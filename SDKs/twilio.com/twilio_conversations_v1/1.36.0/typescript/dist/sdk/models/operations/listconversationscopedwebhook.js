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
export var LISTCONVERSATIONSCOPEDWEBHOOK_SERVERS = [
    "https://conversations.twilio.com",
];
var ListConversationScopedWebhookPathParams = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookPathParams, _super);
    function ListConversationScopedWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookPathParams.prototype, "conversationSid", void 0);
    return ListConversationScopedWebhookPathParams;
}(SpeakeasyBase));
export { ListConversationScopedWebhookPathParams };
var ListConversationScopedWebhookQueryParams = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookQueryParams, _super);
    function ListConversationScopedWebhookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConversationScopedWebhookQueryParams.prototype, "pageSize", void 0);
    return ListConversationScopedWebhookQueryParams;
}(SpeakeasyBase));
export { ListConversationScopedWebhookQueryParams };
var ListConversationScopedWebhookSecurity = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookSecurity, _super);
    function ListConversationScopedWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConversationScopedWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return ListConversationScopedWebhookSecurity;
}(SpeakeasyBase));
export { ListConversationScopedWebhookSecurity };
var ListConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookRequest, _super);
    function ListConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConversationScopedWebhookPathParams)
    ], ListConversationScopedWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConversationScopedWebhookQueryParams)
    ], ListConversationScopedWebhookRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConversationScopedWebhookSecurity)
    ], ListConversationScopedWebhookRequest.prototype, "security", void 0);
    return ListConversationScopedWebhookRequest;
}(SpeakeasyBase));
export { ListConversationScopedWebhookRequest };
var ListConversationScopedWebhookListConversationScopedWebhookResponseMeta = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookListConversationScopedWebhookResponseMeta, _super);
    function ListConversationScopedWebhookListConversationScopedWebhookResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "url", void 0);
    return ListConversationScopedWebhookListConversationScopedWebhookResponseMeta;
}(SpeakeasyBase));
export { ListConversationScopedWebhookListConversationScopedWebhookResponseMeta };
var ListConversationScopedWebhookListConversationScopedWebhookResponse = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookListConversationScopedWebhookResponse, _super);
    function ListConversationScopedWebhookListConversationScopedWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListConversationScopedWebhookListConversationScopedWebhookResponseMeta)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=webhooks", elemType: shared.ConversationsV1ConversationConversationScopedWebhook }),
        __metadata("design:type", Array)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponse.prototype, "webhooks", void 0);
    return ListConversationScopedWebhookListConversationScopedWebhookResponse;
}(SpeakeasyBase));
export { ListConversationScopedWebhookListConversationScopedWebhookResponse };
var ListConversationScopedWebhookResponse = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookResponse, _super);
    function ListConversationScopedWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConversationScopedWebhookListConversationScopedWebhookResponse)
    ], ListConversationScopedWebhookResponse.prototype, "listConversationScopedWebhookResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListConversationScopedWebhookResponse.prototype, "statusCode", void 0);
    return ListConversationScopedWebhookResponse;
}(SpeakeasyBase));
export { ListConversationScopedWebhookResponse };
