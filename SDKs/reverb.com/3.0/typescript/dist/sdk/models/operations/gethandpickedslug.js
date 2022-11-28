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
var GetHandpickedSlugPathParams = /** @class */ (function (_super) {
    __extends(GetHandpickedSlugPathParams, _super);
    function GetHandpickedSlugPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugPathParams.prototype, "slug", void 0);
    return GetHandpickedSlugPathParams;
}(SpeakeasyBase));
export { GetHandpickedSlugPathParams };
var GetHandpickedSlugQueryParams = /** @class */ (function (_super) {
    __extends(GetHandpickedSlugQueryParams, _super);
    function GetHandpickedSlugQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accepts_gift_cards" }),
        __metadata("design:type", Boolean)
    ], GetHandpickedSlugQueryParams.prototype, "acceptsGiftCards", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accepts_payment_plans" }),
        __metadata("design:type", Boolean)
    ], GetHandpickedSlugQueryParams.prototype, "acceptsPaymentPlans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auction_price_max" }),
        __metadata("design:type", Number)
    ], GetHandpickedSlugQueryParams.prototype, "auctionPriceMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=conditions" }),
        __metadata("design:type", Array)
    ], GetHandpickedSlugQueryParams.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=decade" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "decade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_auctions" }),
        __metadata("design:type", Boolean)
    ], GetHandpickedSlugQueryParams.prototype, "excludeAuctions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finish" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "finish", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=handmade" }),
        __metadata("design:type", Boolean)
    ], GetHandpickedSlugQueryParams.prototype, "handmade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_city" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "itemCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_country" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "itemCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_region" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "itemRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_state" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "itemState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=listing_type" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "listingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=local_pickup" }),
        __metadata("design:type", Boolean)
    ], GetHandpickedSlugQueryParams.prototype, "localPickup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=make" }),
        __metadata("design:type", Array)
    ], GetHandpickedSlugQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=must_not" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "mustNot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=not_ids" }),
        __metadata("design:type", Array)
    ], GetHandpickedSlugQueryParams.prototype, "notIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetHandpickedSlugQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetHandpickedSlugQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetHandpickedSlugQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preferred_seller" }),
        __metadata("design:type", Boolean)
    ], GetHandpickedSlugQueryParams.prototype, "preferredSeller", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_max" }),
        __metadata("design:type", Number)
    ], GetHandpickedSlugQueryParams.prototype, "priceMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_min" }),
        __metadata("design:type", Number)
    ], GetHandpickedSlugQueryParams.prototype, "priceMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_type" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ships_to" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "shipsTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shop" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "shop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shop_id" }),
        __metadata("design:type", String)
    ], GetHandpickedSlugQueryParams.prototype, "shopId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=watchers_count_min" }),
        __metadata("design:type", Number)
    ], GetHandpickedSlugQueryParams.prototype, "watchersCountMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year_max" }),
        __metadata("design:type", Number)
    ], GetHandpickedSlugQueryParams.prototype, "yearMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year_min" }),
        __metadata("design:type", Number)
    ], GetHandpickedSlugQueryParams.prototype, "yearMin", void 0);
    return GetHandpickedSlugQueryParams;
}(SpeakeasyBase));
export { GetHandpickedSlugQueryParams };
var GetHandpickedSlugRequest = /** @class */ (function (_super) {
    __extends(GetHandpickedSlugRequest, _super);
    function GetHandpickedSlugRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHandpickedSlugPathParams)
    ], GetHandpickedSlugRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHandpickedSlugQueryParams)
    ], GetHandpickedSlugRequest.prototype, "queryParams", void 0);
    return GetHandpickedSlugRequest;
}(SpeakeasyBase));
export { GetHandpickedSlugRequest };
var GetHandpickedSlugResponse = /** @class */ (function (_super) {
    __extends(GetHandpickedSlugResponse, _super);
    function GetHandpickedSlugResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetHandpickedSlugResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetHandpickedSlugResponse.prototype, "statusCode", void 0);
    return GetHandpickedSlugResponse;
}(SpeakeasyBase));
export { GetHandpickedSlugResponse };
