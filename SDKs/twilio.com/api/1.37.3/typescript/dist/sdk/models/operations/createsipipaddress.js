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
export var CreateSipIpAddressServerList = [
    "https://api.twilio.com",
];
var CreateSipIpAddressPathParams = /** @class */ (function (_super) {
    __extends(CreateSipIpAddressPathParams, _super);
    function CreateSipIpAddressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateSipIpAddressPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IpAccessControlListSid" }),
        __metadata("design:type", String)
    ], CreateSipIpAddressPathParams.prototype, "ipAccessControlListSid", void 0);
    return CreateSipIpAddressPathParams;
}(SpeakeasyBase));
export { CreateSipIpAddressPathParams };
var CreateSipIpAddressCreateSipIpAddressRequest = /** @class */ (function (_super) {
    __extends(CreateSipIpAddressCreateSipIpAddressRequest, _super);
    function CreateSipIpAddressCreateSipIpAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CidrPrefixLength;" }),
        __metadata("design:type", Number)
    ], CreateSipIpAddressCreateSipIpAddressRequest.prototype, "cidrPrefixLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateSipIpAddressCreateSipIpAddressRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IpAddress;" }),
        __metadata("design:type", String)
    ], CreateSipIpAddressCreateSipIpAddressRequest.prototype, "ipAddress", void 0);
    return CreateSipIpAddressCreateSipIpAddressRequest;
}(SpeakeasyBase));
export { CreateSipIpAddressCreateSipIpAddressRequest };
var CreateSipIpAddressSecurity = /** @class */ (function (_super) {
    __extends(CreateSipIpAddressSecurity, _super);
    function CreateSipIpAddressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSipIpAddressSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSipIpAddressSecurity;
}(SpeakeasyBase));
export { CreateSipIpAddressSecurity };
var CreateSipIpAddressRequest = /** @class */ (function (_super) {
    __extends(CreateSipIpAddressRequest, _super);
    function CreateSipIpAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSipIpAddressRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSipIpAddressPathParams)
    ], CreateSipIpAddressRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSipIpAddressCreateSipIpAddressRequest)
    ], CreateSipIpAddressRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSipIpAddressSecurity)
    ], CreateSipIpAddressRequest.prototype, "security", void 0);
    return CreateSipIpAddressRequest;
}(SpeakeasyBase));
export { CreateSipIpAddressRequest };
var CreateSipIpAddressResponse = /** @class */ (function (_super) {
    __extends(CreateSipIpAddressResponse, _super);
    function CreateSipIpAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSipIpAddressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSipIpAddressResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress)
    ], CreateSipIpAddressResponse.prototype, "apiV2010AccountSipSipIpAccessControlListSipIpAddress", void 0);
    return CreateSipIpAddressResponse;
}(SpeakeasyBase));
export { CreateSipIpAddressResponse };
