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
var BookingStatusItemsHeaders = /** @class */ (function (_super) {
    __extends(BookingStatusItemsHeaders, _super);
    function BookingStatusItemsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], BookingStatusItemsHeaders.prototype, "acceptLanguage", void 0);
    return BookingStatusItemsHeaders;
}(SpeakeasyBase));
export { BookingStatusItemsHeaders };
// BookingStatusItemsRequestBody
/**
 * **note**: all items are optional, but at least one needs to be included
**/
var BookingStatusItemsRequestBody = /** @class */ (function (_super) {
    __extends(BookingStatusItemsRequestBody, _super);
    function BookingStatusItemsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingDateFrom" }),
        __metadata("design:type", String)
    ], BookingStatusItemsRequestBody.prototype, "bookingDateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingDateTo" }),
        __metadata("design:type", String)
    ], BookingStatusItemsRequestBody.prototype, "bookingDateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorItemRefs" }),
        __metadata("design:type", Array)
    ], BookingStatusItemsRequestBody.prototype, "distributorItemRefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorRefs" }),
        __metadata("design:type", Array)
    ], BookingStatusItemsRequestBody.prototype, "distributorRefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemIds" }),
        __metadata("design:type", Array)
    ], BookingStatusItemsRequestBody.prototype, "itemIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadFirstName" }),
        __metadata("design:type", String)
    ], BookingStatusItemsRequestBody.prototype, "leadFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadSurname" }),
        __metadata("design:type", String)
    ], BookingStatusItemsRequestBody.prototype, "leadSurname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=test" }),
        __metadata("design:type", Boolean)
    ], BookingStatusItemsRequestBody.prototype, "test", void 0);
    return BookingStatusItemsRequestBody;
}(SpeakeasyBase));
export { BookingStatusItemsRequestBody };
var BookingStatusItems200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(BookingStatusItems200ApplicationJsonData, _super);
    function BookingStatusItems200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingStatus" }),
        __metadata("design:type", shared.BookingStatusItem)
    ], BookingStatusItems200ApplicationJsonData.prototype, "bookingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorItemRef" }),
        __metadata("design:type", String)
    ], BookingStatusItems200ApplicationJsonData.prototype, "distributorItemRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", Number)
    ], BookingStatusItems200ApplicationJsonData.prototype, "itemId", void 0);
    return BookingStatusItems200ApplicationJsonData;
}(SpeakeasyBase));
export { BookingStatusItems200ApplicationJsonData };
var BookingStatusItems200ApplicationJson = /** @class */ (function (_super) {
    __extends(BookingStatusItems200ApplicationJson, _super);
    function BookingStatusItems200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: BookingStatusItems200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], BookingStatusItems200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], BookingStatusItems200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], BookingStatusItems200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], BookingStatusItems200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], BookingStatusItems200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], BookingStatusItems200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], BookingStatusItems200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], BookingStatusItems200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], BookingStatusItems200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], BookingStatusItems200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], BookingStatusItems200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], BookingStatusItems200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], BookingStatusItems200ApplicationJson.prototype, "vmid", void 0);
    return BookingStatusItems200ApplicationJson;
}(SpeakeasyBase));
export { BookingStatusItems200ApplicationJson };
var BookingStatusItemsRequest = /** @class */ (function (_super) {
    __extends(BookingStatusItemsRequest, _super);
    function BookingStatusItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingStatusItemsHeaders)
    ], BookingStatusItemsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BookingStatusItemsRequestBody)
    ], BookingStatusItemsRequest.prototype, "request", void 0);
    return BookingStatusItemsRequest;
}(SpeakeasyBase));
export { BookingStatusItemsRequest };
var BookingStatusItemsResponse = /** @class */ (function (_super) {
    __extends(BookingStatusItemsResponse, _super);
    function BookingStatusItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BookingStatusItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BookingStatusItemsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingStatusItems200ApplicationJson)
    ], BookingStatusItemsResponse.prototype, "bookingStatusItems200ApplicationJsonObject", void 0);
    return BookingStatusItemsResponse;
}(SpeakeasyBase));
export { BookingStatusItemsResponse };
