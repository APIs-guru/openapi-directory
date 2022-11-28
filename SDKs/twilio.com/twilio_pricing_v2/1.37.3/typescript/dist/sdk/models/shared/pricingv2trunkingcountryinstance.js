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
var PricingV2TrunkingCountryInstanceOriginatingCallPrices = /** @class */ (function (_super) {
    __extends(PricingV2TrunkingCountryInstanceOriginatingCallPrices, _super);
    function PricingV2TrunkingCountryInstanceOriginatingCallPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base_price" }),
        __metadata("design:type", Number)
    ], PricingV2TrunkingCountryInstanceOriginatingCallPrices.prototype, "basePrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_price" }),
        __metadata("design:type", Number)
    ], PricingV2TrunkingCountryInstanceOriginatingCallPrices.prototype, "currentPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number_type" }),
        __metadata("design:type", String)
    ], PricingV2TrunkingCountryInstanceOriginatingCallPrices.prototype, "numberType", void 0);
    return PricingV2TrunkingCountryInstanceOriginatingCallPrices;
}(SpeakeasyBase));
export { PricingV2TrunkingCountryInstanceOriginatingCallPrices };
var PricingV2TrunkingCountryInstanceTerminatingPrefixPrices = /** @class */ (function (_super) {
    __extends(PricingV2TrunkingCountryInstanceTerminatingPrefixPrices, _super);
    function PricingV2TrunkingCountryInstanceTerminatingPrefixPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base_price" }),
        __metadata("design:type", Number)
    ], PricingV2TrunkingCountryInstanceTerminatingPrefixPrices.prototype, "basePrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_price" }),
        __metadata("design:type", Number)
    ], PricingV2TrunkingCountryInstanceTerminatingPrefixPrices.prototype, "currentPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_prefixes" }),
        __metadata("design:type", Array)
    ], PricingV2TrunkingCountryInstanceTerminatingPrefixPrices.prototype, "destinationPrefixes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], PricingV2TrunkingCountryInstanceTerminatingPrefixPrices.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origination_prefixes" }),
        __metadata("design:type", Array)
    ], PricingV2TrunkingCountryInstanceTerminatingPrefixPrices.prototype, "originationPrefixes", void 0);
    return PricingV2TrunkingCountryInstanceTerminatingPrefixPrices;
}(SpeakeasyBase));
export { PricingV2TrunkingCountryInstanceTerminatingPrefixPrices };
var PricingV2TrunkingCountryInstance = /** @class */ (function (_super) {
    __extends(PricingV2TrunkingCountryInstance, _super);
    function PricingV2TrunkingCountryInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PricingV2TrunkingCountryInstance.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso_country" }),
        __metadata("design:type", String)
    ], PricingV2TrunkingCountryInstance.prototype, "isoCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originating_call_prices", elemType: PricingV2TrunkingCountryInstanceOriginatingCallPrices }),
        __metadata("design:type", Array)
    ], PricingV2TrunkingCountryInstance.prototype, "originatingCallPrices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_unit" }),
        __metadata("design:type", String)
    ], PricingV2TrunkingCountryInstance.prototype, "priceUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terminating_prefix_prices", elemType: PricingV2TrunkingCountryInstanceTerminatingPrefixPrices }),
        __metadata("design:type", Array)
    ], PricingV2TrunkingCountryInstance.prototype, "terminatingPrefixPrices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PricingV2TrunkingCountryInstance.prototype, "url", void 0);
    return PricingV2TrunkingCountryInstance;
}(SpeakeasyBase));
export { PricingV2TrunkingCountryInstance };
