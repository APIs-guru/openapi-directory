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
export var ListMessagingCountryServerList = [
    "https://pricing.twilio.com",
];
var ListMessagingCountryQueryParams = /** @class */ (function (_super) {
    __extends(ListMessagingCountryQueryParams, _super);
    function ListMessagingCountryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMessagingCountryQueryParams.prototype, "pageSize", void 0);
    return ListMessagingCountryQueryParams;
}(SpeakeasyBase));
export { ListMessagingCountryQueryParams };
var ListMessagingCountrySecurity = /** @class */ (function (_super) {
    __extends(ListMessagingCountrySecurity, _super);
    function ListMessagingCountrySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMessagingCountrySecurity.prototype, "accountSidAuthToken", void 0);
    return ListMessagingCountrySecurity;
}(SpeakeasyBase));
export { ListMessagingCountrySecurity };
var ListMessagingCountryListMessagingCountryResponseMeta = /** @class */ (function (_super) {
    __extends(ListMessagingCountryListMessagingCountryResponseMeta, _super);
    function ListMessagingCountryListMessagingCountryResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMessagingCountryListMessagingCountryResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMessagingCountryListMessagingCountryResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMessagingCountryListMessagingCountryResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMessagingCountryListMessagingCountryResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMessagingCountryListMessagingCountryResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMessagingCountryListMessagingCountryResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMessagingCountryListMessagingCountryResponseMeta.prototype, "url", void 0);
    return ListMessagingCountryListMessagingCountryResponseMeta;
}(SpeakeasyBase));
export { ListMessagingCountryListMessagingCountryResponseMeta };
var ListMessagingCountryListMessagingCountryResponse = /** @class */ (function (_super) {
    __extends(ListMessagingCountryListMessagingCountryResponse, _super);
    function ListMessagingCountryListMessagingCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countries", elemType: shared.PricingV1MessagingMessagingCountry }),
        __metadata("design:type", Array)
    ], ListMessagingCountryListMessagingCountryResponse.prototype, "countries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListMessagingCountryListMessagingCountryResponseMeta)
    ], ListMessagingCountryListMessagingCountryResponse.prototype, "meta", void 0);
    return ListMessagingCountryListMessagingCountryResponse;
}(SpeakeasyBase));
export { ListMessagingCountryListMessagingCountryResponse };
var ListMessagingCountryRequest = /** @class */ (function (_super) {
    __extends(ListMessagingCountryRequest, _super);
    function ListMessagingCountryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMessagingCountryRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMessagingCountryQueryParams)
    ], ListMessagingCountryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMessagingCountrySecurity)
    ], ListMessagingCountryRequest.prototype, "security", void 0);
    return ListMessagingCountryRequest;
}(SpeakeasyBase));
export { ListMessagingCountryRequest };
var ListMessagingCountryResponse = /** @class */ (function (_super) {
    __extends(ListMessagingCountryResponse, _super);
    function ListMessagingCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMessagingCountryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMessagingCountryListMessagingCountryResponse)
    ], ListMessagingCountryResponse.prototype, "listMessagingCountryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListMessagingCountryResponse.prototype, "statusCode", void 0);
    return ListMessagingCountryResponse;
}(SpeakeasyBase));
export { ListMessagingCountryResponse };
