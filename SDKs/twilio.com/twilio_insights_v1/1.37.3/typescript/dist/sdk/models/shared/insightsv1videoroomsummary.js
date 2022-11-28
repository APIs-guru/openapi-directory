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
import { VideoRoomSummaryEnumCreatedMethodEnum } from "./videoroomsummaryenumcreatedmethodenum";
import { VideoRoomSummaryEnumEdgeLocationEnum } from "./videoroomsummaryenumedgelocationenum";
import { VideoRoomSummaryEnumEndReasonEnum } from "./videoroomsummaryenumendreasonenum";
import { VideoRoomSummaryEnumTwilioRealmEnum } from "./videoroomsummaryenumtwiliorealmenum";
import { VideoRoomSummaryEnumProcessingStateEnum } from "./videoroomsummaryenumprocessingstateenum";
import { VideoRoomSummaryEnumRoomStatusEnum } from "./videoroomsummaryenumroomstatusenum";
import { VideoRoomSummaryEnumRoomTypeEnum } from "./videoroomsummaryenumroomtypeenum";
export var InsightsV1VideoRoomSummaryStatusCallbackMethodEnum;
(function (InsightsV1VideoRoomSummaryStatusCallbackMethodEnum) {
    InsightsV1VideoRoomSummaryStatusCallbackMethodEnum["Head"] = "HEAD";
    InsightsV1VideoRoomSummaryStatusCallbackMethodEnum["Get"] = "GET";
    InsightsV1VideoRoomSummaryStatusCallbackMethodEnum["Post"] = "POST";
    InsightsV1VideoRoomSummaryStatusCallbackMethodEnum["Patch"] = "PATCH";
    InsightsV1VideoRoomSummaryStatusCallbackMethodEnum["Put"] = "PUT";
    InsightsV1VideoRoomSummaryStatusCallbackMethodEnum["Delete"] = "DELETE";
})(InsightsV1VideoRoomSummaryStatusCallbackMethodEnum || (InsightsV1VideoRoomSummaryStatusCallbackMethodEnum = {}));
var InsightsV1VideoRoomSummary = /** @class */ (function (_super) {
    __extends(InsightsV1VideoRoomSummary, _super);
    function InsightsV1VideoRoomSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummary.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=codecs" }),
        __metadata("design:type", Array)
    ], InsightsV1VideoRoomSummary.prototype, "codecs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concurrent_participants" }),
        __metadata("design:type", Number)
    ], InsightsV1VideoRoomSummary.prototype, "concurrentParticipants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=create_time" }),
        __metadata("design:type", Date)
    ], InsightsV1VideoRoomSummary.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_method" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummary.prototype, "createdMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration_sec" }),
        __metadata("design:type", Number)
    ], InsightsV1VideoRoomSummary.prototype, "durationSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edge_location" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummary.prototype, "edgeLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_reason" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummary.prototype, "endReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], InsightsV1VideoRoomSummary.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], InsightsV1VideoRoomSummary.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_concurrent_participants" }),
        __metadata("design:type", Number)
    ], InsightsV1VideoRoomSummary.prototype, "maxConcurrentParticipants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_participants" }),
        __metadata("design:type", Number)
    ], InsightsV1VideoRoomSummary.prototype, "maxParticipants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media_region" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummary.prototype, "mediaRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processing_state" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummary.prototype, "processingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recording_enabled" }),
        __metadata("design:type", Boolean)
    ], InsightsV1VideoRoomSummary.prototype, "recordingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=room_name" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummary.prototype, "roomName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=room_sid" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummary.prototype, "roomSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=room_status" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummary.prototype, "roomStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=room_type" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummary.prototype, "roomType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummary.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummary.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_participant_duration_sec" }),
        __metadata("design:type", Number)
    ], InsightsV1VideoRoomSummary.prototype, "totalParticipantDurationSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_recording_duration_sec" }),
        __metadata("design:type", Number)
    ], InsightsV1VideoRoomSummary.prototype, "totalRecordingDurationSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unique_participant_identities" }),
        __metadata("design:type", Number)
    ], InsightsV1VideoRoomSummary.prototype, "uniqueParticipantIdentities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unique_participants" }),
        __metadata("design:type", Number)
    ], InsightsV1VideoRoomSummary.prototype, "uniqueParticipants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummary.prototype, "url", void 0);
    return InsightsV1VideoRoomSummary;
}(SpeakeasyBase));
export { InsightsV1VideoRoomSummary };
