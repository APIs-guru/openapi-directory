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
// PricingV2VoiceVoiceNumberInboundCallPrice
/**
 * The InboundCallPrice record
**/
var PricingV2VoiceVoiceNumberInboundCallPrice = /** @class */ (function (_super) {
    __extends(PricingV2VoiceVoiceNumberInboundCallPrice, _super);
    function PricingV2VoiceVoiceNumberInboundCallPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base_price" }),
        __metadata("design:type", Number)
    ], PricingV2VoiceVoiceNumberInboundCallPrice.prototype, "basePrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_price" }),
        __metadata("design:type", Number)
    ], PricingV2VoiceVoiceNumberInboundCallPrice.prototype, "currentPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number_type" }),
        __metadata("design:type", String)
    ], PricingV2VoiceVoiceNumberInboundCallPrice.prototype, "numberType", void 0);
    return PricingV2VoiceVoiceNumberInboundCallPrice;
}(SpeakeasyBase));
export { PricingV2VoiceVoiceNumberInboundCallPrice };
var PricingV2VoiceVoiceNumberOutboundCallPrices = /** @class */ (function (_super) {
    __extends(PricingV2VoiceVoiceNumberOutboundCallPrices, _super);
    function PricingV2VoiceVoiceNumberOutboundCallPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base_price" }),
        __metadata("design:type", Number)
    ], PricingV2VoiceVoiceNumberOutboundCallPrices.prototype, "basePrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_price" }),
        __metadata("design:type", Number)
    ], PricingV2VoiceVoiceNumberOutboundCallPrices.prototype, "currentPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origination_prefixes" }),
        __metadata("design:type", Array)
    ], PricingV2VoiceVoiceNumberOutboundCallPrices.prototype, "originationPrefixes", void 0);
    return PricingV2VoiceVoiceNumberOutboundCallPrices;
}(SpeakeasyBase));
export { PricingV2VoiceVoiceNumberOutboundCallPrices };
var PricingV2VoiceVoiceNumber = /** @class */ (function (_super) {
    __extends(PricingV2VoiceVoiceNumber, _super);
    function PricingV2VoiceVoiceNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PricingV2VoiceVoiceNumber.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_number" }),
        __metadata("design:type", String)
    ], PricingV2VoiceVoiceNumber.prototype, "destinationNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_call_price" }),
        __metadata("design:type", PricingV2VoiceVoiceNumberInboundCallPrice)
    ], PricingV2VoiceVoiceNumber.prototype, "inboundCallPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso_country" }),
        __metadata("design:type", String)
    ], PricingV2VoiceVoiceNumber.prototype, "isoCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origination_number" }),
        __metadata("design:type", String)
    ], PricingV2VoiceVoiceNumber.prototype, "originationNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound_call_prices", elemType: PricingV2VoiceVoiceNumberOutboundCallPrices }),
        __metadata("design:type", Array)
    ], PricingV2VoiceVoiceNumber.prototype, "outboundCallPrices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_unit" }),
        __metadata("design:type", String)
    ], PricingV2VoiceVoiceNumber.prototype, "priceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PricingV2VoiceVoiceNumber.prototype, "url", void 0);
    return PricingV2VoiceVoiceNumber;
}(SpeakeasyBase));
export { PricingV2VoiceVoiceNumber };
