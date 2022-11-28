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
export var CreateCredentialPublicKeyServerList = [
    "https://accounts.twilio.com",
];
var CreateCredentialPublicKeyCreateCredentialPublicKeyRequest = /** @class */ (function (_super) {
    __extends(CreateCredentialPublicKeyCreateCredentialPublicKeyRequest, _super);
    function CreateCredentialPublicKeyCreateCredentialPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AccountSid;" }),
        __metadata("design:type", String)
    ], CreateCredentialPublicKeyCreateCredentialPublicKeyRequest.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateCredentialPublicKeyCreateCredentialPublicKeyRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PublicKey;" }),
        __metadata("design:type", String)
    ], CreateCredentialPublicKeyCreateCredentialPublicKeyRequest.prototype, "publicKey", void 0);
    return CreateCredentialPublicKeyCreateCredentialPublicKeyRequest;
}(SpeakeasyBase));
export { CreateCredentialPublicKeyCreateCredentialPublicKeyRequest };
var CreateCredentialPublicKeySecurity = /** @class */ (function (_super) {
    __extends(CreateCredentialPublicKeySecurity, _super);
    function CreateCredentialPublicKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateCredentialPublicKeySecurity.prototype, "accountSidAuthToken", void 0);
    return CreateCredentialPublicKeySecurity;
}(SpeakeasyBase));
export { CreateCredentialPublicKeySecurity };
var CreateCredentialPublicKeyRequest = /** @class */ (function (_super) {
    __extends(CreateCredentialPublicKeyRequest, _super);
    function CreateCredentialPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCredentialPublicKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCredentialPublicKeyCreateCredentialPublicKeyRequest)
    ], CreateCredentialPublicKeyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCredentialPublicKeySecurity)
    ], CreateCredentialPublicKeyRequest.prototype, "security", void 0);
    return CreateCredentialPublicKeyRequest;
}(SpeakeasyBase));
export { CreateCredentialPublicKeyRequest };
var CreateCredentialPublicKeyResponse = /** @class */ (function (_super) {
    __extends(CreateCredentialPublicKeyResponse, _super);
    function CreateCredentialPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCredentialPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCredentialPublicKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountsV1CredentialCredentialPublicKey)
    ], CreateCredentialPublicKeyResponse.prototype, "accountsV1CredentialCredentialPublicKey", void 0);
    return CreateCredentialPublicKeyResponse;
}(SpeakeasyBase));
export { CreateCredentialPublicKeyResponse };
