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
export var ListParticipantConversationServerList = [
    "https://conversations.twilio.com",
];
var ListParticipantConversationQueryParams = /** @class */ (function (_super) {
    __extends(ListParticipantConversationQueryParams, _super);
    function ListParticipantConversationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Address" }),
        __metadata("design:type", String)
    ], ListParticipantConversationQueryParams.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", String)
    ], ListParticipantConversationQueryParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListParticipantConversationQueryParams.prototype, "pageSize", void 0);
    return ListParticipantConversationQueryParams;
}(SpeakeasyBase));
export { ListParticipantConversationQueryParams };
var ListParticipantConversationSecurity = /** @class */ (function (_super) {
    __extends(ListParticipantConversationSecurity, _super);
    function ListParticipantConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListParticipantConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListParticipantConversationSecurity;
}(SpeakeasyBase));
export { ListParticipantConversationSecurity };
var ListParticipantConversationListParticipantConversationResponseMeta = /** @class */ (function (_super) {
    __extends(ListParticipantConversationListParticipantConversationResponseMeta, _super);
    function ListParticipantConversationListParticipantConversationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListParticipantConversationListParticipantConversationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListParticipantConversationListParticipantConversationResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListParticipantConversationListParticipantConversationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListParticipantConversationListParticipantConversationResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListParticipantConversationListParticipantConversationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListParticipantConversationListParticipantConversationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListParticipantConversationListParticipantConversationResponseMeta.prototype, "url", void 0);
    return ListParticipantConversationListParticipantConversationResponseMeta;
}(SpeakeasyBase));
export { ListParticipantConversationListParticipantConversationResponseMeta };
var ListParticipantConversationListParticipantConversationResponse = /** @class */ (function (_super) {
    __extends(ListParticipantConversationListParticipantConversationResponse, _super);
    function ListParticipantConversationListParticipantConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversations", elemType: shared.ConversationsV1ParticipantConversation }),
        __metadata("design:type", Array)
    ], ListParticipantConversationListParticipantConversationResponse.prototype, "conversations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListParticipantConversationListParticipantConversationResponseMeta)
    ], ListParticipantConversationListParticipantConversationResponse.prototype, "meta", void 0);
    return ListParticipantConversationListParticipantConversationResponse;
}(SpeakeasyBase));
export { ListParticipantConversationListParticipantConversationResponse };
var ListParticipantConversationRequest = /** @class */ (function (_super) {
    __extends(ListParticipantConversationRequest, _super);
    function ListParticipantConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListParticipantConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListParticipantConversationQueryParams)
    ], ListParticipantConversationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListParticipantConversationSecurity)
    ], ListParticipantConversationRequest.prototype, "security", void 0);
    return ListParticipantConversationRequest;
}(SpeakeasyBase));
export { ListParticipantConversationRequest };
var ListParticipantConversationResponse = /** @class */ (function (_super) {
    __extends(ListParticipantConversationResponse, _super);
    function ListParticipantConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListParticipantConversationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListParticipantConversationListParticipantConversationResponse)
    ], ListParticipantConversationResponse.prototype, "listParticipantConversationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListParticipantConversationResponse.prototype, "statusCode", void 0);
    return ListParticipantConversationResponse;
}(SpeakeasyBase));
export { ListParticipantConversationResponse };
