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
export var FetchInviteServerList = [
    "https://chat.twilio.com",
];
var FetchInvitePathParams = /** @class */ (function (_super) {
    __extends(FetchInvitePathParams, _super);
    function FetchInvitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], FetchInvitePathParams.prototype, "channelSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchInvitePathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchInvitePathParams.prototype, "sid", void 0);
    return FetchInvitePathParams;
}(SpeakeasyBase));
export { FetchInvitePathParams };
var FetchInviteSecurity = /** @class */ (function (_super) {
    __extends(FetchInviteSecurity, _super);
    function FetchInviteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchInviteSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchInviteSecurity;
}(SpeakeasyBase));
export { FetchInviteSecurity };
var FetchInviteRequest = /** @class */ (function (_super) {
    __extends(FetchInviteRequest, _super);
    function FetchInviteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchInviteRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchInvitePathParams)
    ], FetchInviteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchInviteSecurity)
    ], FetchInviteRequest.prototype, "security", void 0);
    return FetchInviteRequest;
}(SpeakeasyBase));
export { FetchInviteRequest };
var FetchInviteResponse = /** @class */ (function (_super) {
    __extends(FetchInviteResponse, _super);
    function FetchInviteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchInviteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchInviteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChatV1ServiceChannelInvite)
    ], FetchInviteResponse.prototype, "chatV1ServiceChannelInvite", void 0);
    return FetchInviteResponse;
}(SpeakeasyBase));
export { FetchInviteResponse };
