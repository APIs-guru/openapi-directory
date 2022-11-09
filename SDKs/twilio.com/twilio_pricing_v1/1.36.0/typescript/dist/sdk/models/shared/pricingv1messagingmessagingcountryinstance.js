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
var PricingV1MessagingMessagingCountryInstanceInboundSmsPrices = /** @class */ (function (_super) {
    __extends(PricingV1MessagingMessagingCountryInstanceInboundSmsPrices, _super);
    function PricingV1MessagingMessagingCountryInstanceInboundSmsPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=base_price" }),
        __metadata("design:type", Number)
    ], PricingV1MessagingMessagingCountryInstanceInboundSmsPrices.prototype, "basePrice", void 0);
    __decorate([
        Metadata({ data: "json, name=current_price" }),
        __metadata("design:type", Number)
    ], PricingV1MessagingMessagingCountryInstanceInboundSmsPrices.prototype, "currentPrice", void 0);
    __decorate([
        Metadata({ data: "json, name=number_type" }),
        __metadata("design:type", String)
    ], PricingV1MessagingMessagingCountryInstanceInboundSmsPrices.prototype, "numberType", void 0);
    return PricingV1MessagingMessagingCountryInstanceInboundSmsPrices;
}(SpeakeasyBase));
export { PricingV1MessagingMessagingCountryInstanceInboundSmsPrices };
var PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices = /** @class */ (function (_super) {
    __extends(PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices, _super);
    function PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=base_price" }),
        __metadata("design:type", Number)
    ], PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices.prototype, "basePrice", void 0);
    __decorate([
        Metadata({ data: "json, name=current_price" }),
        __metadata("design:type", Number)
    ], PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices.prototype, "currentPrice", void 0);
    __decorate([
        Metadata({ data: "json, name=number_type" }),
        __metadata("design:type", String)
    ], PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices.prototype, "numberType", void 0);
    return PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices;
}(SpeakeasyBase));
export { PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices };
var PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices = /** @class */ (function (_super) {
    __extends(PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices, _super);
    function PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=carrier" }),
        __metadata("design:type", String)
    ], PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices.prototype, "carrier", void 0);
    __decorate([
        Metadata({ data: "json, name=mcc" }),
        __metadata("design:type", String)
    ], PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices.prototype, "mcc", void 0);
    __decorate([
        Metadata({ data: "json, name=mnc" }),
        __metadata("design:type", String)
    ], PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices.prototype, "mnc", void 0);
    __decorate([
        Metadata({ data: "json, name=prices", elemType: shared.PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices }),
        __metadata("design:type", Array)
    ], PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices.prototype, "prices", void 0);
    return PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices;
}(SpeakeasyBase));
export { PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices };
var PricingV1MessagingMessagingCountryInstance = /** @class */ (function (_super) {
    __extends(PricingV1MessagingMessagingCountryInstance, _super);
    function PricingV1MessagingMessagingCountryInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PricingV1MessagingMessagingCountryInstance.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "json, name=inbound_sms_prices", elemType: shared.PricingV1MessagingMessagingCountryInstanceInboundSmsPrices }),
        __metadata("design:type", Array)
    ], PricingV1MessagingMessagingCountryInstance.prototype, "inboundSmsPrices", void 0);
    __decorate([
        Metadata({ data: "json, name=iso_country" }),
        __metadata("design:type", String)
    ], PricingV1MessagingMessagingCountryInstance.prototype, "isoCountry", void 0);
    __decorate([
        Metadata({ data: "json, name=outbound_sms_prices", elemType: shared.PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices }),
        __metadata("design:type", Array)
    ], PricingV1MessagingMessagingCountryInstance.prototype, "outboundSmsPrices", void 0);
    __decorate([
        Metadata({ data: "json, name=price_unit" }),
        __metadata("design:type", String)
    ], PricingV1MessagingMessagingCountryInstance.prototype, "priceUnit", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PricingV1MessagingMessagingCountryInstance.prototype, "url", void 0);
    return PricingV1MessagingMessagingCountryInstance;
}(SpeakeasyBase));
export { PricingV1MessagingMessagingCountryInstance };
