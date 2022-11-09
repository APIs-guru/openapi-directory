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
export var LISTSERVICECONVERSATIONPARTICIPANT_SERVERS = [
    "https://conversations.twilio.com",
];
var ListServiceConversationParticipantPathParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantPathParams, _super);
    function ListServiceConversationParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantPathParams.prototype, "conversationSid", void 0);
    return ListServiceConversationParticipantPathParams;
}(SpeakeasyBase));
export { ListServiceConversationParticipantPathParams };
var ListServiceConversationParticipantQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantQueryParams, _super);
    function ListServiceConversationParticipantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListServiceConversationParticipantQueryParams.prototype, "pageSize", void 0);
    return ListServiceConversationParticipantQueryParams;
}(SpeakeasyBase));
export { ListServiceConversationParticipantQueryParams };
var ListServiceConversationParticipantSecurity = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantSecurity, _super);
    function ListServiceConversationParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListServiceConversationParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return ListServiceConversationParticipantSecurity;
}(SpeakeasyBase));
export { ListServiceConversationParticipantSecurity };
var ListServiceConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantRequest, _super);
    function ListServiceConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceConversationParticipantPathParams)
    ], ListServiceConversationParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceConversationParticipantQueryParams)
    ], ListServiceConversationParticipantRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceConversationParticipantSecurity)
    ], ListServiceConversationParticipantRequest.prototype, "security", void 0);
    return ListServiceConversationParticipantRequest;
}(SpeakeasyBase));
export { ListServiceConversationParticipantRequest };
var ListServiceConversationParticipantListServiceConversationParticipantResponseMeta = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantListServiceConversationParticipantResponseMeta, _super);
    function ListServiceConversationParticipantListServiceConversationParticipantResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "url", void 0);
    return ListServiceConversationParticipantListServiceConversationParticipantResponseMeta;
}(SpeakeasyBase));
export { ListServiceConversationParticipantListServiceConversationParticipantResponseMeta };
var ListServiceConversationParticipantListServiceConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantListServiceConversationParticipantResponse, _super);
    function ListServiceConversationParticipantListServiceConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListServiceConversationParticipantListServiceConversationParticipantResponseMeta)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=participants", elemType: shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant }),
        __metadata("design:type", Array)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponse.prototype, "participants", void 0);
    return ListServiceConversationParticipantListServiceConversationParticipantResponse;
}(SpeakeasyBase));
export { ListServiceConversationParticipantListServiceConversationParticipantResponse };
var ListServiceConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantResponse, _super);
    function ListServiceConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceConversationParticipantListServiceConversationParticipantResponse)
    ], ListServiceConversationParticipantResponse.prototype, "listServiceConversationParticipantResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListServiceConversationParticipantResponse.prototype, "statusCode", void 0);
    return ListServiceConversationParticipantResponse;
}(SpeakeasyBase));
export { ListServiceConversationParticipantResponse };
