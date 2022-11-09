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
import { RoomRecordingEnumCodecEnum } from "./roomrecordingenumcodecenum";
import { RoomRecordingEnumFormatEnum } from "./roomrecordingenumformatenum";
import { RoomRecordingEnumStatusEnum } from "./roomrecordingenumstatusenum";
import { RoomRecordingEnumTypeEnum } from "./roomrecordingenumtypeenum";
var VideoV1RoomRoomRecording = /** @class */ (function (_super) {
    __extends(VideoV1RoomRoomRecording, _super);
    function VideoV1RoomRoomRecording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecording.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=codec" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecording.prototype, "codec", void 0);
    __decorate([
        Metadata({ data: "json, name=container_format" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecording.prototype, "containerFormat", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], VideoV1RoomRoomRecording.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], VideoV1RoomRoomRecording.prototype, "duration", void 0);
    __decorate([
        Metadata({ data: "json, name=grouping_sids" }),
        __metadata("design:type", Object)
    ], VideoV1RoomRoomRecording.prototype, "groupingSids", void 0);
    __decorate([
        Metadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], VideoV1RoomRoomRecording.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=media_external_location" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecording.prototype, "mediaExternalLocation", void 0);
    __decorate([
        Metadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], VideoV1RoomRoomRecording.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "json, name=room_sid" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecording.prototype, "roomSid", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecording.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], VideoV1RoomRoomRecording.prototype, "size", void 0);
    __decorate([
        Metadata({ data: "json, name=source_sid" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecording.prototype, "sourceSid", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecording.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=track_name" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecording.prototype, "trackName", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecording.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecording.prototype, "url", void 0);
    return VideoV1RoomRoomRecording;
}(SpeakeasyBase));
export { VideoV1RoomRoomRecording };
