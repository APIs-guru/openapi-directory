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
export var ListSubscriptionServerList = [
    "https://events.twilio.com",
];
var ListSubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(ListSubscriptionQueryParams, _super);
    function ListSubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSubscriptionQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SinkSid" }),
        __metadata("design:type", String)
    ], ListSubscriptionQueryParams.prototype, "sinkSid", void 0);
    return ListSubscriptionQueryParams;
}(SpeakeasyBase));
export { ListSubscriptionQueryParams };
var ListSubscriptionSecurity = /** @class */ (function (_super) {
    __extends(ListSubscriptionSecurity, _super);
    function ListSubscriptionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSubscriptionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSubscriptionSecurity;
}(SpeakeasyBase));
export { ListSubscriptionSecurity };
var ListSubscriptionListSubscriptionResponseMeta = /** @class */ (function (_super) {
    __extends(ListSubscriptionListSubscriptionResponseMeta, _super);
    function ListSubscriptionListSubscriptionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSubscriptionListSubscriptionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSubscriptionListSubscriptionResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSubscriptionListSubscriptionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSubscriptionListSubscriptionResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSubscriptionListSubscriptionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSubscriptionListSubscriptionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSubscriptionListSubscriptionResponseMeta.prototype, "url", void 0);
    return ListSubscriptionListSubscriptionResponseMeta;
}(SpeakeasyBase));
export { ListSubscriptionListSubscriptionResponseMeta };
var ListSubscriptionListSubscriptionResponse = /** @class */ (function (_super) {
    __extends(ListSubscriptionListSubscriptionResponse, _super);
    function ListSubscriptionListSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSubscriptionListSubscriptionResponseMeta)
    ], ListSubscriptionListSubscriptionResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: shared.EventsV1Subscription }),
        __metadata("design:type", Array)
    ], ListSubscriptionListSubscriptionResponse.prototype, "subscriptions", void 0);
    return ListSubscriptionListSubscriptionResponse;
}(SpeakeasyBase));
export { ListSubscriptionListSubscriptionResponse };
var ListSubscriptionRequest = /** @class */ (function (_super) {
    __extends(ListSubscriptionRequest, _super);
    function ListSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSubscriptionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSubscriptionQueryParams)
    ], ListSubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSubscriptionSecurity)
    ], ListSubscriptionRequest.prototype, "security", void 0);
    return ListSubscriptionRequest;
}(SpeakeasyBase));
export { ListSubscriptionRequest };
var ListSubscriptionResponse = /** @class */ (function (_super) {
    __extends(ListSubscriptionResponse, _super);
    function ListSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSubscriptionListSubscriptionResponse)
    ], ListSubscriptionResponse.prototype, "listSubscriptionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSubscriptionResponse.prototype, "statusCode", void 0);
    return ListSubscriptionResponse;
}(SpeakeasyBase));
export { ListSubscriptionResponse };
