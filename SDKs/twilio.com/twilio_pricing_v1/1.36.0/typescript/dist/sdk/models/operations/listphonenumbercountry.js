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
export var LISTPHONENUMBERCOUNTRY_SERVERS = [
    "https://pricing.twilio.com",
];
var ListPhoneNumberCountryQueryParams = /** @class */ (function (_super) {
    __extends(ListPhoneNumberCountryQueryParams, _super);
    function ListPhoneNumberCountryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListPhoneNumberCountryQueryParams.prototype, "pageSize", void 0);
    return ListPhoneNumberCountryQueryParams;
}(SpeakeasyBase));
export { ListPhoneNumberCountryQueryParams };
var ListPhoneNumberCountrySecurity = /** @class */ (function (_super) {
    __extends(ListPhoneNumberCountrySecurity, _super);
    function ListPhoneNumberCountrySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListPhoneNumberCountrySecurity.prototype, "accountSidAuthToken", void 0);
    return ListPhoneNumberCountrySecurity;
}(SpeakeasyBase));
export { ListPhoneNumberCountrySecurity };
var ListPhoneNumberCountryRequest = /** @class */ (function (_super) {
    __extends(ListPhoneNumberCountryRequest, _super);
    function ListPhoneNumberCountryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListPhoneNumberCountryRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListPhoneNumberCountryQueryParams)
    ], ListPhoneNumberCountryRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListPhoneNumberCountrySecurity)
    ], ListPhoneNumberCountryRequest.prototype, "security", void 0);
    return ListPhoneNumberCountryRequest;
}(SpeakeasyBase));
export { ListPhoneNumberCountryRequest };
var ListPhoneNumberCountryListPhoneNumberCountryResponseMeta = /** @class */ (function (_super) {
    __extends(ListPhoneNumberCountryListPhoneNumberCountryResponseMeta, _super);
    function ListPhoneNumberCountryListPhoneNumberCountryResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListPhoneNumberCountryListPhoneNumberCountryResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListPhoneNumberCountryListPhoneNumberCountryResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListPhoneNumberCountryListPhoneNumberCountryResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListPhoneNumberCountryListPhoneNumberCountryResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListPhoneNumberCountryListPhoneNumberCountryResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListPhoneNumberCountryListPhoneNumberCountryResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListPhoneNumberCountryListPhoneNumberCountryResponseMeta.prototype, "url", void 0);
    return ListPhoneNumberCountryListPhoneNumberCountryResponseMeta;
}(SpeakeasyBase));
export { ListPhoneNumberCountryListPhoneNumberCountryResponseMeta };
var ListPhoneNumberCountryListPhoneNumberCountryResponse = /** @class */ (function (_super) {
    __extends(ListPhoneNumberCountryListPhoneNumberCountryResponse, _super);
    function ListPhoneNumberCountryListPhoneNumberCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=countries", elemType: shared.PricingV1PhoneNumberPhoneNumberCountry }),
        __metadata("design:type", Array)
    ], ListPhoneNumberCountryListPhoneNumberCountryResponse.prototype, "countries", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListPhoneNumberCountryListPhoneNumberCountryResponseMeta)
    ], ListPhoneNumberCountryListPhoneNumberCountryResponse.prototype, "meta", void 0);
    return ListPhoneNumberCountryListPhoneNumberCountryResponse;
}(SpeakeasyBase));
export { ListPhoneNumberCountryListPhoneNumberCountryResponse };
var ListPhoneNumberCountryResponse = /** @class */ (function (_super) {
    __extends(ListPhoneNumberCountryResponse, _super);
    function ListPhoneNumberCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListPhoneNumberCountryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListPhoneNumberCountryListPhoneNumberCountryResponse)
    ], ListPhoneNumberCountryResponse.prototype, "listPhoneNumberCountryResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListPhoneNumberCountryResponse.prototype, "statusCode", void 0);
    return ListPhoneNumberCountryResponse;
}(SpeakeasyBase));
export { ListPhoneNumberCountryResponse };
