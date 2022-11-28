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
var BookingPricingmatrixHeaders = /** @class */ (function (_super) {
    __extends(BookingPricingmatrixHeaders, _super);
    function BookingPricingmatrixHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], BookingPricingmatrixHeaders.prototype, "acceptLanguage", void 0);
    return BookingPricingmatrixHeaders;
}(SpeakeasyBase));
export { BookingPricingmatrixHeaders };
var BookingPricingmatrixRequestBody = /** @class */ (function (_super) {
    __extends(BookingPricingmatrixRequestBody, _super);
    function BookingPricingmatrixRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingDate" }),
        __metadata("design:type", String)
    ], BookingPricingmatrixRequestBody.prototype, "bookingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingPricingmatrixRequestBody.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], BookingPricingmatrixRequestBody.prototype, "productCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tourGradeCode" }),
        __metadata("design:type", String)
    ], BookingPricingmatrixRequestBody.prototype, "tourGradeCode", void 0);
    return BookingPricingmatrixRequestBody;
}(SpeakeasyBase));
export { BookingPricingmatrixRequestBody };
var BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices = /** @class */ (function (_super) {
    __extends(BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices, _super);
    function BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPrice" }),
        __metadata("design:type", Number)
    ], BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices.prototype, "merchantNetPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices.prototype, "merchantNetPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minNoOfTravellersRequiredForPrice" }),
        __metadata("design:type", Number)
    ], BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices.prototype, "minNoOfTravellersRequiredForPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceFormatted" }),
        __metadata("design:type", String)
    ], BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices.prototype, "priceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", String)
    ], BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices.prototype, "sortOrder", void 0);
    return BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices;
}(SpeakeasyBase));
export { BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices };
var BookingPricingmatrix200ApplicationJsonDataAgeBandPrices = /** @class */ (function (_super) {
    __extends(BookingPricingmatrix200ApplicationJsonDataAgeBandPrices, _super);
    function BookingPricingmatrix200ApplicationJsonDataAgeBandPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandId" }),
        __metadata("design:type", Number)
    ], BookingPricingmatrix200ApplicationJsonDataAgeBandPrices.prototype, "bandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumCountRequired" }),
        __metadata("design:type", Number)
    ], BookingPricingmatrix200ApplicationJsonDataAgeBandPrices.prototype, "maximumCountRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumCountRequired" }),
        __metadata("design:type", Number)
    ], BookingPricingmatrix200ApplicationJsonDataAgeBandPrices.prototype, "minimumCountRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices }),
        __metadata("design:type", Array)
    ], BookingPricingmatrix200ApplicationJsonDataAgeBandPrices.prototype, "prices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingPricingmatrix200ApplicationJsonDataAgeBandPrices.prototype, "sortOrder", void 0);
    return BookingPricingmatrix200ApplicationJsonDataAgeBandPrices;
}(SpeakeasyBase));
export { BookingPricingmatrix200ApplicationJsonDataAgeBandPrices };
var BookingPricingmatrix200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(BookingPricingmatrix200ApplicationJsonData, _super);
    function BookingPricingmatrix200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageBandPrices", elemType: BookingPricingmatrix200ApplicationJsonDataAgeBandPrices }),
        __metadata("design:type", Array)
    ], BookingPricingmatrix200ApplicationJsonData.prototype, "ageBandPrices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingDate" }),
        __metadata("design:type", String)
    ], BookingPricingmatrix200ApplicationJsonData.prototype, "bookingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricingUnit" }),
        __metadata("design:type", String)
    ], BookingPricingmatrix200ApplicationJsonData.prototype, "pricingUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingPricingmatrix200ApplicationJsonData.prototype, "sortOrder", void 0);
    return BookingPricingmatrix200ApplicationJsonData;
}(SpeakeasyBase));
export { BookingPricingmatrix200ApplicationJsonData };
var BookingPricingmatrix200ApplicationJson = /** @class */ (function (_super) {
    __extends(BookingPricingmatrix200ApplicationJson, _super);
    function BookingPricingmatrix200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: BookingPricingmatrix200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], BookingPricingmatrix200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], BookingPricingmatrix200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], BookingPricingmatrix200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], BookingPricingmatrix200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], BookingPricingmatrix200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], BookingPricingmatrix200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], BookingPricingmatrix200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], BookingPricingmatrix200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], BookingPricingmatrix200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], BookingPricingmatrix200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], BookingPricingmatrix200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], BookingPricingmatrix200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], BookingPricingmatrix200ApplicationJson.prototype, "vmid", void 0);
    return BookingPricingmatrix200ApplicationJson;
}(SpeakeasyBase));
export { BookingPricingmatrix200ApplicationJson };
var BookingPricingmatrixRequest = /** @class */ (function (_super) {
    __extends(BookingPricingmatrixRequest, _super);
    function BookingPricingmatrixRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingPricingmatrixHeaders)
    ], BookingPricingmatrixRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BookingPricingmatrixRequestBody)
    ], BookingPricingmatrixRequest.prototype, "request", void 0);
    return BookingPricingmatrixRequest;
}(SpeakeasyBase));
export { BookingPricingmatrixRequest };
var BookingPricingmatrixResponse = /** @class */ (function (_super) {
    __extends(BookingPricingmatrixResponse, _super);
    function BookingPricingmatrixResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BookingPricingmatrixResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BookingPricingmatrixResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingPricingmatrix200ApplicationJson)
    ], BookingPricingmatrixResponse.prototype, "bookingPricingmatrix200ApplicationJsonObject", void 0);
    return BookingPricingmatrixResponse;
}(SpeakeasyBase));
export { BookingPricingmatrixResponse };
