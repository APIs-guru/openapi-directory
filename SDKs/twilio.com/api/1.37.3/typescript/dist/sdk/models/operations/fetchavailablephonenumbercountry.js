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
export var FetchAvailablePhoneNumberCountryServerList = [
    "https://api.twilio.com",
];
var FetchAvailablePhoneNumberCountryPathParams = /** @class */ (function (_super) {
    __extends(FetchAvailablePhoneNumberCountryPathParams, _super);
    function FetchAvailablePhoneNumberCountryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchAvailablePhoneNumberCountryPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CountryCode" }),
        __metadata("design:type", String)
    ], FetchAvailablePhoneNumberCountryPathParams.prototype, "countryCode", void 0);
    return FetchAvailablePhoneNumberCountryPathParams;
}(SpeakeasyBase));
export { FetchAvailablePhoneNumberCountryPathParams };
var FetchAvailablePhoneNumberCountrySecurity = /** @class */ (function (_super) {
    __extends(FetchAvailablePhoneNumberCountrySecurity, _super);
    function FetchAvailablePhoneNumberCountrySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchAvailablePhoneNumberCountrySecurity.prototype, "accountSidAuthToken", void 0);
    return FetchAvailablePhoneNumberCountrySecurity;
}(SpeakeasyBase));
export { FetchAvailablePhoneNumberCountrySecurity };
var FetchAvailablePhoneNumberCountryRequest = /** @class */ (function (_super) {
    __extends(FetchAvailablePhoneNumberCountryRequest, _super);
    function FetchAvailablePhoneNumberCountryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchAvailablePhoneNumberCountryRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchAvailablePhoneNumberCountryPathParams)
    ], FetchAvailablePhoneNumberCountryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchAvailablePhoneNumberCountrySecurity)
    ], FetchAvailablePhoneNumberCountryRequest.prototype, "security", void 0);
    return FetchAvailablePhoneNumberCountryRequest;
}(SpeakeasyBase));
export { FetchAvailablePhoneNumberCountryRequest };
var FetchAvailablePhoneNumberCountryResponse = /** @class */ (function (_super) {
    __extends(FetchAvailablePhoneNumberCountryResponse, _super);
    function FetchAvailablePhoneNumberCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchAvailablePhoneNumberCountryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchAvailablePhoneNumberCountryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountAvailablePhoneNumberCountry)
    ], FetchAvailablePhoneNumberCountryResponse.prototype, "apiV2010AccountAvailablePhoneNumberCountry", void 0);
    return FetchAvailablePhoneNumberCountryResponse;
}(SpeakeasyBase));
export { FetchAvailablePhoneNumberCountryResponse };
