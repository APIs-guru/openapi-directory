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
import { RoomParticipantAnonymizeEnumStatusEnum } from "./roomparticipantanonymizeenumstatusenum";
var VideoV1RoomRoomParticipantRoomParticipantAnonymize = /** @class */ (function (_super) {
    __extends(VideoV1RoomRoomParticipantRoomParticipantAnonymize, _super);
    function VideoV1RoomRoomParticipantRoomParticipantAnonymize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomParticipantRoomParticipantAnonymize.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], VideoV1RoomRoomParticipantRoomParticipantAnonymize.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], VideoV1RoomRoomParticipantRoomParticipantAnonymize.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], VideoV1RoomRoomParticipantRoomParticipantAnonymize.prototype, "duration", void 0);
    __decorate([
        Metadata({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], VideoV1RoomRoomParticipantRoomParticipantAnonymize.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=identity" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomParticipantRoomParticipantAnonymize.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "json, name=room_sid" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomParticipantRoomParticipantAnonymize.prototype, "roomSid", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomParticipantRoomParticipantAnonymize.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], VideoV1RoomRoomParticipantRoomParticipantAnonymize.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomParticipantRoomParticipantAnonymize.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomParticipantRoomParticipantAnonymize.prototype, "url", void 0);
    return VideoV1RoomRoomParticipantRoomParticipantAnonymize;
}(SpeakeasyBase));
export { VideoV1RoomRoomParticipantRoomParticipantAnonymize };
