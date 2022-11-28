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
import { ConferenceParticipantEnumCallDirectionEnum } from "./conferenceparticipantenumcalldirectionenum";
import { ConferenceParticipantEnumCallStatusEnum } from "./conferenceparticipantenumcallstatusenum";
import { ConferenceParticipantEnumCallTypeEnum } from "./conferenceparticipantenumcalltypeenum";
import { ConferenceParticipantEnumRegionEnum } from "./conferenceparticipantenumregionenum";
import { ConferenceParticipantEnumJitterBufferSizeEnum } from "./conferenceparticipantenumjitterbuffersizeenum";
import { ConferenceParticipantEnumProcessingStateEnum } from "./conferenceparticipantenumprocessingstateenum";
var InsightsV1ConferenceConferenceParticipant = /** @class */ (function (_super) {
    __extends(InsightsV1ConferenceConferenceParticipant, _super);
    function InsightsV1ConferenceConferenceParticipant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_direction" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "callDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_sid" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "callSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_status" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "callStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_type" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "callType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coached_participants" }),
        __metadata("design:type", Array)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "coachedParticipants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conference_region" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "conferenceRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conference_sid" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "conferenceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration_seconds" }),
        __metadata("design:type", Number)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "durationSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Object)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_coach" }),
        __metadata("design:type", Boolean)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "isCoach", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_moderator" }),
        __metadata("design:type", Boolean)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "isModerator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jitter_buffer_size" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "jitterBufferSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=join_time" }),
        __metadata("design:type", Date)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "joinTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leave_time" }),
        __metadata("design:type", Date)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "leaveTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", Object)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound_queue_length" }),
        __metadata("design:type", Number)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "outboundQueueLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound_time_in_queue" }),
        __metadata("design:type", Number)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "outboundTimeInQueue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participant_region" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "participantRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participant_sid" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "participantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processing_state" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "processingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Object)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], InsightsV1ConferenceConferenceParticipant.prototype, "url", void 0);
    return InsightsV1ConferenceConferenceParticipant;
}(SpeakeasyBase));
export { InsightsV1ConferenceConferenceParticipant };
