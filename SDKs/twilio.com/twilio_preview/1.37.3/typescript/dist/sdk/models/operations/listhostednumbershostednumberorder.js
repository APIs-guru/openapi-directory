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
export var ListHostedNumbersHostedNumberOrderServerList = [
    "https://preview.twilio.com",
];
var ListHostedNumbersHostedNumberOrderQueryParams = /** @class */ (function (_super) {
    __extends(ListHostedNumbersHostedNumberOrderQueryParams, _super);
    function ListHostedNumbersHostedNumberOrderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListHostedNumbersHostedNumberOrderQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncomingPhoneNumberSid" }),
        __metadata("design:type", String)
    ], ListHostedNumbersHostedNumberOrderQueryParams.prototype, "incomingPhoneNumberSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListHostedNumbersHostedNumberOrderQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" }),
        __metadata("design:type", String)
    ], ListHostedNumbersHostedNumberOrderQueryParams.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListHostedNumbersHostedNumberOrderQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UniqueName" }),
        __metadata("design:type", String)
    ], ListHostedNumbersHostedNumberOrderQueryParams.prototype, "uniqueName", void 0);
    return ListHostedNumbersHostedNumberOrderQueryParams;
}(SpeakeasyBase));
export { ListHostedNumbersHostedNumberOrderQueryParams };
var ListHostedNumbersHostedNumberOrderSecurity = /** @class */ (function (_super) {
    __extends(ListHostedNumbersHostedNumberOrderSecurity, _super);
    function ListHostedNumbersHostedNumberOrderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListHostedNumbersHostedNumberOrderSecurity.prototype, "accountSidAuthToken", void 0);
    return ListHostedNumbersHostedNumberOrderSecurity;
}(SpeakeasyBase));
export { ListHostedNumbersHostedNumberOrderSecurity };
var ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta = /** @class */ (function (_super) {
    __extends(ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta, _super);
    function ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta.prototype, "url", void 0);
    return ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta;
}(SpeakeasyBase));
export { ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta };
var ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse = /** @class */ (function (_super) {
    __extends(ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse, _super);
    function ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.PreviewHostedNumbersHostedNumberOrder }),
        __metadata("design:type", Array)
    ], ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta)
    ], ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse.prototype, "meta", void 0);
    return ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse;
}(SpeakeasyBase));
export { ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse };
var ListHostedNumbersHostedNumberOrderRequest = /** @class */ (function (_super) {
    __extends(ListHostedNumbersHostedNumberOrderRequest, _super);
    function ListHostedNumbersHostedNumberOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListHostedNumbersHostedNumberOrderRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListHostedNumbersHostedNumberOrderQueryParams)
    ], ListHostedNumbersHostedNumberOrderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListHostedNumbersHostedNumberOrderSecurity)
    ], ListHostedNumbersHostedNumberOrderRequest.prototype, "security", void 0);
    return ListHostedNumbersHostedNumberOrderRequest;
}(SpeakeasyBase));
export { ListHostedNumbersHostedNumberOrderRequest };
var ListHostedNumbersHostedNumberOrderResponse = /** @class */ (function (_super) {
    __extends(ListHostedNumbersHostedNumberOrderResponse, _super);
    function ListHostedNumbersHostedNumberOrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListHostedNumbersHostedNumberOrderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse)
    ], ListHostedNumbersHostedNumberOrderResponse.prototype, "listHostedNumbersHostedNumberOrderResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListHostedNumbersHostedNumberOrderResponse.prototype, "statusCode", void 0);
    return ListHostedNumbersHostedNumberOrderResponse;
}(SpeakeasyBase));
export { ListHostedNumbersHostedNumberOrderResponse };
