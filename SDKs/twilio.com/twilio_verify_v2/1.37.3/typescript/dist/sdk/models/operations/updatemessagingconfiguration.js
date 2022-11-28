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
export var UpdateMessagingConfigurationServerList = [
    "https://verify.twilio.com",
];
var UpdateMessagingConfigurationPathParams = /** @class */ (function (_super) {
    __extends(UpdateMessagingConfigurationPathParams, _super);
    function UpdateMessagingConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Country" }),
        __metadata("design:type", String)
    ], UpdateMessagingConfigurationPathParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateMessagingConfigurationPathParams.prototype, "serviceSid", void 0);
    return UpdateMessagingConfigurationPathParams;
}(SpeakeasyBase));
export { UpdateMessagingConfigurationPathParams };
var UpdateMessagingConfigurationUpdateMessagingConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateMessagingConfigurationUpdateMessagingConfigurationRequest, _super);
    function UpdateMessagingConfigurationUpdateMessagingConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MessagingServiceSid;" }),
        __metadata("design:type", String)
    ], UpdateMessagingConfigurationUpdateMessagingConfigurationRequest.prototype, "messagingServiceSid", void 0);
    return UpdateMessagingConfigurationUpdateMessagingConfigurationRequest;
}(SpeakeasyBase));
export { UpdateMessagingConfigurationUpdateMessagingConfigurationRequest };
var UpdateMessagingConfigurationSecurity = /** @class */ (function (_super) {
    __extends(UpdateMessagingConfigurationSecurity, _super);
    function UpdateMessagingConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateMessagingConfigurationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateMessagingConfigurationSecurity;
}(SpeakeasyBase));
export { UpdateMessagingConfigurationSecurity };
var UpdateMessagingConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateMessagingConfigurationRequest, _super);
    function UpdateMessagingConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateMessagingConfigurationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMessagingConfigurationPathParams)
    ], UpdateMessagingConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateMessagingConfigurationUpdateMessagingConfigurationRequest)
    ], UpdateMessagingConfigurationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMessagingConfigurationSecurity)
    ], UpdateMessagingConfigurationRequest.prototype, "security", void 0);
    return UpdateMessagingConfigurationRequest;
}(SpeakeasyBase));
export { UpdateMessagingConfigurationRequest };
var UpdateMessagingConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateMessagingConfigurationResponse, _super);
    function UpdateMessagingConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateMessagingConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateMessagingConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyV2ServiceMessagingConfiguration)
    ], UpdateMessagingConfigurationResponse.prototype, "verifyV2ServiceMessagingConfiguration", void 0);
    return UpdateMessagingConfigurationResponse;
}(SpeakeasyBase));
export { UpdateMessagingConfigurationResponse };
