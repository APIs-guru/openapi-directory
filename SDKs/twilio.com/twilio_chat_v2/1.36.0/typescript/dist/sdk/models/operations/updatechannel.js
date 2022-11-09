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
export var UPDATECHANNEL_SERVERS = [
    "https://chat.twilio.com",
];
var UpdateChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateChannelPathParams, _super);
    function UpdateChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateChannelPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateChannelPathParams.prototype, "sid", void 0);
    return UpdateChannelPathParams;
}(SpeakeasyBase));
export { UpdateChannelPathParams };
var UpdateChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateChannelHeaders, _super);
    function UpdateChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return UpdateChannelHeaders;
}(SpeakeasyBase));
export { UpdateChannelHeaders };
var UpdateChannelUpdateChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateChannelUpdateChannelRequest, _super);
    function UpdateChannelUpdateChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateChannelUpdateChannelRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=CreatedBy;" }),
        __metadata("design:type", String)
    ], UpdateChannelUpdateChannelRequest.prototype, "createdBy", void 0);
    __decorate([
        Metadata({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], UpdateChannelUpdateChannelRequest.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], UpdateChannelUpdateChannelRequest.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateChannelUpdateChannelRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateChannelUpdateChannelRequest.prototype, "uniqueName", void 0);
    return UpdateChannelUpdateChannelRequest;
}(SpeakeasyBase));
export { UpdateChannelUpdateChannelRequest };
var UpdateChannelSecurity = /** @class */ (function (_super) {
    __extends(UpdateChannelSecurity, _super);
    function UpdateChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateChannelSecurity;
}(SpeakeasyBase));
export { UpdateChannelSecurity };
var UpdateChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateChannelRequest, _super);
    function UpdateChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateChannelPathParams)
    ], UpdateChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateChannelHeaders)
    ], UpdateChannelRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateChannelUpdateChannelRequest)
    ], UpdateChannelRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateChannelSecurity)
    ], UpdateChannelRequest.prototype, "security", void 0);
    return UpdateChannelRequest;
}(SpeakeasyBase));
export { UpdateChannelRequest };
var UpdateChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateChannelResponse, _super);
    function UpdateChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ChatV2ServiceChannel)
    ], UpdateChannelResponse.prototype, "chatV2ServiceChannel", void 0);
    return UpdateChannelResponse;
}(SpeakeasyBase));
export { UpdateChannelResponse };
