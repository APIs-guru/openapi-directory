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
export var CREATEMESSAGINGCONFIGURATION_SERVERS = [
    "https://verify.twilio.com",
];
var CreateMessagingConfigurationPathParams = /** @class */ (function (_super) {
    __extends(CreateMessagingConfigurationPathParams, _super);
    function CreateMessagingConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateMessagingConfigurationPathParams.prototype, "serviceSid", void 0);
    return CreateMessagingConfigurationPathParams;
}(SpeakeasyBase));
export { CreateMessagingConfigurationPathParams };
var CreateMessagingConfigurationCreateMessagingConfigurationRequest = /** @class */ (function (_super) {
    __extends(CreateMessagingConfigurationCreateMessagingConfigurationRequest, _super);
    function CreateMessagingConfigurationCreateMessagingConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Country;" }),
        __metadata("design:type", String)
    ], CreateMessagingConfigurationCreateMessagingConfigurationRequest.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "form, name=MessagingServiceSid;" }),
        __metadata("design:type", String)
    ], CreateMessagingConfigurationCreateMessagingConfigurationRequest.prototype, "messagingServiceSid", void 0);
    return CreateMessagingConfigurationCreateMessagingConfigurationRequest;
}(SpeakeasyBase));
export { CreateMessagingConfigurationCreateMessagingConfigurationRequest };
var CreateMessagingConfigurationSecurity = /** @class */ (function (_super) {
    __extends(CreateMessagingConfigurationSecurity, _super);
    function CreateMessagingConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateMessagingConfigurationSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateMessagingConfigurationSecurity;
}(SpeakeasyBase));
export { CreateMessagingConfigurationSecurity };
var CreateMessagingConfigurationRequest = /** @class */ (function (_super) {
    __extends(CreateMessagingConfigurationRequest, _super);
    function CreateMessagingConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateMessagingConfigurationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateMessagingConfigurationPathParams)
    ], CreateMessagingConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateMessagingConfigurationCreateMessagingConfigurationRequest)
    ], CreateMessagingConfigurationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateMessagingConfigurationSecurity)
    ], CreateMessagingConfigurationRequest.prototype, "security", void 0);
    return CreateMessagingConfigurationRequest;
}(SpeakeasyBase));
export { CreateMessagingConfigurationRequest };
var CreateMessagingConfigurationResponse = /** @class */ (function (_super) {
    __extends(CreateMessagingConfigurationResponse, _super);
    function CreateMessagingConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateMessagingConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateMessagingConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VerifyV2ServiceMessagingConfiguration)
    ], CreateMessagingConfigurationResponse.prototype, "verifyV2ServiceMessagingConfiguration", void 0);
    return CreateMessagingConfigurationResponse;
}(SpeakeasyBase));
export { CreateMessagingConfigurationResponse };
