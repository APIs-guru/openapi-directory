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
export var ListVoiceCountryServerList = [
    "https://pricing.twilio.com",
];
var ListVoiceCountryQueryParams = /** @class */ (function (_super) {
    __extends(ListVoiceCountryQueryParams, _super);
    function ListVoiceCountryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListVoiceCountryQueryParams.prototype, "pageSize", void 0);
    return ListVoiceCountryQueryParams;
}(SpeakeasyBase));
export { ListVoiceCountryQueryParams };
var ListVoiceCountrySecurity = /** @class */ (function (_super) {
    __extends(ListVoiceCountrySecurity, _super);
    function ListVoiceCountrySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListVoiceCountrySecurity.prototype, "accountSidAuthToken", void 0);
    return ListVoiceCountrySecurity;
}(SpeakeasyBase));
export { ListVoiceCountrySecurity };
var ListVoiceCountryListVoiceCountryResponseMeta = /** @class */ (function (_super) {
    __extends(ListVoiceCountryListVoiceCountryResponseMeta, _super);
    function ListVoiceCountryListVoiceCountryResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListVoiceCountryListVoiceCountryResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListVoiceCountryListVoiceCountryResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListVoiceCountryListVoiceCountryResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListVoiceCountryListVoiceCountryResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListVoiceCountryListVoiceCountryResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListVoiceCountryListVoiceCountryResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListVoiceCountryListVoiceCountryResponseMeta.prototype, "url", void 0);
    return ListVoiceCountryListVoiceCountryResponseMeta;
}(SpeakeasyBase));
export { ListVoiceCountryListVoiceCountryResponseMeta };
var ListVoiceCountryListVoiceCountryResponse = /** @class */ (function (_super) {
    __extends(ListVoiceCountryListVoiceCountryResponse, _super);
    function ListVoiceCountryListVoiceCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countries", elemType: shared.PricingV1VoiceVoiceCountry }),
        __metadata("design:type", Array)
    ], ListVoiceCountryListVoiceCountryResponse.prototype, "countries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListVoiceCountryListVoiceCountryResponseMeta)
    ], ListVoiceCountryListVoiceCountryResponse.prototype, "meta", void 0);
    return ListVoiceCountryListVoiceCountryResponse;
}(SpeakeasyBase));
export { ListVoiceCountryListVoiceCountryResponse };
var ListVoiceCountryRequest = /** @class */ (function (_super) {
    __extends(ListVoiceCountryRequest, _super);
    function ListVoiceCountryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListVoiceCountryRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVoiceCountryQueryParams)
    ], ListVoiceCountryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVoiceCountrySecurity)
    ], ListVoiceCountryRequest.prototype, "security", void 0);
    return ListVoiceCountryRequest;
}(SpeakeasyBase));
export { ListVoiceCountryRequest };
var ListVoiceCountryResponse = /** @class */ (function (_super) {
    __extends(ListVoiceCountryResponse, _super);
    function ListVoiceCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListVoiceCountryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVoiceCountryListVoiceCountryResponse)
    ], ListVoiceCountryResponse.prototype, "listVoiceCountryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListVoiceCountryResponse.prototype, "statusCode", void 0);
    return ListVoiceCountryResponse;
}(SpeakeasyBase));
export { ListVoiceCountryResponse };
