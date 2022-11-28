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
export var FetchTrunkingCountryServerList = [
    "https://pricing.twilio.com",
];
var FetchTrunkingCountryPathParams = /** @class */ (function (_super) {
    __extends(FetchTrunkingCountryPathParams, _super);
    function FetchTrunkingCountryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IsoCountry" }),
        __metadata("design:type", String)
    ], FetchTrunkingCountryPathParams.prototype, "isoCountry", void 0);
    return FetchTrunkingCountryPathParams;
}(SpeakeasyBase));
export { FetchTrunkingCountryPathParams };
var FetchTrunkingCountrySecurity = /** @class */ (function (_super) {
    __extends(FetchTrunkingCountrySecurity, _super);
    function FetchTrunkingCountrySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTrunkingCountrySecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTrunkingCountrySecurity;
}(SpeakeasyBase));
export { FetchTrunkingCountrySecurity };
var FetchTrunkingCountryRequest = /** @class */ (function (_super) {
    __extends(FetchTrunkingCountryRequest, _super);
    function FetchTrunkingCountryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTrunkingCountryRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTrunkingCountryPathParams)
    ], FetchTrunkingCountryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTrunkingCountrySecurity)
    ], FetchTrunkingCountryRequest.prototype, "security", void 0);
    return FetchTrunkingCountryRequest;
}(SpeakeasyBase));
export { FetchTrunkingCountryRequest };
var FetchTrunkingCountryResponse = /** @class */ (function (_super) {
    __extends(FetchTrunkingCountryResponse, _super);
    function FetchTrunkingCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTrunkingCountryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchTrunkingCountryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PricingV2TrunkingCountryInstance)
    ], FetchTrunkingCountryResponse.prototype, "pricingV2TrunkingCountryInstance", void 0);
    return FetchTrunkingCountryResponse;
}(SpeakeasyBase));
export { FetchTrunkingCountryResponse };
