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
export var CreateTrustProductServerList = [
    "https://trusthub.twilio.com",
];
var CreateTrustProductCreateTrustProductRequest = /** @class */ (function (_super) {
    __extends(CreateTrustProductCreateTrustProductRequest, _super);
    function CreateTrustProductCreateTrustProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Email;" }),
        __metadata("design:type", String)
    ], CreateTrustProductCreateTrustProductRequest.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateTrustProductCreateTrustProductRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PolicySid;" }),
        __metadata("design:type", String)
    ], CreateTrustProductCreateTrustProductRequest.prototype, "policySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateTrustProductCreateTrustProductRequest.prototype, "statusCallback", void 0);
    return CreateTrustProductCreateTrustProductRequest;
}(SpeakeasyBase));
export { CreateTrustProductCreateTrustProductRequest };
var CreateTrustProductSecurity = /** @class */ (function (_super) {
    __extends(CreateTrustProductSecurity, _super);
    function CreateTrustProductSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateTrustProductSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateTrustProductSecurity;
}(SpeakeasyBase));
export { CreateTrustProductSecurity };
var CreateTrustProductRequest = /** @class */ (function (_super) {
    __extends(CreateTrustProductRequest, _super);
    function CreateTrustProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTrustProductRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTrustProductCreateTrustProductRequest)
    ], CreateTrustProductRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTrustProductSecurity)
    ], CreateTrustProductRequest.prototype, "security", void 0);
    return CreateTrustProductRequest;
}(SpeakeasyBase));
export { CreateTrustProductRequest };
var CreateTrustProductResponse = /** @class */ (function (_super) {
    __extends(CreateTrustProductResponse, _super);
    function CreateTrustProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTrustProductResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTrustProductResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrusthubV1TrustProduct)
    ], CreateTrustProductResponse.prototype, "trusthubV1TrustProduct", void 0);
    return CreateTrustProductResponse;
}(SpeakeasyBase));
export { CreateTrustProductResponse };
