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
export var UPDATEROOMPARTICIPANTSUBSCRIBERULE_SERVERS = [
    "https://video.twilio.com",
];
var UpdateRoomParticipantSubscribeRulePathParams = /** @class */ (function (_super) {
    __extends(UpdateRoomParticipantSubscribeRulePathParams, _super);
    function UpdateRoomParticipantSubscribeRulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" }),
        __metadata("design:type", String)
    ], UpdateRoomParticipantSubscribeRulePathParams.prototype, "participantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], UpdateRoomParticipantSubscribeRulePathParams.prototype, "roomSid", void 0);
    return UpdateRoomParticipantSubscribeRulePathParams;
}(SpeakeasyBase));
export { UpdateRoomParticipantSubscribeRulePathParams };
var UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest = /** @class */ (function (_super) {
    __extends(UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest, _super);
    function UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Rules;" }),
        __metadata("design:type", Object)
    ], UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest.prototype, "rules", void 0);
    return UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest;
}(SpeakeasyBase));
export { UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest };
var UpdateRoomParticipantSubscribeRuleSecurity = /** @class */ (function (_super) {
    __extends(UpdateRoomParticipantSubscribeRuleSecurity, _super);
    function UpdateRoomParticipantSubscribeRuleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateRoomParticipantSubscribeRuleSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateRoomParticipantSubscribeRuleSecurity;
}(SpeakeasyBase));
export { UpdateRoomParticipantSubscribeRuleSecurity };
var UpdateRoomParticipantSubscribeRuleRequest = /** @class */ (function (_super) {
    __extends(UpdateRoomParticipantSubscribeRuleRequest, _super);
    function UpdateRoomParticipantSubscribeRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateRoomParticipantSubscribeRuleRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRoomParticipantSubscribeRulePathParams)
    ], UpdateRoomParticipantSubscribeRuleRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest)
    ], UpdateRoomParticipantSubscribeRuleRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRoomParticipantSubscribeRuleSecurity)
    ], UpdateRoomParticipantSubscribeRuleRequest.prototype, "security", void 0);
    return UpdateRoomParticipantSubscribeRuleRequest;
}(SpeakeasyBase));
export { UpdateRoomParticipantSubscribeRuleRequest };
var UpdateRoomParticipantSubscribeRuleResponse = /** @class */ (function (_super) {
    __extends(UpdateRoomParticipantSubscribeRuleResponse, _super);
    function UpdateRoomParticipantSubscribeRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateRoomParticipantSubscribeRuleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateRoomParticipantSubscribeRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule)
    ], UpdateRoomParticipantSubscribeRuleResponse.prototype, "videoV1RoomRoomParticipantRoomParticipantSubscribeRule", void 0);
    return UpdateRoomParticipantSubscribeRuleResponse;
}(SpeakeasyBase));
export { UpdateRoomParticipantSubscribeRuleResponse };
