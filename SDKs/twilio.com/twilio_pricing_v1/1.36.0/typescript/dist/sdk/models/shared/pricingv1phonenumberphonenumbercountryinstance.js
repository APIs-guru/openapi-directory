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
var PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices = /** @class */ (function (_super) {
    __extends(PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices, _super);
    function PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=base_price" }),
        __metadata("design:type", Number)
    ], PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices.prototype, "basePrice", void 0);
    __decorate([
        Metadata({ data: "json, name=current_price" }),
        __metadata("design:type", Number)
    ], PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices.prototype, "currentPrice", void 0);
    __decorate([
        Metadata({ data: "json, name=number_type" }),
        __metadata("design:type", String)
    ], PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices.prototype, "numberType", void 0);
    return PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices;
}(SpeakeasyBase));
export { PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices };
var PricingV1PhoneNumberPhoneNumberCountryInstance = /** @class */ (function (_super) {
    __extends(PricingV1PhoneNumberPhoneNumberCountryInstance, _super);
    function PricingV1PhoneNumberPhoneNumberCountryInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PricingV1PhoneNumberPhoneNumberCountryInstance.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "json, name=iso_country" }),
        __metadata("design:type", String)
    ], PricingV1PhoneNumberPhoneNumberCountryInstance.prototype, "isoCountry", void 0);
    __decorate([
        Metadata({ data: "json, name=phone_number_prices", elemType: shared.PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices }),
        __metadata("design:type", Array)
    ], PricingV1PhoneNumberPhoneNumberCountryInstance.prototype, "phoneNumberPrices", void 0);
    __decorate([
        Metadata({ data: "json, name=price_unit" }),
        __metadata("design:type", String)
    ], PricingV1PhoneNumberPhoneNumberCountryInstance.prototype, "priceUnit", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PricingV1PhoneNumberPhoneNumberCountryInstance.prototype, "url", void 0);
    return PricingV1PhoneNumberPhoneNumberCountryInstance;
}(SpeakeasyBase));
export { PricingV1PhoneNumberPhoneNumberCountryInstance };
