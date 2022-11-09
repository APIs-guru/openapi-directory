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
export var CREATEINVITE_SERVERS = [
    "https://chat.twilio.com",
];
var CreateInvitePathParams = /** @class */ (function (_super) {
    __extends(CreateInvitePathParams, _super);
    function CreateInvitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], CreateInvitePathParams.prototype, "channelSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateInvitePathParams.prototype, "serviceSid", void 0);
    return CreateInvitePathParams;
}(SpeakeasyBase));
export { CreateInvitePathParams };
var CreateInviteCreateInviteRequest = /** @class */ (function (_super) {
    __extends(CreateInviteCreateInviteRequest, _super);
    function CreateInviteCreateInviteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], CreateInviteCreateInviteRequest.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], CreateInviteCreateInviteRequest.prototype, "roleSid", void 0);
    return CreateInviteCreateInviteRequest;
}(SpeakeasyBase));
export { CreateInviteCreateInviteRequest };
var CreateInviteSecurity = /** @class */ (function (_super) {
    __extends(CreateInviteSecurity, _super);
    function CreateInviteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateInviteSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateInviteSecurity;
}(SpeakeasyBase));
export { CreateInviteSecurity };
var CreateInviteRequest = /** @class */ (function (_super) {
    __extends(CreateInviteRequest, _super);
    function CreateInviteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateInviteRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateInvitePathParams)
    ], CreateInviteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateInviteCreateInviteRequest)
    ], CreateInviteRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateInviteSecurity)
    ], CreateInviteRequest.prototype, "security", void 0);
    return CreateInviteRequest;
}(SpeakeasyBase));
export { CreateInviteRequest };
var CreateInviteResponse = /** @class */ (function (_super) {
    __extends(CreateInviteResponse, _super);
    function CreateInviteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateInviteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateInviteResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ChatV1ServiceChannelInvite)
    ], CreateInviteResponse.prototype, "chatV1ServiceChannelInvite", void 0);
    return CreateInviteResponse;
}(SpeakeasyBase));
export { CreateInviteResponse };
