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
var BookingVoucherQueryParams = /** @class */ (function (_super) {
    __extends(BookingVoucherQueryParams, _super);
    function BookingVoucherQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embeddedResources" }),
        __metadata("design:type", Boolean)
    ], BookingVoucherQueryParams.prototype, "embeddedResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fullHTML" }),
        __metadata("design:type", Boolean)
    ], BookingVoucherQueryParams.prototype, "fullHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemId" }),
        __metadata("design:type", Number)
    ], BookingVoucherQueryParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=leadLastName" }),
        __metadata("design:type", String)
    ], BookingVoucherQueryParams.prototype, "leadLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mobileVoucher" }),
        __metadata("design:type", Boolean)
    ], BookingVoucherQueryParams.prototype, "mobileVoucher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voucherKey" }),
        __metadata("design:type", String)
    ], BookingVoucherQueryParams.prototype, "voucherKey", void 0);
    return BookingVoucherQueryParams;
}(SpeakeasyBase));
export { BookingVoucherQueryParams };
var BookingVoucherHeaders = /** @class */ (function (_super) {
    __extends(BookingVoucherHeaders, _super);
    function BookingVoucherHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], BookingVoucherHeaders.prototype, "acceptLanguage", void 0);
    return BookingVoucherHeaders;
}(SpeakeasyBase));
export { BookingVoucherHeaders };
var BookingVoucher200ApplicationJson = /** @class */ (function (_super) {
    __extends(BookingVoucher200ApplicationJson, _super);
    function BookingVoucher200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], BookingVoucher200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], BookingVoucher200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], BookingVoucher200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], BookingVoucher200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], BookingVoucher200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], BookingVoucher200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], BookingVoucher200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], BookingVoucher200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], BookingVoucher200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], BookingVoucher200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], BookingVoucher200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], BookingVoucher200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], BookingVoucher200ApplicationJson.prototype, "vmid", void 0);
    return BookingVoucher200ApplicationJson;
}(SpeakeasyBase));
export { BookingVoucher200ApplicationJson };
var BookingVoucherRequest = /** @class */ (function (_super) {
    __extends(BookingVoucherRequest, _super);
    function BookingVoucherRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingVoucherQueryParams)
    ], BookingVoucherRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingVoucherHeaders)
    ], BookingVoucherRequest.prototype, "headers", void 0);
    return BookingVoucherRequest;
}(SpeakeasyBase));
export { BookingVoucherRequest };
var BookingVoucherResponse = /** @class */ (function (_super) {
    __extends(BookingVoucherResponse, _super);
    function BookingVoucherResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BookingVoucherResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BookingVoucherResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookingVoucher200ApplicationJson)
    ], BookingVoucherResponse.prototype, "bookingVoucher200ApplicationJsonObject", void 0);
    return BookingVoucherResponse;
}(SpeakeasyBase));
export { BookingVoucherResponse };
