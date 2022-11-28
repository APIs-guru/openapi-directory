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
var BookingBookHeaders = /** @class */ (function (_super) {
    __extends(BookingBookHeaders, _super);
    function BookingBookHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], BookingBookHeaders.prototype, "acceptLanguage", void 0);
    return BookingBookHeaders;
}(SpeakeasyBase));
export { BookingBookHeaders };
// BookingBookRequestBodyBooker
/**
 * **object** containing details about the primary contact (**note**: this contact needn't be a traveller)
**/
var BookingBookRequestBodyBooker = /** @class */ (function (_super) {
    __extends(BookingBookRequestBodyBooker, _super);
    function BookingBookRequestBodyBooker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cellPhone" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyBooker.prototype, "cellPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cellPhoneCountryCode" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyBooker.prototype, "cellPhoneCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyBooker.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstname" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyBooker.prototype, "firstname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homePhone" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyBooker.prototype, "homePhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surname" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyBooker.prototype, "surname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyBooker.prototype, "title", void 0);
    return BookingBookRequestBodyBooker;
}(SpeakeasyBase));
export { BookingBookRequestBodyBooker };
var BookingBookRequestBodyItemsBookingQuestionAnswers = /** @class */ (function (_super) {
    __extends(BookingBookRequestBodyItemsBookingQuestionAnswers, _super);
    function BookingBookRequestBodyItemsBookingQuestionAnswers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answer" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyItemsBookingQuestionAnswers.prototype, "answer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questionId" }),
        __metadata("design:type", Number)
    ], BookingBookRequestBodyItemsBookingQuestionAnswers.prototype, "questionId", void 0);
    return BookingBookRequestBodyItemsBookingQuestionAnswers;
}(SpeakeasyBase));
export { BookingBookRequestBodyItemsBookingQuestionAnswers };
// BookingBookRequestBodyItemsPartnerItemDetail
/**
 * **object** containing partner details at a per-item level
**/
var BookingBookRequestBodyItemsPartnerItemDetail = /** @class */ (function (_super) {
    __extends(BookingBookRequestBodyItemsPartnerItemDetail, _super);
    function BookingBookRequestBodyItemsPartnerItemDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorItemRef" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyItemsPartnerItemDetail.prototype, "distributorItemRef", void 0);
    return BookingBookRequestBodyItemsPartnerItemDetail;
}(SpeakeasyBase));
export { BookingBookRequestBodyItemsPartnerItemDetail };
var BookingBookRequestBodyItemsTravellers = /** @class */ (function (_super) {
    __extends(BookingBookRequestBodyItemsTravellers, _super);
    function BookingBookRequestBodyItemsTravellers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandId" }),
        __metadata("design:type", Number)
    ], BookingBookRequestBodyItemsTravellers.prototype, "bandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstname" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyItemsTravellers.prototype, "firstname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadTraveller" }),
        __metadata("design:type", Boolean)
    ], BookingBookRequestBodyItemsTravellers.prototype, "leadTraveller", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surname" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyItemsTravellers.prototype, "surname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyItemsTravellers.prototype, "title", void 0);
    return BookingBookRequestBodyItemsTravellers;
}(SpeakeasyBase));
export { BookingBookRequestBodyItemsTravellers };
var BookingBookRequestBodyItems = /** @class */ (function (_super) {
    __extends(BookingBookRequestBodyItems, _super);
    function BookingBookRequestBodyItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingQuestionAnswers", elemType: BookingBookRequestBodyItemsBookingQuestionAnswers }),
        __metadata("design:type", Array)
    ], BookingBookRequestBodyItems.prototype, "bookingQuestionAnswers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hotelId" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyItems.prototype, "hotelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageOptionCode" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyItems.prototype, "languageOptionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerItemDetail" }),
        __metadata("design:type", BookingBookRequestBodyItemsPartnerItemDetail)
    ], BookingBookRequestBodyItems.prototype, "partnerItemDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickupPoint" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyItems.prototype, "pickupPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyItems.prototype, "productCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialRequirements" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyItems.prototype, "specialRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tourGradeCode" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyItems.prototype, "tourGradeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travelDate" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyItems.prototype, "travelDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travellers", elemType: BookingBookRequestBodyItemsTravellers }),
        __metadata("design:type", Array)
    ], BookingBookRequestBodyItems.prototype, "travellers", void 0);
    return BookingBookRequestBodyItems;
}(SpeakeasyBase));
export { BookingBookRequestBodyItems };
// BookingBookRequestBodyPartnerDetail
/**
 * Applicable only for extra partner detail for either partner or merchant partner for sending partner specific information
 *
**/
var BookingBookRequestBodyPartnerDetail = /** @class */ (function (_super) {
    __extends(BookingBookRequestBodyPartnerDetail, _super);
    function BookingBookRequestBodyPartnerDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorRef" }),
        __metadata("design:type", String)
    ], BookingBookRequestBodyPartnerDetail.prototype, "distributorRef", void 0);
    return BookingBookRequestBodyPartnerDetail;
}(SpeakeasyBase));
export { BookingBookRequestBodyPartnerDetail };
var BookingBookRequestBody = /** @class */ (function (_super) {
    __extends(BookingBookRequestBody, _super);
    function BookingBookRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=booker" }),
        __metadata("design:type", BookingBookRequestBodyBooker)
    ], BookingBookRequestBody.prototype, "booker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingBookRequestBody.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=demo" }),
        __metadata("design:type", Boolean)
    ], BookingBookRequestBody.prototype, "demo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: BookingBookRequestBodyItems }),
        __metadata("design:type", Array)
    ], BookingBookRequestBody.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerDetail" }),
        __metadata("design:type", BookingBookRequestBodyPartnerDetail)
    ], BookingBookRequestBody.prototype, "partnerDetail", void 0);
    return BookingBookRequestBody;
}(SpeakeasyBase));
export { BookingBookRequestBody };
var BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate = /** @class */ (function (_super) {
    __extends(BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate, _super);
    function BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayRangeMax" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate.prototype, "dayRangeMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayRangeMin" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate.prototype, "dayRangeMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentageRefundable" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate.prototype, "percentageRefundable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyEndTimestamp" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate.prototype, "policyEndTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyStartTimestamp" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate.prototype, "policyStartTimestamp", void 0);
    return BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate;
}(SpeakeasyBase));
export { BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate };
var BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions = /** @class */ (function (_super) {
    __extends(BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions, _super);
    function BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountRefundable" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions.prototype, "amountRefundable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancellationFromTourDate", elemType: BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate }),
        __metadata("design:type", Array)
    ], BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions.prototype, "cancellationFromTourDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termsAndConditions" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions.prototype, "termsAndConditions", void 0);
    return BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions;
}(SpeakeasyBase));
export { BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions };
var BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands = /** @class */ (function (_super) {
    __extends(BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands, _super);
    function BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageBandId" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands.prototype, "ageBandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pluralDescription" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands.prototype, "pluralDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands.prototype, "sortOrder", void 0);
    return BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands;
}(SpeakeasyBase));
export { BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands };
var BookingBook200ApplicationJsonDataItemSummaries = /** @class */ (function (_super) {
    __extends(BookingBook200ApplicationJsonDataItemSummaries, _super);
    function BookingBook200ApplicationJsonDataItemSummaries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applePassSupported" }),
        __metadata("design:type", Boolean)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "applePassSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcodeOption" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "barcodeOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcodeType" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "barcodeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingEngineId" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "bookingEngineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingStatus" }),
        __metadata("design:type", shared.BookingStatusItem)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "bookingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departsFrom" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "departsFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departurePoint" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "departurePoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departurePointAddress" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "departurePointAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departurePointDirections" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "departurePointDirections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destId" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "destId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorItemRef" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "distributorItemRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hoursConfirmed" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "hoursConfirmed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryId" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "itineraryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageServicesCode" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "languageServicesCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRetailPrice" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "lastRetailPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRetailPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "lastRetailPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadTravellerFirstname" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "leadTravellerFirstname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadTravellerSurname" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "leadTravellerSurname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadTravellerTitle" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "leadTravellerTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantCancellable" }),
        __metadata("design:type", Boolean)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "merchantCancellable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPrice" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "merchantNetPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "merchantNetPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantTermsAndConditions" }),
        __metadata("design:type", BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "merchantTermsAndConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obfsId" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "obfsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passbooks" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "passbooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickupHotelId" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "pickupHotelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickupHotelName" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "pickupHotelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceFormatted" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "priceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceUSD" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "priceUsd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "productCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productPulledDown" }),
        __metadata("design:type", Boolean)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "productPulledDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTitle" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "productTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productWidgetList" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "productWidgetList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rulesApplied" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "rulesApplied", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmount" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "savingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmountFormated" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "savingAmountFormated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startingTime" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "startingTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierName" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "supplierName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierPhoneNumber" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "supplierPhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termsAndConditions" }),
        __metadata("design:type", Map)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "termsAndConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tourGradeCode" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "tourGradeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tourGradeDescription" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "tourGradeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travelDate" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "travelDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travellerAgeBands", elemType: BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands }),
        __metadata("design:type", Array)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "travellerAgeBands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherKey" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "voucherKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherOption" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "voucherOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherRequirements" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "voucherRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherURL" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "voucherUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vouchers" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonDataItemSummaries.prototype, "vouchers", void 0);
    return BookingBook200ApplicationJsonDataItemSummaries;
}(SpeakeasyBase));
export { BookingBook200ApplicationJsonDataItemSummaries };
var BookingBook200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(BookingBook200ApplicationJsonData, _super);
    function BookingBook200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookerEmail" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonData.prototype, "bookerEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingDate" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonData.prototype, "bookingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingStatus" }),
        __metadata("design:type", shared.BookingStatusItinerary)
    ], BookingBook200ApplicationJsonData.prototype, "bookingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonData.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorRef" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonData.prototype, "distributorRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchangeRate" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonData.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasVoucher" }),
        __metadata("design:type", Boolean)
    ], BookingBook200ApplicationJsonData.prototype, "hasVoucher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemSummaries", elemType: BookingBook200ApplicationJsonDataItemSummaries }),
        __metadata("design:type", Array)
    ], BookingBook200ApplicationJsonData.prototype, "itemSummaries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryId" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonData.prototype, "itineraryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=omniPreRuleList" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonData.prototype, "omniPreRuleList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paypalRedirectURL" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonData.prototype, "paypalRedirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rulesApplied" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonData.prototype, "rulesApplied", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityToken" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonData.prototype, "securityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonData.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPrice" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonData.prototype, "totalPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonData.prototype, "totalPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPriceUSD" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJsonData.prototype, "totalPriceUsd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonData.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherKey" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonData.prototype, "voucherKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherURL" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJsonData.prototype, "voucherUrl", void 0);
    return BookingBook200ApplicationJsonData;
}(SpeakeasyBase));
export { BookingBook200ApplicationJsonData };
var BookingBook200ApplicationJson = /** @class */ (function (_super) {
    __extends(BookingBook200ApplicationJson, _super);
    function BookingBook200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", BookingBook200ApplicationJsonData)
    ], BookingBook200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], BookingBook200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], BookingBook200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], BookingBook200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], BookingBook200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], BookingBook200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], BookingBook200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], BookingBook200ApplicationJson.prototype, "vmid", void 0);
    return BookingBook200ApplicationJson;
}(SpeakeasyBase));
export { BookingBook200ApplicationJson };
var BookingBookRequest = /** @class */ (function (_super) {
    __extends(BookingBookRequest, _super);
    function BookingBookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingBookHeaders)
    ], BookingBookRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BookingBookRequestBody)
    ], BookingBookRequest.prototype, "request", void 0);
    return BookingBookRequest;
}(SpeakeasyBase));
export { BookingBookRequest };
var BookingBookResponse = /** @class */ (function (_super) {
    __extends(BookingBookResponse, _super);
    function BookingBookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BookingBookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BookingBookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingBook200ApplicationJson)
    ], BookingBookResponse.prototype, "bookingBook200ApplicationJsonObject", void 0);
    return BookingBookResponse;
}(SpeakeasyBase));
export { BookingBookResponse };
