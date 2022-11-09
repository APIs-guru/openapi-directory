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
export var CREATEWEBHOOK_SERVERS = [
    "https://verify.twilio.com",
];
var CreateWebhookPathParams = /** @class */ (function (_super) {
    __extends(CreateWebhookPathParams, _super);
    function CreateWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateWebhookPathParams.prototype, "serviceSid", void 0);
    return CreateWebhookPathParams;
}(SpeakeasyBase));
export { CreateWebhookPathParams };
var CreateWebhookCreateWebhookRequest = /** @class */ (function (_super) {
    __extends(CreateWebhookCreateWebhookRequest, _super);
    function CreateWebhookCreateWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=EventTypes;" }),
        __metadata("design:type", Array)
    ], CreateWebhookCreateWebhookRequest.prototype, "eventTypes", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateWebhookCreateWebhookRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], CreateWebhookCreateWebhookRequest.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "form, name=Version;" }),
        __metadata("design:type", String)
    ], CreateWebhookCreateWebhookRequest.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "form, name=WebhookUrl;" }),
        __metadata("design:type", String)
    ], CreateWebhookCreateWebhookRequest.prototype, "webhookUrl", void 0);
    return CreateWebhookCreateWebhookRequest;
}(SpeakeasyBase));
export { CreateWebhookCreateWebhookRequest };
var CreateWebhookSecurity = /** @class */ (function (_super) {
    __extends(CreateWebhookSecurity, _super);
    function CreateWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateWebhookSecurity;
}(SpeakeasyBase));
export { CreateWebhookSecurity };
var CreateWebhookRequest = /** @class */ (function (_super) {
    __extends(CreateWebhookRequest, _super);
    function CreateWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateWebhookRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateWebhookPathParams)
    ], CreateWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateWebhookCreateWebhookRequest)
    ], CreateWebhookRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateWebhookSecurity)
    ], CreateWebhookRequest.prototype, "security", void 0);
    return CreateWebhookRequest;
}(SpeakeasyBase));
export { CreateWebhookRequest };
var CreateWebhookResponse = /** @class */ (function (_super) {
    __extends(CreateWebhookResponse, _super);
    function CreateWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VerifyV2ServiceWebhook)
    ], CreateWebhookResponse.prototype, "verifyV2ServiceWebhook", void 0);
    return CreateWebhookResponse;
}(SpeakeasyBase));
export { CreateWebhookResponse };
