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
export var UpdateWebhookServerList = [
    "https://verify.twilio.com",
];
var UpdateWebhookPathParams = /** @class */ (function (_super) {
    __extends(UpdateWebhookPathParams, _super);
    function UpdateWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateWebhookPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateWebhookPathParams.prototype, "sid", void 0);
    return UpdateWebhookPathParams;
}(SpeakeasyBase));
export { UpdateWebhookPathParams };
var UpdateWebhookUpdateWebhookRequest = /** @class */ (function (_super) {
    __extends(UpdateWebhookUpdateWebhookRequest, _super);
    function UpdateWebhookUpdateWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EventTypes;" }),
        __metadata("design:type", Array)
    ], UpdateWebhookUpdateWebhookRequest.prototype, "eventTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateWebhookUpdateWebhookRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateWebhookUpdateWebhookRequest.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Version;" }),
        __metadata("design:type", String)
    ], UpdateWebhookUpdateWebhookRequest.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=WebhookUrl;" }),
        __metadata("design:type", String)
    ], UpdateWebhookUpdateWebhookRequest.prototype, "webhookUrl", void 0);
    return UpdateWebhookUpdateWebhookRequest;
}(SpeakeasyBase));
export { UpdateWebhookUpdateWebhookRequest };
var UpdateWebhookSecurity = /** @class */ (function (_super) {
    __extends(UpdateWebhookSecurity, _super);
    function UpdateWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateWebhookSecurity;
}(SpeakeasyBase));
export { UpdateWebhookSecurity };
var UpdateWebhookRequest = /** @class */ (function (_super) {
    __extends(UpdateWebhookRequest, _super);
    function UpdateWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWebhookRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWebhookPathParams)
    ], UpdateWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateWebhookUpdateWebhookRequest)
    ], UpdateWebhookRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWebhookSecurity)
    ], UpdateWebhookRequest.prototype, "security", void 0);
    return UpdateWebhookRequest;
}(SpeakeasyBase));
export { UpdateWebhookRequest };
var UpdateWebhookResponse = /** @class */ (function (_super) {
    __extends(UpdateWebhookResponse, _super);
    function UpdateWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyV2ServiceWebhook)
    ], UpdateWebhookResponse.prototype, "verifyV2ServiceWebhook", void 0);
    return UpdateWebhookResponse;
}(SpeakeasyBase));
export { UpdateWebhookResponse };
