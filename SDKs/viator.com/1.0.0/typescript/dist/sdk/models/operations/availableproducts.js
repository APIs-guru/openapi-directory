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
var AvailableProductsHeaders = /** @class */ (function (_super) {
    __extends(AvailableProductsHeaders, _super);
    function AvailableProductsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], AvailableProductsHeaders.prototype, "acceptLanguage", void 0);
    return AvailableProductsHeaders;
}(SpeakeasyBase));
export { AvailableProductsHeaders };
var AvailableProductsRequestBody = /** @class */ (function (_super) {
    __extends(AvailableProductsRequestBody, _super);
    function AvailableProductsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], AvailableProductsRequestBody.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], AvailableProductsRequestBody.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numAdults" }),
        __metadata("design:type", Number)
    ], AvailableProductsRequestBody.prototype, "numAdults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCodes" }),
        __metadata("design:type", Array)
    ], AvailableProductsRequestBody.prototype, "productCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", String)
    ], AvailableProductsRequestBody.prototype, "startDate", void 0);
    return AvailableProductsRequestBody;
}(SpeakeasyBase));
export { AvailableProductsRequestBody };
// AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote
/**
 * **pricing object** for *this* tour grade
**/
var AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote = /** @class */ (function (_super) {
    __extends(AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote, _super);
    function AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generalRetailPrice" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote.prototype, "generalRetailPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPrice" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote.prototype, "merchantNetPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retailPrice" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote.prototype, "retailPrice", void 0);
    return AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote;
}(SpeakeasyBase));
export { AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote };
var AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates = /** @class */ (function (_super) {
    __extends(AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates, _super);
    function AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateList" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates.prototype, "dateList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceFrom" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates.prototype, "priceFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceQuote" }),
        __metadata("design:type", AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote)
    ], AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates.prototype, "priceQuote", void 0);
    return AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates;
}(SpeakeasyBase));
export { AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates };
var AvailableProducts200ApplicationJsonDataPasTourGrades = /** @class */ (function (_super) {
    __extends(AvailableProducts200ApplicationJsonDataPasTourGrades, _super);
    function AvailableProducts200ApplicationJsonDataPasTourGrades() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availDates", elemType: AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates }),
        __metadata("design:type", Array)
    ], AvailableProducts200ApplicationJsonDataPasTourGrades.prototype, "availDates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingEngine" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonDataPasTourGrades.prototype, "bookingEngine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonDataPasTourGrades.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageServices" }),
        __metadata("design:type", Map)
    ], AvailableProducts200ApplicationJsonDataPasTourGrades.prototype, "languageServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sapi" }),
        __metadata("design:type", Boolean)
    ], AvailableProducts200ApplicationJsonDataPasTourGrades.prototype, "sapi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonDataPasTourGrades.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tourGradeCode" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonDataPasTourGrades.prototype, "tourGradeCode", void 0);
    return AvailableProducts200ApplicationJsonDataPasTourGrades;
}(SpeakeasyBase));
export { AvailableProducts200ApplicationJsonDataPasTourGrades };
// AvailableProducts200ApplicationJsonDataPas
/**
 * **object** detailing product availability
 * - `pas` stands for Product Availability Schema
 *
**/
var AvailableProducts200ApplicationJsonDataPas = /** @class */ (function (_super) {
    __extends(AvailableProducts200ApplicationJsonDataPas, _super);
    function AvailableProducts200ApplicationJsonDataPas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incompleteQuote" }),
        __metadata("design:type", Boolean)
    ], AvailableProducts200ApplicationJsonDataPas.prototype, "incompleteQuote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonDataPas.prototype, "productCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=removedChildAges" }),
        __metadata("design:type", Array)
    ], AvailableProducts200ApplicationJsonDataPas.prototype, "removedChildAges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tourGrades", elemType: AvailableProducts200ApplicationJsonDataPasTourGrades }),
        __metadata("design:type", Map)
    ], AvailableProducts200ApplicationJsonDataPas.prototype, "tourGrades", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travellerMix" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonDataPas.prototype, "travellerMix", void 0);
    return AvailableProducts200ApplicationJsonDataPas;
}(SpeakeasyBase));
export { AvailableProducts200ApplicationJsonDataPas };
var AvailableProducts200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(AvailableProducts200ApplicationJsonData, _super);
    function AvailableProducts200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admission" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "admission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], AvailableProducts200ApplicationJsonData.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingEngineId" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "bookingEngineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catIds" }),
        __metadata("design:type", Array)
    ], AvailableProducts200ApplicationJsonData.prototype, "catIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=essential" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "essential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantCancellable" }),
        __metadata("design:type", Boolean)
    ], AvailableProducts200ApplicationJsonData.prototype, "merchantCancellable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFrom" }),
        __metadata("design:type", Number)
    ], AvailableProducts200ApplicationJsonData.prototype, "merchantNetPriceFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFromFormatted" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "merchantNetPriceFromFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onRequestPeriod" }),
        __metadata("design:type", Number)
    ], AvailableProducts200ApplicationJsonData.prototype, "onRequestPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onSale" }),
        __metadata("design:type", Boolean)
    ], AvailableProducts200ApplicationJsonData.prototype, "onSale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panoramaCount" }),
        __metadata("design:type", Number)
    ], AvailableProducts200ApplicationJsonData.prototype, "panoramaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pas" }),
        __metadata("design:type", AvailableProducts200ApplicationJsonDataPas)
    ], AvailableProducts200ApplicationJsonData.prototype, "pas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoCount" }),
        __metadata("design:type", Number)
    ], AvailableProducts200ApplicationJsonData.prototype, "photoCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], AvailableProducts200ApplicationJsonData.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceFormatted" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "priceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationId" }),
        __metadata("design:type", Number)
    ], AvailableProducts200ApplicationJsonData.prototype, "primaryDestinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationName" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "primaryDestinationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationUrlName" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "primaryDestinationUrlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryGroupId" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "primaryGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productUrlName" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "productUrlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], AvailableProducts200ApplicationJsonData.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewCount" }),
        __metadata("design:type", Number)
    ], AvailableProducts200ApplicationJsonData.prototype, "reviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rrp" }),
        __metadata("design:type", Number)
    ], AvailableProducts200ApplicationJsonData.prototype, "rrp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rrpFormatted" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "rrpFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmount" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "savingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmountFormated" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "savingAmountFormated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortDescription" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortTitle" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "shortTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], AvailableProducts200ApplicationJsonData.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialOfferAvailable" }),
        __metadata("design:type", Boolean)
    ], AvailableProducts200ApplicationJsonData.prototype, "specialOfferAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialReservation" }),
        __metadata("design:type", Boolean)
    ], AvailableProducts200ApplicationJsonData.prototype, "specialReservation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialReservationDetails" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "specialReservationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslSupported" }),
        __metadata("design:type", Boolean)
    ], AvailableProducts200ApplicationJsonData.prototype, "sslSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subCatIds" }),
        __metadata("design:type", Array)
    ], AvailableProducts200ApplicationJsonData.prototype, "subCatIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierCode" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "supplierCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierName" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "supplierName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailHiResURL" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "thumbnailHiResUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailURL" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "thumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translationLevel" }),
        __metadata("design:type", Number)
    ], AvailableProducts200ApplicationJsonData.prototype, "translationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniqueShortDescription" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "uniqueShortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoCount" }),
        __metadata("design:type", Number)
    ], AvailableProducts200ApplicationJsonData.prototype, "videoCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webURL" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJsonData.prototype, "webUrl", void 0);
    return AvailableProducts200ApplicationJsonData;
}(SpeakeasyBase));
export { AvailableProducts200ApplicationJsonData };
var AvailableProducts200ApplicationJson = /** @class */ (function (_super) {
    __extends(AvailableProducts200ApplicationJson, _super);
    function AvailableProducts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: AvailableProducts200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], AvailableProducts200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], AvailableProducts200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], AvailableProducts200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], AvailableProducts200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], AvailableProducts200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], AvailableProducts200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], AvailableProducts200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], AvailableProducts200ApplicationJson.prototype, "vmid", void 0);
    return AvailableProducts200ApplicationJson;
}(SpeakeasyBase));
export { AvailableProducts200ApplicationJson };
var AvailableProductsRequest = /** @class */ (function (_super) {
    __extends(AvailableProductsRequest, _super);
    function AvailableProductsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AvailableProductsHeaders)
    ], AvailableProductsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AvailableProductsRequestBody)
    ], AvailableProductsRequest.prototype, "request", void 0);
    return AvailableProductsRequest;
}(SpeakeasyBase));
export { AvailableProductsRequest };
var AvailableProductsResponse = /** @class */ (function (_super) {
    __extends(AvailableProductsResponse, _super);
    function AvailableProductsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AvailableProductsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AvailableProductsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AvailableProducts200ApplicationJson)
    ], AvailableProductsResponse.prototype, "availableProducts200ApplicationJsonObject", void 0);
    return AvailableProductsResponse;
}(SpeakeasyBase));
export { AvailableProductsResponse };
