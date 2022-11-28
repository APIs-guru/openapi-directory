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
var GetListingsAllQueryParams = /** @class */ (function (_super) {
    __extends(GetListingsAllQueryParams, _super);
    function GetListingsAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accepts_gift_cards" }),
        __metadata("design:type", Boolean)
    ], GetListingsAllQueryParams.prototype, "acceptsGiftCards", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accepts_payment_plans" }),
        __metadata("design:type", Boolean)
    ], GetListingsAllQueryParams.prototype, "acceptsPaymentPlans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auction_price_max" }),
        __metadata("design:type", Number)
    ], GetListingsAllQueryParams.prototype, "auctionPriceMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=conditions" }),
        __metadata("design:type", Array)
    ], GetListingsAllQueryParams.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=decade" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "decade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_auctions" }),
        __metadata("design:type", Boolean)
    ], GetListingsAllQueryParams.prototype, "excludeAuctions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finish" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "finish", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=handmade" }),
        __metadata("design:type", Boolean)
    ], GetListingsAllQueryParams.prototype, "handmade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_city" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "itemCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_country" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "itemCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_region" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "itemRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_state" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "itemState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=listing_type" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "listingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=local_pickup" }),
        __metadata("design:type", Boolean)
    ], GetListingsAllQueryParams.prototype, "localPickup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=make" }),
        __metadata("design:type", Array)
    ], GetListingsAllQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=must_not" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "mustNot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=not_ids" }),
        __metadata("design:type", Array)
    ], GetListingsAllQueryParams.prototype, "notIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetListingsAllQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetListingsAllQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetListingsAllQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preferred_seller" }),
        __metadata("design:type", Boolean)
    ], GetListingsAllQueryParams.prototype, "preferredSeller", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_max" }),
        __metadata("design:type", Number)
    ], GetListingsAllQueryParams.prototype, "priceMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_min" }),
        __metadata("design:type", Number)
    ], GetListingsAllQueryParams.prototype, "priceMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_type" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ships_to" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "shipsTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shop" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "shop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shop_id" }),
        __metadata("design:type", String)
    ], GetListingsAllQueryParams.prototype, "shopId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=watchers_count_min" }),
        __metadata("design:type", Number)
    ], GetListingsAllQueryParams.prototype, "watchersCountMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year_max" }),
        __metadata("design:type", Number)
    ], GetListingsAllQueryParams.prototype, "yearMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year_min" }),
        __metadata("design:type", Number)
    ], GetListingsAllQueryParams.prototype, "yearMin", void 0);
    return GetListingsAllQueryParams;
}(SpeakeasyBase));
export { GetListingsAllQueryParams };
var GetListingsAllRequest = /** @class */ (function (_super) {
    __extends(GetListingsAllRequest, _super);
    function GetListingsAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingsAllQueryParams)
    ], GetListingsAllRequest.prototype, "queryParams", void 0);
    return GetListingsAllRequest;
}(SpeakeasyBase));
export { GetListingsAllRequest };
var GetListingsAllResponse = /** @class */ (function (_super) {
    __extends(GetListingsAllResponse, _super);
    function GetListingsAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListingsAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListingsAllResponse.prototype, "statusCode", void 0);
    return GetListingsAllResponse;
}(SpeakeasyBase));
export { GetListingsAllResponse };
