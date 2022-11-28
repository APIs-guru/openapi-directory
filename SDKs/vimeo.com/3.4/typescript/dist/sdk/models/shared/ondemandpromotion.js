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
export var OnDemandPromotionAccessTypeEnum;
(function (OnDemandPromotionAccessTypeEnum) {
    OnDemandPromotionAccessTypeEnum["Default"] = "default";
    OnDemandPromotionAccessTypeEnum["Vip"] = "vip";
})(OnDemandPromotionAccessTypeEnum || (OnDemandPromotionAccessTypeEnum = {}));
export var OnDemandPromotionDiscountTypeEnum;
(function (OnDemandPromotionDiscountTypeEnum) {
    OnDemandPromotionDiscountTypeEnum["Dollars"] = "dollars";
    OnDemandPromotionDiscountTypeEnum["Free"] = "free";
    OnDemandPromotionDiscountTypeEnum["Percent"] = "percent";
})(OnDemandPromotionDiscountTypeEnum || (OnDemandPromotionDiscountTypeEnum = {}));
// OnDemandPromotionMetadataConnectionsCodes
/**
 * Information about the codes associated with this promotion.
**/
var OnDemandPromotionMetadataConnectionsCodes = /** @class */ (function (_super) {
    __extends(OnDemandPromotionMetadataConnectionsCodes, _super);
    function OnDemandPromotionMetadataConnectionsCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPromotionMetadataConnectionsCodes.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPromotionMetadataConnectionsCodes.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPromotionMetadataConnectionsCodes.prototype, "uri", void 0);
    return OnDemandPromotionMetadataConnectionsCodes;
}(SpeakeasyBase));
export { OnDemandPromotionMetadataConnectionsCodes };
// OnDemandPromotionMetadataConnections
/**
 * A list of resource URIs related to the On Demand promotion.
**/
var OnDemandPromotionMetadataConnections = /** @class */ (function (_super) {
    __extends(OnDemandPromotionMetadataConnections, _super);
    function OnDemandPromotionMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=codes" }),
        __metadata("design:type", OnDemandPromotionMetadataConnectionsCodes)
    ], OnDemandPromotionMetadataConnections.prototype, "codes", void 0);
    return OnDemandPromotionMetadataConnections;
}(SpeakeasyBase));
export { OnDemandPromotionMetadataConnections };
// OnDemandPromotionMetadata
/**
 * The video's metadata.
**/
var OnDemandPromotionMetadata = /** @class */ (function (_super) {
    __extends(OnDemandPromotionMetadata, _super);
    function OnDemandPromotionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", OnDemandPromotionMetadataConnections)
    ], OnDemandPromotionMetadata.prototype, "connections", void 0);
    return OnDemandPromotionMetadata;
}(SpeakeasyBase));
export { OnDemandPromotionMetadata };
export var OnDemandPromotionProductTypeEnum;
(function (OnDemandPromotionProductTypeEnum) {
    OnDemandPromotionProductTypeEnum["Any"] = "any";
    OnDemandPromotionProductTypeEnum["Buy"] = "buy";
    OnDemandPromotionProductTypeEnum["BuyEpisode"] = "buy_episode";
    OnDemandPromotionProductTypeEnum["Rent"] = "rent";
    OnDemandPromotionProductTypeEnum["RentEpisode"] = "rent_episode";
    OnDemandPromotionProductTypeEnum["Subscribe"] = "subscribe";
})(OnDemandPromotionProductTypeEnum || (OnDemandPromotionProductTypeEnum = {}));
export var OnDemandPromotionStreamPeriodEnum;
(function (OnDemandPromotionStreamPeriodEnum) {
    OnDemandPromotionStreamPeriodEnum["OneWeek"] = "1_week";
    OnDemandPromotionStreamPeriodEnum["OneYear"] = "1_year";
    OnDemandPromotionStreamPeriodEnum["TwentyFourHour"] = "24_hour";
    OnDemandPromotionStreamPeriodEnum["ThirtyDays"] = "30_days";
    OnDemandPromotionStreamPeriodEnum["ThreeMonth"] = "3_month";
    OnDemandPromotionStreamPeriodEnum["FortyEightHour"] = "48_hour";
    OnDemandPromotionStreamPeriodEnum["SixMonth"] = "6_month";
    OnDemandPromotionStreamPeriodEnum["SeventyTwoHour"] = "72_hour";
})(OnDemandPromotionStreamPeriodEnum || (OnDemandPromotionStreamPeriodEnum = {}));
export var OnDemandPromotionTypeEnum;
(function (OnDemandPromotionTypeEnum) {
    OnDemandPromotionTypeEnum["Batch"] = "batch";
    OnDemandPromotionTypeEnum["BatchPrefix"] = "batch_prefix";
    OnDemandPromotionTypeEnum["Single"] = "single";
})(OnDemandPromotionTypeEnum || (OnDemandPromotionTypeEnum = {}));
var OnDemandPromotion = /** @class */ (function (_super) {
    __extends(OnDemandPromotion, _super);
    function OnDemandPromotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access_type" }),
        __metadata("design:type", String)
    ], OnDemandPromotion.prototype, "accessType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_type" }),
        __metadata("design:type", String)
    ], OnDemandPromotion.prototype, "discountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], OnDemandPromotion.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], OnDemandPromotion.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", OnDemandPromotionMetadata)
    ], OnDemandPromotion.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percent_off" }),
        __metadata("design:type", Number)
    ], OnDemandPromotion.prototype, "percentOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product_type" }),
        __metadata("design:type", String)
    ], OnDemandPromotion.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stream_period" }),
        __metadata("design:type", String)
    ], OnDemandPromotion.prototype, "streamPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPromotion.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OnDemandPromotion.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPromotion.prototype, "uri", void 0);
    return OnDemandPromotion;
}(SpeakeasyBase));
export { OnDemandPromotion };
