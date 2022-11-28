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
var BookingHotelsQueryParams = /** @class */ (function (_super) {
    __extends(BookingHotelsQueryParams, _super);
    function BookingHotelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destId" }),
        __metadata("design:type", Number)
    ], BookingHotelsQueryParams.prototype, "destId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=productCode" }),
        __metadata("design:type", String)
    ], BookingHotelsQueryParams.prototype, "productCode", void 0);
    return BookingHotelsQueryParams;
}(SpeakeasyBase));
export { BookingHotelsQueryParams };
var BookingHotelsHeaders = /** @class */ (function (_super) {
    __extends(BookingHotelsHeaders, _super);
    function BookingHotelsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], BookingHotelsHeaders.prototype, "acceptLanguage", void 0);
    return BookingHotelsHeaders;
}(SpeakeasyBase));
export { BookingHotelsHeaders };
var BookingHotels200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(BookingHotels200ApplicationJsonData, _super);
    function BookingHotels200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJsonData.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJsonData.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJsonData.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationId" }),
        __metadata("design:type", Number)
    ], BookingHotels200ApplicationJsonData.prototype, "destinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hotelString" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJsonData.prototype, "hotelString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJsonData.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], BookingHotels200ApplicationJsonData.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], BookingHotels200ApplicationJsonData.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJsonData.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJsonData.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJsonData.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postcode" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJsonData.prototype, "postcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCodes" }),
        __metadata("design:type", Array)
    ], BookingHotels200ApplicationJsonData.prototype, "productCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingHotels200ApplicationJsonData.prototype, "sortOrder", void 0);
    return BookingHotels200ApplicationJsonData;
}(SpeakeasyBase));
export { BookingHotels200ApplicationJsonData };
var BookingHotels200ApplicationJson = /** @class */ (function (_super) {
    __extends(BookingHotels200ApplicationJson, _super);
    function BookingHotels200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: BookingHotels200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], BookingHotels200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], BookingHotels200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], BookingHotels200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], BookingHotels200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], BookingHotels200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], BookingHotels200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], BookingHotels200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], BookingHotels200ApplicationJson.prototype, "vmid", void 0);
    return BookingHotels200ApplicationJson;
}(SpeakeasyBase));
export { BookingHotels200ApplicationJson };
var BookingHotelsRequest = /** @class */ (function (_super) {
    __extends(BookingHotelsRequest, _super);
    function BookingHotelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingHotelsQueryParams)
    ], BookingHotelsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingHotelsHeaders)
    ], BookingHotelsRequest.prototype, "headers", void 0);
    return BookingHotelsRequest;
}(SpeakeasyBase));
export { BookingHotelsRequest };
var BookingHotelsResponse = /** @class */ (function (_super) {
    __extends(BookingHotelsResponse, _super);
    function BookingHotelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BookingHotelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BookingHotelsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingHotels200ApplicationJson)
    ], BookingHotelsResponse.prototype, "bookingHotels200ApplicationJsonObject", void 0);
    return BookingHotelsResponse;
}(SpeakeasyBase));
export { BookingHotelsResponse };
