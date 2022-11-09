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
export var CREATECUSTOMERPROFILE_SERVERS = [
    "https://trusthub.twilio.com",
];
var CreateCustomerProfileCreateCustomerProfileRequest = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileCreateCustomerProfileRequest, _super);
    function CreateCustomerProfileCreateCustomerProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Email;" }),
        __metadata("design:type", String)
    ], CreateCustomerProfileCreateCustomerProfileRequest.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateCustomerProfileCreateCustomerProfileRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=PolicySid;" }),
        __metadata("design:type", String)
    ], CreateCustomerProfileCreateCustomerProfileRequest.prototype, "policySid", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateCustomerProfileCreateCustomerProfileRequest.prototype, "statusCallback", void 0);
    return CreateCustomerProfileCreateCustomerProfileRequest;
}(SpeakeasyBase));
export { CreateCustomerProfileCreateCustomerProfileRequest };
var CreateCustomerProfileSecurity = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileSecurity, _super);
    function CreateCustomerProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateCustomerProfileSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateCustomerProfileSecurity;
}(SpeakeasyBase));
export { CreateCustomerProfileSecurity };
var CreateCustomerProfileRequest = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileRequest, _super);
    function CreateCustomerProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCustomerProfileRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCustomerProfileCreateCustomerProfileRequest)
    ], CreateCustomerProfileRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateCustomerProfileSecurity)
    ], CreateCustomerProfileRequest.prototype, "security", void 0);
    return CreateCustomerProfileRequest;
}(SpeakeasyBase));
export { CreateCustomerProfileRequest };
var CreateCustomerProfileResponse = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileResponse, _super);
    function CreateCustomerProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCustomerProfileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateCustomerProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrusthubV1CustomerProfile)
    ], CreateCustomerProfileResponse.prototype, "trusthubV1CustomerProfile", void 0);
    return CreateCustomerProfileResponse;
}(SpeakeasyBase));
export { CreateCustomerProfileResponse };
