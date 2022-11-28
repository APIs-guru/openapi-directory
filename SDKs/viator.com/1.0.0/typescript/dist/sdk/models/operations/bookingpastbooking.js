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
var BookingPastbookingQueryParams = /** @class */ (function (_super) {
    __extends(BookingPastbookingQueryParams, _super);
    function BookingPastbookingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], BookingPastbookingQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemId" }),
        __metadata("design:type", String)
    ], BookingPastbookingQueryParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voucherKey" }),
        __metadata("design:type", String)
    ], BookingPastbookingQueryParams.prototype, "voucherKey", void 0);
    return BookingPastbookingQueryParams;
}(SpeakeasyBase));
export { BookingPastbookingQueryParams };
var BookingPastbookingHeaders = /** @class */ (function (_super) {
    __extends(BookingPastbookingHeaders, _super);
    function BookingPastbookingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], BookingPastbookingHeaders.prototype, "acceptLanguage", void 0);
    return BookingPastbookingHeaders;
}(SpeakeasyBase));
export { BookingPastbookingHeaders };
var BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate = /** @class */ (function (_super) {
    __extends(BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate, _super);
    function BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayRangeMax" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate.prototype, "dayRangeMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayRangeMin" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate.prototype, "dayRangeMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentageRefundable" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate.prototype, "percentageRefundable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyEndTimestamp" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate.prototype, "policyEndTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyStartTimestamp" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate.prototype, "policyStartTimestamp", void 0);
    return BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate;
}(SpeakeasyBase));
export { BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate };
var BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions = /** @class */ (function (_super) {
    __extends(BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions, _super);
    function BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountRefundable" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions.prototype, "amountRefundable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancellationFromTourDate", elemType: BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate }),
        __metadata("design:type", Array)
    ], BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions.prototype, "cancellationFromTourDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termsAndConditions" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions.prototype, "termsAndConditions", void 0);
    return BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions;
}(SpeakeasyBase));
export { BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions };
var BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands = /** @class */ (function (_super) {
    __extends(BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands, _super);
    function BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageBandId" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands.prototype, "ageBandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pluralDescription" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands.prototype, "pluralDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands.prototype, "sortOrder", void 0);
    return BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands;
}(SpeakeasyBase));
export { BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands };
var BookingPastbooking200ApplicationJsonDataItemSummaries = /** @class */ (function (_super) {
    __extends(BookingPastbooking200ApplicationJsonDataItemSummaries, _super);
    function BookingPastbooking200ApplicationJsonDataItemSummaries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcodeOption" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "barcodeOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcodeType" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "barcodeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingEngineId" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "bookingEngineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingStatus" }),
        __metadata("design:type", shared.BookingStatusItem)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "bookingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departsFrom" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "departsFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departurePoint" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "departurePoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departurePointAddress" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "departurePointAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departurePointDirections" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "departurePointDirections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destId" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "destId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorItemRef" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "distributorItemRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hoursConfirmed" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "hoursConfirmed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryId" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "itineraryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageServicesLanguageCode" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "languageServicesLanguageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRetailPrice" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "lastRetailPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRetailPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "lastRetailPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadTravellerFirstname" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "leadTravellerFirstname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadTravellerSurname" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "leadTravellerSurname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadTravellerTitle" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "leadTravellerTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantCancellable" }),
        __metadata("design:type", Boolean)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "merchantCancellable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPrice" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "merchantNetPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "merchantNetPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantTermsAndConditions" }),
        __metadata("design:type", BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "merchantTermsAndConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obfsId" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "obfsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passbooks" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "passbooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceFormatted" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "priceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceUSD" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "priceUsd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "productCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productPulledDown" }),
        __metadata("design:type", Boolean)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "productPulledDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTitle" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "productTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productWidgetList" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "productWidgetList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rulesApplied" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "rulesApplied", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmount" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "savingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmountFormated" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "savingAmountFormated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termsAndConditions" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "termsAndConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tourGradeCode" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "tourGradeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tourGradeDescription" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "tourGradeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travelDate" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "travelDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travellerAgeBands", elemType: BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands }),
        __metadata("design:type", Array)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "travellerAgeBands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherKey" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "voucherKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherOption" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "voucherOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherRequirements" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "voucherRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherURL" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "voucherUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vouchers" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonDataItemSummaries.prototype, "vouchers", void 0);
    return BookingPastbooking200ApplicationJsonDataItemSummaries;
}(SpeakeasyBase));
export { BookingPastbooking200ApplicationJsonDataItemSummaries };
// BookingPastbooking200ApplicationJsonData
/**
 * **object** containing pricing matrix information
**/
var BookingPastbooking200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(BookingPastbooking200ApplicationJsonData, _super);
    function BookingPastbooking200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookerEmail" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonData.prototype, "bookerEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingDate" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonData.prototype, "bookingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingStatus" }),
        __metadata("design:type", shared.BookingStatusItinerary)
    ], BookingPastbooking200ApplicationJsonData.prototype, "bookingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonData.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorRef" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonData.prototype, "distributorRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchangeRate" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonData.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasVoucher" }),
        __metadata("design:type", Boolean)
    ], BookingPastbooking200ApplicationJsonData.prototype, "hasVoucher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemSummaries", elemType: BookingPastbooking200ApplicationJsonDataItemSummaries }),
        __metadata("design:type", Array)
    ], BookingPastbooking200ApplicationJsonData.prototype, "itemSummaries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryId" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonData.prototype, "itineraryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rulesApplied" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonData.prototype, "rulesApplied", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonData.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPrice" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonData.prototype, "totalPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonData.prototype, "totalPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPriceUSD" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJsonData.prototype, "totalPriceUsd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonData.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherKey" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonData.prototype, "voucherKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherURL" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJsonData.prototype, "voucherUrl", void 0);
    return BookingPastbooking200ApplicationJsonData;
}(SpeakeasyBase));
export { BookingPastbooking200ApplicationJsonData };
var BookingPastbooking200ApplicationJson = /** @class */ (function (_super) {
    __extends(BookingPastbooking200ApplicationJson, _super);
    function BookingPastbooking200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", BookingPastbooking200ApplicationJsonData)
    ], BookingPastbooking200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], BookingPastbooking200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], BookingPastbooking200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], BookingPastbooking200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], BookingPastbooking200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], BookingPastbooking200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], BookingPastbooking200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], BookingPastbooking200ApplicationJson.prototype, "vmid", void 0);
    return BookingPastbooking200ApplicationJson;
}(SpeakeasyBase));
export { BookingPastbooking200ApplicationJson };
var BookingPastbookingRequest = /** @class */ (function (_super) {
    __extends(BookingPastbookingRequest, _super);
    function BookingPastbookingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingPastbookingQueryParams)
    ], BookingPastbookingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingPastbookingHeaders)
    ], BookingPastbookingRequest.prototype, "headers", void 0);
    return BookingPastbookingRequest;
}(SpeakeasyBase));
export { BookingPastbookingRequest };
var BookingPastbookingResponse = /** @class */ (function (_super) {
    __extends(BookingPastbookingResponse, _super);
    function BookingPastbookingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BookingPastbookingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BookingPastbookingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingPastbooking200ApplicationJson)
    ], BookingPastbookingResponse.prototype, "bookingPastbooking200ApplicationJsonObject", void 0);
    return BookingPastbookingResponse;
}(SpeakeasyBase));
export { BookingPastbookingResponse };
