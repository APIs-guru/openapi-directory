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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var FETCHPHONENUMBER_SERVERS = [
    "https://trunking.twilio.com",
];
var FetchPhoneNumberPathParams = /** @class */ (function (_super) {
    __extends(FetchPhoneNumberPathParams, _super);
    function FetchPhoneNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchPhoneNumberPathParams.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" }),
        __metadata("design:type", String)
    ], FetchPhoneNumberPathParams.prototype, "trunkSid", void 0);
    return FetchPhoneNumberPathParams;
}(SpeakeasyBase));
export { FetchPhoneNumberPathParams };
var FetchPhoneNumberSecurity = /** @class */ (function (_super) {
    __extends(FetchPhoneNumberSecurity, _super);
    function FetchPhoneNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchPhoneNumberSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchPhoneNumberSecurity;
}(SpeakeasyBase));
export { FetchPhoneNumberSecurity };
var FetchPhoneNumberRequest = /** @class */ (function (_super) {
    __extends(FetchPhoneNumberRequest, _super);
    function FetchPhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchPhoneNumberRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchPhoneNumberPathParams)
    ], FetchPhoneNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchPhoneNumberSecurity)
    ], FetchPhoneNumberRequest.prototype, "security", void 0);
    return FetchPhoneNumberRequest;
}(SpeakeasyBase));
export { FetchPhoneNumberRequest };
var FetchPhoneNumberResponse = /** @class */ (function (_super) {
    __extends(FetchPhoneNumberResponse, _super);
    function FetchPhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchPhoneNumberResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchPhoneNumberResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrunkingV1TrunkPhoneNumber)
    ], FetchPhoneNumberResponse.prototype, "trunkingV1TrunkPhoneNumber", void 0);
    return FetchPhoneNumberResponse;
}(SpeakeasyBase));
export { FetchPhoneNumberResponse };
