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
export var ListServiceConversationServerList = [
    "https://conversations.twilio.com",
];
var ListServiceConversationPathParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationPathParams, _super);
    function ListServiceConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], ListServiceConversationPathParams.prototype, "chatServiceSid", void 0);
    return ListServiceConversationPathParams;
}(SpeakeasyBase));
export { ListServiceConversationPathParams };
var ListServiceConversationQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationQueryParams, _super);
    function ListServiceConversationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListServiceConversationQueryParams.prototype, "pageSize", void 0);
    return ListServiceConversationQueryParams;
}(SpeakeasyBase));
export { ListServiceConversationQueryParams };
var ListServiceConversationSecurity = /** @class */ (function (_super) {
    __extends(ListServiceConversationSecurity, _super);
    function ListServiceConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListServiceConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListServiceConversationSecurity;
}(SpeakeasyBase));
export { ListServiceConversationSecurity };
var ListServiceConversationListServiceConversationResponseMeta = /** @class */ (function (_super) {
    __extends(ListServiceConversationListServiceConversationResponseMeta, _super);
    function ListServiceConversationListServiceConversationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "url", void 0);
    return ListServiceConversationListServiceConversationResponseMeta;
}(SpeakeasyBase));
export { ListServiceConversationListServiceConversationResponseMeta };
var ListServiceConversationListServiceConversationResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationListServiceConversationResponse, _super);
    function ListServiceConversationListServiceConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversations", elemType: shared.ConversationsV1ServiceServiceConversation }),
        __metadata("design:type", Array)
    ], ListServiceConversationListServiceConversationResponse.prototype, "conversations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListServiceConversationListServiceConversationResponseMeta)
    ], ListServiceConversationListServiceConversationResponse.prototype, "meta", void 0);
    return ListServiceConversationListServiceConversationResponse;
}(SpeakeasyBase));
export { ListServiceConversationListServiceConversationResponse };
var ListServiceConversationRequest = /** @class */ (function (_super) {
    __extends(ListServiceConversationRequest, _super);
    function ListServiceConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListServiceConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListServiceConversationPathParams)
    ], ListServiceConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListServiceConversationQueryParams)
    ], ListServiceConversationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListServiceConversationSecurity)
    ], ListServiceConversationRequest.prototype, "security", void 0);
    return ListServiceConversationRequest;
}(SpeakeasyBase));
export { ListServiceConversationRequest };
var ListServiceConversationResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationResponse, _super);
    function ListServiceConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListServiceConversationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListServiceConversationListServiceConversationResponse)
    ], ListServiceConversationResponse.prototype, "listServiceConversationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListServiceConversationResponse.prototype, "statusCode", void 0);
    return ListServiceConversationResponse;
}(SpeakeasyBase));
export { ListServiceConversationResponse };
