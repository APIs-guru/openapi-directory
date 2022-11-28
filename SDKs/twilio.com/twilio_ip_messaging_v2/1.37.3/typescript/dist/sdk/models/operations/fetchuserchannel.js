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
export var FetchUserChannelServerList = [
    "https://ip-messaging.twilio.com",
];
var FetchUserChannelPathParams = /** @class */ (function (_super) {
    __extends(FetchUserChannelPathParams, _super);
    function FetchUserChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], FetchUserChannelPathParams.prototype, "channelSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchUserChannelPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" }),
        __metadata("design:type", String)
    ], FetchUserChannelPathParams.prototype, "userSid", void 0);
    return FetchUserChannelPathParams;
}(SpeakeasyBase));
export { FetchUserChannelPathParams };
var FetchUserChannelSecurity = /** @class */ (function (_super) {
    __extends(FetchUserChannelSecurity, _super);
    function FetchUserChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchUserChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchUserChannelSecurity;
}(SpeakeasyBase));
export { FetchUserChannelSecurity };
var FetchUserChannelRequest = /** @class */ (function (_super) {
    __extends(FetchUserChannelRequest, _super);
    function FetchUserChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchUserChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchUserChannelPathParams)
    ], FetchUserChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchUserChannelSecurity)
    ], FetchUserChannelRequest.prototype, "security", void 0);
    return FetchUserChannelRequest;
}(SpeakeasyBase));
export { FetchUserChannelRequest };
var FetchUserChannelResponse = /** @class */ (function (_super) {
    __extends(FetchUserChannelResponse, _super);
    function FetchUserChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchUserChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchUserChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IpMessagingV2ServiceUserUserChannel)
    ], FetchUserChannelResponse.prototype, "ipMessagingV2ServiceUserUserChannel", void 0);
    return FetchUserChannelResponse;
}(SpeakeasyBase));
export { FetchUserChannelResponse };
