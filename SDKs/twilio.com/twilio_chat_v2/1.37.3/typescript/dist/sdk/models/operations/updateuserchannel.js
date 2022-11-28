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
export var UpdateUserChannelServerList = [
    "https://chat.twilio.com",
];
var UpdateUserChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateUserChannelPathParams, _super);
    function UpdateUserChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], UpdateUserChannelPathParams.prototype, "channelSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateUserChannelPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" }),
        __metadata("design:type", String)
    ], UpdateUserChannelPathParams.prototype, "userSid", void 0);
    return UpdateUserChannelPathParams;
}(SpeakeasyBase));
export { UpdateUserChannelPathParams };
var UpdateUserChannelUpdateUserChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateUserChannelUpdateUserChannelRequest, _super);
    function UpdateUserChannelUpdateUserChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=LastConsumedMessageIndex;" }),
        __metadata("design:type", Number)
    ], UpdateUserChannelUpdateUserChannelRequest.prototype, "lastConsumedMessageIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=LastConsumptionTimestamp;" }),
        __metadata("design:type", Date)
    ], UpdateUserChannelUpdateUserChannelRequest.prototype, "lastConsumptionTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=NotificationLevel;" }),
        __metadata("design:type", String)
    ], UpdateUserChannelUpdateUserChannelRequest.prototype, "notificationLevel", void 0);
    return UpdateUserChannelUpdateUserChannelRequest;
}(SpeakeasyBase));
export { UpdateUserChannelUpdateUserChannelRequest };
var UpdateUserChannelSecurity = /** @class */ (function (_super) {
    __extends(UpdateUserChannelSecurity, _super);
    function UpdateUserChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUserChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUserChannelSecurity;
}(SpeakeasyBase));
export { UpdateUserChannelSecurity };
var UpdateUserChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateUserChannelRequest, _super);
    function UpdateUserChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUserChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserChannelPathParams)
    ], UpdateUserChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUserChannelUpdateUserChannelRequest)
    ], UpdateUserChannelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserChannelSecurity)
    ], UpdateUserChannelRequest.prototype, "security", void 0);
    return UpdateUserChannelRequest;
}(SpeakeasyBase));
export { UpdateUserChannelRequest };
var UpdateUserChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateUserChannelResponse, _super);
    function UpdateUserChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUserChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateUserChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChatV2ServiceUserUserChannel)
    ], UpdateUserChannelResponse.prototype, "chatV2ServiceUserUserChannel", void 0);
    return UpdateUserChannelResponse;
}(SpeakeasyBase));
export { UpdateUserChannelResponse };
