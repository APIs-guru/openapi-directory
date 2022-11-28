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
var BookingAvailabilityTourgradesHeaders = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesHeaders, _super);
    function BookingAvailabilityTourgradesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesHeaders.prototype, "acceptLanguage", void 0);
    return BookingAvailabilityTourgradesHeaders;
}(SpeakeasyBase));
export { BookingAvailabilityTourgradesHeaders };
var BookingAvailabilityTourgradesRequestBodyAgeBands = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesRequestBodyAgeBands, _super);
    function BookingAvailabilityTourgradesRequestBodyAgeBands() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandId" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesRequestBodyAgeBands.prototype, "bandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesRequestBodyAgeBands.prototype, "count", void 0);
    return BookingAvailabilityTourgradesRequestBodyAgeBands;
}(SpeakeasyBase));
export { BookingAvailabilityTourgradesRequestBodyAgeBands };
var BookingAvailabilityTourgradesRequestBody = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesRequestBody, _super);
    function BookingAvailabilityTourgradesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageBands", elemType: BookingAvailabilityTourgradesRequestBodyAgeBands }),
        __metadata("design:type", Array)
    ], BookingAvailabilityTourgradesRequestBody.prototype, "ageBands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingDate" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesRequestBody.prototype, "bookingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesRequestBody.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesRequestBody.prototype, "productCode", void 0);
    return BookingAvailabilityTourgradesRequestBody;
}(SpeakeasyBase));
export { BookingAvailabilityTourgradesRequestBody };
var BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired, _super);
    function BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandId" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired.prototype, "bandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumCountRequired" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired.prototype, "maximumCountRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumCountRequired" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired.prototype, "minimumCountRequired", void 0);
    return BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired;
}(SpeakeasyBase));
export { BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired };
var BookingAvailabilityTourgrades200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgrades200ApplicationJsonData, _super);
    function BookingAvailabilityTourgrades200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageBands" }),
        __metadata("design:type", Array)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "ageBands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageBandsRequired", elemType: BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired, elemDepth: 2 }),
        __metadata("design:type", Array)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "ageBandsRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingDate" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "bookingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLanguageCode" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "defaultLanguageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gradeCode" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "gradeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gradeDepartureTime" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "gradeDepartureTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gradeDescription" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "gradeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gradeTitle" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "gradeTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=langServices" }),
        __metadata("design:type", Map)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "langServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPrice" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "merchantNetPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNetPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "merchantNetPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retailPrice" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "retailPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retailPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "retailPriceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unavailableReason" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJsonData.prototype, "unavailableReason", void 0);
    return BookingAvailabilityTourgrades200ApplicationJsonData;
}(SpeakeasyBase));
export { BookingAvailabilityTourgrades200ApplicationJsonData };
var BookingAvailabilityTourgrades200ApplicationJson = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgrades200ApplicationJson, _super);
    function BookingAvailabilityTourgrades200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: BookingAvailabilityTourgrades200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], BookingAvailabilityTourgrades200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], BookingAvailabilityTourgrades200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], BookingAvailabilityTourgrades200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], BookingAvailabilityTourgrades200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], BookingAvailabilityTourgrades200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], BookingAvailabilityTourgrades200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgrades200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgrades200ApplicationJson.prototype, "vmid", void 0);
    return BookingAvailabilityTourgrades200ApplicationJson;
}(SpeakeasyBase));
export { BookingAvailabilityTourgrades200ApplicationJson };
var BookingAvailabilityTourgradesRequest = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesRequest, _super);
    function BookingAvailabilityTourgradesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingAvailabilityTourgradesHeaders)
    ], BookingAvailabilityTourgradesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BookingAvailabilityTourgradesRequestBody)
    ], BookingAvailabilityTourgradesRequest.prototype, "request", void 0);
    return BookingAvailabilityTourgradesRequest;
}(SpeakeasyBase));
export { BookingAvailabilityTourgradesRequest };
var BookingAvailabilityTourgradesResponse = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesResponse, _super);
    function BookingAvailabilityTourgradesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingAvailabilityTourgrades200ApplicationJson)
    ], BookingAvailabilityTourgradesResponse.prototype, "bookingAvailabilityTourgrades200ApplicationJsonObject", void 0);
    return BookingAvailabilityTourgradesResponse;
}(SpeakeasyBase));
export { BookingAvailabilityTourgradesResponse };
