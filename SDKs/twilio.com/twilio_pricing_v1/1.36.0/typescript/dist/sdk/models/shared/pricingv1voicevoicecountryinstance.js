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
var PricingV1VoiceVoiceCountryInstanceInboundCallPrices = /** @class */ (function (_super) {
    __extends(PricingV1VoiceVoiceCountryInstanceInboundCallPrices, _super);
    function PricingV1VoiceVoiceCountryInstanceInboundCallPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=base_price" }),
        __metadata("design:type", Number)
    ], PricingV1VoiceVoiceCountryInstanceInboundCallPrices.prototype, "basePrice", void 0);
    __decorate([
        Metadata({ data: "json, name=current_price" }),
        __metadata("design:type", Number)
    ], PricingV1VoiceVoiceCountryInstanceInboundCallPrices.prototype, "currentPrice", void 0);
    __decorate([
        Metadata({ data: "json, name=number_type" }),
        __metadata("design:type", String)
    ], PricingV1VoiceVoiceCountryInstanceInboundCallPrices.prototype, "numberType", void 0);
    return PricingV1VoiceVoiceCountryInstanceInboundCallPrices;
}(SpeakeasyBase));
export { PricingV1VoiceVoiceCountryInstanceInboundCallPrices };
var PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices = /** @class */ (function (_super) {
    __extends(PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices, _super);
    function PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=base_price" }),
        __metadata("design:type", Number)
    ], PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices.prototype, "basePrice", void 0);
    __decorate([
        Metadata({ data: "json, name=current_price" }),
        __metadata("design:type", Number)
    ], PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices.prototype, "currentPrice", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=prefixes" }),
        __metadata("design:type", Array)
    ], PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices.prototype, "prefixes", void 0);
    return PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices;
}(SpeakeasyBase));
export { PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices };
var PricingV1VoiceVoiceCountryInstance = /** @class */ (function (_super) {
    __extends(PricingV1VoiceVoiceCountryInstance, _super);
    function PricingV1VoiceVoiceCountryInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PricingV1VoiceVoiceCountryInstance.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "json, name=inbound_call_prices", elemType: shared.PricingV1VoiceVoiceCountryInstanceInboundCallPrices }),
        __metadata("design:type", Array)
    ], PricingV1VoiceVoiceCountryInstance.prototype, "inboundCallPrices", void 0);
    __decorate([
        Metadata({ data: "json, name=iso_country" }),
        __metadata("design:type", String)
    ], PricingV1VoiceVoiceCountryInstance.prototype, "isoCountry", void 0);
    __decorate([
        Metadata({ data: "json, name=outbound_prefix_prices", elemType: shared.PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices }),
        __metadata("design:type", Array)
    ], PricingV1VoiceVoiceCountryInstance.prototype, "outboundPrefixPrices", void 0);
    __decorate([
        Metadata({ data: "json, name=price_unit" }),
        __metadata("design:type", String)
    ], PricingV1VoiceVoiceCountryInstance.prototype, "priceUnit", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PricingV1VoiceVoiceCountryInstance.prototype, "url", void 0);
    return PricingV1VoiceVoiceCountryInstance;
}(SpeakeasyBase));
export { PricingV1VoiceVoiceCountryInstance };
