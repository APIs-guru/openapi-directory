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
import { RoomEnumRoomStatusEnum } from "./roomenumroomstatusenum";
import { RoomEnumRoomTypeEnum } from "./roomenumroomtypeenum";
export var VideoV1RoomStatusCallbackMethodEnum;
(function (VideoV1RoomStatusCallbackMethodEnum) {
    VideoV1RoomStatusCallbackMethodEnum["Head"] = "HEAD";
    VideoV1RoomStatusCallbackMethodEnum["Get"] = "GET";
    VideoV1RoomStatusCallbackMethodEnum["Post"] = "POST";
    VideoV1RoomStatusCallbackMethodEnum["Patch"] = "PATCH";
    VideoV1RoomStatusCallbackMethodEnum["Put"] = "PUT";
    VideoV1RoomStatusCallbackMethodEnum["Delete"] = "DELETE";
})(VideoV1RoomStatusCallbackMethodEnum || (VideoV1RoomStatusCallbackMethodEnum = {}));
var VideoV1Room = /** @class */ (function (_super) {
    __extends(VideoV1Room, _super);
    function VideoV1Room() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], VideoV1Room.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=audio_only" }),
        __metadata("design:type", Boolean)
    ], VideoV1Room.prototype, "audioOnly", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], VideoV1Room.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], VideoV1Room.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], VideoV1Room.prototype, "duration", void 0);
    __decorate([
        Metadata({ data: "json, name=empty_room_timeout" }),
        __metadata("design:type", Number)
    ], VideoV1Room.prototype, "emptyRoomTimeout", void 0);
    __decorate([
        Metadata({ data: "json, name=enable_turn" }),
        __metadata("design:type", Boolean)
    ], VideoV1Room.prototype, "enableTurn", void 0);
    __decorate([
        Metadata({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], VideoV1Room.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=large_room" }),
        __metadata("design:type", Boolean)
    ], VideoV1Room.prototype, "largeRoom", void 0);
    __decorate([
        Metadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], VideoV1Room.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=max_concurrent_published_tracks" }),
        __metadata("design:type", Number)
    ], VideoV1Room.prototype, "maxConcurrentPublishedTracks", void 0);
    __decorate([
        Metadata({ data: "json, name=max_participant_duration" }),
        __metadata("design:type", Number)
    ], VideoV1Room.prototype, "maxParticipantDuration", void 0);
    __decorate([
        Metadata({ data: "json, name=max_participants" }),
        __metadata("design:type", Number)
    ], VideoV1Room.prototype, "maxParticipants", void 0);
    __decorate([
        Metadata({ data: "json, name=media_region" }),
        __metadata("design:type", String)
    ], VideoV1Room.prototype, "mediaRegion", void 0);
    __decorate([
        Metadata({ data: "json, name=record_participants_on_connect" }),
        __metadata("design:type", Boolean)
    ], VideoV1Room.prototype, "recordParticipantsOnConnect", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], VideoV1Room.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], VideoV1Room.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], VideoV1Room.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], VideoV1Room.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], VideoV1Room.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=unique_name" }),
        __metadata("design:type", String)
    ], VideoV1Room.prototype, "uniqueName", void 0);
    __decorate([
        Metadata({ data: "json, name=unused_room_timeout" }),
        __metadata("design:type", Number)
    ], VideoV1Room.prototype, "unusedRoomTimeout", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], VideoV1Room.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=video_codecs" }),
        __metadata("design:type", Array)
    ], VideoV1Room.prototype, "videoCodecs", void 0);
    return VideoV1Room;
}(SpeakeasyBase));
export { VideoV1Room };
