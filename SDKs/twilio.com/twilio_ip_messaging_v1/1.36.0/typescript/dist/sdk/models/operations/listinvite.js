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
export var LISTINVITE_SERVERS = [
    "https://ip-messaging.twilio.com",
];
var ListInvitePathParams = /** @class */ (function (_super) {
    __extends(ListInvitePathParams, _super);
    function ListInvitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], ListInvitePathParams.prototype, "channelSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListInvitePathParams.prototype, "serviceSid", void 0);
    return ListInvitePathParams;
}(SpeakeasyBase));
export { ListInvitePathParams };
var ListInviteQueryParams = /** @class */ (function (_super) {
    __extends(ListInviteQueryParams, _super);
    function ListInviteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", Array)
    ], ListInviteQueryParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListInviteQueryParams.prototype, "pageSize", void 0);
    return ListInviteQueryParams;
}(SpeakeasyBase));
export { ListInviteQueryParams };
var ListInviteSecurity = /** @class */ (function (_super) {
    __extends(ListInviteSecurity, _super);
    function ListInviteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListInviteSecurity.prototype, "accountSidAuthToken", void 0);
    return ListInviteSecurity;
}(SpeakeasyBase));
export { ListInviteSecurity };
var ListInviteRequest = /** @class */ (function (_super) {
    __extends(ListInviteRequest, _super);
    function ListInviteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListInviteRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListInvitePathParams)
    ], ListInviteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListInviteQueryParams)
    ], ListInviteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListInviteSecurity)
    ], ListInviteRequest.prototype, "security", void 0);
    return ListInviteRequest;
}(SpeakeasyBase));
export { ListInviteRequest };
var ListInviteListInviteResponseMeta = /** @class */ (function (_super) {
    __extends(ListInviteListInviteResponseMeta, _super);
    function ListInviteListInviteResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListInviteListInviteResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListInviteListInviteResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListInviteListInviteResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListInviteListInviteResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListInviteListInviteResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListInviteListInviteResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListInviteListInviteResponseMeta.prototype, "url", void 0);
    return ListInviteListInviteResponseMeta;
}(SpeakeasyBase));
export { ListInviteListInviteResponseMeta };
var ListInviteListInviteResponse = /** @class */ (function (_super) {
    __extends(ListInviteListInviteResponse, _super);
    function ListInviteListInviteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=invites", elemType: shared.IpMessagingV1ServiceChannelInvite }),
        __metadata("design:type", Array)
    ], ListInviteListInviteResponse.prototype, "invites", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListInviteListInviteResponseMeta)
    ], ListInviteListInviteResponse.prototype, "meta", void 0);
    return ListInviteListInviteResponse;
}(SpeakeasyBase));
export { ListInviteListInviteResponse };
var ListInviteResponse = /** @class */ (function (_super) {
    __extends(ListInviteResponse, _super);
    function ListInviteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListInviteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListInviteListInviteResponse)
    ], ListInviteResponse.prototype, "listInviteResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListInviteResponse.prototype, "statusCode", void 0);
    return ListInviteResponse;
}(SpeakeasyBase));
export { ListInviteResponse };
