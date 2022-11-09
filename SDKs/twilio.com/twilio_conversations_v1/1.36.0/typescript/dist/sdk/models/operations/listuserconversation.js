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
export var LISTUSERCONVERSATION_SERVERS = [
    "https://conversations.twilio.com",
];
var ListUserConversationPathParams = /** @class */ (function (_super) {
    __extends(ListUserConversationPathParams, _super);
    function ListUserConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=UserSid" }),
        __metadata("design:type", String)
    ], ListUserConversationPathParams.prototype, "userSid", void 0);
    return ListUserConversationPathParams;
}(SpeakeasyBase));
export { ListUserConversationPathParams };
var ListUserConversationQueryParams = /** @class */ (function (_super) {
    __extends(ListUserConversationQueryParams, _super);
    function ListUserConversationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUserConversationQueryParams.prototype, "pageSize", void 0);
    return ListUserConversationQueryParams;
}(SpeakeasyBase));
export { ListUserConversationQueryParams };
var ListUserConversationSecurity = /** @class */ (function (_super) {
    __extends(ListUserConversationSecurity, _super);
    function ListUserConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUserConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUserConversationSecurity;
}(SpeakeasyBase));
export { ListUserConversationSecurity };
var ListUserConversationRequest = /** @class */ (function (_super) {
    __extends(ListUserConversationRequest, _super);
    function ListUserConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUserConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUserConversationPathParams)
    ], ListUserConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUserConversationQueryParams)
    ], ListUserConversationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUserConversationSecurity)
    ], ListUserConversationRequest.prototype, "security", void 0);
    return ListUserConversationRequest;
}(SpeakeasyBase));
export { ListUserConversationRequest };
var ListUserConversationListUserConversationResponseMeta = /** @class */ (function (_super) {
    __extends(ListUserConversationListUserConversationResponseMeta, _super);
    function ListUserConversationListUserConversationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListUserConversationListUserConversationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListUserConversationListUserConversationResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListUserConversationListUserConversationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUserConversationListUserConversationResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUserConversationListUserConversationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListUserConversationListUserConversationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListUserConversationListUserConversationResponseMeta.prototype, "url", void 0);
    return ListUserConversationListUserConversationResponseMeta;
}(SpeakeasyBase));
export { ListUserConversationListUserConversationResponseMeta };
var ListUserConversationListUserConversationResponse = /** @class */ (function (_super) {
    __extends(ListUserConversationListUserConversationResponse, _super);
    function ListUserConversationListUserConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=conversations", elemType: shared.ConversationsV1UserUserConversation }),
        __metadata("design:type", Array)
    ], ListUserConversationListUserConversationResponse.prototype, "conversations", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListUserConversationListUserConversationResponseMeta)
    ], ListUserConversationListUserConversationResponse.prototype, "meta", void 0);
    return ListUserConversationListUserConversationResponse;
}(SpeakeasyBase));
export { ListUserConversationListUserConversationResponse };
var ListUserConversationResponse = /** @class */ (function (_super) {
    __extends(ListUserConversationResponse, _super);
    function ListUserConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUserConversationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUserConversationListUserConversationResponse)
    ], ListUserConversationResponse.prototype, "listUserConversationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListUserConversationResponse.prototype, "statusCode", void 0);
    return ListUserConversationResponse;
}(SpeakeasyBase));
export { ListUserConversationResponse };
