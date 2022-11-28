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
import { ParticipantEnumStatusEnum } from "./participantenumstatusenum";
var ApiV2010AccountConferenceParticipant = /** @class */ (function (_super) {
    __extends(ApiV2010AccountConferenceParticipant, _super);
    function ApiV2010AccountConferenceParticipant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConferenceParticipant.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConferenceParticipant.prototype, "callSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_sid_to_coach" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConferenceParticipant.prototype, "callSidToCoach", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coaching" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountConferenceParticipant.prototype, "coaching", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conference_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConferenceParticipant.prototype, "conferenceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConferenceParticipant.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConferenceParticipant.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_conference_on_exit" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountConferenceParticipant.prototype, "endConferenceOnExit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hold" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountConferenceParticipant.prototype, "hold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConferenceParticipant.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=muted" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountConferenceParticipant.prototype, "muted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_conference_on_enter" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountConferenceParticipant.prototype, "startConferenceOnEnter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConferenceParticipant.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConferenceParticipant.prototype, "uri", void 0);
    return ApiV2010AccountConferenceParticipant;
}(SpeakeasyBase));
export { ApiV2010AccountConferenceParticipant };
