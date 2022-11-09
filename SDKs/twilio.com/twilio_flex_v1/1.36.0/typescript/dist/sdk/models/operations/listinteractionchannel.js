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
export var LISTINTERACTIONCHANNEL_SERVERS = [
    "https://flex-api.twilio.com",
];
var ListInteractionChannelPathParams = /** @class */ (function (_super) {
    __extends(ListInteractionChannelPathParams, _super);
    function ListInteractionChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" }),
        __metadata("design:type", String)
    ], ListInteractionChannelPathParams.prototype, "interactionSid", void 0);
    return ListInteractionChannelPathParams;
}(SpeakeasyBase));
export { ListInteractionChannelPathParams };
var ListInteractionChannelQueryParams = /** @class */ (function (_super) {
    __extends(ListInteractionChannelQueryParams, _super);
    function ListInteractionChannelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListInteractionChannelQueryParams.prototype, "pageSize", void 0);
    return ListInteractionChannelQueryParams;
}(SpeakeasyBase));
export { ListInteractionChannelQueryParams };
var ListInteractionChannelSecurity = /** @class */ (function (_super) {
    __extends(ListInteractionChannelSecurity, _super);
    function ListInteractionChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListInteractionChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return ListInteractionChannelSecurity;
}(SpeakeasyBase));
export { ListInteractionChannelSecurity };
var ListInteractionChannelRequest = /** @class */ (function (_super) {
    __extends(ListInteractionChannelRequest, _super);
    function ListInteractionChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListInteractionChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListInteractionChannelPathParams)
    ], ListInteractionChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListInteractionChannelQueryParams)
    ], ListInteractionChannelRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListInteractionChannelSecurity)
    ], ListInteractionChannelRequest.prototype, "security", void 0);
    return ListInteractionChannelRequest;
}(SpeakeasyBase));
export { ListInteractionChannelRequest };
var ListInteractionChannelListInteractionChannelResponseMeta = /** @class */ (function (_super) {
    __extends(ListInteractionChannelListInteractionChannelResponseMeta, _super);
    function ListInteractionChannelListInteractionChannelResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListInteractionChannelListInteractionChannelResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListInteractionChannelListInteractionChannelResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListInteractionChannelListInteractionChannelResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListInteractionChannelListInteractionChannelResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListInteractionChannelListInteractionChannelResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListInteractionChannelListInteractionChannelResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListInteractionChannelListInteractionChannelResponseMeta.prototype, "url", void 0);
    return ListInteractionChannelListInteractionChannelResponseMeta;
}(SpeakeasyBase));
export { ListInteractionChannelListInteractionChannelResponseMeta };
var ListInteractionChannelListInteractionChannelResponse = /** @class */ (function (_super) {
    __extends(ListInteractionChannelListInteractionChannelResponse, _super);
    function ListInteractionChannelListInteractionChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=channels", elemType: shared.FlexV1InteractionInteractionChannel }),
        __metadata("design:type", Array)
    ], ListInteractionChannelListInteractionChannelResponse.prototype, "channels", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListInteractionChannelListInteractionChannelResponseMeta)
    ], ListInteractionChannelListInteractionChannelResponse.prototype, "meta", void 0);
    return ListInteractionChannelListInteractionChannelResponse;
}(SpeakeasyBase));
export { ListInteractionChannelListInteractionChannelResponse };
var ListInteractionChannelResponse = /** @class */ (function (_super) {
    __extends(ListInteractionChannelResponse, _super);
    function ListInteractionChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListInteractionChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListInteractionChannelListInteractionChannelResponse)
    ], ListInteractionChannelResponse.prototype, "listInteractionChannelResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListInteractionChannelResponse.prototype, "statusCode", void 0);
    return ListInteractionChannelResponse;
}(SpeakeasyBase));
export { ListInteractionChannelResponse };
