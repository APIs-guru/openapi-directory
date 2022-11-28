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
// PricingV1VoiceVoiceNumberInboundCallPrice
/**
 * The InboundCallPrice record
**/
var PricingV1VoiceVoiceNumberInboundCallPrice = /** @class */ (function (_super) {
    __extends(PricingV1VoiceVoiceNumberInboundCallPrice, _super);
    function PricingV1VoiceVoiceNumberInboundCallPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base_price" }),
        __metadata("design:type", Number)
    ], PricingV1VoiceVoiceNumberInboundCallPrice.prototype, "basePrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_price" }),
        __metadata("design:type", Number)
    ], PricingV1VoiceVoiceNumberInboundCallPrice.prototype, "currentPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number_type" }),
        __metadata("design:type", String)
    ], PricingV1VoiceVoiceNumberInboundCallPrice.prototype, "numberType", void 0);
    return PricingV1VoiceVoiceNumberInboundCallPrice;
}(SpeakeasyBase));
export { PricingV1VoiceVoiceNumberInboundCallPrice };
// PricingV1VoiceVoiceNumberOutboundCallPrice
/**
 * The OutboundCallPrice record
**/
var PricingV1VoiceVoiceNumberOutboundCallPrice = /** @class */ (function (_super) {
    __extends(PricingV1VoiceVoiceNumberOutboundCallPrice, _super);
    function PricingV1VoiceVoiceNumberOutboundCallPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base_price" }),
        __metadata("design:type", Number)
    ], PricingV1VoiceVoiceNumberOutboundCallPrice.prototype, "basePrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_price" }),
        __metadata("design:type", Number)
    ], PricingV1VoiceVoiceNumberOutboundCallPrice.prototype, "currentPrice", void 0);
    return PricingV1VoiceVoiceNumberOutboundCallPrice;
}(SpeakeasyBase));
export { PricingV1VoiceVoiceNumberOutboundCallPrice };
var PricingV1VoiceVoiceNumber = /** @class */ (function (_super) {
    __extends(PricingV1VoiceVoiceNumber, _super);
    function PricingV1VoiceVoiceNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PricingV1VoiceVoiceNumber.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_call_price" }),
        __metadata("design:type", PricingV1VoiceVoiceNumberInboundCallPrice)
    ], PricingV1VoiceVoiceNumber.prototype, "inboundCallPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso_country" }),
        __metadata("design:type", String)
    ], PricingV1VoiceVoiceNumber.prototype, "isoCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PricingV1VoiceVoiceNumber.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound_call_price" }),
        __metadata("design:type", PricingV1VoiceVoiceNumberOutboundCallPrice)
    ], PricingV1VoiceVoiceNumber.prototype, "outboundCallPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_unit" }),
        __metadata("design:type", String)
    ], PricingV1VoiceVoiceNumber.prototype, "priceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PricingV1VoiceVoiceNumber.prototype, "url", void 0);
    return PricingV1VoiceVoiceNumber;
}(SpeakeasyBase));
export { PricingV1VoiceVoiceNumber };
