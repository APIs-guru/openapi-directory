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
var SearchProductsCodesHeaders = /** @class */ (function (_super) {
    __extends(SearchProductsCodesHeaders, _super);
    function SearchProductsCodesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], SearchProductsCodesHeaders.prototype, "acceptLanguage", void 0);
    return SearchProductsCodesHeaders;
}(SpeakeasyBase));
export { SearchProductsCodesHeaders };
var SearchProductsCodesRequestBody = /** @class */ (function (_super) {
    __extends(SearchProductsCodesRequestBody, _super);
    function SearchProductsCodesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], SearchProductsCodesRequestBody.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCodes" }),
        __metadata("design:type", Array)
    ], SearchProductsCodesRequestBody.prototype, "productCodes", void 0);
    return SearchProductsCodesRequestBody;
}(SpeakeasyBase));
export { SearchProductsCodesRequestBody };
var SearchProductsCodes200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(SearchProductsCodes200ApplicationJsonData, _super);
    function SearchProductsCodes200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admission" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "admission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingEngineId" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "bookingEngineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catIds" }),
        __metadata("design:type", Array)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "catIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=essential" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "essential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantCancellable" }),
        __metadata("design:type", Boolean)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "merchantCancellable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFrom" }),
        __metadata("design:type", Number)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "merchantNetPriceFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFromFormatted" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "merchantNetPriceFromFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onRequestPeriod" }),
        __metadata("design:type", Number)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "onRequestPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onSale" }),
        __metadata("design:type", Boolean)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "onSale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panoramaCount" }),
        __metadata("design:type", Number)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "panoramaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pas" }),
        __metadata("design:type", Map)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "pas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoCount" }),
        __metadata("design:type", Number)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "photoCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceFormatted" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "priceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationId" }),
        __metadata("design:type", Number)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "primaryDestinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationName" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "primaryDestinationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryGroupId" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "primaryGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewCount" }),
        __metadata("design:type", Number)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "reviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rrp" }),
        __metadata("design:type", Number)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "rrp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rrpformatted" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "rrpformatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmount" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "savingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmountFormated" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "savingAmountFormated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortDescription" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortTitle" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "shortTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialOfferAvailable" }),
        __metadata("design:type", Boolean)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "specialOfferAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialReservation" }),
        __metadata("design:type", Boolean)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "specialReservation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialReservationDetails" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "specialReservationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subCatIds" }),
        __metadata("design:type", Array)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "subCatIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierCode" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "supplierCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierName" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "supplierName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailHiResURL" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "thumbnailHiResUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailURL" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "thumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translationLevel" }),
        __metadata("design:type", Number)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "translationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniqueShortDescription" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "uniqueShortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoCount" }),
        __metadata("design:type", Number)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "videoCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webURL" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJsonData.prototype, "webUrl", void 0);
    return SearchProductsCodes200ApplicationJsonData;
}(SpeakeasyBase));
export { SearchProductsCodes200ApplicationJsonData };
var SearchProductsCodes200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchProductsCodes200ApplicationJson, _super);
    function SearchProductsCodes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: SearchProductsCodes200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], SearchProductsCodes200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], SearchProductsCodes200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], SearchProductsCodes200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], SearchProductsCodes200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], SearchProductsCodes200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], SearchProductsCodes200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], SearchProductsCodes200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], SearchProductsCodes200ApplicationJson.prototype, "vmid", void 0);
    return SearchProductsCodes200ApplicationJson;
}(SpeakeasyBase));
export { SearchProductsCodes200ApplicationJson };
var SearchProductsCodesRequest = /** @class */ (function (_super) {
    __extends(SearchProductsCodesRequest, _super);
    function SearchProductsCodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchProductsCodesHeaders)
    ], SearchProductsCodesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SearchProductsCodesRequestBody)
    ], SearchProductsCodesRequest.prototype, "request", void 0);
    return SearchProductsCodesRequest;
}(SpeakeasyBase));
export { SearchProductsCodesRequest };
var SearchProductsCodesResponse = /** @class */ (function (_super) {
    __extends(SearchProductsCodesResponse, _super);
    function SearchProductsCodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchProductsCodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchProductsCodesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchProductsCodes200ApplicationJson)
    ], SearchProductsCodesResponse.prototype, "searchProductsCodes200ApplicationJsonObject", void 0);
    return SearchProductsCodesResponse;
}(SpeakeasyBase));
export { SearchProductsCodesResponse };
