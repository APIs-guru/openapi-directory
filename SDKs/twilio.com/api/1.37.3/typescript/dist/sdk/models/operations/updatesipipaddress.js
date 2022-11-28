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
export var UpdateSipIpAddressServerList = [
    "https://api.twilio.com",
];
var UpdateSipIpAddressPathParams = /** @class */ (function (_super) {
    __extends(UpdateSipIpAddressPathParams, _super);
    function UpdateSipIpAddressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateSipIpAddressPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IpAccessControlListSid" }),
        __metadata("design:type", String)
    ], UpdateSipIpAddressPathParams.prototype, "ipAccessControlListSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSipIpAddressPathParams.prototype, "sid", void 0);
    return UpdateSipIpAddressPathParams;
}(SpeakeasyBase));
export { UpdateSipIpAddressPathParams };
var UpdateSipIpAddressUpdateSipIpAddressRequest = /** @class */ (function (_super) {
    __extends(UpdateSipIpAddressUpdateSipIpAddressRequest, _super);
    function UpdateSipIpAddressUpdateSipIpAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CidrPrefixLength;" }),
        __metadata("design:type", Number)
    ], UpdateSipIpAddressUpdateSipIpAddressRequest.prototype, "cidrPrefixLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateSipIpAddressUpdateSipIpAddressRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IpAddress;" }),
        __metadata("design:type", String)
    ], UpdateSipIpAddressUpdateSipIpAddressRequest.prototype, "ipAddress", void 0);
    return UpdateSipIpAddressUpdateSipIpAddressRequest;
}(SpeakeasyBase));
export { UpdateSipIpAddressUpdateSipIpAddressRequest };
var UpdateSipIpAddressSecurity = /** @class */ (function (_super) {
    __extends(UpdateSipIpAddressSecurity, _super);
    function UpdateSipIpAddressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSipIpAddressSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSipIpAddressSecurity;
}(SpeakeasyBase));
export { UpdateSipIpAddressSecurity };
var UpdateSipIpAddressRequest = /** @class */ (function (_super) {
    __extends(UpdateSipIpAddressRequest, _super);
    function UpdateSipIpAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSipIpAddressRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSipIpAddressPathParams)
    ], UpdateSipIpAddressRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSipIpAddressUpdateSipIpAddressRequest)
    ], UpdateSipIpAddressRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSipIpAddressSecurity)
    ], UpdateSipIpAddressRequest.prototype, "security", void 0);
    return UpdateSipIpAddressRequest;
}(SpeakeasyBase));
export { UpdateSipIpAddressRequest };
var UpdateSipIpAddressResponse = /** @class */ (function (_super) {
    __extends(UpdateSipIpAddressResponse, _super);
    function UpdateSipIpAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSipIpAddressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSipIpAddressResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress)
    ], UpdateSipIpAddressResponse.prototype, "apiV2010AccountSipSipIpAccessControlListSipIpAddress", void 0);
    return UpdateSipIpAddressResponse;
}(SpeakeasyBase));
export { UpdateSipIpAddressResponse };
