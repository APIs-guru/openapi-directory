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
export var UpdateBrandRegistrationsServerList = [
    "https://messaging.twilio.com",
];
var UpdateBrandRegistrationsPathParams = /** @class */ (function (_super) {
    __extends(UpdateBrandRegistrationsPathParams, _super);
    function UpdateBrandRegistrationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateBrandRegistrationsPathParams.prototype, "sid", void 0);
    return UpdateBrandRegistrationsPathParams;
}(SpeakeasyBase));
export { UpdateBrandRegistrationsPathParams };
var UpdateBrandRegistrationsSecurity = /** @class */ (function (_super) {
    __extends(UpdateBrandRegistrationsSecurity, _super);
    function UpdateBrandRegistrationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateBrandRegistrationsSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateBrandRegistrationsSecurity;
}(SpeakeasyBase));
export { UpdateBrandRegistrationsSecurity };
var UpdateBrandRegistrationsRequest = /** @class */ (function (_super) {
    __extends(UpdateBrandRegistrationsRequest, _super);
    function UpdateBrandRegistrationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateBrandRegistrationsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBrandRegistrationsPathParams)
    ], UpdateBrandRegistrationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBrandRegistrationsSecurity)
    ], UpdateBrandRegistrationsRequest.prototype, "security", void 0);
    return UpdateBrandRegistrationsRequest;
}(SpeakeasyBase));
export { UpdateBrandRegistrationsRequest };
var UpdateBrandRegistrationsResponse = /** @class */ (function (_super) {
    __extends(UpdateBrandRegistrationsResponse, _super);
    function UpdateBrandRegistrationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateBrandRegistrationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateBrandRegistrationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MessagingV1BrandRegistrations)
    ], UpdateBrandRegistrationsResponse.prototype, "messagingV1BrandRegistrations", void 0);
    return UpdateBrandRegistrationsResponse;
}(SpeakeasyBase));
export { UpdateBrandRegistrationsResponse };
