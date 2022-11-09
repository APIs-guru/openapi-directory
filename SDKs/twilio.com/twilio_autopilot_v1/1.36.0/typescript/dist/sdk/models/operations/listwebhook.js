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
export var LISTWEBHOOK_SERVERS = [
    "https://autopilot.twilio.com",
];
var ListWebhookPathParams = /** @class */ (function (_super) {
    __extends(ListWebhookPathParams, _super);
    function ListWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListWebhookPathParams.prototype, "assistantSid", void 0);
    return ListWebhookPathParams;
}(SpeakeasyBase));
export { ListWebhookPathParams };
var ListWebhookQueryParams = /** @class */ (function (_super) {
    __extends(ListWebhookQueryParams, _super);
    function ListWebhookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListWebhookQueryParams.prototype, "pageSize", void 0);
    return ListWebhookQueryParams;
}(SpeakeasyBase));
export { ListWebhookQueryParams };
var ListWebhookSecurity = /** @class */ (function (_super) {
    __extends(ListWebhookSecurity, _super);
    function ListWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return ListWebhookSecurity;
}(SpeakeasyBase));
export { ListWebhookSecurity };
var ListWebhookRequest = /** @class */ (function (_super) {
    __extends(ListWebhookRequest, _super);
    function ListWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListWebhookRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListWebhookPathParams)
    ], ListWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListWebhookQueryParams)
    ], ListWebhookRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListWebhookSecurity)
    ], ListWebhookRequest.prototype, "security", void 0);
    return ListWebhookRequest;
}(SpeakeasyBase));
export { ListWebhookRequest };
var ListWebhookListWebhookResponseMeta = /** @class */ (function (_super) {
    __extends(ListWebhookListWebhookResponseMeta, _super);
    function ListWebhookListWebhookResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListWebhookListWebhookResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListWebhookListWebhookResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListWebhookListWebhookResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListWebhookListWebhookResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListWebhookListWebhookResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListWebhookListWebhookResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListWebhookListWebhookResponseMeta.prototype, "url", void 0);
    return ListWebhookListWebhookResponseMeta;
}(SpeakeasyBase));
export { ListWebhookListWebhookResponseMeta };
var ListWebhookListWebhookResponse = /** @class */ (function (_super) {
    __extends(ListWebhookListWebhookResponse, _super);
    function ListWebhookListWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListWebhookListWebhookResponseMeta)
    ], ListWebhookListWebhookResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=webhooks", elemType: shared.AutopilotV1AssistantWebhook }),
        __metadata("design:type", Array)
    ], ListWebhookListWebhookResponse.prototype, "webhooks", void 0);
    return ListWebhookListWebhookResponse;
}(SpeakeasyBase));
export { ListWebhookListWebhookResponse };
var ListWebhookResponse = /** @class */ (function (_super) {
    __extends(ListWebhookResponse, _super);
    function ListWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListWebhookListWebhookResponse)
    ], ListWebhookResponse.prototype, "listWebhookResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListWebhookResponse.prototype, "statusCode", void 0);
    return ListWebhookResponse;
}(SpeakeasyBase));
export { ListWebhookResponse };
