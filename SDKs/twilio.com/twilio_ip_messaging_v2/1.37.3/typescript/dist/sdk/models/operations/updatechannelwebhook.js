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
export var UpdateChannelWebhookServerList = [
    "https://ip-messaging.twilio.com",
];
var UpdateChannelWebhookPathParams = /** @class */ (function (_super) {
    __extends(UpdateChannelWebhookPathParams, _super);
    function UpdateChannelWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], UpdateChannelWebhookPathParams.prototype, "channelSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateChannelWebhookPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateChannelWebhookPathParams.prototype, "sid", void 0);
    return UpdateChannelWebhookPathParams;
}(SpeakeasyBase));
export { UpdateChannelWebhookPathParams };
var UpdateChannelWebhookUpdateChannelWebhookRequest = /** @class */ (function (_super) {
    __extends(UpdateChannelWebhookUpdateChannelWebhookRequest, _super);
    function UpdateChannelWebhookUpdateChannelWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Filters;" }),
        __metadata("design:type", Array)
    ], UpdateChannelWebhookUpdateChannelWebhookRequest.prototype, "configurationFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.FlowSid;" }),
        __metadata("design:type", String)
    ], UpdateChannelWebhookUpdateChannelWebhookRequest.prototype, "configurationFlowSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Method;" }),
        __metadata("design:type", String)
    ], UpdateChannelWebhookUpdateChannelWebhookRequest.prototype, "configurationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.RetryCount;" }),
        __metadata("design:type", Number)
    ], UpdateChannelWebhookUpdateChannelWebhookRequest.prototype, "configurationRetryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Triggers;" }),
        __metadata("design:type", Array)
    ], UpdateChannelWebhookUpdateChannelWebhookRequest.prototype, "configurationTriggers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration.Url;" }),
        __metadata("design:type", String)
    ], UpdateChannelWebhookUpdateChannelWebhookRequest.prototype, "configurationUrl", void 0);
    return UpdateChannelWebhookUpdateChannelWebhookRequest;
}(SpeakeasyBase));
export { UpdateChannelWebhookUpdateChannelWebhookRequest };
var UpdateChannelWebhookSecurity = /** @class */ (function (_super) {
    __extends(UpdateChannelWebhookSecurity, _super);
    function UpdateChannelWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateChannelWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateChannelWebhookSecurity;
}(SpeakeasyBase));
export { UpdateChannelWebhookSecurity };
var UpdateChannelWebhookRequest = /** @class */ (function (_super) {
    __extends(UpdateChannelWebhookRequest, _super);
    function UpdateChannelWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateChannelWebhookRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateChannelWebhookPathParams)
    ], UpdateChannelWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateChannelWebhookUpdateChannelWebhookRequest)
    ], UpdateChannelWebhookRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateChannelWebhookSecurity)
    ], UpdateChannelWebhookRequest.prototype, "security", void 0);
    return UpdateChannelWebhookRequest;
}(SpeakeasyBase));
export { UpdateChannelWebhookRequest };
var UpdateChannelWebhookResponse = /** @class */ (function (_super) {
    __extends(UpdateChannelWebhookResponse, _super);
    function UpdateChannelWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateChannelWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateChannelWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IpMessagingV2ServiceChannelChannelWebhook)
    ], UpdateChannelWebhookResponse.prototype, "ipMessagingV2ServiceChannelChannelWebhook", void 0);
    return UpdateChannelWebhookResponse;
}(SpeakeasyBase));
export { UpdateChannelWebhookResponse };
