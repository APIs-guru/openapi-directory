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
export var UPDATECREDENTIALPUBLICKEY_SERVERS = [
    "https://accounts.twilio.com",
];
var UpdateCredentialPublicKeyPathParams = /** @class */ (function (_super) {
    __extends(UpdateCredentialPublicKeyPathParams, _super);
    function UpdateCredentialPublicKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateCredentialPublicKeyPathParams.prototype, "sid", void 0);
    return UpdateCredentialPublicKeyPathParams;
}(SpeakeasyBase));
export { UpdateCredentialPublicKeyPathParams };
var UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest = /** @class */ (function (_super) {
    __extends(UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest, _super);
    function UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest.prototype, "friendlyName", void 0);
    return UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest;
}(SpeakeasyBase));
export { UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest };
var UpdateCredentialPublicKeySecurity = /** @class */ (function (_super) {
    __extends(UpdateCredentialPublicKeySecurity, _super);
    function UpdateCredentialPublicKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateCredentialPublicKeySecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateCredentialPublicKeySecurity;
}(SpeakeasyBase));
export { UpdateCredentialPublicKeySecurity };
var UpdateCredentialPublicKeyRequest = /** @class */ (function (_super) {
    __extends(UpdateCredentialPublicKeyRequest, _super);
    function UpdateCredentialPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateCredentialPublicKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateCredentialPublicKeyPathParams)
    ], UpdateCredentialPublicKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest)
    ], UpdateCredentialPublicKeyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateCredentialPublicKeySecurity)
    ], UpdateCredentialPublicKeyRequest.prototype, "security", void 0);
    return UpdateCredentialPublicKeyRequest;
}(SpeakeasyBase));
export { UpdateCredentialPublicKeyRequest };
var UpdateCredentialPublicKeyResponse = /** @class */ (function (_super) {
    __extends(UpdateCredentialPublicKeyResponse, _super);
    function UpdateCredentialPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateCredentialPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateCredentialPublicKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AccountsV1CredentialCredentialPublicKey)
    ], UpdateCredentialPublicKeyResponse.prototype, "accountsV1CredentialCredentialPublicKey", void 0);
    return UpdateCredentialPublicKeyResponse;
}(SpeakeasyBase));
export { UpdateCredentialPublicKeyResponse };
