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
export var FetchBrandVettingServerList = [
    "https://messaging.twilio.com",
];
var FetchBrandVettingPathParams = /** @class */ (function (_super) {
    __extends(FetchBrandVettingPathParams, _super);
    function FetchBrandVettingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BrandSid" }),
        __metadata("design:type", String)
    ], FetchBrandVettingPathParams.prototype, "brandSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BrandVettingSid" }),
        __metadata("design:type", String)
    ], FetchBrandVettingPathParams.prototype, "brandVettingSid", void 0);
    return FetchBrandVettingPathParams;
}(SpeakeasyBase));
export { FetchBrandVettingPathParams };
var FetchBrandVettingSecurity = /** @class */ (function (_super) {
    __extends(FetchBrandVettingSecurity, _super);
    function FetchBrandVettingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchBrandVettingSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchBrandVettingSecurity;
}(SpeakeasyBase));
export { FetchBrandVettingSecurity };
var FetchBrandVettingRequest = /** @class */ (function (_super) {
    __extends(FetchBrandVettingRequest, _super);
    function FetchBrandVettingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchBrandVettingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchBrandVettingPathParams)
    ], FetchBrandVettingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchBrandVettingSecurity)
    ], FetchBrandVettingRequest.prototype, "security", void 0);
    return FetchBrandVettingRequest;
}(SpeakeasyBase));
export { FetchBrandVettingRequest };
var FetchBrandVettingResponse = /** @class */ (function (_super) {
    __extends(FetchBrandVettingResponse, _super);
    function FetchBrandVettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchBrandVettingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchBrandVettingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MessagingV1BrandRegistrationsBrandVetting)
    ], FetchBrandVettingResponse.prototype, "messagingV1BrandRegistrationsBrandVetting", void 0);
    return FetchBrandVettingResponse;
}(SpeakeasyBase));
export { FetchBrandVettingResponse };
