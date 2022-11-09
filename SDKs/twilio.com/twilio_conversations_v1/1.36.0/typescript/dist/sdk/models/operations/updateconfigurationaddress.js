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
export var UPDATECONFIGURATIONADDRESS_SERVERS = [
    "https://conversations.twilio.com",
];
var UpdateConfigurationAddressPathParams = /** @class */ (function (_super) {
    __extends(UpdateConfigurationAddressPathParams, _super);
    function UpdateConfigurationAddressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateConfigurationAddressPathParams.prototype, "sid", void 0);
    return UpdateConfigurationAddressPathParams;
}(SpeakeasyBase));
export { UpdateConfigurationAddressPathParams };
var UpdateConfigurationAddressUpdateConfigurationAddressRequest = /** @class */ (function (_super) {
    __extends(UpdateConfigurationAddressUpdateConfigurationAddressRequest, _super);
    function UpdateConfigurationAddressUpdateConfigurationAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AutoCreation.ConversationServiceSid;" }),
        __metadata("design:type", String)
    ], UpdateConfigurationAddressUpdateConfigurationAddressRequest.prototype, "autoCreationConversationServiceSid", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateConfigurationAddressUpdateConfigurationAddressRequest.prototype, "autoCreationEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.StudioFlowSid;" }),
        __metadata("design:type", String)
    ], UpdateConfigurationAddressUpdateConfigurationAddressRequest.prototype, "autoCreationStudioFlowSid", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.StudioRetryCount;" }),
        __metadata("design:type", Number)
    ], UpdateConfigurationAddressUpdateConfigurationAddressRequest.prototype, "autoCreationStudioRetryCount", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.Type;" }),
        __metadata("design:type", String)
    ], UpdateConfigurationAddressUpdateConfigurationAddressRequest.prototype, "autoCreationType", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.WebhookFilters;" }),
        __metadata("design:type", Array)
    ], UpdateConfigurationAddressUpdateConfigurationAddressRequest.prototype, "autoCreationWebhookFilters", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.WebhookMethod;" }),
        __metadata("design:type", String)
    ], UpdateConfigurationAddressUpdateConfigurationAddressRequest.prototype, "autoCreationWebhookMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.WebhookUrl;" }),
        __metadata("design:type", String)
    ], UpdateConfigurationAddressUpdateConfigurationAddressRequest.prototype, "autoCreationWebhookUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateConfigurationAddressUpdateConfigurationAddressRequest.prototype, "friendlyName", void 0);
    return UpdateConfigurationAddressUpdateConfigurationAddressRequest;
}(SpeakeasyBase));
export { UpdateConfigurationAddressUpdateConfigurationAddressRequest };
var UpdateConfigurationAddressSecurity = /** @class */ (function (_super) {
    __extends(UpdateConfigurationAddressSecurity, _super);
    function UpdateConfigurationAddressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateConfigurationAddressSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateConfigurationAddressSecurity;
}(SpeakeasyBase));
export { UpdateConfigurationAddressSecurity };
var UpdateConfigurationAddressRequest = /** @class */ (function (_super) {
    __extends(UpdateConfigurationAddressRequest, _super);
    function UpdateConfigurationAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConfigurationAddressRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConfigurationAddressPathParams)
    ], UpdateConfigurationAddressRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateConfigurationAddressUpdateConfigurationAddressRequest)
    ], UpdateConfigurationAddressRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConfigurationAddressSecurity)
    ], UpdateConfigurationAddressRequest.prototype, "security", void 0);
    return UpdateConfigurationAddressRequest;
}(SpeakeasyBase));
export { UpdateConfigurationAddressRequest };
var UpdateConfigurationAddressResponse = /** @class */ (function (_super) {
    __extends(UpdateConfigurationAddressResponse, _super);
    function UpdateConfigurationAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConfigurationAddressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateConfigurationAddressResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ConfigurationAddress)
    ], UpdateConfigurationAddressResponse.prototype, "conversationsV1ConfigurationAddress", void 0);
    return UpdateConfigurationAddressResponse;
}(SpeakeasyBase));
export { UpdateConfigurationAddressResponse };
