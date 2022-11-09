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
export var DELETECUSTOMERPROFILE_SERVERS = [
    "https://trusthub.twilio.com",
];
var DeleteCustomerProfilePathParams = /** @class */ (function (_super) {
    __extends(DeleteCustomerProfilePathParams, _super);
    function DeleteCustomerProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteCustomerProfilePathParams.prototype, "sid", void 0);
    return DeleteCustomerProfilePathParams;
}(SpeakeasyBase));
export { DeleteCustomerProfilePathParams };
var DeleteCustomerProfileSecurity = /** @class */ (function (_super) {
    __extends(DeleteCustomerProfileSecurity, _super);
    function DeleteCustomerProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteCustomerProfileSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteCustomerProfileSecurity;
}(SpeakeasyBase));
export { DeleteCustomerProfileSecurity };
var DeleteCustomerProfileRequest = /** @class */ (function (_super) {
    __extends(DeleteCustomerProfileRequest, _super);
    function DeleteCustomerProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteCustomerProfileRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteCustomerProfilePathParams)
    ], DeleteCustomerProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteCustomerProfileSecurity)
    ], DeleteCustomerProfileRequest.prototype, "security", void 0);
    return DeleteCustomerProfileRequest;
}(SpeakeasyBase));
export { DeleteCustomerProfileRequest };
var DeleteCustomerProfileResponse = /** @class */ (function (_super) {
    __extends(DeleteCustomerProfileResponse, _super);
    function DeleteCustomerProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteCustomerProfileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteCustomerProfileResponse.prototype, "statusCode", void 0);
    return DeleteCustomerProfileResponse;
}(SpeakeasyBase));
export { DeleteCustomerProfileResponse };
