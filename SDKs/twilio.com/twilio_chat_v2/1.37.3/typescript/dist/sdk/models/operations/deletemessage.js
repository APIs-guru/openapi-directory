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
export var DeleteMessageServerList = [
    "https://chat.twilio.com",
];
var DeleteMessagePathParams = /** @class */ (function (_super) {
    __extends(DeleteMessagePathParams, _super);
    function DeleteMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], DeleteMessagePathParams.prototype, "channelSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteMessagePathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteMessagePathParams.prototype, "sid", void 0);
    return DeleteMessagePathParams;
}(SpeakeasyBase));
export { DeleteMessagePathParams };
var DeleteMessageHeaders = /** @class */ (function (_super) {
    __extends(DeleteMessageHeaders, _super);
    function DeleteMessageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], DeleteMessageHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return DeleteMessageHeaders;
}(SpeakeasyBase));
export { DeleteMessageHeaders };
var DeleteMessageSecurity = /** @class */ (function (_super) {
    __extends(DeleteMessageSecurity, _super);
    function DeleteMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteMessageSecurity;
}(SpeakeasyBase));
export { DeleteMessageSecurity };
var DeleteMessageRequest = /** @class */ (function (_super) {
    __extends(DeleteMessageRequest, _super);
    function DeleteMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteMessageRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMessagePathParams)
    ], DeleteMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMessageHeaders)
    ], DeleteMessageRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMessageSecurity)
    ], DeleteMessageRequest.prototype, "security", void 0);
    return DeleteMessageRequest;
}(SpeakeasyBase));
export { DeleteMessageRequest };
var DeleteMessageResponse = /** @class */ (function (_super) {
    __extends(DeleteMessageResponse, _super);
    function DeleteMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteMessageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteMessageResponse.prototype, "statusCode", void 0);
    return DeleteMessageResponse;
}(SpeakeasyBase));
export { DeleteMessageResponse };
