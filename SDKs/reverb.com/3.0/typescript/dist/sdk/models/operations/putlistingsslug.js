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
var PutListingsSlugPathParams = /** @class */ (function (_super) {
    __extends(PutListingsSlugPathParams, _super);
    function PutListingsSlugPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" }),
        __metadata("design:type", String)
    ], PutListingsSlugPathParams.prototype, "slug", void 0);
    return PutListingsSlugPathParams;
}(SpeakeasyBase));
export { PutListingsSlugPathParams };
var PutListingsSlugRequestBodyCategories = /** @class */ (function (_super) {
    __extends(PutListingsSlugRequestBodyCategories, _super);
    function PutListingsSlugRequestBodyCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodyCategories.prototype, "uuid", void 0);
    return PutListingsSlugRequestBodyCategories;
}(SpeakeasyBase));
export { PutListingsSlugRequestBodyCategories };
export var PutListingsSlugRequestBodyConditionUuidEnum;
(function (PutListingsSlugRequestBodyConditionUuidEnum) {
    PutListingsSlugRequestBodyConditionUuidEnum["Fbf3566896a04baaBcdeAb18d6b1b329"] = "fbf35668-96a0-4baa-bcde-ab18d6b1b329";
    PutListingsSlugRequestBodyConditionUuidEnum["Sixa9dfcad600b46c89e08Ce6e5057921e"] = "6a9dfcad-600b-46c8-9e08-ce6e5057921e";
    PutListingsSlugRequestBodyConditionUuidEnum["NinetyEightMillionSevenHundredAndSeventySevenThousandEightHundredAndEightySix76d044c8865eBb40e669e934"] = "98777886-76d0-44c8-865e-bb40e669e934";
    PutListingsSlugRequestBodyConditionUuidEnum["F7a3f48c972a44c6B01a0cd27488d3f6"] = "f7a3f48c-972a-44c6-b01a-0cd27488d3f6";
    PutListingsSlugRequestBodyConditionUuidEnum["Ae4d91141bd74ec5A4ba6653af5ac84d"] = "ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d";
    PutListingsSlugRequestBodyConditionUuidEnum["Df268ad1C4624ba6B6dbE007e23922ea"] = "df268ad1-c462-4ba6-b6db-e007e23922ea";
    PutListingsSlugRequestBodyConditionUuidEnum["Ac5b9c1eDc78466dB0b37cf712967a48"] = "ac5b9c1e-dc78-466d-b0b3-7cf712967a48";
    PutListingsSlugRequestBodyConditionUuidEnum["Sixdb7df88293b4017A1c1Cdb5e599fa1a"] = "6db7df88-293b-4017-a1c1-cdb5e599fa1a";
    PutListingsSlugRequestBodyConditionUuidEnum["NineMillionTwoHundredAndTwentyFiveThousandTwoHundredAndEightyThreef60c24413Ad181f5eba7a856f"] = "9225283f-60c2-4413-ad18-1f5eba7a856f";
    PutListingsSlugRequestBodyConditionUuidEnum["Sevenc3f45de2ae04c818400Fdb6b1d74890"] = "7c3f45de-2ae0-4c81-8400-fdb6b1d74890";
})(PutListingsSlugRequestBodyConditionUuidEnum || (PutListingsSlugRequestBodyConditionUuidEnum = {}));
// PutListingsSlugRequestBodyCondition
/**
 * Condition
**/
var PutListingsSlugRequestBodyCondition = /** @class */ (function (_super) {
    __extends(PutListingsSlugRequestBodyCondition, _super);
    function PutListingsSlugRequestBodyCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodyCondition.prototype, "uuid", void 0);
    return PutListingsSlugRequestBodyCondition;
}(SpeakeasyBase));
export { PutListingsSlugRequestBodyCondition };
export var PutListingsSlugRequestBodyExclusiveChannelEnum;
(function (PutListingsSlugRequestBodyExclusiveChannelEnum) {
    PutListingsSlugRequestBodyExclusiveChannelEnum["SellerSite"] = "seller_site";
    PutListingsSlugRequestBodyExclusiveChannelEnum["Reverb"] = "reverb";
    PutListingsSlugRequestBodyExclusiveChannelEnum["None"] = "none";
})(PutListingsSlugRequestBodyExclusiveChannelEnum || (PutListingsSlugRequestBodyExclusiveChannelEnum = {}));
var PutListingsSlugRequestBodyLocation = /** @class */ (function (_super) {
    __extends(PutListingsSlugRequestBodyLocation, _super);
    function PutListingsSlugRequestBodyLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodyLocation.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locality" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodyLocation.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodyLocation.prototype, "region", void 0);
    return PutListingsSlugRequestBodyLocation;
}(SpeakeasyBase));
export { PutListingsSlugRequestBodyLocation };
export var PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum;
(function (PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum) {
    PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum["Days"] = "days";
    PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum["Weeks"] = "weeks";
})(PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum || (PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum = {}));
// PutListingsSlugRequestBodyPreorderInfo
/**
 * Create or update a preorder listing. Requires opt-in. Please contact sales@reverb.com if you would like to activate this feature.
**/
var PutListingsSlugRequestBodyPreorderInfo = /** @class */ (function (_super) {
    __extends(PutListingsSlugRequestBodyPreorderInfo, _super);
    function PutListingsSlugRequestBodyPreorderInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_time" }),
        __metadata("design:type", Number)
    ], PutListingsSlugRequestBodyPreorderInfo.prototype, "leadTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_time_unit" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodyPreorderInfo.prototype, "leadTimeUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ship_date" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodyPreorderInfo.prototype, "shipDate", void 0);
    return PutListingsSlugRequestBodyPreorderInfo;
}(SpeakeasyBase));
export { PutListingsSlugRequestBodyPreorderInfo };
export var PutListingsSlugRequestBodyPriceCurrencyEnum;
(function (PutListingsSlugRequestBodyPriceCurrencyEnum) {
    PutListingsSlugRequestBodyPriceCurrencyEnum["Usd"] = "USD";
    PutListingsSlugRequestBodyPriceCurrencyEnum["Cad"] = "CAD";
    PutListingsSlugRequestBodyPriceCurrencyEnum["Eur"] = "EUR";
    PutListingsSlugRequestBodyPriceCurrencyEnum["Gbp"] = "GBP";
    PutListingsSlugRequestBodyPriceCurrencyEnum["Aud"] = "AUD";
    PutListingsSlugRequestBodyPriceCurrencyEnum["Jpy"] = "JPY";
    PutListingsSlugRequestBodyPriceCurrencyEnum["Nzd"] = "NZD";
    PutListingsSlugRequestBodyPriceCurrencyEnum["Mxn"] = "MXN";
})(PutListingsSlugRequestBodyPriceCurrencyEnum || (PutListingsSlugRequestBodyPriceCurrencyEnum = {}));
var PutListingsSlugRequestBodyPrice = /** @class */ (function (_super) {
    __extends(PutListingsSlugRequestBodyPrice, _super);
    function PutListingsSlugRequestBodyPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodyPrice.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodyPrice.prototype, "currency", void 0);
    return PutListingsSlugRequestBodyPrice;
}(SpeakeasyBase));
export { PutListingsSlugRequestBodyPrice };
var PutListingsSlugRequestBodySeller = /** @class */ (function (_super) {
    __extends(PutListingsSlugRequestBodySeller, _super);
    function PutListingsSlugRequestBodySeller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paypal_email" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodySeller.prototype, "paypalEmail", void 0);
    return PutListingsSlugRequestBodySeller;
}(SpeakeasyBase));
export { PutListingsSlugRequestBodySeller };
export var PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum;
(function (PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum) {
    PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum["Usd"] = "USD";
    PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum["Cad"] = "CAD";
    PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum["Eur"] = "EUR";
    PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum["Gbp"] = "GBP";
    PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum["Aud"] = "AUD";
    PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum["Jpy"] = "JPY";
    PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum["Nzd"] = "NZD";
    PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum["Mxn"] = "MXN";
})(PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum || (PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum = {}));
var PutListingsSlugRequestBodyShippingRatesRate = /** @class */ (function (_super) {
    __extends(PutListingsSlugRequestBodyShippingRatesRate, _super);
    function PutListingsSlugRequestBodyShippingRatesRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodyShippingRatesRate.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodyShippingRatesRate.prototype, "currency", void 0);
    return PutListingsSlugRequestBodyShippingRatesRate;
}(SpeakeasyBase));
export { PutListingsSlugRequestBodyShippingRatesRate };
var PutListingsSlugRequestBodyShippingRates = /** @class */ (function (_super) {
    __extends(PutListingsSlugRequestBodyShippingRates, _super);
    function PutListingsSlugRequestBodyShippingRates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", PutListingsSlugRequestBodyShippingRatesRate)
    ], PutListingsSlugRequestBodyShippingRates.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region_code" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodyShippingRates.prototype, "regionCode", void 0);
    return PutListingsSlugRequestBodyShippingRates;
}(SpeakeasyBase));
export { PutListingsSlugRequestBodyShippingRates };
var PutListingsSlugRequestBodyShipping = /** @class */ (function (_super) {
    __extends(PutListingsSlugRequestBodyShipping, _super);
    function PutListingsSlugRequestBodyShipping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=local" }),
        __metadata("design:type", Boolean)
    ], PutListingsSlugRequestBodyShipping.prototype, "local", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rates", elemType: PutListingsSlugRequestBodyShippingRates }),
        __metadata("design:type", Array)
    ], PutListingsSlugRequestBodyShipping.prototype, "rates", void 0);
    return PutListingsSlugRequestBodyShipping;
}(SpeakeasyBase));
export { PutListingsSlugRequestBodyShipping };
var PutListingsSlugRequestBodyVideos = /** @class */ (function (_super) {
    __extends(PutListingsSlugRequestBodyVideos, _super);
    function PutListingsSlugRequestBodyVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBodyVideos.prototype, "link", void 0);
    return PutListingsSlugRequestBodyVideos;
}(SpeakeasyBase));
export { PutListingsSlugRequestBodyVideos };
var PutListingsSlugRequestBody = /** @class */ (function (_super) {
    __extends(PutListingsSlugRequestBody, _super);
    function PutListingsSlugRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories", elemType: PutListingsSlugRequestBodyCategories }),
        __metadata("design:type", Array)
    ], PutListingsSlugRequestBody.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", PutListingsSlugRequestBodyCondition)
    ], PutListingsSlugRequestBody.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclusive_channel" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "exclusiveChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finish" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "finish", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_inventory" }),
        __metadata("design:type", Boolean)
    ], PutListingsSlugRequestBody.prototype, "hasInventory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventory" }),
        __metadata("design:type", Number)
    ], PutListingsSlugRequestBody.prototype, "inventory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", PutListingsSlugRequestBodyLocation)
    ], PutListingsSlugRequestBody.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=make" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multi_item" }),
        __metadata("design:type", Boolean)
    ], PutListingsSlugRequestBody.prototype, "multiItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offers_enabled" }),
        __metadata("design:type", Boolean)
    ], PutListingsSlugRequestBody.prototype, "offersEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origin_country_code" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "originCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photos" }),
        __metadata("design:type", Array)
    ], PutListingsSlugRequestBody.prototype, "photos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preorder_info" }),
        __metadata("design:type", PutListingsSlugRequestBodyPreorderInfo)
    ], PutListingsSlugRequestBody.prototype, "preorderInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", PutListingsSlugRequestBodyPrice)
    ], PutListingsSlugRequestBody.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prop_65_warning" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "prop65Warning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publish" }),
        __metadata("design:type", Boolean)
    ], PutListingsSlugRequestBody.prototype, "publish", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller" }),
        __metadata("design:type", PutListingsSlugRequestBodySeller)
    ], PutListingsSlugRequestBody.prototype, "seller", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller_cost" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "sellerCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping" }),
        __metadata("design:type", PutListingsSlugRequestBodyShipping)
    ], PutListingsSlugRequestBody.prototype, "shipping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_profile_id" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "shippingProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_profile_name" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "shippingProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sold_as_is" }),
        __metadata("design:type", Boolean)
    ], PutListingsSlugRequestBody.prototype, "soldAsIs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storage_location" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "storageLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_exempt" }),
        __metadata("design:type", Boolean)
    ], PutListingsSlugRequestBody.prototype, "taxExempt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upc" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "upc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upc_does_not_apply" }),
        __metadata("design:type", Boolean)
    ], PutListingsSlugRequestBody.prototype, "upcDoesNotApply", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos", elemType: PutListingsSlugRequestBodyVideos }),
        __metadata("design:type", Array)
    ], PutListingsSlugRequestBody.prototype, "videos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], PutListingsSlugRequestBody.prototype, "year", void 0);
    return PutListingsSlugRequestBody;
}(SpeakeasyBase));
export { PutListingsSlugRequestBody };
var PutListingsSlugSecurity = /** @class */ (function (_super) {
    __extends(PutListingsSlugSecurity, _super);
    function PutListingsSlugSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PutListingsSlugSecurity.prototype, "oauth2", void 0);
    return PutListingsSlugSecurity;
}(SpeakeasyBase));
export { PutListingsSlugSecurity };
var PutListingsSlugRequest = /** @class */ (function (_super) {
    __extends(PutListingsSlugRequest, _super);
    function PutListingsSlugRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutListingsSlugPathParams)
    ], PutListingsSlugRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutListingsSlugRequestBody)
    ], PutListingsSlugRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutListingsSlugSecurity)
    ], PutListingsSlugRequest.prototype, "security", void 0);
    return PutListingsSlugRequest;
}(SpeakeasyBase));
export { PutListingsSlugRequest };
var PutListingsSlugResponse = /** @class */ (function (_super) {
    __extends(PutListingsSlugResponse, _super);
    function PutListingsSlugResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutListingsSlugResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutListingsSlugResponse.prototype, "statusCode", void 0);
    return PutListingsSlugResponse;
}(SpeakeasyBase));
export { PutListingsSlugResponse };
