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
export var FetchVoiceNumberServerList = [
    "https://pricing.twilio.com",
];
var FetchVoiceNumberPathParams = /** @class */ (function (_super) {
    __extends(FetchVoiceNumberPathParams, _super);
    function FetchVoiceNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DestinationNumber" }),
        __metadata("design:type", String)
    ], FetchVoiceNumberPathParams.prototype, "destinationNumber", void 0);
    return FetchVoiceNumberPathParams;
}(SpeakeasyBase));
export { FetchVoiceNumberPathParams };
var FetchVoiceNumberQueryParams = /** @class */ (function (_super) {
    __extends(FetchVoiceNumberQueryParams, _super);
    function FetchVoiceNumberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OriginationNumber" }),
        __metadata("design:type", String)
    ], FetchVoiceNumberQueryParams.prototype, "originationNumber", void 0);
    return FetchVoiceNumberQueryParams;
}(SpeakeasyBase));
export { FetchVoiceNumberQueryParams };
var FetchVoiceNumberSecurity = /** @class */ (function (_super) {
    __extends(FetchVoiceNumberSecurity, _super);
    function FetchVoiceNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchVoiceNumberSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchVoiceNumberSecurity;
}(SpeakeasyBase));
export { FetchVoiceNumberSecurity };
var FetchVoiceNumberRequest = /** @class */ (function (_super) {
    __extends(FetchVoiceNumberRequest, _super);
    function FetchVoiceNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchVoiceNumberRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchVoiceNumberPathParams)
    ], FetchVoiceNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchVoiceNumberQueryParams)
    ], FetchVoiceNumberRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchVoiceNumberSecurity)
    ], FetchVoiceNumberRequest.prototype, "security", void 0);
    return FetchVoiceNumberRequest;
}(SpeakeasyBase));
export { FetchVoiceNumberRequest };
var FetchVoiceNumberResponse = /** @class */ (function (_super) {
    __extends(FetchVoiceNumberResponse, _super);
    function FetchVoiceNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchVoiceNumberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchVoiceNumberResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PricingV2VoiceVoiceNumber)
    ], FetchVoiceNumberResponse.prototype, "pricingV2VoiceVoiceNumber", void 0);
    return FetchVoiceNumberResponse;
}(SpeakeasyBase));
export { FetchVoiceNumberResponse };
