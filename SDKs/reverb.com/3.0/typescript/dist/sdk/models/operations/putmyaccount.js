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
var PutMyAccountRequestBody = /** @class */ (function (_super) {
    __extends(PutMyAccountRequestBody, _super);
    function PutMyAccountRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PutMyAccountRequestBody.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], PutMyAccountRequestBody.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], PutMyAccountRequestBody.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale_code" }),
        __metadata("design:type", String)
    ], PutMyAccountRequestBody.prototype, "localeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_region_code" }),
        __metadata("design:type", String)
    ], PutMyAccountRequestBody.prototype, "shippingRegionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=third_party_ad_data_consent" }),
        __metadata("design:type", Boolean)
    ], PutMyAccountRequestBody.prototype, "thirdPartyAdDataConsent", void 0);
    return PutMyAccountRequestBody;
}(SpeakeasyBase));
export { PutMyAccountRequestBody };
var PutMyAccountSecurity = /** @class */ (function (_super) {
    __extends(PutMyAccountSecurity, _super);
    function PutMyAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PutMyAccountSecurity.prototype, "oauth2", void 0);
    return PutMyAccountSecurity;
}(SpeakeasyBase));
export { PutMyAccountSecurity };
var PutMyAccountRequest = /** @class */ (function (_super) {
    __extends(PutMyAccountRequest, _super);
    function PutMyAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutMyAccountRequestBody)
    ], PutMyAccountRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutMyAccountSecurity)
    ], PutMyAccountRequest.prototype, "security", void 0);
    return PutMyAccountRequest;
}(SpeakeasyBase));
export { PutMyAccountRequest };
var PutMyAccountResponse = /** @class */ (function (_super) {
    __extends(PutMyAccountResponse, _super);
    function PutMyAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutMyAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutMyAccountResponse.prototype, "statusCode", void 0);
    return PutMyAccountResponse;
}(SpeakeasyBase));
export { PutMyAccountResponse };
