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
// ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities
/**
 * Whether a phone number can receive calls or messages
**/
var ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities = /** @class */ (function (_super) {
    __extends(ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities, _super);
    function ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mms" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities.prototype, "mms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities.prototype, "sms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities.prototype, "voice", void 0);
    return ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities;
}(SpeakeasyBase));
export { ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities };
var ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational = /** @class */ (function (_super) {
    __extends(ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational, _super);
    function ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_requirements" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational.prototype, "addressRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beta" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational.prototype, "beta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso_country" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational.prototype, "isoCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lata" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational.prototype, "lata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locality" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postal_code" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate_center" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational.prototype, "rateCenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational.prototype, "region", void 0);
    return ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational;
}(SpeakeasyBase));
export { ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational };
