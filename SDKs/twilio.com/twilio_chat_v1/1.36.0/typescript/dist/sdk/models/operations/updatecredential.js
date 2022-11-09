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
export var UPDATECREDENTIAL_SERVERS = [
    "https://chat.twilio.com",
];
var UpdateCredentialPathParams = /** @class */ (function (_super) {
    __extends(UpdateCredentialPathParams, _super);
    function UpdateCredentialPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateCredentialPathParams.prototype, "sid", void 0);
    return UpdateCredentialPathParams;
}(SpeakeasyBase));
export { UpdateCredentialPathParams };
var UpdateCredentialUpdateCredentialRequest = /** @class */ (function (_super) {
    __extends(UpdateCredentialUpdateCredentialRequest, _super);
    function UpdateCredentialUpdateCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=ApiKey;" }),
        __metadata("design:type", String)
    ], UpdateCredentialUpdateCredentialRequest.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "form, name=Certificate;" }),
        __metadata("design:type", String)
    ], UpdateCredentialUpdateCredentialRequest.prototype, "certificate", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateCredentialUpdateCredentialRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=PrivateKey;" }),
        __metadata("design:type", String)
    ], UpdateCredentialUpdateCredentialRequest.prototype, "privateKey", void 0);
    __decorate([
        Metadata({ data: "form, name=Sandbox;" }),
        __metadata("design:type", Boolean)
    ], UpdateCredentialUpdateCredentialRequest.prototype, "sandbox", void 0);
    __decorate([
        Metadata({ data: "form, name=Secret;" }),
        __metadata("design:type", String)
    ], UpdateCredentialUpdateCredentialRequest.prototype, "secret", void 0);
    return UpdateCredentialUpdateCredentialRequest;
}(SpeakeasyBase));
export { UpdateCredentialUpdateCredentialRequest };
var UpdateCredentialSecurity = /** @class */ (function (_super) {
    __extends(UpdateCredentialSecurity, _super);
    function UpdateCredentialSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateCredentialSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateCredentialSecurity;
}(SpeakeasyBase));
export { UpdateCredentialSecurity };
var UpdateCredentialRequest = /** @class */ (function (_super) {
    __extends(UpdateCredentialRequest, _super);
    function UpdateCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateCredentialRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateCredentialPathParams)
    ], UpdateCredentialRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateCredentialUpdateCredentialRequest)
    ], UpdateCredentialRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateCredentialSecurity)
    ], UpdateCredentialRequest.prototype, "security", void 0);
    return UpdateCredentialRequest;
}(SpeakeasyBase));
export { UpdateCredentialRequest };
var UpdateCredentialResponse = /** @class */ (function (_super) {
    __extends(UpdateCredentialResponse, _super);
    function UpdateCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateCredentialResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ChatV1Credential)
    ], UpdateCredentialResponse.prototype, "chatV1Credential", void 0);
    return UpdateCredentialResponse;
}(SpeakeasyBase));
export { UpdateCredentialResponse };
