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
import { LinkTokenCreateRequestAuth } from "./linktokencreaterequestauth";
import { LinkTokenCreateRequestDepositSwitch } from "./linktokencreaterequestdepositswitch";
import { LinkTokenEuConfig } from "./linktokeneuconfig";
import { LinkTokenCreateRequestIncomeVerification } from "./linktokencreaterequestincomeverification";
import { LinkTokenCreateRequestPaymentInitiation } from "./linktokencreaterequestpaymentinitiation";
import { LinkTokenCreateRequestUser } from "./linktokencreaterequestuser";
// LinkTokenCreateRequest
/**
 * LinkTokenCreateRequest defines the request schema for `/link/token/create`
**/
var LinkTokenCreateRequest = /** @class */ (function (_super) {
    __extends(LinkTokenCreateRequest, _super);
    function LinkTokenCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=access_token" }),
        __metadata("design:type", String)
    ], LinkTokenCreateRequest.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "json, name=account_filters" }),
        __metadata("design:type", Map)
    ], LinkTokenCreateRequest.prototype, "accountFilters", void 0);
    __decorate([
        Metadata({ data: "json, name=android_package_name" }),
        __metadata("design:type", String)
    ], LinkTokenCreateRequest.prototype, "androidPackageName", void 0);
    __decorate([
        Metadata({ data: "json, name=auth" }),
        __metadata("design:type", LinkTokenCreateRequestAuth)
    ], LinkTokenCreateRequest.prototype, "auth", void 0);
    __decorate([
        Metadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], LinkTokenCreateRequest.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "json, name=client_name" }),
        __metadata("design:type", String)
    ], LinkTokenCreateRequest.prototype, "clientName", void 0);
    __decorate([
        Metadata({ data: "json, name=country_codes" }),
        __metadata("design:type", Array)
    ], LinkTokenCreateRequest.prototype, "countryCodes", void 0);
    __decorate([
        Metadata({ data: "json, name=deposit_switch" }),
        __metadata("design:type", LinkTokenCreateRequestDepositSwitch)
    ], LinkTokenCreateRequest.prototype, "depositSwitch", void 0);
    __decorate([
        Metadata({ data: "json, name=eu_config" }),
        __metadata("design:type", LinkTokenEuConfig)
    ], LinkTokenCreateRequest.prototype, "euConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=income_verification" }),
        __metadata("design:type", LinkTokenCreateRequestIncomeVerification)
    ], LinkTokenCreateRequest.prototype, "incomeVerification", void 0);
    __decorate([
        Metadata({ data: "json, name=institution_id" }),
        __metadata("design:type", String)
    ], LinkTokenCreateRequest.prototype, "institutionId", void 0);
    __decorate([
        Metadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], LinkTokenCreateRequest.prototype, "language", void 0);
    __decorate([
        Metadata({ data: "json, name=link_customization_name" }),
        __metadata("design:type", String)
    ], LinkTokenCreateRequest.prototype, "linkCustomizationName", void 0);
    __decorate([
        Metadata({ data: "json, name=payment_initiation" }),
        __metadata("design:type", LinkTokenCreateRequestPaymentInitiation)
    ], LinkTokenCreateRequest.prototype, "paymentInitiation", void 0);
    __decorate([
        Metadata({ data: "json, name=products" }),
        __metadata("design:type", Array)
    ], LinkTokenCreateRequest.prototype, "products", void 0);
    __decorate([
        Metadata({ data: "json, name=redirect_uri" }),
        __metadata("design:type", String)
    ], LinkTokenCreateRequest.prototype, "redirectUri", void 0);
    __decorate([
        Metadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], LinkTokenCreateRequest.prototype, "secret", void 0);
    __decorate([
        Metadata({ data: "json, name=user" }),
        __metadata("design:type", LinkTokenCreateRequestUser)
    ], LinkTokenCreateRequest.prototype, "user", void 0);
    __decorate([
        Metadata({ data: "json, name=webhook" }),
        __metadata("design:type", String)
    ], LinkTokenCreateRequest.prototype, "webhook", void 0);
    return LinkTokenCreateRequest;
}(SpeakeasyBase));
export { LinkTokenCreateRequest };
