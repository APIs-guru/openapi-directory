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
export var UpdateAddressServerList = [
    "https://api.twilio.com",
];
var UpdateAddressPathParams = /** @class */ (function (_super) {
    __extends(UpdateAddressPathParams, _super);
    function UpdateAddressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateAddressPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateAddressPathParams.prototype, "sid", void 0);
    return UpdateAddressPathParams;
}(SpeakeasyBase));
export { UpdateAddressPathParams };
var UpdateAddressUpdateAddressRequest = /** @class */ (function (_super) {
    __extends(UpdateAddressUpdateAddressRequest, _super);
    function UpdateAddressUpdateAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AutoCorrectAddress;" }),
        __metadata("design:type", Boolean)
    ], UpdateAddressUpdateAddressRequest.prototype, "autoCorrectAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=City;" }),
        __metadata("design:type", String)
    ], UpdateAddressUpdateAddressRequest.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CustomerName;" }),
        __metadata("design:type", String)
    ], UpdateAddressUpdateAddressRequest.prototype, "customerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EmergencyEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateAddressUpdateAddressRequest.prototype, "emergencyEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateAddressUpdateAddressRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PostalCode;" }),
        __metadata("design:type", String)
    ], UpdateAddressUpdateAddressRequest.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Region;" }),
        __metadata("design:type", String)
    ], UpdateAddressUpdateAddressRequest.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Street;" }),
        __metadata("design:type", String)
    ], UpdateAddressUpdateAddressRequest.prototype, "street", void 0);
    return UpdateAddressUpdateAddressRequest;
}(SpeakeasyBase));
export { UpdateAddressUpdateAddressRequest };
var UpdateAddressSecurity = /** @class */ (function (_super) {
    __extends(UpdateAddressSecurity, _super);
    function UpdateAddressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateAddressSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateAddressSecurity;
}(SpeakeasyBase));
export { UpdateAddressSecurity };
var UpdateAddressRequest = /** @class */ (function (_super) {
    __extends(UpdateAddressRequest, _super);
    function UpdateAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAddressRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAddressPathParams)
    ], UpdateAddressRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateAddressUpdateAddressRequest)
    ], UpdateAddressRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAddressSecurity)
    ], UpdateAddressRequest.prototype, "security", void 0);
    return UpdateAddressRequest;
}(SpeakeasyBase));
export { UpdateAddressRequest };
var UpdateAddressResponse = /** @class */ (function (_super) {
    __extends(UpdateAddressResponse, _super);
    function UpdateAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAddressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAddressResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountAddress)
    ], UpdateAddressResponse.prototype, "apiV2010AccountAddress", void 0);
    return UpdateAddressResponse;
}(SpeakeasyBase));
export { UpdateAddressResponse };
