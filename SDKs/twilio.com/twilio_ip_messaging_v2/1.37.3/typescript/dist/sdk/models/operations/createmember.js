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
export var CreateMemberServerList = [
    "https://ip-messaging.twilio.com",
];
var CreateMemberPathParams = /** @class */ (function (_super) {
    __extends(CreateMemberPathParams, _super);
    function CreateMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], CreateMemberPathParams.prototype, "channelSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateMemberPathParams.prototype, "serviceSid", void 0);
    return CreateMemberPathParams;
}(SpeakeasyBase));
export { CreateMemberPathParams };
var CreateMemberHeaders = /** @class */ (function (_super) {
    __extends(CreateMemberHeaders, _super);
    function CreateMemberHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], CreateMemberHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return CreateMemberHeaders;
}(SpeakeasyBase));
export { CreateMemberHeaders };
var CreateMemberCreateMemberRequest = /** @class */ (function (_super) {
    __extends(CreateMemberCreateMemberRequest, _super);
    function CreateMemberCreateMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateMemberCreateMemberRequest.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], CreateMemberCreateMemberRequest.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], CreateMemberCreateMemberRequest.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], CreateMemberCreateMemberRequest.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=LastConsumedMessageIndex;" }),
        __metadata("design:type", Number)
    ], CreateMemberCreateMemberRequest.prototype, "lastConsumedMessageIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=LastConsumptionTimestamp;" }),
        __metadata("design:type", Date)
    ], CreateMemberCreateMemberRequest.prototype, "lastConsumptionTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], CreateMemberCreateMemberRequest.prototype, "roleSid", void 0);
    return CreateMemberCreateMemberRequest;
}(SpeakeasyBase));
export { CreateMemberCreateMemberRequest };
var CreateMemberSecurity = /** @class */ (function (_super) {
    __extends(CreateMemberSecurity, _super);
    function CreateMemberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateMemberSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateMemberSecurity;
}(SpeakeasyBase));
export { CreateMemberSecurity };
var CreateMemberRequest = /** @class */ (function (_super) {
    __extends(CreateMemberRequest, _super);
    function CreateMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateMemberRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMemberPathParams)
    ], CreateMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMemberHeaders)
    ], CreateMemberRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateMemberCreateMemberRequest)
    ], CreateMemberRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMemberSecurity)
    ], CreateMemberRequest.prototype, "security", void 0);
    return CreateMemberRequest;
}(SpeakeasyBase));
export { CreateMemberRequest };
var CreateMemberResponse = /** @class */ (function (_super) {
    __extends(CreateMemberResponse, _super);
    function CreateMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateMemberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateMemberResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IpMessagingV2ServiceChannelMember)
    ], CreateMemberResponse.prototype, "ipMessagingV2ServiceChannelMember", void 0);
    return CreateMemberResponse;
}(SpeakeasyBase));
export { CreateMemberResponse };
