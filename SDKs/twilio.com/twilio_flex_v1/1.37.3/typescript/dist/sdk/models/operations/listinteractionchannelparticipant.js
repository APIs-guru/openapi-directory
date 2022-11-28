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
export var ListInteractionChannelParticipantServerList = [
    "https://flex-api.twilio.com",
];
var ListInteractionChannelParticipantPathParams = /** @class */ (function (_super) {
    __extends(ListInteractionChannelParticipantPathParams, _super);
    function ListInteractionChannelParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], ListInteractionChannelParticipantPathParams.prototype, "channelSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" }),
        __metadata("design:type", String)
    ], ListInteractionChannelParticipantPathParams.prototype, "interactionSid", void 0);
    return ListInteractionChannelParticipantPathParams;
}(SpeakeasyBase));
export { ListInteractionChannelParticipantPathParams };
var ListInteractionChannelParticipantQueryParams = /** @class */ (function (_super) {
    __extends(ListInteractionChannelParticipantQueryParams, _super);
    function ListInteractionChannelParticipantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListInteractionChannelParticipantQueryParams.prototype, "pageSize", void 0);
    return ListInteractionChannelParticipantQueryParams;
}(SpeakeasyBase));
export { ListInteractionChannelParticipantQueryParams };
var ListInteractionChannelParticipantSecurity = /** @class */ (function (_super) {
    __extends(ListInteractionChannelParticipantSecurity, _super);
    function ListInteractionChannelParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListInteractionChannelParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return ListInteractionChannelParticipantSecurity;
}(SpeakeasyBase));
export { ListInteractionChannelParticipantSecurity };
var ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta = /** @class */ (function (_super) {
    __extends(ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta, _super);
    function ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta.prototype, "url", void 0);
    return ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta;
}(SpeakeasyBase));
export { ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta };
var ListInteractionChannelParticipantListInteractionChannelParticipantResponse = /** @class */ (function (_super) {
    __extends(ListInteractionChannelParticipantListInteractionChannelParticipantResponse, _super);
    function ListInteractionChannelParticipantListInteractionChannelParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta)
    ], ListInteractionChannelParticipantListInteractionChannelParticipantResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participants", elemType: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant }),
        __metadata("design:type", Array)
    ], ListInteractionChannelParticipantListInteractionChannelParticipantResponse.prototype, "participants", void 0);
    return ListInteractionChannelParticipantListInteractionChannelParticipantResponse;
}(SpeakeasyBase));
export { ListInteractionChannelParticipantListInteractionChannelParticipantResponse };
var ListInteractionChannelParticipantRequest = /** @class */ (function (_super) {
    __extends(ListInteractionChannelParticipantRequest, _super);
    function ListInteractionChannelParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListInteractionChannelParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListInteractionChannelParticipantPathParams)
    ], ListInteractionChannelParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListInteractionChannelParticipantQueryParams)
    ], ListInteractionChannelParticipantRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListInteractionChannelParticipantSecurity)
    ], ListInteractionChannelParticipantRequest.prototype, "security", void 0);
    return ListInteractionChannelParticipantRequest;
}(SpeakeasyBase));
export { ListInteractionChannelParticipantRequest };
var ListInteractionChannelParticipantResponse = /** @class */ (function (_super) {
    __extends(ListInteractionChannelParticipantResponse, _super);
    function ListInteractionChannelParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListInteractionChannelParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListInteractionChannelParticipantListInteractionChannelParticipantResponse)
    ], ListInteractionChannelParticipantResponse.prototype, "listInteractionChannelParticipantResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListInteractionChannelParticipantResponse.prototype, "statusCode", void 0);
    return ListInteractionChannelParticipantResponse;
}(SpeakeasyBase));
export { ListInteractionChannelParticipantResponse };
