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
export var CreateBundleServerList = [
    "https://numbers.twilio.com",
];
var CreateBundleCreateBundleRequest = /** @class */ (function (_super) {
    __extends(CreateBundleCreateBundleRequest, _super);
    function CreateBundleCreateBundleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Email;" }),
        __metadata("design:type", String)
    ], CreateBundleCreateBundleRequest.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EndUserType;" }),
        __metadata("design:type", String)
    ], CreateBundleCreateBundleRequest.prototype, "endUserType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateBundleCreateBundleRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IsoCountry;" }),
        __metadata("design:type", String)
    ], CreateBundleCreateBundleRequest.prototype, "isoCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=NumberType;" }),
        __metadata("design:type", String)
    ], CreateBundleCreateBundleRequest.prototype, "numberType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RegulationSid;" }),
        __metadata("design:type", String)
    ], CreateBundleCreateBundleRequest.prototype, "regulationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateBundleCreateBundleRequest.prototype, "statusCallback", void 0);
    return CreateBundleCreateBundleRequest;
}(SpeakeasyBase));
export { CreateBundleCreateBundleRequest };
var CreateBundleSecurity = /** @class */ (function (_super) {
    __extends(CreateBundleSecurity, _super);
    function CreateBundleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateBundleSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateBundleSecurity;
}(SpeakeasyBase));
export { CreateBundleSecurity };
var CreateBundleRequest = /** @class */ (function (_super) {
    __extends(CreateBundleRequest, _super);
    function CreateBundleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateBundleRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateBundleCreateBundleRequest)
    ], CreateBundleRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBundleSecurity)
    ], CreateBundleRequest.prototype, "security", void 0);
    return CreateBundleRequest;
}(SpeakeasyBase));
export { CreateBundleRequest };
var CreateBundleResponse = /** @class */ (function (_super) {
    __extends(CreateBundleResponse, _super);
    function CreateBundleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateBundleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateBundleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NumbersV2RegulatoryComplianceBundle)
    ], CreateBundleResponse.prototype, "numbersV2RegulatoryComplianceBundle", void 0);
    return CreateBundleResponse;
}(SpeakeasyBase));
export { CreateBundleResponse };
