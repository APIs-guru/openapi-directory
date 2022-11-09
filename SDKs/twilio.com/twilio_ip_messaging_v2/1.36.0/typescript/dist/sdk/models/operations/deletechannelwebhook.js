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
export var DELETECHANNELWEBHOOK_SERVERS = [
    "https://ip-messaging.twilio.com",
];
var DeleteChannelWebhookPathParams = /** @class */ (function (_super) {
    __extends(DeleteChannelWebhookPathParams, _super);
    function DeleteChannelWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], DeleteChannelWebhookPathParams.prototype, "channelSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteChannelWebhookPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteChannelWebhookPathParams.prototype, "sid", void 0);
    return DeleteChannelWebhookPathParams;
}(SpeakeasyBase));
export { DeleteChannelWebhookPathParams };
var DeleteChannelWebhookSecurity = /** @class */ (function (_super) {
    __extends(DeleteChannelWebhookSecurity, _super);
    function DeleteChannelWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteChannelWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteChannelWebhookSecurity;
}(SpeakeasyBase));
export { DeleteChannelWebhookSecurity };
var DeleteChannelWebhookRequest = /** @class */ (function (_super) {
    __extends(DeleteChannelWebhookRequest, _super);
    function DeleteChannelWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteChannelWebhookRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteChannelWebhookPathParams)
    ], DeleteChannelWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteChannelWebhookSecurity)
    ], DeleteChannelWebhookRequest.prototype, "security", void 0);
    return DeleteChannelWebhookRequest;
}(SpeakeasyBase));
export { DeleteChannelWebhookRequest };
var DeleteChannelWebhookResponse = /** @class */ (function (_super) {
    __extends(DeleteChannelWebhookResponse, _super);
    function DeleteChannelWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteChannelWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteChannelWebhookResponse.prototype, "statusCode", void 0);
    return DeleteChannelWebhookResponse;
}(SpeakeasyBase));
export { DeleteChannelWebhookResponse };
