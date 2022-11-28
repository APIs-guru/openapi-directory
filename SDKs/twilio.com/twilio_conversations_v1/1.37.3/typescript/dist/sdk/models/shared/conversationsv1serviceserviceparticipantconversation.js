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
import { ServiceParticipantConversationEnumStateEnum } from "./serviceparticipantconversationenumstateenum";
var ConversationsV1ServiceServiceParticipantConversation = /** @class */ (function (_super) {
    __extends(ConversationsV1ServiceServiceParticipantConversation, _super);
    function ConversationsV1ServiceServiceParticipantConversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chat_service_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "chatServiceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_attributes" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "conversationAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_created_by" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "conversationCreatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_date_created" }),
        __metadata("design:type", Date)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "conversationDateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_date_updated" }),
        __metadata("design:type", Date)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "conversationDateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_friendly_name" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "conversationFriendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "conversationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_state" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "conversationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_timers" }),
        __metadata("design:type", Object)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "conversationTimers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_unique_name" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "conversationUniqueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participant_identity" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "participantIdentity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participant_messaging_binding" }),
        __metadata("design:type", Object)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "participantMessagingBinding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participant_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "participantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participant_user_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceParticipantConversation.prototype, "participantUserSid", void 0);
    return ConversationsV1ServiceServiceParticipantConversation;
}(SpeakeasyBase));
export { ConversationsV1ServiceServiceParticipantConversation };
