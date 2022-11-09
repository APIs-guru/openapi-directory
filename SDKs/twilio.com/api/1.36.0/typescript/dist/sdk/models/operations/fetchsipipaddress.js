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
export var FETCHSIPIPADDRESS_SERVERS = [
    "https://api.twilio.com",
];
var FetchSipIpAddressPathParams = /** @class */ (function (_super) {
    __extends(FetchSipIpAddressPathParams, _super);
    function FetchSipIpAddressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchSipIpAddressPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=IpAccessControlListSid" }),
        __metadata("design:type", String)
    ], FetchSipIpAddressPathParams.prototype, "ipAccessControlListSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchSipIpAddressPathParams.prototype, "sid", void 0);
    return FetchSipIpAddressPathParams;
}(SpeakeasyBase));
export { FetchSipIpAddressPathParams };
var FetchSipIpAddressSecurity = /** @class */ (function (_super) {
    __extends(FetchSipIpAddressSecurity, _super);
    function FetchSipIpAddressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSipIpAddressSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSipIpAddressSecurity;
}(SpeakeasyBase));
export { FetchSipIpAddressSecurity };
var FetchSipIpAddressRequest = /** @class */ (function (_super) {
    __extends(FetchSipIpAddressRequest, _super);
    function FetchSipIpAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSipIpAddressRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSipIpAddressPathParams)
    ], FetchSipIpAddressRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSipIpAddressSecurity)
    ], FetchSipIpAddressRequest.prototype, "security", void 0);
    return FetchSipIpAddressRequest;
}(SpeakeasyBase));
export { FetchSipIpAddressRequest };
var FetchSipIpAddressResponse = /** @class */ (function (_super) {
    __extends(FetchSipIpAddressResponse, _super);
    function FetchSipIpAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSipIpAddressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchSipIpAddressResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress)
    ], FetchSipIpAddressResponse.prototype, "apiV2010AccountSipSipIpAccessControlListSipIpAddress", void 0);
    return FetchSipIpAddressResponse;
}(SpeakeasyBase));
export { FetchSipIpAddressResponse };
