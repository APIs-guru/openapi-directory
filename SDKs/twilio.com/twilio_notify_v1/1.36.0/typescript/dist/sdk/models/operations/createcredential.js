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
export var CREATECREDENTIAL_SERVERS = [
    "https://notify.twilio.com",
];
var CreateCredentialCreateCredentialRequest = /** @class */ (function (_super) {
    __extends(CreateCredentialCreateCredentialRequest, _super);
    function CreateCredentialCreateCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=ApiKey;" }),
        __metadata("design:type", String)
    ], CreateCredentialCreateCredentialRequest.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "form, name=Certificate;" }),
        __metadata("design:type", String)
    ], CreateCredentialCreateCredentialRequest.prototype, "certificate", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateCredentialCreateCredentialRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=PrivateKey;" }),
        __metadata("design:type", String)
    ], CreateCredentialCreateCredentialRequest.prototype, "privateKey", void 0);
    __decorate([
        Metadata({ data: "form, name=Sandbox;" }),
        __metadata("design:type", Boolean)
    ], CreateCredentialCreateCredentialRequest.prototype, "sandbox", void 0);
    __decorate([
        Metadata({ data: "form, name=Secret;" }),
        __metadata("design:type", String)
    ], CreateCredentialCreateCredentialRequest.prototype, "secret", void 0);
    __decorate([
        Metadata({ data: "form, name=Type;" }),
        __metadata("design:type", String)
    ], CreateCredentialCreateCredentialRequest.prototype, "type", void 0);
    return CreateCredentialCreateCredentialRequest;
}(SpeakeasyBase));
export { CreateCredentialCreateCredentialRequest };
var CreateCredentialSecurity = /** @class */ (function (_super) {
    __extends(CreateCredentialSecurity, _super);
    function CreateCredentialSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateCredentialSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateCredentialSecurity;
}(SpeakeasyBase));
export { CreateCredentialSecurity };
var CreateCredentialRequest = /** @class */ (function (_super) {
    __extends(CreateCredentialRequest, _super);
    function CreateCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCredentialRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCredentialCreateCredentialRequest)
    ], CreateCredentialRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateCredentialSecurity)
    ], CreateCredentialRequest.prototype, "security", void 0);
    return CreateCredentialRequest;
}(SpeakeasyBase));
export { CreateCredentialRequest };
var CreateCredentialResponse = /** @class */ (function (_super) {
    __extends(CreateCredentialResponse, _super);
    function CreateCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateCredentialResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotifyV1Credential)
    ], CreateCredentialResponse.prototype, "notifyV1Credential", void 0);
    return CreateCredentialResponse;
}(SpeakeasyBase));
export { CreateCredentialResponse };
