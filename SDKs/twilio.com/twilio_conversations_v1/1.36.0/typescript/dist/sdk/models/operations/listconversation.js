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
export var LISTCONVERSATION_SERVERS = [
    "https://conversations.twilio.com",
];
var ListConversationQueryParams = /** @class */ (function (_super) {
    __extends(ListConversationQueryParams, _super);
    function ListConversationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConversationQueryParams.prototype, "pageSize", void 0);
    return ListConversationQueryParams;
}(SpeakeasyBase));
export { ListConversationQueryParams };
var ListConversationSecurity = /** @class */ (function (_super) {
    __extends(ListConversationSecurity, _super);
    function ListConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListConversationSecurity;
}(SpeakeasyBase));
export { ListConversationSecurity };
var ListConversationRequest = /** @class */ (function (_super) {
    __extends(ListConversationRequest, _super);
    function ListConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConversationQueryParams)
    ], ListConversationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConversationSecurity)
    ], ListConversationRequest.prototype, "security", void 0);
    return ListConversationRequest;
}(SpeakeasyBase));
export { ListConversationRequest };
var ListConversationListConversationResponseMeta = /** @class */ (function (_super) {
    __extends(ListConversationListConversationResponseMeta, _super);
    function ListConversationListConversationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListConversationListConversationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListConversationListConversationResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListConversationListConversationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConversationListConversationResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConversationListConversationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListConversationListConversationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListConversationListConversationResponseMeta.prototype, "url", void 0);
    return ListConversationListConversationResponseMeta;
}(SpeakeasyBase));
export { ListConversationListConversationResponseMeta };
var ListConversationListConversationResponse = /** @class */ (function (_super) {
    __extends(ListConversationListConversationResponse, _super);
    function ListConversationListConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=conversations", elemType: shared.ConversationsV1Conversation }),
        __metadata("design:type", Array)
    ], ListConversationListConversationResponse.prototype, "conversations", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListConversationListConversationResponseMeta)
    ], ListConversationListConversationResponse.prototype, "meta", void 0);
    return ListConversationListConversationResponse;
}(SpeakeasyBase));
export { ListConversationListConversationResponse };
var ListConversationResponse = /** @class */ (function (_super) {
    __extends(ListConversationResponse, _super);
    function ListConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListConversationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConversationListConversationResponse)
    ], ListConversationResponse.prototype, "listConversationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListConversationResponse.prototype, "statusCode", void 0);
    return ListConversationResponse;
}(SpeakeasyBase));
export { ListConversationResponse };
