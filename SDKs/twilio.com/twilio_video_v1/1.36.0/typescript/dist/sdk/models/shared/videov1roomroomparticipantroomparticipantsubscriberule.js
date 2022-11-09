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
var VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules = /** @class */ (function (_super) {
    __extends(VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules, _super);
    function VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=all" }),
        __metadata("design:type", Boolean)
    ], VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules.prototype, "all", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules.prototype, "priority", void 0);
    __decorate([
        Metadata({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules.prototype, "publisher", void 0);
    __decorate([
        Metadata({ data: "json, name=track" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules.prototype, "track", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules.prototype, "type", void 0);
    return VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules;
}(SpeakeasyBase));
export { VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules };
var VideoV1RoomRoomParticipantRoomParticipantSubscribeRule = /** @class */ (function (_super) {
    __extends(VideoV1RoomRoomParticipantRoomParticipantSubscribeRule, _super);
    function VideoV1RoomRoomParticipantRoomParticipantSubscribeRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], VideoV1RoomRoomParticipantRoomParticipantSubscribeRule.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], VideoV1RoomRoomParticipantRoomParticipantSubscribeRule.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=participant_sid" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomParticipantRoomParticipantSubscribeRule.prototype, "participantSid", void 0);
    __decorate([
        Metadata({ data: "json, name=room_sid" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomParticipantRoomParticipantSubscribeRule.prototype, "roomSid", void 0);
    __decorate([
        Metadata({ data: "json, name=rules", elemType: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules }),
        __metadata("design:type", Array)
    ], VideoV1RoomRoomParticipantRoomParticipantSubscribeRule.prototype, "rules", void 0);
    return VideoV1RoomRoomParticipantRoomParticipantSubscribeRule;
}(SpeakeasyBase));
export { VideoV1RoomRoomParticipantRoomParticipantSubscribeRule };
