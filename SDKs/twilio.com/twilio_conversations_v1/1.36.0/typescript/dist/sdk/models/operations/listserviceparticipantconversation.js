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
export var LISTSERVICEPARTICIPANTCONVERSATION_SERVERS = [
    "https://conversations.twilio.com",
];
var ListServiceParticipantConversationPathParams = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationPathParams, _super);
    function ListServiceParticipantConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationPathParams.prototype, "chatServiceSid", void 0);
    return ListServiceParticipantConversationPathParams;
}(SpeakeasyBase));
export { ListServiceParticipantConversationPathParams };
var ListServiceParticipantConversationQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationQueryParams, _super);
    function ListServiceParticipantConversationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Address" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationQueryParams.prototype, "address", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationQueryParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListServiceParticipantConversationQueryParams.prototype, "pageSize", void 0);
    return ListServiceParticipantConversationQueryParams;
}(SpeakeasyBase));
export { ListServiceParticipantConversationQueryParams };
var ListServiceParticipantConversationSecurity = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationSecurity, _super);
    function ListServiceParticipantConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListServiceParticipantConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListServiceParticipantConversationSecurity;
}(SpeakeasyBase));
export { ListServiceParticipantConversationSecurity };
var ListServiceParticipantConversationRequest = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationRequest, _super);
    function ListServiceParticipantConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceParticipantConversationPathParams)
    ], ListServiceParticipantConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceParticipantConversationQueryParams)
    ], ListServiceParticipantConversationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceParticipantConversationSecurity)
    ], ListServiceParticipantConversationRequest.prototype, "security", void 0);
    return ListServiceParticipantConversationRequest;
}(SpeakeasyBase));
export { ListServiceParticipantConversationRequest };
var ListServiceParticipantConversationListServiceParticipantConversationResponseMeta = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationListServiceParticipantConversationResponseMeta, _super);
    function ListServiceParticipantConversationListServiceParticipantConversationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "url", void 0);
    return ListServiceParticipantConversationListServiceParticipantConversationResponseMeta;
}(SpeakeasyBase));
export { ListServiceParticipantConversationListServiceParticipantConversationResponseMeta };
var ListServiceParticipantConversationListServiceParticipantConversationResponse = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationListServiceParticipantConversationResponse, _super);
    function ListServiceParticipantConversationListServiceParticipantConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=conversations", elemType: shared.ConversationsV1ServiceServiceParticipantConversation }),
        __metadata("design:type", Array)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponse.prototype, "conversations", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListServiceParticipantConversationListServiceParticipantConversationResponseMeta)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponse.prototype, "meta", void 0);
    return ListServiceParticipantConversationListServiceParticipantConversationResponse;
}(SpeakeasyBase));
export { ListServiceParticipantConversationListServiceParticipantConversationResponse };
var ListServiceParticipantConversationResponse = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationResponse, _super);
    function ListServiceParticipantConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceParticipantConversationListServiceParticipantConversationResponse)
    ], ListServiceParticipantConversationResponse.prototype, "listServiceParticipantConversationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListServiceParticipantConversationResponse.prototype, "statusCode", void 0);
    return ListServiceParticipantConversationResponse;
}(SpeakeasyBase));
export { ListServiceParticipantConversationResponse };
