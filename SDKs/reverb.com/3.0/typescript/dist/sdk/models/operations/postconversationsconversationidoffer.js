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
var PostConversationsConversationIdOfferPathParams = /** @class */ (function (_super) {
    __extends(PostConversationsConversationIdOfferPathParams, _super);
    function PostConversationsConversationIdOfferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferPathParams.prototype, "conversationId", void 0);
    return PostConversationsConversationIdOfferPathParams;
}(SpeakeasyBase));
export { PostConversationsConversationIdOfferPathParams };
var PostConversationsConversationIdOfferRequestBodyOfferItems = /** @class */ (function (_super) {
    __extends(PostConversationsConversationIdOfferRequestBodyOfferItems, _super);
    function PostConversationsConversationIdOfferRequestBodyOfferItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listing_id" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferRequestBodyOfferItems.prototype, "listingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferRequestBodyOfferItems.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_price" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferRequestBodyOfferItems.prototype, "shippingPrice", void 0);
    return PostConversationsConversationIdOfferRequestBodyOfferItems;
}(SpeakeasyBase));
export { PostConversationsConversationIdOfferRequestBodyOfferItems };
export var PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum;
(function (PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum) {
    PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum["Usd"] = "USD";
    PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum["Cad"] = "CAD";
    PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum["Eur"] = "EUR";
    PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum["Gbp"] = "GBP";
    PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum["Aud"] = "AUD";
    PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum["Jpy"] = "JPY";
    PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum["Nzd"] = "NZD";
    PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum["Mxn"] = "MXN";
})(PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum || (PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum = {}));
var PostConversationsConversationIdOfferRequestBodyPrice = /** @class */ (function (_super) {
    __extends(PostConversationsConversationIdOfferRequestBodyPrice, _super);
    function PostConversationsConversationIdOfferRequestBodyPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferRequestBodyPrice.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferRequestBodyPrice.prototype, "currency", void 0);
    return PostConversationsConversationIdOfferRequestBodyPrice;
}(SpeakeasyBase));
export { PostConversationsConversationIdOfferRequestBodyPrice };
export var PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum;
(function (PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum) {
    PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum["Usd"] = "USD";
    PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum["Cad"] = "CAD";
    PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum["Eur"] = "EUR";
    PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum["Gbp"] = "GBP";
    PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum["Aud"] = "AUD";
    PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum["Jpy"] = "JPY";
    PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum["Nzd"] = "NZD";
    PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum["Mxn"] = "MXN";
})(PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum || (PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum = {}));
// PostConversationsConversationIdOfferRequestBodyShippingPrice
/**
 * Shipping price (sellers only)
**/
var PostConversationsConversationIdOfferRequestBodyShippingPrice = /** @class */ (function (_super) {
    __extends(PostConversationsConversationIdOfferRequestBodyShippingPrice, _super);
    function PostConversationsConversationIdOfferRequestBodyShippingPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferRequestBodyShippingPrice.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferRequestBodyShippingPrice.prototype, "currency", void 0);
    return PostConversationsConversationIdOfferRequestBodyShippingPrice;
}(SpeakeasyBase));
export { PostConversationsConversationIdOfferRequestBodyShippingPrice };
var PostConversationsConversationIdOfferRequestBody = /** @class */ (function (_super) {
    __extends(PostConversationsConversationIdOfferRequestBody, _super);
    function PostConversationsConversationIdOfferRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferRequestBody.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layaway_terms_slug" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferRequestBody.prototype, "layawayTermsSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferRequestBody.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offer_items", elemType: PostConversationsConversationIdOfferRequestBodyOfferItems }),
        __metadata("design:type", Array)
    ], PostConversationsConversationIdOfferRequestBody.prototype, "offerItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", PostConversationsConversationIdOfferRequestBodyPrice)
    ], PostConversationsConversationIdOfferRequestBody.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferRequestBody.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_id" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferRequestBody.prototype, "recipientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region_code" }),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferRequestBody.prototype, "regionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_price" }),
        __metadata("design:type", PostConversationsConversationIdOfferRequestBodyShippingPrice)
    ], PostConversationsConversationIdOfferRequestBody.prototype, "shippingPrice", void 0);
    return PostConversationsConversationIdOfferRequestBody;
}(SpeakeasyBase));
export { PostConversationsConversationIdOfferRequestBody };
var PostConversationsConversationIdOfferSecurity = /** @class */ (function (_super) {
    __extends(PostConversationsConversationIdOfferSecurity, _super);
    function PostConversationsConversationIdOfferSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostConversationsConversationIdOfferSecurity.prototype, "oauth2", void 0);
    return PostConversationsConversationIdOfferSecurity;
}(SpeakeasyBase));
export { PostConversationsConversationIdOfferSecurity };
var PostConversationsConversationIdOfferRequest = /** @class */ (function (_super) {
    __extends(PostConversationsConversationIdOfferRequest, _super);
    function PostConversationsConversationIdOfferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostConversationsConversationIdOfferPathParams)
    ], PostConversationsConversationIdOfferRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostConversationsConversationIdOfferRequestBody)
    ], PostConversationsConversationIdOfferRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostConversationsConversationIdOfferSecurity)
    ], PostConversationsConversationIdOfferRequest.prototype, "security", void 0);
    return PostConversationsConversationIdOfferRequest;
}(SpeakeasyBase));
export { PostConversationsConversationIdOfferRequest };
var PostConversationsConversationIdOfferResponse = /** @class */ (function (_super) {
    __extends(PostConversationsConversationIdOfferResponse, _super);
    function PostConversationsConversationIdOfferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostConversationsConversationIdOfferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostConversationsConversationIdOfferResponse.prototype, "statusCode", void 0);
    return PostConversationsConversationIdOfferResponse;
}(SpeakeasyBase));
export { PostConversationsConversationIdOfferResponse };
