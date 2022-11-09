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
export var LISTDIALINGPERMISSIONSCOUNTRY_SERVERS = [
    "https://voice.twilio.com",
];
var ListDialingPermissionsCountryQueryParams = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsCountryQueryParams, _super);
    function ListDialingPermissionsCountryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Continent" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryQueryParams.prototype, "continent", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CountryCode" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryQueryParams.prototype, "countryCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=HighRiskSpecialNumbersEnabled" }),
        __metadata("design:type", Boolean)
    ], ListDialingPermissionsCountryQueryParams.prototype, "highRiskSpecialNumbersEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=HighRiskTollfraudNumbersEnabled" }),
        __metadata("design:type", Boolean)
    ], ListDialingPermissionsCountryQueryParams.prototype, "highRiskTollfraudNumbersEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IsoCode" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryQueryParams.prototype, "isoCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LowRiskNumbersEnabled" }),
        __metadata("design:type", Boolean)
    ], ListDialingPermissionsCountryQueryParams.prototype, "lowRiskNumbersEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDialingPermissionsCountryQueryParams.prototype, "pageSize", void 0);
    return ListDialingPermissionsCountryQueryParams;
}(SpeakeasyBase));
export { ListDialingPermissionsCountryQueryParams };
var ListDialingPermissionsCountrySecurity = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsCountrySecurity, _super);
    function ListDialingPermissionsCountrySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDialingPermissionsCountrySecurity.prototype, "accountSidAuthToken", void 0);
    return ListDialingPermissionsCountrySecurity;
}(SpeakeasyBase));
export { ListDialingPermissionsCountrySecurity };
var ListDialingPermissionsCountryRequest = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsCountryRequest, _super);
    function ListDialingPermissionsCountryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDialingPermissionsCountryQueryParams)
    ], ListDialingPermissionsCountryRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDialingPermissionsCountrySecurity)
    ], ListDialingPermissionsCountryRequest.prototype, "security", void 0);
    return ListDialingPermissionsCountryRequest;
}(SpeakeasyBase));
export { ListDialingPermissionsCountryRequest };
var ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta, _super);
    function ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "url", void 0);
    return ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta;
}(SpeakeasyBase));
export { ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta };
var ListDialingPermissionsCountryListDialingPermissionsCountryResponse = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsCountryListDialingPermissionsCountryResponse, _super);
    function ListDialingPermissionsCountryListDialingPermissionsCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=content", elemType: shared.VoiceV1DialingPermissionsDialingPermissionsCountry }),
        __metadata("design:type", Array)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponse.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponse.prototype, "meta", void 0);
    return ListDialingPermissionsCountryListDialingPermissionsCountryResponse;
}(SpeakeasyBase));
export { ListDialingPermissionsCountryListDialingPermissionsCountryResponse };
var ListDialingPermissionsCountryResponse = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsCountryResponse, _super);
    function ListDialingPermissionsCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDialingPermissionsCountryListDialingPermissionsCountryResponse)
    ], ListDialingPermissionsCountryResponse.prototype, "listDialingPermissionsCountryResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDialingPermissionsCountryResponse.prototype, "statusCode", void 0);
    return ListDialingPermissionsCountryResponse;
}(SpeakeasyBase));
export { ListDialingPermissionsCountryResponse };
