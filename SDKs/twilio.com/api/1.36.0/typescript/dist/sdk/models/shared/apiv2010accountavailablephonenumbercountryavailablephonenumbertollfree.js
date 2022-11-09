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
// ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities
/**
 * Whether a phone number can receive calls or messages
**/
var ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities = /** @class */ (function (_super) {
    __extends(ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities, _super);
    function ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=fax" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities.prototype, "fax", void 0);
    __decorate([
        Metadata({ data: "json, name=mms" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities.prototype, "mms", void 0);
    __decorate([
        Metadata({ data: "json, name=sms" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities.prototype, "sms", void 0);
    __decorate([
        Metadata({ data: "json, name=voice" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities.prototype, "voice", void 0);
    return ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities;
}(SpeakeasyBase));
export { ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities };
var ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree = /** @class */ (function (_super) {
    __extends(ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree, _super);
    function ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=address_requirements" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree.prototype, "addressRequirements", void 0);
    __decorate([
        Metadata({ data: "json, name=beta" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree.prototype, "beta", void 0);
    __decorate([
        Metadata({ data: "json, name=capabilities" }),
        __metadata("design:type", ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree.prototype, "capabilities", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=iso_country" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree.prototype, "isoCountry", void 0);
    __decorate([
        Metadata({ data: "json, name=lata" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree.prototype, "lata", void 0);
    __decorate([
        Metadata({ data: "json, name=latitude" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree.prototype, "latitude", void 0);
    __decorate([
        Metadata({ data: "json, name=locality" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree.prototype, "locality", void 0);
    __decorate([
        Metadata({ data: "json, name=longitude" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree.prototype, "longitude", void 0);
    __decorate([
        Metadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=postal_code" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree.prototype, "postalCode", void 0);
    __decorate([
        Metadata({ data: "json, name=rate_center" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree.prototype, "rateCenter", void 0);
    __decorate([
        Metadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree.prototype, "region", void 0);
    return ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree;
}(SpeakeasyBase));
export { ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree };
