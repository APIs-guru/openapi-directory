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
export var CreateSipAuthRegistrationsCredentialListMappingServerList = [
    "https://api.twilio.com",
];
var CreateSipAuthRegistrationsCredentialListMappingPathParams = /** @class */ (function (_super) {
    __extends(CreateSipAuthRegistrationsCredentialListMappingPathParams, _super);
    function CreateSipAuthRegistrationsCredentialListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateSipAuthRegistrationsCredentialListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], CreateSipAuthRegistrationsCredentialListMappingPathParams.prototype, "domainSid", void 0);
    return CreateSipAuthRegistrationsCredentialListMappingPathParams;
}(SpeakeasyBase));
export { CreateSipAuthRegistrationsCredentialListMappingPathParams };
var CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest = /** @class */ (function (_super) {
    __extends(CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest, _super);
    function CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CredentialListSid;" }),
        __metadata("design:type", String)
    ], CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest.prototype, "credentialListSid", void 0);
    return CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest;
}(SpeakeasyBase));
export { CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest };
var CreateSipAuthRegistrationsCredentialListMappingSecurity = /** @class */ (function (_super) {
    __extends(CreateSipAuthRegistrationsCredentialListMappingSecurity, _super);
    function CreateSipAuthRegistrationsCredentialListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSipAuthRegistrationsCredentialListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSipAuthRegistrationsCredentialListMappingSecurity;
}(SpeakeasyBase));
export { CreateSipAuthRegistrationsCredentialListMappingSecurity };
var CreateSipAuthRegistrationsCredentialListMappingRequest = /** @class */ (function (_super) {
    __extends(CreateSipAuthRegistrationsCredentialListMappingRequest, _super);
    function CreateSipAuthRegistrationsCredentialListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSipAuthRegistrationsCredentialListMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSipAuthRegistrationsCredentialListMappingPathParams)
    ], CreateSipAuthRegistrationsCredentialListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest)
    ], CreateSipAuthRegistrationsCredentialListMappingRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSipAuthRegistrationsCredentialListMappingSecurity)
    ], CreateSipAuthRegistrationsCredentialListMappingRequest.prototype, "security", void 0);
    return CreateSipAuthRegistrationsCredentialListMappingRequest;
}(SpeakeasyBase));
export { CreateSipAuthRegistrationsCredentialListMappingRequest };
var CreateSipAuthRegistrationsCredentialListMappingResponse = /** @class */ (function (_super) {
    __extends(CreateSipAuthRegistrationsCredentialListMappingResponse, _super);
    function CreateSipAuthRegistrationsCredentialListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSipAuthRegistrationsCredentialListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSipAuthRegistrationsCredentialListMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping)
    ], CreateSipAuthRegistrationsCredentialListMappingResponse.prototype, "apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping", void 0);
    return CreateSipAuthRegistrationsCredentialListMappingResponse;
}(SpeakeasyBase));
export { CreateSipAuthRegistrationsCredentialListMappingResponse };
