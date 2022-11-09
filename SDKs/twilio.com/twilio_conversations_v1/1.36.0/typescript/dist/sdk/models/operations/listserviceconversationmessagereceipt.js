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
export var LISTSERVICECONVERSATIONMESSAGERECEIPT_SERVERS = [
    "https://conversations.twilio.com",
];
var ListServiceConversationMessageReceiptPathParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessageReceiptPathParams, _super);
    function ListServiceConversationMessageReceiptPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageReceiptPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageReceiptPathParams.prototype, "conversationSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageReceiptPathParams.prototype, "messageSid", void 0);
    return ListServiceConversationMessageReceiptPathParams;
}(SpeakeasyBase));
export { ListServiceConversationMessageReceiptPathParams };
var ListServiceConversationMessageReceiptQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessageReceiptQueryParams, _super);
    function ListServiceConversationMessageReceiptQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListServiceConversationMessageReceiptQueryParams.prototype, "pageSize", void 0);
    return ListServiceConversationMessageReceiptQueryParams;
}(SpeakeasyBase));
export { ListServiceConversationMessageReceiptQueryParams };
var ListServiceConversationMessageReceiptSecurity = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessageReceiptSecurity, _super);
    function ListServiceConversationMessageReceiptSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListServiceConversationMessageReceiptSecurity.prototype, "accountSidAuthToken", void 0);
    return ListServiceConversationMessageReceiptSecurity;
}(SpeakeasyBase));
export { ListServiceConversationMessageReceiptSecurity };
var ListServiceConversationMessageReceiptRequest = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessageReceiptRequest, _super);
    function ListServiceConversationMessageReceiptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListServiceConversationMessageReceiptRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceConversationMessageReceiptPathParams)
    ], ListServiceConversationMessageReceiptRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceConversationMessageReceiptQueryParams)
    ], ListServiceConversationMessageReceiptRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceConversationMessageReceiptSecurity)
    ], ListServiceConversationMessageReceiptRequest.prototype, "security", void 0);
    return ListServiceConversationMessageReceiptRequest;
}(SpeakeasyBase));
export { ListServiceConversationMessageReceiptRequest };
var ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta, _super);
    function ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta.prototype, "url", void 0);
    return ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta;
}(SpeakeasyBase));
export { ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta };
var ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse, _super);
    function ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=delivery_receipts", elemType: shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt }),
        __metadata("design:type", Array)
    ], ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse.prototype, "deliveryReceipts", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta)
    ], ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse.prototype, "meta", void 0);
    return ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse;
}(SpeakeasyBase));
export { ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse };
var ListServiceConversationMessageReceiptResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessageReceiptResponse, _super);
    function ListServiceConversationMessageReceiptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListServiceConversationMessageReceiptResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse)
    ], ListServiceConversationMessageReceiptResponse.prototype, "listServiceConversationMessageReceiptResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListServiceConversationMessageReceiptResponse.prototype, "statusCode", void 0);
    return ListServiceConversationMessageReceiptResponse;
}(SpeakeasyBase));
export { ListServiceConversationMessageReceiptResponse };
