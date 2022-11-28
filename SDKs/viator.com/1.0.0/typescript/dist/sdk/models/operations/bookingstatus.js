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
var BookingStatusHeaders = /** @class */ (function (_super) {
    __extends(BookingStatusHeaders, _super);
    function BookingStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], BookingStatusHeaders.prototype, "acceptLanguage", void 0);
    return BookingStatusHeaders;
}(SpeakeasyBase));
export { BookingStatusHeaders };
// BookingStatusRequestBody
/**
 * **note**: all items are optional, but at least one needs to be included
**/
var BookingStatusRequestBody = /** @class */ (function (_super) {
    __extends(BookingStatusRequestBody, _super);
    function BookingStatusRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingDateFrom" }),
        __metadata("design:type", String)
    ], BookingStatusRequestBody.prototype, "bookingDateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingDateTo" }),
        __metadata("design:type", String)
    ], BookingStatusRequestBody.prototype, "bookingDateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorItemRefs" }),
        __metadata("design:type", Array)
    ], BookingStatusRequestBody.prototype, "distributorItemRefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorRefs" }),
        __metadata("design:type", Array)
    ], BookingStatusRequestBody.prototype, "distributorRefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemIds" }),
        __metadata("design:type", Array)
    ], BookingStatusRequestBody.prototype, "itemIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadFirstName" }),
        __metadata("design:type", String)
    ], BookingStatusRequestBody.prototype, "leadFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadSurname" }),
        __metadata("design:type", String)
    ], BookingStatusRequestBody.prototype, "leadSurname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=test" }),
        __metadata("design:type", Boolean)
    ], BookingStatusRequestBody.prototype, "test", void 0);
    return BookingStatusRequestBody;
}(SpeakeasyBase));
export { BookingStatusRequestBody };
var BookingStatus200ApplicationJsonDataItemSummaries = /** @class */ (function (_super) {
    __extends(BookingStatus200ApplicationJsonDataItemSummaries, _super);
    function BookingStatus200ApplicationJsonDataItemSummaries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingStatus" }),
        __metadata("design:type", shared.BookingStatusItem)
    ], BookingStatus200ApplicationJsonDataItemSummaries.prototype, "bookingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorItemRef" }),
        __metadata("design:type", String)
    ], BookingStatus200ApplicationJsonDataItemSummaries.prototype, "distributorItemRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", Number)
    ], BookingStatus200ApplicationJsonDataItemSummaries.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryId" }),
        __metadata("design:type", Number)
    ], BookingStatus200ApplicationJsonDataItemSummaries.prototype, "itineraryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingStatus200ApplicationJsonDataItemSummaries.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travelDate" }),
        __metadata("design:type", String)
    ], BookingStatus200ApplicationJsonDataItemSummaries.prototype, "travelDate", void 0);
    return BookingStatus200ApplicationJsonDataItemSummaries;
}(SpeakeasyBase));
export { BookingStatus200ApplicationJsonDataItemSummaries };
// BookingStatus200ApplicationJsonData
/**
 * **object** containing booking status and details
**/
var BookingStatus200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(BookingStatus200ApplicationJsonData, _super);
    function BookingStatus200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingDate" }),
        __metadata("design:type", String)
    ], BookingStatus200ApplicationJsonData.prototype, "bookingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingStatus" }),
        __metadata("design:type", shared.BookingStatusItinerary)
    ], BookingStatus200ApplicationJsonData.prototype, "bookingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorRef" }),
        __metadata("design:type", String)
    ], BookingStatus200ApplicationJsonData.prototype, "distributorRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemSummaries", elemType: BookingStatus200ApplicationJsonDataItemSummaries }),
        __metadata("design:type", Array)
    ], BookingStatus200ApplicationJsonData.prototype, "itemSummaries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryId" }),
        __metadata("design:type", Number)
    ], BookingStatus200ApplicationJsonData.prototype, "itineraryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingStatus200ApplicationJsonData.prototype, "sortOrder", void 0);
    return BookingStatus200ApplicationJsonData;
}(SpeakeasyBase));
export { BookingStatus200ApplicationJsonData };
var BookingStatus200ApplicationJson = /** @class */ (function (_super) {
    __extends(BookingStatus200ApplicationJson, _super);
    function BookingStatus200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", BookingStatus200ApplicationJsonData)
    ], BookingStatus200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], BookingStatus200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], BookingStatus200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], BookingStatus200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], BookingStatus200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], BookingStatus200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], BookingStatus200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], BookingStatus200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], BookingStatus200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], BookingStatus200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], BookingStatus200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], BookingStatus200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], BookingStatus200ApplicationJson.prototype, "vmid", void 0);
    return BookingStatus200ApplicationJson;
}(SpeakeasyBase));
export { BookingStatus200ApplicationJson };
var BookingStatusRequest = /** @class */ (function (_super) {
    __extends(BookingStatusRequest, _super);
    function BookingStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingStatusHeaders)
    ], BookingStatusRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BookingStatusRequestBody)
    ], BookingStatusRequest.prototype, "request", void 0);
    return BookingStatusRequest;
}(SpeakeasyBase));
export { BookingStatusRequest };
var BookingStatusResponse = /** @class */ (function (_super) {
    __extends(BookingStatusResponse, _super);
    function BookingStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BookingStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BookingStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingStatus200ApplicationJson)
    ], BookingStatusResponse.prototype, "bookingStatus200ApplicationJsonObject", void 0);
    return BookingStatusResponse;
}(SpeakeasyBase));
export { BookingStatusResponse };
