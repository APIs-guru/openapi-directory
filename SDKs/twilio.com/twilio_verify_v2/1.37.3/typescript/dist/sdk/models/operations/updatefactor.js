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
export var UpdateFactorServerList = [
    "https://verify.twilio.com",
];
var UpdateFactorPathParams = /** @class */ (function (_super) {
    __extends(UpdateFactorPathParams, _super);
    function UpdateFactorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], UpdateFactorPathParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateFactorPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateFactorPathParams.prototype, "sid", void 0);
    return UpdateFactorPathParams;
}(SpeakeasyBase));
export { UpdateFactorPathParams };
var UpdateFactorUpdateFactorRequest = /** @class */ (function (_super) {
    __extends(UpdateFactorUpdateFactorRequest, _super);
    function UpdateFactorUpdateFactorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AuthPayload;" }),
        __metadata("design:type", String)
    ], UpdateFactorUpdateFactorRequest.prototype, "authPayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Config.Alg;" }),
        __metadata("design:type", String)
    ], UpdateFactorUpdateFactorRequest.prototype, "configAlg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Config.CodeLength;" }),
        __metadata("design:type", Number)
    ], UpdateFactorUpdateFactorRequest.prototype, "configCodeLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Config.NotificationPlatform;" }),
        __metadata("design:type", String)
    ], UpdateFactorUpdateFactorRequest.prototype, "configNotificationPlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Config.NotificationToken;" }),
        __metadata("design:type", String)
    ], UpdateFactorUpdateFactorRequest.prototype, "configNotificationToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Config.SdkVersion;" }),
        __metadata("design:type", String)
    ], UpdateFactorUpdateFactorRequest.prototype, "configSdkVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Config.Skew;" }),
        __metadata("design:type", Number)
    ], UpdateFactorUpdateFactorRequest.prototype, "configSkew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Config.TimeStep;" }),
        __metadata("design:type", Number)
    ], UpdateFactorUpdateFactorRequest.prototype, "configTimeStep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateFactorUpdateFactorRequest.prototype, "friendlyName", void 0);
    return UpdateFactorUpdateFactorRequest;
}(SpeakeasyBase));
export { UpdateFactorUpdateFactorRequest };
var UpdateFactorSecurity = /** @class */ (function (_super) {
    __extends(UpdateFactorSecurity, _super);
    function UpdateFactorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateFactorSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateFactorSecurity;
}(SpeakeasyBase));
export { UpdateFactorSecurity };
var UpdateFactorRequest = /** @class */ (function (_super) {
    __extends(UpdateFactorRequest, _super);
    function UpdateFactorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFactorRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFactorPathParams)
    ], UpdateFactorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateFactorUpdateFactorRequest)
    ], UpdateFactorRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFactorSecurity)
    ], UpdateFactorRequest.prototype, "security", void 0);
    return UpdateFactorRequest;
}(SpeakeasyBase));
export { UpdateFactorRequest };
var UpdateFactorResponse = /** @class */ (function (_super) {
    __extends(UpdateFactorResponse, _super);
    function UpdateFactorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFactorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFactorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyV2ServiceEntityFactor)
    ], UpdateFactorResponse.prototype, "verifyV2ServiceEntityFactor", void 0);
    return UpdateFactorResponse;
}(SpeakeasyBase));
export { UpdateFactorResponse };
