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
export var CREATEBRANDREGISTRATIONS_SERVERS = [
    "https://messaging.twilio.com",
];
var CreateBrandRegistrationsCreateBrandRegistrationsRequest = /** @class */ (function (_super) {
    __extends(CreateBrandRegistrationsCreateBrandRegistrationsRequest, _super);
    function CreateBrandRegistrationsCreateBrandRegistrationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=A2PProfileBundleSid;" }),
        __metadata("design:type", String)
    ], CreateBrandRegistrationsCreateBrandRegistrationsRequest.prototype, "a2PProfileBundleSid", void 0);
    __decorate([
        Metadata({ data: "form, name=BrandType;" }),
        __metadata("design:type", String)
    ], CreateBrandRegistrationsCreateBrandRegistrationsRequest.prototype, "brandType", void 0);
    __decorate([
        Metadata({ data: "form, name=CustomerProfileBundleSid;" }),
        __metadata("design:type", String)
    ], CreateBrandRegistrationsCreateBrandRegistrationsRequest.prototype, "customerProfileBundleSid", void 0);
    __decorate([
        Metadata({ data: "form, name=Mock;" }),
        __metadata("design:type", Boolean)
    ], CreateBrandRegistrationsCreateBrandRegistrationsRequest.prototype, "mock", void 0);
    __decorate([
        Metadata({ data: "form, name=SkipAutomaticSecVet;" }),
        __metadata("design:type", Boolean)
    ], CreateBrandRegistrationsCreateBrandRegistrationsRequest.prototype, "skipAutomaticSecVet", void 0);
    return CreateBrandRegistrationsCreateBrandRegistrationsRequest;
}(SpeakeasyBase));
export { CreateBrandRegistrationsCreateBrandRegistrationsRequest };
var CreateBrandRegistrationsSecurity = /** @class */ (function (_super) {
    __extends(CreateBrandRegistrationsSecurity, _super);
    function CreateBrandRegistrationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateBrandRegistrationsSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateBrandRegistrationsSecurity;
}(SpeakeasyBase));
export { CreateBrandRegistrationsSecurity };
var CreateBrandRegistrationsRequest = /** @class */ (function (_super) {
    __extends(CreateBrandRegistrationsRequest, _super);
    function CreateBrandRegistrationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateBrandRegistrationsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateBrandRegistrationsCreateBrandRegistrationsRequest)
    ], CreateBrandRegistrationsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateBrandRegistrationsSecurity)
    ], CreateBrandRegistrationsRequest.prototype, "security", void 0);
    return CreateBrandRegistrationsRequest;
}(SpeakeasyBase));
export { CreateBrandRegistrationsRequest };
var CreateBrandRegistrationsResponse = /** @class */ (function (_super) {
    __extends(CreateBrandRegistrationsResponse, _super);
    function CreateBrandRegistrationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateBrandRegistrationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateBrandRegistrationsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MessagingV1BrandRegistrations)
    ], CreateBrandRegistrationsResponse.prototype, "messagingV1BrandRegistrations", void 0);
    return CreateBrandRegistrationsResponse;
}(SpeakeasyBase));
export { CreateBrandRegistrationsResponse };
