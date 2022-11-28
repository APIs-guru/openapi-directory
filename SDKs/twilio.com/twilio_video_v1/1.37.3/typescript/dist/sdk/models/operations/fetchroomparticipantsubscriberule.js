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
export var FetchRoomParticipantSubscribeRuleServerList = [
    "https://video.twilio.com",
];
var FetchRoomParticipantSubscribeRulePathParams = /** @class */ (function (_super) {
    __extends(FetchRoomParticipantSubscribeRulePathParams, _super);
    function FetchRoomParticipantSubscribeRulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" }),
        __metadata("design:type", String)
    ], FetchRoomParticipantSubscribeRulePathParams.prototype, "participantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], FetchRoomParticipantSubscribeRulePathParams.prototype, "roomSid", void 0);
    return FetchRoomParticipantSubscribeRulePathParams;
}(SpeakeasyBase));
export { FetchRoomParticipantSubscribeRulePathParams };
var FetchRoomParticipantSubscribeRuleSecurity = /** @class */ (function (_super) {
    __extends(FetchRoomParticipantSubscribeRuleSecurity, _super);
    function FetchRoomParticipantSubscribeRuleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchRoomParticipantSubscribeRuleSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchRoomParticipantSubscribeRuleSecurity;
}(SpeakeasyBase));
export { FetchRoomParticipantSubscribeRuleSecurity };
var FetchRoomParticipantSubscribeRuleRequest = /** @class */ (function (_super) {
    __extends(FetchRoomParticipantSubscribeRuleRequest, _super);
    function FetchRoomParticipantSubscribeRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchRoomParticipantSubscribeRuleRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchRoomParticipantSubscribeRulePathParams)
    ], FetchRoomParticipantSubscribeRuleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchRoomParticipantSubscribeRuleSecurity)
    ], FetchRoomParticipantSubscribeRuleRequest.prototype, "security", void 0);
    return FetchRoomParticipantSubscribeRuleRequest;
}(SpeakeasyBase));
export { FetchRoomParticipantSubscribeRuleRequest };
var FetchRoomParticipantSubscribeRuleResponse = /** @class */ (function (_super) {
    __extends(FetchRoomParticipantSubscribeRuleResponse, _super);
    function FetchRoomParticipantSubscribeRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchRoomParticipantSubscribeRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchRoomParticipantSubscribeRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule)
    ], FetchRoomParticipantSubscribeRuleResponse.prototype, "videoV1RoomRoomParticipantRoomParticipantSubscribeRule", void 0);
    return FetchRoomParticipantSubscribeRuleResponse;
}(SpeakeasyBase));
export { FetchRoomParticipantSubscribeRuleResponse };
