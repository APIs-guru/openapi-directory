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
export var CancelBookingQuoteServerList = [
    "https://api.sandbox.viator.com/partner",
];
var CancelBookingQuotePathParams = /** @class */ (function (_super) {
    __extends(CancelBookingQuotePathParams, _super);
    function CancelBookingQuotePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=booking-reference" }),
        __metadata("design:type", String)
    ], CancelBookingQuotePathParams.prototype, "bookingReference", void 0);
    return CancelBookingQuotePathParams;
}(SpeakeasyBase));
export { CancelBookingQuotePathParams };
var CancelBookingQuoteRequest = /** @class */ (function (_super) {
    __extends(CancelBookingQuoteRequest, _super);
    function CancelBookingQuoteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CancelBookingQuoteRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelBookingQuotePathParams)
    ], CancelBookingQuoteRequest.prototype, "pathParams", void 0);
    return CancelBookingQuoteRequest;
}(SpeakeasyBase));
export { CancelBookingQuoteRequest };
var CancelBookingQuoteResponse = /** @class */ (function (_super) {
    __extends(CancelBookingQuoteResponse, _super);
    function CancelBookingQuoteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FourHundredAndOneUnauthorized)
    ], CancelBookingQuoteResponse.prototype, "fourHundredAndOneUnauthorized", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FourHundredAndSixNotAcceptable)
    ], CancelBookingQuoteResponse.prototype, "fourHundredAndSixNotAcceptable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FiveHundredInternalServerError)
    ], CancelBookingQuoteResponse.prototype, "fiveHundredInternalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FiveHundredAndThreeServiceUnavailable)
    ], CancelBookingQuoteResponse.prototype, "fiveHundredAndThreeServiceUnavailable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CancelBookingQuoteResponse)
    ], CancelBookingQuoteResponse.prototype, "cancelBookingQuoteResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CancelBookingQuoteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CancelBookingQuoteResponse.prototype, "statusCode", void 0);
    return CancelBookingQuoteResponse;
}(SpeakeasyBase));
export { CancelBookingQuoteResponse };
