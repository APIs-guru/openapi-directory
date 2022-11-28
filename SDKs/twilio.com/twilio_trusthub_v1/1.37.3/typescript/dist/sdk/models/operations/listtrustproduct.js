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
export var ListTrustProductServerList = [
    "https://trusthub.twilio.com",
];
var ListTrustProductQueryParams = /** @class */ (function (_super) {
    __extends(ListTrustProductQueryParams, _super);
    function ListTrustProductQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListTrustProductQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTrustProductQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicySid" }),
        __metadata("design:type", String)
    ], ListTrustProductQueryParams.prototype, "policySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListTrustProductQueryParams.prototype, "status", void 0);
    return ListTrustProductQueryParams;
}(SpeakeasyBase));
export { ListTrustProductQueryParams };
var ListTrustProductSecurity = /** @class */ (function (_super) {
    __extends(ListTrustProductSecurity, _super);
    function ListTrustProductSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTrustProductSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTrustProductSecurity;
}(SpeakeasyBase));
export { ListTrustProductSecurity };
var ListTrustProductListTrustProductResponseMeta = /** @class */ (function (_super) {
    __extends(ListTrustProductListTrustProductResponseMeta, _super);
    function ListTrustProductListTrustProductResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductListTrustProductResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTrustProductListTrustProductResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductListTrustProductResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTrustProductListTrustProductResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTrustProductListTrustProductResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductListTrustProductResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTrustProductListTrustProductResponseMeta.prototype, "url", void 0);
    return ListTrustProductListTrustProductResponseMeta;
}(SpeakeasyBase));
export { ListTrustProductListTrustProductResponseMeta };
var ListTrustProductListTrustProductResponse = /** @class */ (function (_super) {
    __extends(ListTrustProductListTrustProductResponse, _super);
    function ListTrustProductListTrustProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListTrustProductListTrustProductResponseMeta)
    ], ListTrustProductListTrustProductResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.TrusthubV1TrustProduct }),
        __metadata("design:type", Array)
    ], ListTrustProductListTrustProductResponse.prototype, "results", void 0);
    return ListTrustProductListTrustProductResponse;
}(SpeakeasyBase));
export { ListTrustProductListTrustProductResponse };
var ListTrustProductRequest = /** @class */ (function (_super) {
    __extends(ListTrustProductRequest, _super);
    function ListTrustProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTrustProductRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTrustProductQueryParams)
    ], ListTrustProductRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTrustProductSecurity)
    ], ListTrustProductRequest.prototype, "security", void 0);
    return ListTrustProductRequest;
}(SpeakeasyBase));
export { ListTrustProductRequest };
var ListTrustProductResponse = /** @class */ (function (_super) {
    __extends(ListTrustProductResponse, _super);
    function ListTrustProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTrustProductResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTrustProductListTrustProductResponse)
    ], ListTrustProductResponse.prototype, "listTrustProductResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTrustProductResponse.prototype, "statusCode", void 0);
    return ListTrustProductResponse;
}(SpeakeasyBase));
export { ListTrustProductResponse };
