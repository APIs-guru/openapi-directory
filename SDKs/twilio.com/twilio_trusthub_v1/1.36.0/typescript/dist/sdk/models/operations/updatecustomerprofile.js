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
export var UPDATECUSTOMERPROFILE_SERVERS = [
    "https://trusthub.twilio.com",
];
var UpdateCustomerProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateCustomerProfilePathParams, _super);
    function UpdateCustomerProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateCustomerProfilePathParams.prototype, "sid", void 0);
    return UpdateCustomerProfilePathParams;
}(SpeakeasyBase));
export { UpdateCustomerProfilePathParams };
var UpdateCustomerProfileUpdateCustomerProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateCustomerProfileUpdateCustomerProfileRequest, _super);
    function UpdateCustomerProfileUpdateCustomerProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Email;" }),
        __metadata("design:type", String)
    ], UpdateCustomerProfileUpdateCustomerProfileRequest.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateCustomerProfileUpdateCustomerProfileRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateCustomerProfileUpdateCustomerProfileRequest.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateCustomerProfileUpdateCustomerProfileRequest.prototype, "statusCallback", void 0);
    return UpdateCustomerProfileUpdateCustomerProfileRequest;
}(SpeakeasyBase));
export { UpdateCustomerProfileUpdateCustomerProfileRequest };
var UpdateCustomerProfileSecurity = /** @class */ (function (_super) {
    __extends(UpdateCustomerProfileSecurity, _super);
    function UpdateCustomerProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateCustomerProfileSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateCustomerProfileSecurity;
}(SpeakeasyBase));
export { UpdateCustomerProfileSecurity };
var UpdateCustomerProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateCustomerProfileRequest, _super);
    function UpdateCustomerProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateCustomerProfileRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateCustomerProfilePathParams)
    ], UpdateCustomerProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateCustomerProfileUpdateCustomerProfileRequest)
    ], UpdateCustomerProfileRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateCustomerProfileSecurity)
    ], UpdateCustomerProfileRequest.prototype, "security", void 0);
    return UpdateCustomerProfileRequest;
}(SpeakeasyBase));
export { UpdateCustomerProfileRequest };
var UpdateCustomerProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateCustomerProfileResponse, _super);
    function UpdateCustomerProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateCustomerProfileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateCustomerProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrusthubV1CustomerProfile)
    ], UpdateCustomerProfileResponse.prototype, "trusthubV1CustomerProfile", void 0);
    return UpdateCustomerProfileResponse;
}(SpeakeasyBase));
export { UpdateCustomerProfileResponse };
