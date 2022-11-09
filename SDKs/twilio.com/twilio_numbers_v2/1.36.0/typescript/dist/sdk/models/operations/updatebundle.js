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
export var UPDATEBUNDLE_SERVERS = [
    "https://numbers.twilio.com",
];
var UpdateBundlePathParams = /** @class */ (function (_super) {
    __extends(UpdateBundlePathParams, _super);
    function UpdateBundlePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateBundlePathParams.prototype, "sid", void 0);
    return UpdateBundlePathParams;
}(SpeakeasyBase));
export { UpdateBundlePathParams };
var UpdateBundleUpdateBundleRequest = /** @class */ (function (_super) {
    __extends(UpdateBundleUpdateBundleRequest, _super);
    function UpdateBundleUpdateBundleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Email;" }),
        __metadata("design:type", String)
    ], UpdateBundleUpdateBundleRequest.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateBundleUpdateBundleRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateBundleUpdateBundleRequest.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateBundleUpdateBundleRequest.prototype, "statusCallback", void 0);
    return UpdateBundleUpdateBundleRequest;
}(SpeakeasyBase));
export { UpdateBundleUpdateBundleRequest };
var UpdateBundleSecurity = /** @class */ (function (_super) {
    __extends(UpdateBundleSecurity, _super);
    function UpdateBundleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateBundleSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateBundleSecurity;
}(SpeakeasyBase));
export { UpdateBundleSecurity };
var UpdateBundleRequest = /** @class */ (function (_super) {
    __extends(UpdateBundleRequest, _super);
    function UpdateBundleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateBundleRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateBundlePathParams)
    ], UpdateBundleRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateBundleUpdateBundleRequest)
    ], UpdateBundleRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateBundleSecurity)
    ], UpdateBundleRequest.prototype, "security", void 0);
    return UpdateBundleRequest;
}(SpeakeasyBase));
export { UpdateBundleRequest };
var UpdateBundleResponse = /** @class */ (function (_super) {
    __extends(UpdateBundleResponse, _super);
    function UpdateBundleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateBundleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateBundleResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NumbersV2RegulatoryComplianceBundle)
    ], UpdateBundleResponse.prototype, "numbersV2RegulatoryComplianceBundle", void 0);
    return UpdateBundleResponse;
}(SpeakeasyBase));
export { UpdateBundleResponse };
