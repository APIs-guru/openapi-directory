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
export var CREATENEWFACTOR_SERVERS = [
    "https://verify.twilio.com",
];
var CreateNewFactorPathParams = /** @class */ (function (_super) {
    __extends(CreateNewFactorPathParams, _super);
    function CreateNewFactorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], CreateNewFactorPathParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateNewFactorPathParams.prototype, "serviceSid", void 0);
    return CreateNewFactorPathParams;
}(SpeakeasyBase));
export { CreateNewFactorPathParams };
var CreateNewFactorCreateNewFactorRequest = /** @class */ (function (_super) {
    __extends(CreateNewFactorCreateNewFactorRequest, _super);
    function CreateNewFactorCreateNewFactorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Binding.Alg;" }),
        __metadata("design:type", String)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "bindingAlg", void 0);
    __decorate([
        Metadata({ data: "form, name=Binding.PublicKey;" }),
        __metadata("design:type", String)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "bindingPublicKey", void 0);
    __decorate([
        Metadata({ data: "form, name=Binding.Secret;" }),
        __metadata("design:type", String)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "bindingSecret", void 0);
    __decorate([
        Metadata({ data: "form, name=Config.Alg;" }),
        __metadata("design:type", String)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "configAlg", void 0);
    __decorate([
        Metadata({ data: "form, name=Config.AppId;" }),
        __metadata("design:type", String)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "configAppId", void 0);
    __decorate([
        Metadata({ data: "form, name=Config.CodeLength;" }),
        __metadata("design:type", Number)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "configCodeLength", void 0);
    __decorate([
        Metadata({ data: "form, name=Config.NotificationPlatform;" }),
        __metadata("design:type", String)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "configNotificationPlatform", void 0);
    __decorate([
        Metadata({ data: "form, name=Config.NotificationToken;" }),
        __metadata("design:type", String)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "configNotificationToken", void 0);
    __decorate([
        Metadata({ data: "form, name=Config.SdkVersion;" }),
        __metadata("design:type", String)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "configSdkVersion", void 0);
    __decorate([
        Metadata({ data: "form, name=Config.Skew;" }),
        __metadata("design:type", Number)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "configSkew", void 0);
    __decorate([
        Metadata({ data: "form, name=Config.TimeStep;" }),
        __metadata("design:type", Number)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "configTimeStep", void 0);
    __decorate([
        Metadata({ data: "form, name=FactorType;" }),
        __metadata("design:type", String)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "factorType", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Metadata;" }),
        __metadata("design:type", Object)
    ], CreateNewFactorCreateNewFactorRequest.prototype, "metadata", void 0);
    return CreateNewFactorCreateNewFactorRequest;
}(SpeakeasyBase));
export { CreateNewFactorCreateNewFactorRequest };
var CreateNewFactorSecurity = /** @class */ (function (_super) {
    __extends(CreateNewFactorSecurity, _super);
    function CreateNewFactorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateNewFactorSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateNewFactorSecurity;
}(SpeakeasyBase));
export { CreateNewFactorSecurity };
var CreateNewFactorRequest = /** @class */ (function (_super) {
    __extends(CreateNewFactorRequest, _super);
    function CreateNewFactorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateNewFactorRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateNewFactorPathParams)
    ], CreateNewFactorRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateNewFactorCreateNewFactorRequest)
    ], CreateNewFactorRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateNewFactorSecurity)
    ], CreateNewFactorRequest.prototype, "security", void 0);
    return CreateNewFactorRequest;
}(SpeakeasyBase));
export { CreateNewFactorRequest };
var CreateNewFactorResponse = /** @class */ (function (_super) {
    __extends(CreateNewFactorResponse, _super);
    function CreateNewFactorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateNewFactorResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateNewFactorResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VerifyV2ServiceEntityNewFactor)
    ], CreateNewFactorResponse.prototype, "verifyV2ServiceEntityNewFactor", void 0);
    return CreateNewFactorResponse;
}(SpeakeasyBase));
export { CreateNewFactorResponse };
