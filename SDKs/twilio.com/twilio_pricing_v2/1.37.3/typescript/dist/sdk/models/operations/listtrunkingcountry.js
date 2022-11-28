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
export var ListTrunkingCountryServerList = [
    "https://pricing.twilio.com",
];
var ListTrunkingCountryQueryParams = /** @class */ (function (_super) {
    __extends(ListTrunkingCountryQueryParams, _super);
    function ListTrunkingCountryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTrunkingCountryQueryParams.prototype, "pageSize", void 0);
    return ListTrunkingCountryQueryParams;
}(SpeakeasyBase));
export { ListTrunkingCountryQueryParams };
var ListTrunkingCountrySecurity = /** @class */ (function (_super) {
    __extends(ListTrunkingCountrySecurity, _super);
    function ListTrunkingCountrySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTrunkingCountrySecurity.prototype, "accountSidAuthToken", void 0);
    return ListTrunkingCountrySecurity;
}(SpeakeasyBase));
export { ListTrunkingCountrySecurity };
var ListTrunkingCountryListTrunkingCountryResponseMeta = /** @class */ (function (_super) {
    __extends(ListTrunkingCountryListTrunkingCountryResponseMeta, _super);
    function ListTrunkingCountryListTrunkingCountryResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTrunkingCountryListTrunkingCountryResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTrunkingCountryListTrunkingCountryResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTrunkingCountryListTrunkingCountryResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTrunkingCountryListTrunkingCountryResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTrunkingCountryListTrunkingCountryResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTrunkingCountryListTrunkingCountryResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTrunkingCountryListTrunkingCountryResponseMeta.prototype, "url", void 0);
    return ListTrunkingCountryListTrunkingCountryResponseMeta;
}(SpeakeasyBase));
export { ListTrunkingCountryListTrunkingCountryResponseMeta };
var ListTrunkingCountryListTrunkingCountryResponse = /** @class */ (function (_super) {
    __extends(ListTrunkingCountryListTrunkingCountryResponse, _super);
    function ListTrunkingCountryListTrunkingCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countries", elemType: shared.PricingV2TrunkingCountry }),
        __metadata("design:type", Array)
    ], ListTrunkingCountryListTrunkingCountryResponse.prototype, "countries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListTrunkingCountryListTrunkingCountryResponseMeta)
    ], ListTrunkingCountryListTrunkingCountryResponse.prototype, "meta", void 0);
    return ListTrunkingCountryListTrunkingCountryResponse;
}(SpeakeasyBase));
export { ListTrunkingCountryListTrunkingCountryResponse };
var ListTrunkingCountryRequest = /** @class */ (function (_super) {
    __extends(ListTrunkingCountryRequest, _super);
    function ListTrunkingCountryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTrunkingCountryRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTrunkingCountryQueryParams)
    ], ListTrunkingCountryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTrunkingCountrySecurity)
    ], ListTrunkingCountryRequest.prototype, "security", void 0);
    return ListTrunkingCountryRequest;
}(SpeakeasyBase));
export { ListTrunkingCountryRequest };
var ListTrunkingCountryResponse = /** @class */ (function (_super) {
    __extends(ListTrunkingCountryResponse, _super);
    function ListTrunkingCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTrunkingCountryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTrunkingCountryListTrunkingCountryResponse)
    ], ListTrunkingCountryResponse.prototype, "listTrunkingCountryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTrunkingCountryResponse.prototype, "statusCode", void 0);
    return ListTrunkingCountryResponse;
}(SpeakeasyBase));
export { ListTrunkingCountryResponse };
