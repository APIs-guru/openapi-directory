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
import { ConferenceEnumConferenceEndReasonEnum } from "./conferenceenumconferenceendreasonenum";
import { ConferenceEnumRegionEnum } from "./conferenceenumregionenum";
import { ConferenceEnumProcessingStateEnum } from "./conferenceenumprocessingstateenum";
import { ConferenceEnumConferenceStatusEnum } from "./conferenceenumconferencestatusenum";
var InsightsV1Conference = /** @class */ (function (_super) {
    __extends(InsightsV1Conference, _super);
    function InsightsV1Conference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], InsightsV1Conference.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conference_sid" }),
        __metadata("design:type", String)
    ], InsightsV1Conference.prototype, "conferenceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connect_duration_seconds" }),
        __metadata("design:type", Number)
    ], InsightsV1Conference.prototype, "connectDurationSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=create_time" }),
        __metadata("design:type", Date)
    ], InsightsV1Conference.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detected_issues" }),
        __metadata("design:type", Object)
    ], InsightsV1Conference.prototype, "detectedIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration_seconds" }),
        __metadata("design:type", Number)
    ], InsightsV1Conference.prototype, "durationSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_reason" }),
        __metadata("design:type", String)
    ], InsightsV1Conference.prototype, "endReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], InsightsV1Conference.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ended_by" }),
        __metadata("design:type", String)
    ], InsightsV1Conference.prototype, "endedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], InsightsV1Conference.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], InsightsV1Conference.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_concurrent_participants" }),
        __metadata("design:type", Number)
    ], InsightsV1Conference.prototype, "maxConcurrentParticipants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_participants" }),
        __metadata("design:type", Number)
    ], InsightsV1Conference.prototype, "maxParticipants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mixer_region" }),
        __metadata("design:type", String)
    ], InsightsV1Conference.prototype, "mixerRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mixer_region_requested" }),
        __metadata("design:type", String)
    ], InsightsV1Conference.prototype, "mixerRegionRequested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processing_state" }),
        __metadata("design:type", String)
    ], InsightsV1Conference.prototype, "processingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recording_enabled" }),
        __metadata("design:type", Boolean)
    ], InsightsV1Conference.prototype, "recordingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], InsightsV1Conference.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], InsightsV1Conference.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag_info" }),
        __metadata("design:type", Object)
    ], InsightsV1Conference.prototype, "tagInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], InsightsV1Conference.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unique_participants" }),
        __metadata("design:type", Number)
    ], InsightsV1Conference.prototype, "uniqueParticipants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], InsightsV1Conference.prototype, "url", void 0);
    return InsightsV1Conference;
}(SpeakeasyBase));
export { InsightsV1Conference };
