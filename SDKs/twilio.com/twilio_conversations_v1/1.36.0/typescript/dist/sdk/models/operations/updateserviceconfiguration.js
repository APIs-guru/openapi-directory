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
export var UPDATESERVICECONFIGURATION_SERVERS = [
    "https://conversations.twilio.com",
];
var UpdateServiceConfigurationPathParams = /** @class */ (function (_super) {
    __extends(UpdateServiceConfigurationPathParams, _super);
    function UpdateServiceConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], UpdateServiceConfigurationPathParams.prototype, "chatServiceSid", void 0);
    return UpdateServiceConfigurationPathParams;
}(SpeakeasyBase));
export { UpdateServiceConfigurationPathParams };
var UpdateServiceConfigurationUpdateServiceConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceConfigurationUpdateServiceConfigurationRequest, _super);
    function UpdateServiceConfigurationUpdateServiceConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=DefaultChatServiceRoleSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceConfigurationUpdateServiceConfigurationRequest.prototype, "defaultChatServiceRoleSid", void 0);
    __decorate([
        Metadata({ data: "form, name=DefaultConversationCreatorRoleSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceConfigurationUpdateServiceConfigurationRequest.prototype, "defaultConversationCreatorRoleSid", void 0);
    __decorate([
        Metadata({ data: "form, name=DefaultConversationRoleSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceConfigurationUpdateServiceConfigurationRequest.prototype, "defaultConversationRoleSid", void 0);
    __decorate([
        Metadata({ data: "form, name=ReachabilityEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceConfigurationUpdateServiceConfigurationRequest.prototype, "reachabilityEnabled", void 0);
    return UpdateServiceConfigurationUpdateServiceConfigurationRequest;
}(SpeakeasyBase));
export { UpdateServiceConfigurationUpdateServiceConfigurationRequest };
var UpdateServiceConfigurationSecurity = /** @class */ (function (_super) {
    __extends(UpdateServiceConfigurationSecurity, _super);
    function UpdateServiceConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateServiceConfigurationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateServiceConfigurationSecurity;
}(SpeakeasyBase));
export { UpdateServiceConfigurationSecurity };
var UpdateServiceConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceConfigurationRequest, _super);
    function UpdateServiceConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceConfigurationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceConfigurationPathParams)
    ], UpdateServiceConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateServiceConfigurationUpdateServiceConfigurationRequest)
    ], UpdateServiceConfigurationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceConfigurationSecurity)
    ], UpdateServiceConfigurationRequest.prototype, "security", void 0);
    return UpdateServiceConfigurationRequest;
}(SpeakeasyBase));
export { UpdateServiceConfigurationRequest };
var UpdateServiceConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceConfigurationResponse, _super);
    function UpdateServiceConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateServiceConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConfiguration)
    ], UpdateServiceConfigurationResponse.prototype, "conversationsV1ServiceServiceConfiguration", void 0);
    return UpdateServiceConfigurationResponse;
}(SpeakeasyBase));
export { UpdateServiceConfigurationResponse };
