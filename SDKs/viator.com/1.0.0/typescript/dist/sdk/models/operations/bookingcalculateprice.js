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
var BookingCalculatepriceHeaders = /** @class */ (function (_super) {
    __extends(BookingCalculatepriceHeaders, _super);
    function BookingCalculatepriceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], BookingCalculatepriceHeaders.prototype, "acceptLanguage", void 0);
    return BookingCalculatepriceHeaders;
}(SpeakeasyBase));
export { BookingCalculatepriceHeaders };
var BookingCalculatepriceRequestBodyItemsTravellers = /** @class */ (function (_super) {
    __extends(BookingCalculatepriceRequestBodyItemsTravellers, _super);
    function BookingCalculatepriceRequestBodyItemsTravellers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandId" }),
        __metadata("design:type", Number)
    ], BookingCalculatepriceRequestBodyItemsTravellers.prototype, "bandId", void 0);
    return BookingCalculatepriceRequestBodyItemsTravellers;
}(SpeakeasyBase));
export { BookingCalculatepriceRequestBodyItemsTravellers };
var BookingCalculatepriceRequestBodyItems = /** @class */ (function (_super) {
    __extends(BookingCalculatepriceRequestBodyItems, _super);
    function BookingCalculatepriceRequestBodyItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], BookingCalculatepriceRequestBodyItems.prototype, "productCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tourGradeCode" }),
        __metadata("design:type", String)
    ], BookingCalculatepriceRequestBodyItems.prototype, "tourGradeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travelDate" }),
        __metadata("design:type", String)
    ], BookingCalculatepriceRequestBodyItems.prototype, "travelDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travellers", elemType: BookingCalculatepriceRequestBodyItemsTravellers }),
        __metadata("design:type", Array)
    ], BookingCalculatepriceRequestBodyItems.prototype, "travellers", void 0);
    return BookingCalculatepriceRequestBodyItems;
}(SpeakeasyBase));
export { BookingCalculatepriceRequestBodyItems };
var BookingCalculatepriceRequestBody = /** @class */ (function (_super) {
    __extends(BookingCalculatepriceRequestBody, _super);
    function BookingCalculatepriceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingCalculatepriceRequestBody.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: BookingCalculatepriceRequestBodyItems }),
        __metadata("design:type", Array)
    ], BookingCalculatepriceRequestBody.prototype, "items", void 0);
    return BookingCalculatepriceRequestBody;
}(SpeakeasyBase));
export { BookingCalculatepriceRequestBody };
var BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands = /** @class */ (function (_super) {
    __extends(BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands, _super);
    function BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageBandId" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands.prototype, "ageBandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pluralDescription" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands.prototype, "pluralDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands.prototype, "sortOrder", void 0);
    return BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands;
}(SpeakeasyBase));
export { BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands };
var BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries = /** @class */ (function (_super) {
    __extends(BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries, _super);
    function BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applePassSupported" }),
        __metadata("design:type", Boolean)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "applePassSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcodeOption" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "barcodeOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcodeType" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "barcodeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingEngineId" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "bookingEngineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingStatus" }),
        __metadata("design:type", shared.BookingStatusItem)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "bookingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departsFrom" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "departsFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departurePoint" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "departurePoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departurePointAddress" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "departurePointAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departurePointDirections" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "departurePointDirections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destId" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "destId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorItemRef" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "distributorItemRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hoursConfirmed" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "hoursConfirmed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryId" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "itineraryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageServicesLanguageCode" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "languageServicesLanguageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRetailPrice" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "lastRetailPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRetailPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "lastRetailPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadTravellerFirstname" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "leadTravellerFirstname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadTravellerSurname" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "leadTravellerSurname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadTravellerTitle" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "leadTravellerTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantCancellable" }),
        __metadata("design:type", Boolean)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "merchantCancellable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPrice" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "merchantNetPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "merchantNetPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obfsId" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "obfsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passbooks" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "passbooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickupHotelId" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "pickupHotelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickupHotelName" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "pickupHotelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceFormatted" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "priceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceUSD" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "priceUsd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "productCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productPulledDown" }),
        __metadata("design:type", Boolean)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "productPulledDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTitle" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "productTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productWidgetList" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "productWidgetList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rulesApplied" }),
        __metadata("design:type", Array)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "rulesApplied", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmount" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "savingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmountFormated" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "savingAmountFormated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startingTime" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "startingTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierName" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "supplierName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierPhoneNumber" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "supplierPhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termsAndConditions" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "termsAndConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tourGradeCode" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "tourGradeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tourGradeDescription" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "tourGradeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travelDate" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "travelDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travellerAgeBands", elemType: BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands }),
        __metadata("design:type", Array)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "travellerAgeBands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherKey" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "voucherKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherOption" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "voucherOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherRequirements" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "voucherRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherURL" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "voucherUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vouchers" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries.prototype, "vouchers", void 0);
    return BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries;
}(SpeakeasyBase));
export { BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries };
// BookingCalculateprice200ApplicationJsonDataItinerary
/**
 * **summary results** for all itinerary items
**/
var BookingCalculateprice200ApplicationJsonDataItinerary = /** @class */ (function (_super) {
    __extends(BookingCalculateprice200ApplicationJsonDataItinerary, _super);
    function BookingCalculateprice200ApplicationJsonDataItinerary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookerEmail" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "bookerEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingDate" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "bookingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingStatus" }),
        __metadata("design:type", shared.BookingStatusItinerary)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "bookingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorRef" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "distributorRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchangeRate" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasVoucher" }),
        __metadata("design:type", Boolean)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "hasVoucher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemSummaries", elemType: BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries }),
        __metadata("design:type", Array)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "itemSummaries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryId" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "itineraryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=omniPreRuleList" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "omniPreRuleList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paypalRedirectURL" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "paypalRedirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rulesApplied" }),
        __metadata("design:type", Array)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "rulesApplied", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityToken" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "securityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPrice" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "totalPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "totalPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPriceUSD" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "totalPriceUsd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherKey" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "voucherKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherURL" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonDataItinerary.prototype, "voucherUrl", void 0);
    return BookingCalculateprice200ApplicationJsonDataItinerary;
}(SpeakeasyBase));
export { BookingCalculateprice200ApplicationJsonDataItinerary };
var BookingCalculateprice200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(BookingCalculateprice200ApplicationJsonData, _super);
    function BookingCalculateprice200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasPromoCode" }),
        __metadata("design:type", Boolean)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "hasPromoCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itinerary" }),
        __metadata("design:type", BookingCalculateprice200ApplicationJsonDataItinerary)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "itinerary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryFromPrice" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "itineraryFromPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryFromPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "itineraryFromPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryNewPrice" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "itineraryNewPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryNewPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "itineraryNewPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itinerarySaving" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "itinerarySaving", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itinerarySavingFormatted" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "itinerarySavingFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentGatewayInfo" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "paymentGatewayInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promoCode" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "promoCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promoCodeExpired" }),
        __metadata("design:type", Boolean)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "promoCodeExpired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promoCodeValid" }),
        __metadata("design:type", Boolean)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "promoCodeValid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rulesApplied" }),
        __metadata("design:type", Array)
    ], BookingCalculateprice200ApplicationJsonData.prototype, "rulesApplied", void 0);
    return BookingCalculateprice200ApplicationJsonData;
}(SpeakeasyBase));
export { BookingCalculateprice200ApplicationJsonData };
var BookingCalculateprice200ApplicationJson = /** @class */ (function (_super) {
    __extends(BookingCalculateprice200ApplicationJson, _super);
    function BookingCalculateprice200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", BookingCalculateprice200ApplicationJsonData)
    ], BookingCalculateprice200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], BookingCalculateprice200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], BookingCalculateprice200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], BookingCalculateprice200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], BookingCalculateprice200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], BookingCalculateprice200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], BookingCalculateprice200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], BookingCalculateprice200ApplicationJson.prototype, "vmid", void 0);
    return BookingCalculateprice200ApplicationJson;
}(SpeakeasyBase));
export { BookingCalculateprice200ApplicationJson };
var BookingCalculatepriceRequest = /** @class */ (function (_super) {
    __extends(BookingCalculatepriceRequest, _super);
    function BookingCalculatepriceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingCalculatepriceHeaders)
    ], BookingCalculatepriceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BookingCalculatepriceRequestBody)
    ], BookingCalculatepriceRequest.prototype, "request", void 0);
    return BookingCalculatepriceRequest;
}(SpeakeasyBase));
export { BookingCalculatepriceRequest };
var BookingCalculatepriceResponse = /** @class */ (function (_super) {
    __extends(BookingCalculatepriceResponse, _super);
    function BookingCalculatepriceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BookingCalculatepriceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BookingCalculatepriceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingCalculateprice200ApplicationJson)
    ], BookingCalculatepriceResponse.prototype, "bookingCalculateprice200ApplicationJsonObject", void 0);
    return BookingCalculatepriceResponse;
}(SpeakeasyBase));
export { BookingCalculatepriceResponse };
