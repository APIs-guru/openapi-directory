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
export var UpdateMessageServerList = [
    "https://ip-messaging.twilio.com",
];
var UpdateMessagePathParams = /** @class */ (function (_super) {
    __extends(UpdateMessagePathParams, _super);
    function UpdateMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], UpdateMessagePathParams.prototype, "channelSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateMessagePathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateMessagePathParams.prototype, "sid", void 0);
    return UpdateMessagePathParams;
}(SpeakeasyBase));
export { UpdateMessagePathParams };
var UpdateMessageUpdateMessageRequest = /** @class */ (function (_super) {
    __extends(UpdateMessageUpdateMessageRequest, _super);
    function UpdateMessageUpdateMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateMessageUpdateMessageRequest.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Body;" }),
        __metadata("design:type", String)
    ], UpdateMessageUpdateMessageRequest.prototype, "body", void 0);
    return UpdateMessageUpdateMessageRequest;
}(SpeakeasyBase));
export { UpdateMessageUpdateMessageRequest };
var UpdateMessageSecurity = /** @class */ (function (_super) {
    __extends(UpdateMessageSecurity, _super);
    function UpdateMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateMessageSecurity;
}(SpeakeasyBase));
export { UpdateMessageSecurity };
var UpdateMessageRequest = /** @class */ (function (_super) {
    __extends(UpdateMessageRequest, _super);
    function UpdateMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateMessageRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMessagePathParams)
    ], UpdateMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateMessageUpdateMessageRequest)
    ], UpdateMessageRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMessageSecurity)
    ], UpdateMessageRequest.prototype, "security", void 0);
    return UpdateMessageRequest;
}(SpeakeasyBase));
export { UpdateMessageRequest };
var UpdateMessageResponse = /** @class */ (function (_super) {
    __extends(UpdateMessageResponse, _super);
    function UpdateMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateMessageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IpMessagingV1ServiceChannelMessage)
    ], UpdateMessageResponse.prototype, "ipMessagingV1ServiceChannelMessage", void 0);
    return UpdateMessageResponse;
}(SpeakeasyBase));
export { UpdateMessageResponse };
