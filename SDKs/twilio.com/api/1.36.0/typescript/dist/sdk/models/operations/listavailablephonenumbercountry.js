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
export var LISTAVAILABLEPHONENUMBERCOUNTRY_SERVERS = [
    "https://api.twilio.com",
];
var ListAvailablePhoneNumberCountryPathParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberCountryPathParams, _super);
    function ListAvailablePhoneNumberCountryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberCountryPathParams.prototype, "accountSid", void 0);
    return ListAvailablePhoneNumberCountryPathParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberCountryPathParams };
var ListAvailablePhoneNumberCountryQueryParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberCountryQueryParams, _super);
    function ListAvailablePhoneNumberCountryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberCountryQueryParams.prototype, "pageSize", void 0);
    return ListAvailablePhoneNumberCountryQueryParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberCountryQueryParams };
var ListAvailablePhoneNumberCountrySecurity = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberCountrySecurity, _super);
    function ListAvailablePhoneNumberCountrySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAvailablePhoneNumberCountrySecurity.prototype, "accountSidAuthToken", void 0);
    return ListAvailablePhoneNumberCountrySecurity;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberCountrySecurity };
var ListAvailablePhoneNumberCountryRequest = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberCountryRequest, _super);
    function ListAvailablePhoneNumberCountryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberCountryRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberCountryPathParams)
    ], ListAvailablePhoneNumberCountryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberCountryQueryParams)
    ], ListAvailablePhoneNumberCountryRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberCountrySecurity)
    ], ListAvailablePhoneNumberCountryRequest.prototype, "security", void 0);
    return ListAvailablePhoneNumberCountryRequest;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberCountryRequest };
var ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse, _super);
    function ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=countries", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountry }),
        __metadata("design:type", Array)
    ], ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse.prototype, "countries", void 0);
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse.prototype, "uri", void 0);
    return ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse };
var ListAvailablePhoneNumberCountryResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberCountryResponse, _super);
    function ListAvailablePhoneNumberCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberCountryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse)
    ], ListAvailablePhoneNumberCountryResponse.prototype, "listAvailablePhoneNumberCountryResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberCountryResponse.prototype, "statusCode", void 0);
    return ListAvailablePhoneNumberCountryResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberCountryResponse };
