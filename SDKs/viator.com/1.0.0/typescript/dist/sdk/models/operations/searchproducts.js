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
var SearchProductsHeaders = /** @class */ (function (_super) {
    __extends(SearchProductsHeaders, _super);
    function SearchProductsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], SearchProductsHeaders.prototype, "acceptLanguage", void 0);
    return SearchProductsHeaders;
}(SpeakeasyBase));
export { SearchProductsHeaders };
export var SearchProductsRequestBodySortOrderEnum;
(function (SearchProductsRequestBodySortOrderEnum) {
    SearchProductsRequestBodySortOrderEnum["TopSellers"] = "TOP_SELLERS";
    SearchProductsRequestBodySortOrderEnum["ReviewAvgRatingA"] = "REVIEW_AVG_RATING_A";
    SearchProductsRequestBodySortOrderEnum["ReviewAvgRatingD"] = "REVIEW_AVG_RATING_D";
    SearchProductsRequestBodySortOrderEnum["PriceFromA"] = "PRICE_FROM_A";
    SearchProductsRequestBodySortOrderEnum["PriceFromD"] = "PRICE_FROM_D";
})(SearchProductsRequestBodySortOrderEnum || (SearchProductsRequestBodySortOrderEnum = {}));
var SearchProductsRequestBody = /** @class */ (function (_super) {
    __extends(SearchProductsRequestBody, _super);
    function SearchProductsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catId" }),
        __metadata("design:type", Number)
    ], SearchProductsRequestBody.prototype, "catId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], SearchProductsRequestBody.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destId" }),
        __metadata("design:type", Number)
    ], SearchProductsRequestBody.prototype, "destId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], SearchProductsRequestBody.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seoId" }),
        __metadata("design:type", String)
    ], SearchProductsRequestBody.prototype, "seoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", String)
    ], SearchProductsRequestBody.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", String)
    ], SearchProductsRequestBody.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subCatId" }),
        __metadata("design:type", Number)
    ], SearchProductsRequestBody.prototype, "subCatId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topX" }),
        __metadata("design:type", String)
    ], SearchProductsRequestBody.prototype, "topX", void 0);
    return SearchProductsRequestBody;
}(SpeakeasyBase));
export { SearchProductsRequestBody };
var SearchProducts200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(SearchProducts200ApplicationJsonData, _super);
    function SearchProducts200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admission" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "admission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], SearchProducts200ApplicationJsonData.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingEngineId" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "bookingEngineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catIds" }),
        __metadata("design:type", Array)
    ], SearchProducts200ApplicationJsonData.prototype, "catIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=essential" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "essential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantCancellable" }),
        __metadata("design:type", Boolean)
    ], SearchProducts200ApplicationJsonData.prototype, "merchantCancellable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFrom" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJsonData.prototype, "merchantNetPriceFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFromFormatted" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "merchantNetPriceFromFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onRequestPeriod" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJsonData.prototype, "onRequestPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onSale" }),
        __metadata("design:type", Boolean)
    ], SearchProducts200ApplicationJsonData.prototype, "onSale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panoramaCount" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJsonData.prototype, "panoramaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pas" }),
        __metadata("design:type", Map)
    ], SearchProducts200ApplicationJsonData.prototype, "pas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoCount" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJsonData.prototype, "photoCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJsonData.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceFormatted" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "priceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationId" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJsonData.prototype, "primaryDestinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationName" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "primaryDestinationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationUrlName" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "primaryDestinationUrlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryGroupId" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJsonData.prototype, "primaryGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productUrlName" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "productUrlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJsonData.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewCount" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJsonData.prototype, "reviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rrp" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJsonData.prototype, "rrp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rrpformatted" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "rrpformatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmount" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "savingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmountFormated" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "savingAmountFormated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortDescription" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortTitle" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "shortTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJsonData.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialOfferAvailable" }),
        __metadata("design:type", Boolean)
    ], SearchProducts200ApplicationJsonData.prototype, "specialOfferAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialReservation" }),
        __metadata("design:type", Boolean)
    ], SearchProducts200ApplicationJsonData.prototype, "specialReservation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialReservationDetails" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "specialReservationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslSupported" }),
        __metadata("design:type", Object)
    ], SearchProducts200ApplicationJsonData.prototype, "sslSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subCatIds" }),
        __metadata("design:type", Array)
    ], SearchProducts200ApplicationJsonData.prototype, "subCatIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierCode" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "supplierCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierName" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "supplierName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailHiResURL" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "thumbnailHiResUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailURL" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "thumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translationLevel" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJsonData.prototype, "translationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniqueShortDescription" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "uniqueShortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoCount" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJsonData.prototype, "videoCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webURL" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJsonData.prototype, "webUrl", void 0);
    return SearchProducts200ApplicationJsonData;
}(SpeakeasyBase));
export { SearchProducts200ApplicationJsonData };
var SearchProducts200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchProducts200ApplicationJson, _super);
    function SearchProducts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: SearchProducts200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], SearchProducts200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], SearchProducts200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], SearchProducts200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], SearchProducts200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], SearchProducts200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], SearchProducts200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], SearchProducts200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], SearchProducts200ApplicationJson.prototype, "vmid", void 0);
    return SearchProducts200ApplicationJson;
}(SpeakeasyBase));
export { SearchProducts200ApplicationJson };
var SearchProductsRequest = /** @class */ (function (_super) {
    __extends(SearchProductsRequest, _super);
    function SearchProductsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchProductsHeaders)
    ], SearchProductsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SearchProductsRequestBody)
    ], SearchProductsRequest.prototype, "request", void 0);
    return SearchProductsRequest;
}(SpeakeasyBase));
export { SearchProductsRequest };
var SearchProductsResponse = /** @class */ (function (_super) {
    __extends(SearchProductsResponse, _super);
    function SearchProductsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchProductsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchProductsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchProducts200ApplicationJson)
    ], SearchProductsResponse.prototype, "searchProducts200ApplicationJsonObject", void 0);
    return SearchProductsResponse;
}(SpeakeasyBase));
export { SearchProductsResponse };
