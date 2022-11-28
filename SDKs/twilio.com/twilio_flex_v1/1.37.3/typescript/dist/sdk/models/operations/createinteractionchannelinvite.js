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
export var CreateInteractionChannelInviteServerList = [
    "https://flex-api.twilio.com",
];
var CreateInteractionChannelInvitePathParams = /** @class */ (function (_super) {
    __extends(CreateInteractionChannelInvitePathParams, _super);
    function CreateInteractionChannelInvitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], CreateInteractionChannelInvitePathParams.prototype, "channelSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" }),
        __metadata("design:type", String)
    ], CreateInteractionChannelInvitePathParams.prototype, "interactionSid", void 0);
    return CreateInteractionChannelInvitePathParams;
}(SpeakeasyBase));
export { CreateInteractionChannelInvitePathParams };
var CreateInteractionChannelInviteCreateInteractionChannelInviteRequest = /** @class */ (function (_super) {
    __extends(CreateInteractionChannelInviteCreateInteractionChannelInviteRequest, _super);
    function CreateInteractionChannelInviteCreateInteractionChannelInviteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Routing;" }),
        __metadata("design:type", Object)
    ], CreateInteractionChannelInviteCreateInteractionChannelInviteRequest.prototype, "routing", void 0);
    return CreateInteractionChannelInviteCreateInteractionChannelInviteRequest;
}(SpeakeasyBase));
export { CreateInteractionChannelInviteCreateInteractionChannelInviteRequest };
var CreateInteractionChannelInviteSecurity = /** @class */ (function (_super) {
    __extends(CreateInteractionChannelInviteSecurity, _super);
    function CreateInteractionChannelInviteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateInteractionChannelInviteSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateInteractionChannelInviteSecurity;
}(SpeakeasyBase));
export { CreateInteractionChannelInviteSecurity };
var CreateInteractionChannelInviteRequest = /** @class */ (function (_super) {
    __extends(CreateInteractionChannelInviteRequest, _super);
    function CreateInteractionChannelInviteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateInteractionChannelInviteRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInteractionChannelInvitePathParams)
    ], CreateInteractionChannelInviteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateInteractionChannelInviteCreateInteractionChannelInviteRequest)
    ], CreateInteractionChannelInviteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInteractionChannelInviteSecurity)
    ], CreateInteractionChannelInviteRequest.prototype, "security", void 0);
    return CreateInteractionChannelInviteRequest;
}(SpeakeasyBase));
export { CreateInteractionChannelInviteRequest };
var CreateInteractionChannelInviteResponse = /** @class */ (function (_super) {
    __extends(CreateInteractionChannelInviteResponse, _super);
    function CreateInteractionChannelInviteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateInteractionChannelInviteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateInteractionChannelInviteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FlexV1InteractionInteractionChannelInteractionChannelInvite)
    ], CreateInteractionChannelInviteResponse.prototype, "flexV1InteractionInteractionChannelInteractionChannelInvite", void 0);
    return CreateInteractionChannelInviteResponse;
}(SpeakeasyBase));
export { CreateInteractionChannelInviteResponse };
