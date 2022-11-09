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
export var LISTCONVERSATIONMESSAGERECEIPT_SERVERS = [
    "https://conversations.twilio.com",
];
var ListConversationMessageReceiptPathParams = /** @class */ (function (_super) {
    __extends(ListConversationMessageReceiptPathParams, _super);
    function ListConversationMessageReceiptPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], ListConversationMessageReceiptPathParams.prototype, "conversationSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" }),
        __metadata("design:type", String)
    ], ListConversationMessageReceiptPathParams.prototype, "messageSid", void 0);
    return ListConversationMessageReceiptPathParams;
}(SpeakeasyBase));
export { ListConversationMessageReceiptPathParams };
var ListConversationMessageReceiptQueryParams = /** @class */ (function (_super) {
    __extends(ListConversationMessageReceiptQueryParams, _super);
    function ListConversationMessageReceiptQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConversationMessageReceiptQueryParams.prototype, "pageSize", void 0);
    return ListConversationMessageReceiptQueryParams;
}(SpeakeasyBase));
export { ListConversationMessageReceiptQueryParams };
var ListConversationMessageReceiptSecurity = /** @class */ (function (_super) {
    __extends(ListConversationMessageReceiptSecurity, _super);
    function ListConversationMessageReceiptSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConversationMessageReceiptSecurity.prototype, "accountSidAuthToken", void 0);
    return ListConversationMessageReceiptSecurity;
}(SpeakeasyBase));
export { ListConversationMessageReceiptSecurity };
var ListConversationMessageReceiptRequest = /** @class */ (function (_super) {
    __extends(ListConversationMessageReceiptRequest, _super);
    function ListConversationMessageReceiptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListConversationMessageReceiptRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConversationMessageReceiptPathParams)
    ], ListConversationMessageReceiptRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConversationMessageReceiptQueryParams)
    ], ListConversationMessageReceiptRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConversationMessageReceiptSecurity)
    ], ListConversationMessageReceiptRequest.prototype, "security", void 0);
    return ListConversationMessageReceiptRequest;
}(SpeakeasyBase));
export { ListConversationMessageReceiptRequest };
var ListConversationMessageReceiptListConversationMessageReceiptResponseMeta = /** @class */ (function (_super) {
    __extends(ListConversationMessageReceiptListConversationMessageReceiptResponseMeta, _super);
    function ListConversationMessageReceiptListConversationMessageReceiptResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListConversationMessageReceiptListConversationMessageReceiptResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListConversationMessageReceiptListConversationMessageReceiptResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListConversationMessageReceiptListConversationMessageReceiptResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConversationMessageReceiptListConversationMessageReceiptResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConversationMessageReceiptListConversationMessageReceiptResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListConversationMessageReceiptListConversationMessageReceiptResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListConversationMessageReceiptListConversationMessageReceiptResponseMeta.prototype, "url", void 0);
    return ListConversationMessageReceiptListConversationMessageReceiptResponseMeta;
}(SpeakeasyBase));
export { ListConversationMessageReceiptListConversationMessageReceiptResponseMeta };
var ListConversationMessageReceiptListConversationMessageReceiptResponse = /** @class */ (function (_super) {
    __extends(ListConversationMessageReceiptListConversationMessageReceiptResponse, _super);
    function ListConversationMessageReceiptListConversationMessageReceiptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=delivery_receipts", elemType: shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt }),
        __metadata("design:type", Array)
    ], ListConversationMessageReceiptListConversationMessageReceiptResponse.prototype, "deliveryReceipts", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListConversationMessageReceiptListConversationMessageReceiptResponseMeta)
    ], ListConversationMessageReceiptListConversationMessageReceiptResponse.prototype, "meta", void 0);
    return ListConversationMessageReceiptListConversationMessageReceiptResponse;
}(SpeakeasyBase));
export { ListConversationMessageReceiptListConversationMessageReceiptResponse };
var ListConversationMessageReceiptResponse = /** @class */ (function (_super) {
    __extends(ListConversationMessageReceiptResponse, _super);
    function ListConversationMessageReceiptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListConversationMessageReceiptResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConversationMessageReceiptListConversationMessageReceiptResponse)
    ], ListConversationMessageReceiptResponse.prototype, "listConversationMessageReceiptResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListConversationMessageReceiptResponse.prototype, "statusCode", void 0);
    return ListConversationMessageReceiptResponse;
}(SpeakeasyBase));
export { ListConversationMessageReceiptResponse };
