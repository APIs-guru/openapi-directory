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
export var DELETESIPIPADDRESS_SERVERS = [
    "https://api.twilio.com",
];
var DeleteSipIpAddressPathParams = /** @class */ (function (_super) {
    __extends(DeleteSipIpAddressPathParams, _super);
    function DeleteSipIpAddressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], DeleteSipIpAddressPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=IpAccessControlListSid" }),
        __metadata("design:type", String)
    ], DeleteSipIpAddressPathParams.prototype, "ipAccessControlListSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteSipIpAddressPathParams.prototype, "sid", void 0);
    return DeleteSipIpAddressPathParams;
}(SpeakeasyBase));
export { DeleteSipIpAddressPathParams };
var DeleteSipIpAddressSecurity = /** @class */ (function (_super) {
    __extends(DeleteSipIpAddressSecurity, _super);
    function DeleteSipIpAddressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSipIpAddressSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSipIpAddressSecurity;
}(SpeakeasyBase));
export { DeleteSipIpAddressSecurity };
var DeleteSipIpAddressRequest = /** @class */ (function (_super) {
    __extends(DeleteSipIpAddressRequest, _super);
    function DeleteSipIpAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSipIpAddressRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSipIpAddressPathParams)
    ], DeleteSipIpAddressRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSipIpAddressSecurity)
    ], DeleteSipIpAddressRequest.prototype, "security", void 0);
    return DeleteSipIpAddressRequest;
}(SpeakeasyBase));
export { DeleteSipIpAddressRequest };
var DeleteSipIpAddressResponse = /** @class */ (function (_super) {
    __extends(DeleteSipIpAddressResponse, _super);
    function DeleteSipIpAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSipIpAddressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSipIpAddressResponse.prototype, "statusCode", void 0);
    return DeleteSipIpAddressResponse;
}(SpeakeasyBase));
export { DeleteSipIpAddressResponse };
