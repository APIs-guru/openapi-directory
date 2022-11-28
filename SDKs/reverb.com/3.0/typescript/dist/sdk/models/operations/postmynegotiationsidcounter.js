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
var PostMyNegotiationsIdCounterPathParams = /** @class */ (function (_super) {
    __extends(PostMyNegotiationsIdCounterPathParams, _super);
    function PostMyNegotiationsIdCounterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterPathParams.prototype, "id", void 0);
    return PostMyNegotiationsIdCounterPathParams;
}(SpeakeasyBase));
export { PostMyNegotiationsIdCounterPathParams };
var PostMyNegotiationsIdCounterRequestBodyOfferItems = /** @class */ (function (_super) {
    __extends(PostMyNegotiationsIdCounterRequestBodyOfferItems, _super);
    function PostMyNegotiationsIdCounterRequestBodyOfferItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listing_id" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterRequestBodyOfferItems.prototype, "listingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterRequestBodyOfferItems.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_price" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterRequestBodyOfferItems.prototype, "shippingPrice", void 0);
    return PostMyNegotiationsIdCounterRequestBodyOfferItems;
}(SpeakeasyBase));
export { PostMyNegotiationsIdCounterRequestBodyOfferItems };
export var PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum;
(function (PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum) {
    PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum["Usd"] = "USD";
    PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum["Cad"] = "CAD";
    PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum["Eur"] = "EUR";
    PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum["Gbp"] = "GBP";
    PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum["Aud"] = "AUD";
    PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum["Jpy"] = "JPY";
    PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum["Nzd"] = "NZD";
    PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum["Mxn"] = "MXN";
})(PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum || (PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum = {}));
var PostMyNegotiationsIdCounterRequestBodyPrice = /** @class */ (function (_super) {
    __extends(PostMyNegotiationsIdCounterRequestBodyPrice, _super);
    function PostMyNegotiationsIdCounterRequestBodyPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterRequestBodyPrice.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterRequestBodyPrice.prototype, "currency", void 0);
    return PostMyNegotiationsIdCounterRequestBodyPrice;
}(SpeakeasyBase));
export { PostMyNegotiationsIdCounterRequestBodyPrice };
export var PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum;
(function (PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum) {
    PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum["Usd"] = "USD";
    PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum["Cad"] = "CAD";
    PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum["Eur"] = "EUR";
    PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum["Gbp"] = "GBP";
    PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum["Aud"] = "AUD";
    PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum["Jpy"] = "JPY";
    PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum["Nzd"] = "NZD";
    PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum["Mxn"] = "MXN";
})(PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum || (PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum = {}));
// PostMyNegotiationsIdCounterRequestBodyShippingPrice
/**
 * Shipping price (sellers only)
**/
var PostMyNegotiationsIdCounterRequestBodyShippingPrice = /** @class */ (function (_super) {
    __extends(PostMyNegotiationsIdCounterRequestBodyShippingPrice, _super);
    function PostMyNegotiationsIdCounterRequestBodyShippingPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterRequestBodyShippingPrice.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterRequestBodyShippingPrice.prototype, "currency", void 0);
    return PostMyNegotiationsIdCounterRequestBodyShippingPrice;
}(SpeakeasyBase));
export { PostMyNegotiationsIdCounterRequestBodyShippingPrice };
var PostMyNegotiationsIdCounterRequestBody = /** @class */ (function (_super) {
    __extends(PostMyNegotiationsIdCounterRequestBody, _super);
    function PostMyNegotiationsIdCounterRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterRequestBody.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layaway_terms_slug" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterRequestBody.prototype, "layawayTermsSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterRequestBody.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offer_items", elemType: PostMyNegotiationsIdCounterRequestBodyOfferItems }),
        __metadata("design:type", Array)
    ], PostMyNegotiationsIdCounterRequestBody.prototype, "offerItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", PostMyNegotiationsIdCounterRequestBodyPrice)
    ], PostMyNegotiationsIdCounterRequestBody.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterRequestBody.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_id" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterRequestBody.prototype, "recipientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region_code" }),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterRequestBody.prototype, "regionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_price" }),
        __metadata("design:type", PostMyNegotiationsIdCounterRequestBodyShippingPrice)
    ], PostMyNegotiationsIdCounterRequestBody.prototype, "shippingPrice", void 0);
    return PostMyNegotiationsIdCounterRequestBody;
}(SpeakeasyBase));
export { PostMyNegotiationsIdCounterRequestBody };
var PostMyNegotiationsIdCounterSecurity = /** @class */ (function (_super) {
    __extends(PostMyNegotiationsIdCounterSecurity, _super);
    function PostMyNegotiationsIdCounterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostMyNegotiationsIdCounterSecurity.prototype, "oauth2", void 0);
    return PostMyNegotiationsIdCounterSecurity;
}(SpeakeasyBase));
export { PostMyNegotiationsIdCounterSecurity };
var PostMyNegotiationsIdCounterRequest = /** @class */ (function (_super) {
    __extends(PostMyNegotiationsIdCounterRequest, _super);
    function PostMyNegotiationsIdCounterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyNegotiationsIdCounterPathParams)
    ], PostMyNegotiationsIdCounterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostMyNegotiationsIdCounterRequestBody)
    ], PostMyNegotiationsIdCounterRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyNegotiationsIdCounterSecurity)
    ], PostMyNegotiationsIdCounterRequest.prototype, "security", void 0);
    return PostMyNegotiationsIdCounterRequest;
}(SpeakeasyBase));
export { PostMyNegotiationsIdCounterRequest };
var PostMyNegotiationsIdCounterResponse = /** @class */ (function (_super) {
    __extends(PostMyNegotiationsIdCounterResponse, _super);
    function PostMyNegotiationsIdCounterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMyNegotiationsIdCounterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMyNegotiationsIdCounterResponse.prototype, "statusCode", void 0);
    return PostMyNegotiationsIdCounterResponse;
}(SpeakeasyBase));
export { PostMyNegotiationsIdCounterResponse };
