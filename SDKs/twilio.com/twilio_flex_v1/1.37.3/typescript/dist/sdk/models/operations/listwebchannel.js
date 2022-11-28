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
export var ListWebChannelServerList = [
    "https://flex-api.twilio.com",
];
var ListWebChannelQueryParams = /** @class */ (function (_super) {
    __extends(ListWebChannelQueryParams, _super);
    function ListWebChannelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListWebChannelQueryParams.prototype, "pageSize", void 0);
    return ListWebChannelQueryParams;
}(SpeakeasyBase));
export { ListWebChannelQueryParams };
var ListWebChannelSecurity = /** @class */ (function (_super) {
    __extends(ListWebChannelSecurity, _super);
    function ListWebChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListWebChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return ListWebChannelSecurity;
}(SpeakeasyBase));
export { ListWebChannelSecurity };
var ListWebChannelListWebChannelResponseMeta = /** @class */ (function (_super) {
    __extends(ListWebChannelListWebChannelResponseMeta, _super);
    function ListWebChannelListWebChannelResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "url", void 0);
    return ListWebChannelListWebChannelResponseMeta;
}(SpeakeasyBase));
export { ListWebChannelListWebChannelResponseMeta };
var ListWebChannelListWebChannelResponse = /** @class */ (function (_super) {
    __extends(ListWebChannelListWebChannelResponse, _super);
    function ListWebChannelListWebChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flex_chat_channels", elemType: shared.FlexV1WebChannel }),
        __metadata("design:type", Array)
    ], ListWebChannelListWebChannelResponse.prototype, "flexChatChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListWebChannelListWebChannelResponseMeta)
    ], ListWebChannelListWebChannelResponse.prototype, "meta", void 0);
    return ListWebChannelListWebChannelResponse;
}(SpeakeasyBase));
export { ListWebChannelListWebChannelResponse };
var ListWebChannelRequest = /** @class */ (function (_super) {
    __extends(ListWebChannelRequest, _super);
    function ListWebChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListWebChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWebChannelQueryParams)
    ], ListWebChannelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWebChannelSecurity)
    ], ListWebChannelRequest.prototype, "security", void 0);
    return ListWebChannelRequest;
}(SpeakeasyBase));
export { ListWebChannelRequest };
var ListWebChannelResponse = /** @class */ (function (_super) {
    __extends(ListWebChannelResponse, _super);
    function ListWebChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListWebChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWebChannelListWebChannelResponse)
    ], ListWebChannelResponse.prototype, "listWebChannelResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListWebChannelResponse.prototype, "statusCode", void 0);
    return ListWebChannelResponse;
}(SpeakeasyBase));
export { ListWebChannelResponse };
