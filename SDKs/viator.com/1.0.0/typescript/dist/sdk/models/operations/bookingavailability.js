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
var BookingAvailabilityHeaders = /** @class */ (function (_super) {
    __extends(BookingAvailabilityHeaders, _super);
    function BookingAvailabilityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], BookingAvailabilityHeaders.prototype, "acceptLanguage", void 0);
    return BookingAvailabilityHeaders;
}(SpeakeasyBase));
export { BookingAvailabilityHeaders };
var BookingAvailabilityRequestBodyAgeBands = /** @class */ (function (_super) {
    __extends(BookingAvailabilityRequestBodyAgeBands, _super);
    function BookingAvailabilityRequestBodyAgeBands() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandId" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityRequestBodyAgeBands.prototype, "bandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityRequestBodyAgeBands.prototype, "count", void 0);
    return BookingAvailabilityRequestBodyAgeBands;
}(SpeakeasyBase));
export { BookingAvailabilityRequestBodyAgeBands };
var BookingAvailabilityRequestBody = /** @class */ (function (_super) {
    __extends(BookingAvailabilityRequestBody, _super);
    function BookingAvailabilityRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageBands", elemType: BookingAvailabilityRequestBodyAgeBands }),
        __metadata("design:type", Array)
    ], BookingAvailabilityRequestBody.prototype, "ageBands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingAvailabilityRequestBody.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=month" }),
        __metadata("design:type", String)
    ], BookingAvailabilityRequestBody.prototype, "month", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], BookingAvailabilityRequestBody.prototype, "productCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], BookingAvailabilityRequestBody.prototype, "year", void 0);
    return BookingAvailabilityRequestBody;
}(SpeakeasyBase));
export { BookingAvailabilityRequestBody };
var BookingAvailability200ApplicationJsonDataAvailability = /** @class */ (function (_super) {
    __extends(BookingAvailability200ApplicationJsonDataAvailability, _super);
    function BookingAvailability200ApplicationJsonDataAvailability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], BookingAvailability200ApplicationJsonDataAvailability.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingDate" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJsonDataAvailability.prototype, "bookingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJsonDataAvailability.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gradeCode" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJsonDataAvailability.prototype, "gradeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPrice" }),
        __metadata("design:type", Number)
    ], BookingAvailability200ApplicationJsonDataAvailability.prototype, "merchantNetPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJsonDataAvailability.prototype, "merchantNetPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retailPrice" }),
        __metadata("design:type", Number)
    ], BookingAvailability200ApplicationJsonDataAvailability.prototype, "retailPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retailPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJsonDataAvailability.prototype, "retailPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingAvailability200ApplicationJsonDataAvailability.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unavailableReason" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJsonDataAvailability.prototype, "unavailableReason", void 0);
    return BookingAvailability200ApplicationJsonDataAvailability;
}(SpeakeasyBase));
export { BookingAvailability200ApplicationJsonDataAvailability };
// BookingAvailability200ApplicationJsonData
/**
 * **object** detailing available tourgrades for the specified age bands and date range for this product
**/
var BookingAvailability200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(BookingAvailability200ApplicationJsonData, _super);
    function BookingAvailability200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability", elemType: BookingAvailability200ApplicationJsonDataAvailability }),
        __metadata("design:type", Array)
    ], BookingAvailability200ApplicationJsonData.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstAvailableDate" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJsonData.prototype, "firstAvailableDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastAvailableDate" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJsonData.prototype, "lastAvailableDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJsonData.prototype, "productCode", void 0);
    return BookingAvailability200ApplicationJsonData;
}(SpeakeasyBase));
export { BookingAvailability200ApplicationJsonData };
var BookingAvailability200ApplicationJson = /** @class */ (function (_super) {
    __extends(BookingAvailability200ApplicationJson, _super);
    function BookingAvailability200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", BookingAvailability200ApplicationJsonData)
    ], BookingAvailability200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], BookingAvailability200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], BookingAvailability200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], BookingAvailability200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], BookingAvailability200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], BookingAvailability200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], BookingAvailability200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], BookingAvailability200ApplicationJson.prototype, "vmid", void 0);
    return BookingAvailability200ApplicationJson;
}(SpeakeasyBase));
export { BookingAvailability200ApplicationJson };
var BookingAvailabilityRequest = /** @class */ (function (_super) {
    __extends(BookingAvailabilityRequest, _super);
    function BookingAvailabilityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingAvailabilityHeaders)
    ], BookingAvailabilityRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BookingAvailabilityRequestBody)
    ], BookingAvailabilityRequest.prototype, "request", void 0);
    return BookingAvailabilityRequest;
}(SpeakeasyBase));
export { BookingAvailabilityRequest };
var BookingAvailabilityResponse = /** @class */ (function (_super) {
    __extends(BookingAvailabilityResponse, _super);
    function BookingAvailabilityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BookingAvailabilityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BookingAvailabilityResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingAvailability200ApplicationJson)
    ], BookingAvailabilityResponse.prototype, "bookingAvailability200ApplicationJsonObject", void 0);
    return BookingAvailabilityResponse;
}(SpeakeasyBase));
export { BookingAvailabilityResponse };
