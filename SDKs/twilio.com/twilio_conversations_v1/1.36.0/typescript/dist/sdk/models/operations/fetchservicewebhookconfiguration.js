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
export var FETCHSERVICEWEBHOOKCONFIGURATION_SERVERS = [
    "https://conversations.twilio.com",
];
var FetchServiceWebhookConfigurationPathParams = /** @class */ (function (_super) {
    __extends(FetchServiceWebhookConfigurationPathParams, _super);
    function FetchServiceWebhookConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], FetchServiceWebhookConfigurationPathParams.prototype, "chatServiceSid", void 0);
    return FetchServiceWebhookConfigurationPathParams;
}(SpeakeasyBase));
export { FetchServiceWebhookConfigurationPathParams };
var FetchServiceWebhookConfigurationSecurity = /** @class */ (function (_super) {
    __extends(FetchServiceWebhookConfigurationSecurity, _super);
    function FetchServiceWebhookConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchServiceWebhookConfigurationSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchServiceWebhookConfigurationSecurity;
}(SpeakeasyBase));
export { FetchServiceWebhookConfigurationSecurity };
var FetchServiceWebhookConfigurationRequest = /** @class */ (function (_super) {
    __extends(FetchServiceWebhookConfigurationRequest, _super);
    function FetchServiceWebhookConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchServiceWebhookConfigurationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchServiceWebhookConfigurationPathParams)
    ], FetchServiceWebhookConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchServiceWebhookConfigurationSecurity)
    ], FetchServiceWebhookConfigurationRequest.prototype, "security", void 0);
    return FetchServiceWebhookConfigurationRequest;
}(SpeakeasyBase));
export { FetchServiceWebhookConfigurationRequest };
var FetchServiceWebhookConfigurationResponse = /** @class */ (function (_super) {
    __extends(FetchServiceWebhookConfigurationResponse, _super);
    function FetchServiceWebhookConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchServiceWebhookConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchServiceWebhookConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration)
    ], FetchServiceWebhookConfigurationResponse.prototype, "conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration", void 0);
    return FetchServiceWebhookConfigurationResponse;
}(SpeakeasyBase));
export { FetchServiceWebhookConfigurationResponse };
