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
export var CREATECONFIGURATIONADDRESS_SERVERS = [
    "https://conversations.twilio.com",
];
var CreateConfigurationAddressCreateConfigurationAddressRequest = /** @class */ (function (_super) {
    __extends(CreateConfigurationAddressCreateConfigurationAddressRequest, _super);
    function CreateConfigurationAddressCreateConfigurationAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Address;" }),
        __metadata("design:type", String)
    ], CreateConfigurationAddressCreateConfigurationAddressRequest.prototype, "address", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.ConversationServiceSid;" }),
        __metadata("design:type", String)
    ], CreateConfigurationAddressCreateConfigurationAddressRequest.prototype, "autoCreationConversationServiceSid", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.Enabled;" }),
        __metadata("design:type", Boolean)
    ], CreateConfigurationAddressCreateConfigurationAddressRequest.prototype, "autoCreationEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.StudioFlowSid;" }),
        __metadata("design:type", String)
    ], CreateConfigurationAddressCreateConfigurationAddressRequest.prototype, "autoCreationStudioFlowSid", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.StudioRetryCount;" }),
        __metadata("design:type", Number)
    ], CreateConfigurationAddressCreateConfigurationAddressRequest.prototype, "autoCreationStudioRetryCount", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.Type;" }),
        __metadata("design:type", String)
    ], CreateConfigurationAddressCreateConfigurationAddressRequest.prototype, "autoCreationType", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.WebhookFilters;" }),
        __metadata("design:type", Array)
    ], CreateConfigurationAddressCreateConfigurationAddressRequest.prototype, "autoCreationWebhookFilters", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.WebhookMethod;" }),
        __metadata("design:type", String)
    ], CreateConfigurationAddressCreateConfigurationAddressRequest.prototype, "autoCreationWebhookMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=AutoCreation.WebhookUrl;" }),
        __metadata("design:type", String)
    ], CreateConfigurationAddressCreateConfigurationAddressRequest.prototype, "autoCreationWebhookUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateConfigurationAddressCreateConfigurationAddressRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Type;" }),
        __metadata("design:type", String)
    ], CreateConfigurationAddressCreateConfigurationAddressRequest.prototype, "type", void 0);
    return CreateConfigurationAddressCreateConfigurationAddressRequest;
}(SpeakeasyBase));
export { CreateConfigurationAddressCreateConfigurationAddressRequest };
var CreateConfigurationAddressSecurity = /** @class */ (function (_super) {
    __extends(CreateConfigurationAddressSecurity, _super);
    function CreateConfigurationAddressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateConfigurationAddressSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateConfigurationAddressSecurity;
}(SpeakeasyBase));
export { CreateConfigurationAddressSecurity };
var CreateConfigurationAddressRequest = /** @class */ (function (_super) {
    __extends(CreateConfigurationAddressRequest, _super);
    function CreateConfigurationAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateConfigurationAddressRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateConfigurationAddressCreateConfigurationAddressRequest)
    ], CreateConfigurationAddressRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateConfigurationAddressSecurity)
    ], CreateConfigurationAddressRequest.prototype, "security", void 0);
    return CreateConfigurationAddressRequest;
}(SpeakeasyBase));
export { CreateConfigurationAddressRequest };
var CreateConfigurationAddressResponse = /** @class */ (function (_super) {
    __extends(CreateConfigurationAddressResponse, _super);
    function CreateConfigurationAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateConfigurationAddressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateConfigurationAddressResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ConfigurationAddress)
    ], CreateConfigurationAddressResponse.prototype, "conversationsV1ConfigurationAddress", void 0);
    return CreateConfigurationAddressResponse;
}(SpeakeasyBase));
export { CreateConfigurationAddressResponse };
