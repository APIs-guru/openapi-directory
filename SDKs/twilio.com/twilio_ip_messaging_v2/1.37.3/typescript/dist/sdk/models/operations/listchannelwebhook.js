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
export var ListChannelWebhookServerList = [
    "https://ip-messaging.twilio.com",
];
var ListChannelWebhookPathParams = /** @class */ (function (_super) {
    __extends(ListChannelWebhookPathParams, _super);
    function ListChannelWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], ListChannelWebhookPathParams.prototype, "channelSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListChannelWebhookPathParams.prototype, "serviceSid", void 0);
    return ListChannelWebhookPathParams;
}(SpeakeasyBase));
export { ListChannelWebhookPathParams };
var ListChannelWebhookQueryParams = /** @class */ (function (_super) {
    __extends(ListChannelWebhookQueryParams, _super);
    function ListChannelWebhookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListChannelWebhookQueryParams.prototype, "pageSize", void 0);
    return ListChannelWebhookQueryParams;
}(SpeakeasyBase));
export { ListChannelWebhookQueryParams };
var ListChannelWebhookSecurity = /** @class */ (function (_super) {
    __extends(ListChannelWebhookSecurity, _super);
    function ListChannelWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListChannelWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return ListChannelWebhookSecurity;
}(SpeakeasyBase));
export { ListChannelWebhookSecurity };
var ListChannelWebhookListChannelWebhookResponseMeta = /** @class */ (function (_super) {
    __extends(ListChannelWebhookListChannelWebhookResponseMeta, _super);
    function ListChannelWebhookListChannelWebhookResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "url", void 0);
    return ListChannelWebhookListChannelWebhookResponseMeta;
}(SpeakeasyBase));
export { ListChannelWebhookListChannelWebhookResponseMeta };
var ListChannelWebhookListChannelWebhookResponse = /** @class */ (function (_super) {
    __extends(ListChannelWebhookListChannelWebhookResponse, _super);
    function ListChannelWebhookListChannelWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListChannelWebhookListChannelWebhookResponseMeta)
    ], ListChannelWebhookListChannelWebhookResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhooks", elemType: shared.IpMessagingV2ServiceChannelChannelWebhook }),
        __metadata("design:type", Array)
    ], ListChannelWebhookListChannelWebhookResponse.prototype, "webhooks", void 0);
    return ListChannelWebhookListChannelWebhookResponse;
}(SpeakeasyBase));
export { ListChannelWebhookListChannelWebhookResponse };
var ListChannelWebhookRequest = /** @class */ (function (_super) {
    __extends(ListChannelWebhookRequest, _super);
    function ListChannelWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListChannelWebhookRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListChannelWebhookPathParams)
    ], ListChannelWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListChannelWebhookQueryParams)
    ], ListChannelWebhookRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListChannelWebhookSecurity)
    ], ListChannelWebhookRequest.prototype, "security", void 0);
    return ListChannelWebhookRequest;
}(SpeakeasyBase));
export { ListChannelWebhookRequest };
var ListChannelWebhookResponse = /** @class */ (function (_super) {
    __extends(ListChannelWebhookResponse, _super);
    function ListChannelWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListChannelWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListChannelWebhookListChannelWebhookResponse)
    ], ListChannelWebhookResponse.prototype, "listChannelWebhookResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListChannelWebhookResponse.prototype, "statusCode", void 0);
    return ListChannelWebhookResponse;
}(SpeakeasyBase));
export { ListChannelWebhookResponse };
