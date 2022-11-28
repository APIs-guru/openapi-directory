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
export var ListInteractionChannelInviteServerList = [
    "https://flex-api.twilio.com",
];
var ListInteractionChannelInvitePathParams = /** @class */ (function (_super) {
    __extends(ListInteractionChannelInvitePathParams, _super);
    function ListInteractionChannelInvitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], ListInteractionChannelInvitePathParams.prototype, "channelSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" }),
        __metadata("design:type", String)
    ], ListInteractionChannelInvitePathParams.prototype, "interactionSid", void 0);
    return ListInteractionChannelInvitePathParams;
}(SpeakeasyBase));
export { ListInteractionChannelInvitePathParams };
var ListInteractionChannelInviteQueryParams = /** @class */ (function (_super) {
    __extends(ListInteractionChannelInviteQueryParams, _super);
    function ListInteractionChannelInviteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListInteractionChannelInviteQueryParams.prototype, "pageSize", void 0);
    return ListInteractionChannelInviteQueryParams;
}(SpeakeasyBase));
export { ListInteractionChannelInviteQueryParams };
var ListInteractionChannelInviteSecurity = /** @class */ (function (_super) {
    __extends(ListInteractionChannelInviteSecurity, _super);
    function ListInteractionChannelInviteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListInteractionChannelInviteSecurity.prototype, "accountSidAuthToken", void 0);
    return ListInteractionChannelInviteSecurity;
}(SpeakeasyBase));
export { ListInteractionChannelInviteSecurity };
var ListInteractionChannelInviteListInteractionChannelInviteResponseMeta = /** @class */ (function (_super) {
    __extends(ListInteractionChannelInviteListInteractionChannelInviteResponseMeta, _super);
    function ListInteractionChannelInviteListInteractionChannelInviteResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListInteractionChannelInviteListInteractionChannelInviteResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListInteractionChannelInviteListInteractionChannelInviteResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListInteractionChannelInviteListInteractionChannelInviteResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListInteractionChannelInviteListInteractionChannelInviteResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListInteractionChannelInviteListInteractionChannelInviteResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListInteractionChannelInviteListInteractionChannelInviteResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListInteractionChannelInviteListInteractionChannelInviteResponseMeta.prototype, "url", void 0);
    return ListInteractionChannelInviteListInteractionChannelInviteResponseMeta;
}(SpeakeasyBase));
export { ListInteractionChannelInviteListInteractionChannelInviteResponseMeta };
var ListInteractionChannelInviteListInteractionChannelInviteResponse = /** @class */ (function (_super) {
    __extends(ListInteractionChannelInviteListInteractionChannelInviteResponse, _super);
    function ListInteractionChannelInviteListInteractionChannelInviteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invites", elemType: shared.FlexV1InteractionInteractionChannelInteractionChannelInvite }),
        __metadata("design:type", Array)
    ], ListInteractionChannelInviteListInteractionChannelInviteResponse.prototype, "invites", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListInteractionChannelInviteListInteractionChannelInviteResponseMeta)
    ], ListInteractionChannelInviteListInteractionChannelInviteResponse.prototype, "meta", void 0);
    return ListInteractionChannelInviteListInteractionChannelInviteResponse;
}(SpeakeasyBase));
export { ListInteractionChannelInviteListInteractionChannelInviteResponse };
var ListInteractionChannelInviteRequest = /** @class */ (function (_super) {
    __extends(ListInteractionChannelInviteRequest, _super);
    function ListInteractionChannelInviteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListInteractionChannelInviteRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListInteractionChannelInvitePathParams)
    ], ListInteractionChannelInviteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListInteractionChannelInviteQueryParams)
    ], ListInteractionChannelInviteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListInteractionChannelInviteSecurity)
    ], ListInteractionChannelInviteRequest.prototype, "security", void 0);
    return ListInteractionChannelInviteRequest;
}(SpeakeasyBase));
export { ListInteractionChannelInviteRequest };
var ListInteractionChannelInviteResponse = /** @class */ (function (_super) {
    __extends(ListInteractionChannelInviteResponse, _super);
    function ListInteractionChannelInviteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListInteractionChannelInviteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListInteractionChannelInviteListInteractionChannelInviteResponse)
    ], ListInteractionChannelInviteResponse.prototype, "listInteractionChannelInviteResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListInteractionChannelInviteResponse.prototype, "statusCode", void 0);
    return ListInteractionChannelInviteResponse;
}(SpeakeasyBase));
export { ListInteractionChannelInviteResponse };
