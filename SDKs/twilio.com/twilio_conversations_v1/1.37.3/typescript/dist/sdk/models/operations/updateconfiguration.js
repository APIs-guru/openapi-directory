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
export var UpdateConfigurationServerList = [
    "https://conversations.twilio.com",
];
var UpdateConfigurationUpdateConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateConfigurationUpdateConfigurationRequest, _super);
    function UpdateConfigurationUpdateConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DefaultChatServiceSid;" }),
        __metadata("design:type", String)
    ], UpdateConfigurationUpdateConfigurationRequest.prototype, "defaultChatServiceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DefaultClosedTimer;" }),
        __metadata("design:type", String)
    ], UpdateConfigurationUpdateConfigurationRequest.prototype, "defaultClosedTimer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DefaultInactiveTimer;" }),
        __metadata("design:type", String)
    ], UpdateConfigurationUpdateConfigurationRequest.prototype, "defaultInactiveTimer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DefaultMessagingServiceSid;" }),
        __metadata("design:type", String)
    ], UpdateConfigurationUpdateConfigurationRequest.prototype, "defaultMessagingServiceSid", void 0);
    return UpdateConfigurationUpdateConfigurationRequest;
}(SpeakeasyBase));
export { UpdateConfigurationUpdateConfigurationRequest };
var UpdateConfigurationSecurity = /** @class */ (function (_super) {
    __extends(UpdateConfigurationSecurity, _super);
    function UpdateConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateConfigurationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateConfigurationSecurity;
}(SpeakeasyBase));
export { UpdateConfigurationSecurity };
var UpdateConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateConfigurationRequest, _super);
    function UpdateConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateConfigurationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateConfigurationUpdateConfigurationRequest)
    ], UpdateConfigurationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateConfigurationSecurity)
    ], UpdateConfigurationRequest.prototype, "security", void 0);
    return UpdateConfigurationRequest;
}(SpeakeasyBase));
export { UpdateConfigurationRequest };
var UpdateConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateConfigurationResponse, _super);
    function UpdateConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversationsV1Configuration)
    ], UpdateConfigurationResponse.prototype, "conversationsV1Configuration", void 0);
    return UpdateConfigurationResponse;
}(SpeakeasyBase));
export { UpdateConfigurationResponse };
