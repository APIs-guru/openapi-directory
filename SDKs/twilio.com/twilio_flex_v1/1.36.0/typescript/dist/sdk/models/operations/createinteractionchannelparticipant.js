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
export var CREATEINTERACTIONCHANNELPARTICIPANT_SERVERS = [
    "https://flex-api.twilio.com",
];
var CreateInteractionChannelParticipantPathParams = /** @class */ (function (_super) {
    __extends(CreateInteractionChannelParticipantPathParams, _super);
    function CreateInteractionChannelParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], CreateInteractionChannelParticipantPathParams.prototype, "channelSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" }),
        __metadata("design:type", String)
    ], CreateInteractionChannelParticipantPathParams.prototype, "interactionSid", void 0);
    return CreateInteractionChannelParticipantPathParams;
}(SpeakeasyBase));
export { CreateInteractionChannelParticipantPathParams };
var CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest = /** @class */ (function (_super) {
    __extends(CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest, _super);
    function CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=MediaProperties;" }),
        __metadata("design:type", Object)
    ], CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest.prototype, "mediaProperties", void 0);
    __decorate([
        Metadata({ data: "form, name=Type;" }),
        __metadata("design:type", String)
    ], CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest.prototype, "type", void 0);
    return CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest;
}(SpeakeasyBase));
export { CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest };
var CreateInteractionChannelParticipantSecurity = /** @class */ (function (_super) {
    __extends(CreateInteractionChannelParticipantSecurity, _super);
    function CreateInteractionChannelParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateInteractionChannelParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateInteractionChannelParticipantSecurity;
}(SpeakeasyBase));
export { CreateInteractionChannelParticipantSecurity };
var CreateInteractionChannelParticipantRequest = /** @class */ (function (_super) {
    __extends(CreateInteractionChannelParticipantRequest, _super);
    function CreateInteractionChannelParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateInteractionChannelParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateInteractionChannelParticipantPathParams)
    ], CreateInteractionChannelParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest)
    ], CreateInteractionChannelParticipantRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateInteractionChannelParticipantSecurity)
    ], CreateInteractionChannelParticipantRequest.prototype, "security", void 0);
    return CreateInteractionChannelParticipantRequest;
}(SpeakeasyBase));
export { CreateInteractionChannelParticipantRequest };
var CreateInteractionChannelParticipantResponse = /** @class */ (function (_super) {
    __extends(CreateInteractionChannelParticipantResponse, _super);
    function CreateInteractionChannelParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateInteractionChannelParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateInteractionChannelParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant)
    ], CreateInteractionChannelParticipantResponse.prototype, "flexV1InteractionInteractionChannelInteractionChannelParticipant", void 0);
    return CreateInteractionChannelParticipantResponse;
}(SpeakeasyBase));
export { CreateInteractionChannelParticipantResponse };
