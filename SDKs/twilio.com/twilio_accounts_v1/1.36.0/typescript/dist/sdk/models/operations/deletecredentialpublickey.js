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
export var DELETECREDENTIALPUBLICKEY_SERVERS = [
    "https://accounts.twilio.com",
];
var DeleteCredentialPublicKeyPathParams = /** @class */ (function (_super) {
    __extends(DeleteCredentialPublicKeyPathParams, _super);
    function DeleteCredentialPublicKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteCredentialPublicKeyPathParams.prototype, "sid", void 0);
    return DeleteCredentialPublicKeyPathParams;
}(SpeakeasyBase));
export { DeleteCredentialPublicKeyPathParams };
var DeleteCredentialPublicKeySecurity = /** @class */ (function (_super) {
    __extends(DeleteCredentialPublicKeySecurity, _super);
    function DeleteCredentialPublicKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteCredentialPublicKeySecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteCredentialPublicKeySecurity;
}(SpeakeasyBase));
export { DeleteCredentialPublicKeySecurity };
var DeleteCredentialPublicKeyRequest = /** @class */ (function (_super) {
    __extends(DeleteCredentialPublicKeyRequest, _super);
    function DeleteCredentialPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteCredentialPublicKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteCredentialPublicKeyPathParams)
    ], DeleteCredentialPublicKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteCredentialPublicKeySecurity)
    ], DeleteCredentialPublicKeyRequest.prototype, "security", void 0);
    return DeleteCredentialPublicKeyRequest;
}(SpeakeasyBase));
export { DeleteCredentialPublicKeyRequest };
var DeleteCredentialPublicKeyResponse = /** @class */ (function (_super) {
    __extends(DeleteCredentialPublicKeyResponse, _super);
    function DeleteCredentialPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteCredentialPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteCredentialPublicKeyResponse.prototype, "statusCode", void 0);
    return DeleteCredentialPublicKeyResponse;
}(SpeakeasyBase));
export { DeleteCredentialPublicKeyResponse };
