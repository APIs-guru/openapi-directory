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
var PostListingsRequestBodyCategories = /** @class */ (function (_super) {
    __extends(PostListingsRequestBodyCategories, _super);
    function PostListingsRequestBodyCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodyCategories.prototype, "uuid", void 0);
    return PostListingsRequestBodyCategories;
}(SpeakeasyBase));
export { PostListingsRequestBodyCategories };
export var PostListingsRequestBodyConditionUuidEnum;
(function (PostListingsRequestBodyConditionUuidEnum) {
    PostListingsRequestBodyConditionUuidEnum["Fbf3566896a04baaBcdeAb18d6b1b329"] = "fbf35668-96a0-4baa-bcde-ab18d6b1b329";
    PostListingsRequestBodyConditionUuidEnum["Sixa9dfcad600b46c89e08Ce6e5057921e"] = "6a9dfcad-600b-46c8-9e08-ce6e5057921e";
    PostListingsRequestBodyConditionUuidEnum["NinetyEightMillionSevenHundredAndSeventySevenThousandEightHundredAndEightySix76d044c8865eBb40e669e934"] = "98777886-76d0-44c8-865e-bb40e669e934";
    PostListingsRequestBodyConditionUuidEnum["F7a3f48c972a44c6B01a0cd27488d3f6"] = "f7a3f48c-972a-44c6-b01a-0cd27488d3f6";
    PostListingsRequestBodyConditionUuidEnum["Ae4d91141bd74ec5A4ba6653af5ac84d"] = "ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d";
    PostListingsRequestBodyConditionUuidEnum["Df268ad1C4624ba6B6dbE007e23922ea"] = "df268ad1-c462-4ba6-b6db-e007e23922ea";
    PostListingsRequestBodyConditionUuidEnum["Ac5b9c1eDc78466dB0b37cf712967a48"] = "ac5b9c1e-dc78-466d-b0b3-7cf712967a48";
    PostListingsRequestBodyConditionUuidEnum["Sixdb7df88293b4017A1c1Cdb5e599fa1a"] = "6db7df88-293b-4017-a1c1-cdb5e599fa1a";
    PostListingsRequestBodyConditionUuidEnum["NineMillionTwoHundredAndTwentyFiveThousandTwoHundredAndEightyThreef60c24413Ad181f5eba7a856f"] = "9225283f-60c2-4413-ad18-1f5eba7a856f";
    PostListingsRequestBodyConditionUuidEnum["Sevenc3f45de2ae04c818400Fdb6b1d74890"] = "7c3f45de-2ae0-4c81-8400-fdb6b1d74890";
})(PostListingsRequestBodyConditionUuidEnum || (PostListingsRequestBodyConditionUuidEnum = {}));
// PostListingsRequestBodyCondition
/**
 * Condition
**/
var PostListingsRequestBodyCondition = /** @class */ (function (_super) {
    __extends(PostListingsRequestBodyCondition, _super);
    function PostListingsRequestBodyCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodyCondition.prototype, "uuid", void 0);
    return PostListingsRequestBodyCondition;
}(SpeakeasyBase));
export { PostListingsRequestBodyCondition };
export var PostListingsRequestBodyExclusiveChannelEnum;
(function (PostListingsRequestBodyExclusiveChannelEnum) {
    PostListingsRequestBodyExclusiveChannelEnum["SellerSite"] = "seller_site";
    PostListingsRequestBodyExclusiveChannelEnum["Reverb"] = "reverb";
    PostListingsRequestBodyExclusiveChannelEnum["None"] = "none";
})(PostListingsRequestBodyExclusiveChannelEnum || (PostListingsRequestBodyExclusiveChannelEnum = {}));
var PostListingsRequestBodyLocation = /** @class */ (function (_super) {
    __extends(PostListingsRequestBodyLocation, _super);
    function PostListingsRequestBodyLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodyLocation.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locality" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodyLocation.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodyLocation.prototype, "region", void 0);
    return PostListingsRequestBodyLocation;
}(SpeakeasyBase));
export { PostListingsRequestBodyLocation };
export var PostListingsRequestBodyPreorderInfoLeadTimeUnitEnum;
(function (PostListingsRequestBodyPreorderInfoLeadTimeUnitEnum) {
    PostListingsRequestBodyPreorderInfoLeadTimeUnitEnum["Days"] = "days";
    PostListingsRequestBodyPreorderInfoLeadTimeUnitEnum["Weeks"] = "weeks";
})(PostListingsRequestBodyPreorderInfoLeadTimeUnitEnum || (PostListingsRequestBodyPreorderInfoLeadTimeUnitEnum = {}));
// PostListingsRequestBodyPreorderInfo
/**
 * Create or update a preorder listing. Requires opt-in. Please contact sales@reverb.com if you would like to activate this feature.
**/
var PostListingsRequestBodyPreorderInfo = /** @class */ (function (_super) {
    __extends(PostListingsRequestBodyPreorderInfo, _super);
    function PostListingsRequestBodyPreorderInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_time" }),
        __metadata("design:type", Number)
    ], PostListingsRequestBodyPreorderInfo.prototype, "leadTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_time_unit" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodyPreorderInfo.prototype, "leadTimeUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ship_date" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodyPreorderInfo.prototype, "shipDate", void 0);
    return PostListingsRequestBodyPreorderInfo;
}(SpeakeasyBase));
export { PostListingsRequestBodyPreorderInfo };
export var PostListingsRequestBodyPriceCurrencyEnum;
(function (PostListingsRequestBodyPriceCurrencyEnum) {
    PostListingsRequestBodyPriceCurrencyEnum["Usd"] = "USD";
    PostListingsRequestBodyPriceCurrencyEnum["Cad"] = "CAD";
    PostListingsRequestBodyPriceCurrencyEnum["Eur"] = "EUR";
    PostListingsRequestBodyPriceCurrencyEnum["Gbp"] = "GBP";
    PostListingsRequestBodyPriceCurrencyEnum["Aud"] = "AUD";
    PostListingsRequestBodyPriceCurrencyEnum["Jpy"] = "JPY";
    PostListingsRequestBodyPriceCurrencyEnum["Nzd"] = "NZD";
    PostListingsRequestBodyPriceCurrencyEnum["Mxn"] = "MXN";
})(PostListingsRequestBodyPriceCurrencyEnum || (PostListingsRequestBodyPriceCurrencyEnum = {}));
var PostListingsRequestBodyPrice = /** @class */ (function (_super) {
    __extends(PostListingsRequestBodyPrice, _super);
    function PostListingsRequestBodyPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodyPrice.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodyPrice.prototype, "currency", void 0);
    return PostListingsRequestBodyPrice;
}(SpeakeasyBase));
export { PostListingsRequestBodyPrice };
var PostListingsRequestBodySeller = /** @class */ (function (_super) {
    __extends(PostListingsRequestBodySeller, _super);
    function PostListingsRequestBodySeller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paypal_email" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodySeller.prototype, "paypalEmail", void 0);
    return PostListingsRequestBodySeller;
}(SpeakeasyBase));
export { PostListingsRequestBodySeller };
export var PostListingsRequestBodyShippingRatesRateCurrencyEnum;
(function (PostListingsRequestBodyShippingRatesRateCurrencyEnum) {
    PostListingsRequestBodyShippingRatesRateCurrencyEnum["Usd"] = "USD";
    PostListingsRequestBodyShippingRatesRateCurrencyEnum["Cad"] = "CAD";
    PostListingsRequestBodyShippingRatesRateCurrencyEnum["Eur"] = "EUR";
    PostListingsRequestBodyShippingRatesRateCurrencyEnum["Gbp"] = "GBP";
    PostListingsRequestBodyShippingRatesRateCurrencyEnum["Aud"] = "AUD";
    PostListingsRequestBodyShippingRatesRateCurrencyEnum["Jpy"] = "JPY";
    PostListingsRequestBodyShippingRatesRateCurrencyEnum["Nzd"] = "NZD";
    PostListingsRequestBodyShippingRatesRateCurrencyEnum["Mxn"] = "MXN";
})(PostListingsRequestBodyShippingRatesRateCurrencyEnum || (PostListingsRequestBodyShippingRatesRateCurrencyEnum = {}));
var PostListingsRequestBodyShippingRatesRate = /** @class */ (function (_super) {
    __extends(PostListingsRequestBodyShippingRatesRate, _super);
    function PostListingsRequestBodyShippingRatesRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodyShippingRatesRate.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodyShippingRatesRate.prototype, "currency", void 0);
    return PostListingsRequestBodyShippingRatesRate;
}(SpeakeasyBase));
export { PostListingsRequestBodyShippingRatesRate };
var PostListingsRequestBodyShippingRates = /** @class */ (function (_super) {
    __extends(PostListingsRequestBodyShippingRates, _super);
    function PostListingsRequestBodyShippingRates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", PostListingsRequestBodyShippingRatesRate)
    ], PostListingsRequestBodyShippingRates.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region_code" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodyShippingRates.prototype, "regionCode", void 0);
    return PostListingsRequestBodyShippingRates;
}(SpeakeasyBase));
export { PostListingsRequestBodyShippingRates };
var PostListingsRequestBodyShipping = /** @class */ (function (_super) {
    __extends(PostListingsRequestBodyShipping, _super);
    function PostListingsRequestBodyShipping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=local" }),
        __metadata("design:type", Boolean)
    ], PostListingsRequestBodyShipping.prototype, "local", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rates", elemType: PostListingsRequestBodyShippingRates }),
        __metadata("design:type", Array)
    ], PostListingsRequestBodyShipping.prototype, "rates", void 0);
    return PostListingsRequestBodyShipping;
}(SpeakeasyBase));
export { PostListingsRequestBodyShipping };
var PostListingsRequestBodyVideos = /** @class */ (function (_super) {
    __extends(PostListingsRequestBodyVideos, _super);
    function PostListingsRequestBodyVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], PostListingsRequestBodyVideos.prototype, "link", void 0);
    return PostListingsRequestBodyVideos;
}(SpeakeasyBase));
export { PostListingsRequestBodyVideos };
var PostListingsRequestBody = /** @class */ (function (_super) {
    __extends(PostListingsRequestBody, _super);
    function PostListingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories", elemType: PostListingsRequestBodyCategories }),
        __metadata("design:type", Array)
    ], PostListingsRequestBody.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", PostListingsRequestBodyCondition)
    ], PostListingsRequestBody.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclusive_channel" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "exclusiveChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finish" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "finish", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_inventory" }),
        __metadata("design:type", Boolean)
    ], PostListingsRequestBody.prototype, "hasInventory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventory" }),
        __metadata("design:type", Number)
    ], PostListingsRequestBody.prototype, "inventory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", PostListingsRequestBodyLocation)
    ], PostListingsRequestBody.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=make" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multi_item" }),
        __metadata("design:type", Boolean)
    ], PostListingsRequestBody.prototype, "multiItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offers_enabled" }),
        __metadata("design:type", Boolean)
    ], PostListingsRequestBody.prototype, "offersEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origin_country_code" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "originCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photos" }),
        __metadata("design:type", Array)
    ], PostListingsRequestBody.prototype, "photos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preorder_info" }),
        __metadata("design:type", PostListingsRequestBodyPreorderInfo)
    ], PostListingsRequestBody.prototype, "preorderInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", PostListingsRequestBodyPrice)
    ], PostListingsRequestBody.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prop_65_warning" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "prop65Warning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publish" }),
        __metadata("design:type", Boolean)
    ], PostListingsRequestBody.prototype, "publish", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller" }),
        __metadata("design:type", PostListingsRequestBodySeller)
    ], PostListingsRequestBody.prototype, "seller", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller_cost" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "sellerCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping" }),
        __metadata("design:type", PostListingsRequestBodyShipping)
    ], PostListingsRequestBody.prototype, "shipping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_profile_id" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "shippingProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_profile_name" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "shippingProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sold_as_is" }),
        __metadata("design:type", Boolean)
    ], PostListingsRequestBody.prototype, "soldAsIs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storage_location" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "storageLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_exempt" }),
        __metadata("design:type", Boolean)
    ], PostListingsRequestBody.prototype, "taxExempt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upc" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "upc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upc_does_not_apply" }),
        __metadata("design:type", Boolean)
    ], PostListingsRequestBody.prototype, "upcDoesNotApply", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos", elemType: PostListingsRequestBodyVideos }),
        __metadata("design:type", Array)
    ], PostListingsRequestBody.prototype, "videos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], PostListingsRequestBody.prototype, "year", void 0);
    return PostListingsRequestBody;
}(SpeakeasyBase));
export { PostListingsRequestBody };
var PostListingsSecurity = /** @class */ (function (_super) {
    __extends(PostListingsSecurity, _super);
    function PostListingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostListingsSecurity.prototype, "oauth2", void 0);
    return PostListingsSecurity;
}(SpeakeasyBase));
export { PostListingsSecurity };
var PostListingsRequest = /** @class */ (function (_super) {
    __extends(PostListingsRequest, _super);
    function PostListingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostListingsRequestBody)
    ], PostListingsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListingsSecurity)
    ], PostListingsRequest.prototype, "security", void 0);
    return PostListingsRequest;
}(SpeakeasyBase));
export { PostListingsRequest };
var PostListingsResponse = /** @class */ (function (_super) {
    __extends(PostListingsResponse, _super);
    function PostListingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostListingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostListingsResponse.prototype, "statusCode", void 0);
    return PostListingsResponse;
}(SpeakeasyBase));
export { PostListingsResponse };
