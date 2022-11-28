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
export var ProductVoucherOptionEnum;
(function (ProductVoucherOptionEnum) {
    ProductVoucherOptionEnum["VoucherPaperOnly"] = "VOUCHER_PAPER_ONLY";
    ProductVoucherOptionEnum["VoucherE"] = "VOUCHER_E";
})(ProductVoucherOptionEnum || (ProductVoucherOptionEnum = {}));
var ProductQueryParams = /** @class */ (function (_super) {
    __extends(ProductQueryParams, _super);
    function ProductQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" }),
        __metadata("design:type", String)
    ], ProductQueryParams.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currencyCode" }),
        __metadata("design:type", String)
    ], ProductQueryParams.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeTourGradeAvailability" }),
        __metadata("design:type", Boolean)
    ], ProductQueryParams.prototype, "excludeTourGradeAvailability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showUnavailable" }),
        __metadata("design:type", Boolean)
    ], ProductQueryParams.prototype, "showUnavailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], ProductQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voucherOption" }),
        __metadata("design:type", String)
    ], ProductQueryParams.prototype, "voucherOption", void 0);
    return ProductQueryParams;
}(SpeakeasyBase));
export { ProductQueryParams };
var ProductHeaders = /** @class */ (function (_super) {
    __extends(ProductHeaders, _super);
    function ProductHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], ProductHeaders.prototype, "acceptLanguage", void 0);
    return ProductHeaders;
}(SpeakeasyBase));
export { ProductHeaders };
var Product200ApplicationJsonDataAgeBands = /** @class */ (function (_super) {
    __extends(Product200ApplicationJsonDataAgeBands, _super);
    function Product200ApplicationJsonDataAgeBands() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adult" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonDataAgeBands.prototype, "adult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageFrom" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataAgeBands.prototype, "ageFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageTo" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataAgeBands.prototype, "ageTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandId" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataAgeBands.prototype, "bandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataAgeBands.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataAgeBands.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pluralDescription" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataAgeBands.prototype, "pluralDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataAgeBands.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treatAsAdult" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonDataAgeBands.prototype, "treatAsAdult", void 0);
    return Product200ApplicationJsonDataAgeBands;
}(SpeakeasyBase));
export { Product200ApplicationJsonDataAgeBands };
var Product200ApplicationJsonDataBookingQuestions = /** @class */ (function (_super) {
    __extends(Product200ApplicationJsonDataBookingQuestions, _super);
    function Product200ApplicationJsonDataBookingQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataBookingQuestions.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questionId" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataBookingQuestions.prototype, "questionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonDataBookingQuestions.prototype, "required", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataBookingQuestions.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringQuestionId" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataBookingQuestions.prototype, "stringQuestionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subTitle" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataBookingQuestions.prototype, "subTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataBookingQuestions.prototype, "title", void 0);
    return Product200ApplicationJsonDataBookingQuestions;
}(SpeakeasyBase));
export { Product200ApplicationJsonDataBookingQuestions };
var Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate = /** @class */ (function (_super) {
    __extends(Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate, _super);
    function Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayRangeMax" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate.prototype, "dayRangeMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayRangeMin" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate.prototype, "dayRangeMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentageRefundable" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate.prototype, "percentageRefundable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyEndTimestamp" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate.prototype, "policyEndTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyStartTimestamp" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate.prototype, "policyStartTimestamp", void 0);
    return Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate;
}(SpeakeasyBase));
export { Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate };
var Product200ApplicationJsonDataMerchantTermsAndConditions = /** @class */ (function (_super) {
    __extends(Product200ApplicationJsonDataMerchantTermsAndConditions, _super);
    function Product200ApplicationJsonDataMerchantTermsAndConditions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountRefundable" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataMerchantTermsAndConditions.prototype, "amountRefundable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancellationFromTourDate", elemType: Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonDataMerchantTermsAndConditions.prototype, "cancellationFromTourDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantTermsAndConditionsType" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataMerchantTermsAndConditions.prototype, "merchantTermsAndConditionsType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termsAndConditions" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataMerchantTermsAndConditions.prototype, "termsAndConditions", void 0);
    return Product200ApplicationJsonDataMerchantTermsAndConditions;
}(SpeakeasyBase));
export { Product200ApplicationJsonDataMerchantTermsAndConditions };
var Product200ApplicationJsonDataPassengerAttributes = /** @class */ (function (_super) {
    __extends(Product200ApplicationJsonDataPassengerAttributes, _super);
    function Product200ApplicationJsonDataPassengerAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customAttribute_kgs" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataPassengerAttributes.prototype, "customAttributeKgs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customAttribute_lbs" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataPassengerAttributes.prototype, "customAttributeLbs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMissingMessage" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataPassengerAttributes.prototype, "errorMissingMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorValidationMessage" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataPassengerAttributes.prototype, "errorValidationMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questionId" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataPassengerAttributes.prototype, "questionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonDataPassengerAttributes.prototype, "required", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataPassengerAttributes.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validateType" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataPassengerAttributes.prototype, "validateType", void 0);
    return Product200ApplicationJsonDataPassengerAttributes;
}(SpeakeasyBase));
export { Product200ApplicationJsonDataPassengerAttributes };
var Product200ApplicationJsonDataProductPhotos = /** @class */ (function (_super) {
    __extends(Product200ApplicationJsonDataProductPhotos, _super);
    function Product200ApplicationJsonDataProductPhotos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataProductPhotos.prototype, "caption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoURL" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataProductPhotos.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplier" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataProductPhotos.prototype, "supplier", void 0);
    return Product200ApplicationJsonDataProductPhotos;
}(SpeakeasyBase));
export { Product200ApplicationJsonDataProductPhotos };
var Product200ApplicationJsonDataTourGrades = /** @class */ (function (_super) {
    __extends(Product200ApplicationJsonDataTourGrades, _super);
    function Product200ApplicationJsonDataTourGrades() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataTourGrades.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLanguageCode" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataTourGrades.prototype, "defaultLanguageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gradeCode" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataTourGrades.prototype, "gradeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gradeDepartureTime" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataTourGrades.prototype, "gradeDepartureTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gradeDescription" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataTourGrades.prototype, "gradeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gradeTitle" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataTourGrades.prototype, "gradeTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=langServices" }),
        __metadata("design:type", Map)
    ], Product200ApplicationJsonDataTourGrades.prototype, "langServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFrom" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataTourGrades.prototype, "merchantNetPriceFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFromFormatted" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataTourGrades.prototype, "merchantNetPriceFromFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceFrom" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataTourGrades.prototype, "priceFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceFromFormatted" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonDataTourGrades.prototype, "priceFromFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonDataTourGrades.prototype, "sortOrder", void 0);
    return Product200ApplicationJsonDataTourGrades;
}(SpeakeasyBase));
export { Product200ApplicationJsonDataTourGrades };
// Product200ApplicationJsonData
/**
 * **object** containing product details
**/
var Product200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(Product200ApplicationJsonData, _super);
    function Product200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalInfo" }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonData.prototype, "additionalInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admission" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "admission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageBands", elemType: Product200ApplicationJsonDataAgeBands }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonData.prototype, "ageBands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allTravellerNamesRequired" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonData.prototype, "allTravellerNamesRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applePassSupported" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonData.prototype, "applePassSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonData.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingEngineId" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "bookingEngineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingQuestions", elemType: Product200ApplicationJsonDataBookingQuestions }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonData.prototype, "bookingQuestions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catIds" }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonData.prototype, "catIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departurePoint" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "departurePoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departureTime" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "departureTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departureTimeComments" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "departureTimeComments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationId" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "destinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=essential" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "essential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclusions" }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonData.prototype, "exclusions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highlights" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "highlights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hotelPickup" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonData.prototype, "hotelPickup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inclusions" }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonData.prototype, "inclusions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itinerary" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "itinerary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapURL" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "mapUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxTravellerCount" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "maxTravellerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantCancellable" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonData.prototype, "merchantCancellable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFrom" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "merchantNetPriceFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFromFormatted" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "merchantNetPriceFromFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantTermsAndConditions" }),
        __metadata("design:type", Product200ApplicationJsonDataMerchantTermsAndConditions)
    ], Product200ApplicationJsonData.prototype, "merchantTermsAndConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onRequestPeriod" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "onRequestPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onSale" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonData.prototype, "onSale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operates" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "operates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panoramaCount" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "panoramaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pas" }),
        __metadata("design:type", Map)
    ], Product200ApplicationJsonData.prototype, "pas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passengerAttributes", elemType: Product200ApplicationJsonDataPassengerAttributes }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonData.prototype, "passengerAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoCount" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "photoCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceFormatted" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "priceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationId" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "primaryDestinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationName" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "primaryDestinationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDestinationUrlName" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "primaryDestinationUrlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryGroupId" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "primaryGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productPhotos", elemType: Product200ApplicationJsonDataProductPhotos }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonData.prototype, "productPhotos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productUrlName" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "productUrlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratingCounts" }),
        __metadata("design:type", shared.RatingCounts)
    ], Product200ApplicationJsonData.prototype, "ratingCounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnDetails" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "returnDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewCount" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "reviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviews", elemType: shared.ReviewObject }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonData.prototype, "reviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rrp" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "rrp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rrpFormatted" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "rrpFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salesPoints" }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonData.prototype, "salesPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmount" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "savingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingAmountFormated" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "savingAmountFormated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortDescription" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortTitle" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "shortTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialOffer" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "specialOffer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialOfferAvailable" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonData.prototype, "specialOfferAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialReservation" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonData.prototype, "specialReservation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialReservationDetails" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "specialReservationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslSupported" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonData.prototype, "sslSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subCatIds" }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonData.prototype, "subCatIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierCode" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "supplierCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierName" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "supplierName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailHiResURL" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "thumbnailHiResUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailURL" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "thumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tourGrades", elemType: Product200ApplicationJsonDataTourGrades }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonData.prototype, "tourGrades", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tourGradesAvailable" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJsonData.prototype, "tourGradesAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translationLevel" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "translationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userPhotos", elemType: shared.PhotoObject }),
        __metadata("design:type", Array)
    ], Product200ApplicationJsonData.prototype, "userPhotos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoCount" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJsonData.prototype, "videoCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "videos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherOption" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "voucherOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voucherRequirements" }),
        __metadata("design:type", Object)
    ], Product200ApplicationJsonData.prototype, "voucherRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webURL" }),
        __metadata("design:type", String)
    ], Product200ApplicationJsonData.prototype, "webUrl", void 0);
    return Product200ApplicationJsonData;
}(SpeakeasyBase));
export { Product200ApplicationJsonData };
var Product200ApplicationJson = /** @class */ (function (_super) {
    __extends(Product200ApplicationJson, _super);
    function Product200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Product200ApplicationJsonData)
    ], Product200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], Product200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], Product200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], Product200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], Product200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], Product200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], Product200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], Product200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], Product200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], Product200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], Product200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], Product200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], Product200ApplicationJson.prototype, "vmid", void 0);
    return Product200ApplicationJson;
}(SpeakeasyBase));
export { Product200ApplicationJson };
var ProductRequest = /** @class */ (function (_super) {
    __extends(ProductRequest, _super);
    function ProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductQueryParams)
    ], ProductRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductHeaders)
    ], ProductRequest.prototype, "headers", void 0);
    return ProductRequest;
}(SpeakeasyBase));
export { ProductRequest };
var ProductResponse = /** @class */ (function (_super) {
    __extends(ProductResponse, _super);
    function ProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProductResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProductResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Product200ApplicationJson)
    ], ProductResponse.prototype, "product200ApplicationJsonObject", void 0);
    return ProductResponse;
}(SpeakeasyBase));
export { ProductResponse };
