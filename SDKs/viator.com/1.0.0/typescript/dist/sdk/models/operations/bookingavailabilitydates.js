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
var BookingAvailabilityDatesQueryParams = /** @class */ (function (_super) {
    __extends(BookingAvailabilityDatesQueryParams, _super);
    function BookingAvailabilityDatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=productCode" }),
        __metadata("design:type", String)
    ], BookingAvailabilityDatesQueryParams.prototype, "productCode", void 0);
    return BookingAvailabilityDatesQueryParams;
}(SpeakeasyBase));
export { BookingAvailabilityDatesQueryParams };
var BookingAvailabilityDatesHeaders = /** @class */ (function (_super) {
    __extends(BookingAvailabilityDatesHeaders, _super);
    function BookingAvailabilityDatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], BookingAvailabilityDatesHeaders.prototype, "acceptLanguage", void 0);
    return BookingAvailabilityDatesHeaders;
}(SpeakeasyBase));
export { BookingAvailabilityDatesHeaders };
var BookingAvailabilityDates200ApplicationJson = /** @class */ (function (_super) {
    __extends(BookingAvailabilityDates200ApplicationJson, _super);
    function BookingAvailabilityDates200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], BookingAvailabilityDates200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], BookingAvailabilityDates200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], BookingAvailabilityDates200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], BookingAvailabilityDates200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], BookingAvailabilityDates200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], BookingAvailabilityDates200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], BookingAvailabilityDates200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], BookingAvailabilityDates200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], BookingAvailabilityDates200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], BookingAvailabilityDates200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], BookingAvailabilityDates200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityDates200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], BookingAvailabilityDates200ApplicationJson.prototype, "vmid", void 0);
    return BookingAvailabilityDates200ApplicationJson;
}(SpeakeasyBase));
export { BookingAvailabilityDates200ApplicationJson };
var BookingAvailabilityDatesRequest = /** @class */ (function (_super) {
    __extends(BookingAvailabilityDatesRequest, _super);
    function BookingAvailabilityDatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingAvailabilityDatesQueryParams)
    ], BookingAvailabilityDatesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingAvailabilityDatesHeaders)
    ], BookingAvailabilityDatesRequest.prototype, "headers", void 0);
    return BookingAvailabilityDatesRequest;
}(SpeakeasyBase));
export { BookingAvailabilityDatesRequest };
var BookingAvailabilityDatesResponse = /** @class */ (function (_super) {
    __extends(BookingAvailabilityDatesResponse, _super);
    function BookingAvailabilityDatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BookingAvailabilityDatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BookingAvailabilityDatesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingAvailabilityDates200ApplicationJson)
    ], BookingAvailabilityDatesResponse.prototype, "bookingAvailabilityDates200ApplicationJsonObject", void 0);
    return BookingAvailabilityDatesResponse;
}(SpeakeasyBase));
export { BookingAvailabilityDatesResponse };
