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
var TaxonomyAttractionsHeaders = /** @class */ (function (_super) {
    __extends(TaxonomyAttractionsHeaders, _super);
    function TaxonomyAttractionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], TaxonomyAttractionsHeaders.prototype, "acceptLanguage", void 0);
    return TaxonomyAttractionsHeaders;
}(SpeakeasyBase));
export { TaxonomyAttractionsHeaders };
export var TaxonomyAttractionsRequestBodySortOrderEnum;
(function (TaxonomyAttractionsRequestBodySortOrderEnum) {
    TaxonomyAttractionsRequestBodySortOrderEnum["SeoPublishedDateD"] = "SEO_PUBLISHED_DATE_D";
    TaxonomyAttractionsRequestBodySortOrderEnum["SeoPublishedDateA"] = "SEO_PUBLISHED_DATE_A";
    TaxonomyAttractionsRequestBodySortOrderEnum["SeoReviewAvgRatingD"] = "SEO_REVIEW_AVG_RATING_D";
    TaxonomyAttractionsRequestBodySortOrderEnum["SeoReviewAvgRatingA"] = "SEO_REVIEW_AVG_RATING_A";
    TaxonomyAttractionsRequestBodySortOrderEnum["SeoAlphabetical"] = "SEO_ALPHABETICAL";
})(TaxonomyAttractionsRequestBodySortOrderEnum || (TaxonomyAttractionsRequestBodySortOrderEnum = {}));
var TaxonomyAttractionsRequestBody = /** @class */ (function (_super) {
    __extends(TaxonomyAttractionsRequestBody, _super);
    function TaxonomyAttractionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destId" }),
        __metadata("design:type", Number)
    ], TaxonomyAttractionsRequestBody.prototype, "destId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", String)
    ], TaxonomyAttractionsRequestBody.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topX" }),
        __metadata("design:type", String)
    ], TaxonomyAttractionsRequestBody.prototype, "topX", void 0);
    return TaxonomyAttractionsRequestBody;
}(SpeakeasyBase));
export { TaxonomyAttractionsRequestBody };
var TaxonomyAttractions200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(TaxonomyAttractions200ApplicationJsonData, _super);
    function TaxonomyAttractions200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attractionCity" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "attractionCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attractionLatitude" }),
        __metadata("design:type", Number)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "attractionLatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attractionLongitude" }),
        __metadata("design:type", Number)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "attractionLongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attractionState" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "attractionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attractionStreetAddress" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "attractionStreetAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationId" }),
        __metadata("design:type", Number)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "destinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageUrlName" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "pageUrlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoCount" }),
        __metadata("design:type", Number)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "photoCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationId" }),
        __metadata("design:type", Number)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "primaryDestinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationName" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "primaryDestinationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationUrlName" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "primaryDestinationUrlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCount" }),
        __metadata("design:type", Number)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "productCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishedDate" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "publishedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seoId" }),
        __metadata("design:type", Number)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "seoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailHiResURL" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "thumbnailHiResUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailURL" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "thumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webURL" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJsonData.prototype, "webUrl", void 0);
    return TaxonomyAttractions200ApplicationJsonData;
}(SpeakeasyBase));
export { TaxonomyAttractions200ApplicationJsonData };
var TaxonomyAttractions200ApplicationJson = /** @class */ (function (_super) {
    __extends(TaxonomyAttractions200ApplicationJson, _super);
    function TaxonomyAttractions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: TaxonomyAttractions200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], TaxonomyAttractions200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], TaxonomyAttractions200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], TaxonomyAttractions200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], TaxonomyAttractions200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], TaxonomyAttractions200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], TaxonomyAttractions200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], TaxonomyAttractions200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], TaxonomyAttractions200ApplicationJson.prototype, "vmid", void 0);
    return TaxonomyAttractions200ApplicationJson;
}(SpeakeasyBase));
export { TaxonomyAttractions200ApplicationJson };
var TaxonomyAttractionsRequest = /** @class */ (function (_super) {
    __extends(TaxonomyAttractionsRequest, _super);
    function TaxonomyAttractionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxonomyAttractionsHeaders)
    ], TaxonomyAttractionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TaxonomyAttractionsRequestBody)
    ], TaxonomyAttractionsRequest.prototype, "request", void 0);
    return TaxonomyAttractionsRequest;
}(SpeakeasyBase));
export { TaxonomyAttractionsRequest };
var TaxonomyAttractionsResponse = /** @class */ (function (_super) {
    __extends(TaxonomyAttractionsResponse, _super);
    function TaxonomyAttractionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TaxonomyAttractionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TaxonomyAttractionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxonomyAttractions200ApplicationJson)
    ], TaxonomyAttractionsResponse.prototype, "taxonomyAttractions200ApplicationJsonObject", void 0);
    return TaxonomyAttractionsResponse;
}(SpeakeasyBase));
export { TaxonomyAttractionsResponse };
