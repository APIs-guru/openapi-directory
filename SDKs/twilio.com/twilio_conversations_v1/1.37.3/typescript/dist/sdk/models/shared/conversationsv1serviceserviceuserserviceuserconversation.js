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
import { ServiceUserConversationEnumStateEnum } from "./serviceuserconversationenumstateenum";
import { ServiceUserConversationEnumNotificationLevelEnum } from "./serviceuserconversationenumnotificationlevelenum";
var ConversationsV1ServiceServiceUserServiceUserConversation = /** @class */ (function (_super) {
    __extends(ConversationsV1ServiceServiceUserServiceUserConversation, _super);
    function ConversationsV1ServiceServiceUserServiceUserConversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chat_service_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "chatServiceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "conversationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_state" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "conversationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_read_message_index" }),
        __metadata("design:type", Number)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "lastReadMessageIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_level" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "notificationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participant_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "participantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timers" }),
        __metadata("design:type", Object)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "timers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unique_name" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "uniqueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unread_messages_count" }),
        __metadata("design:type", Number)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "unreadMessagesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceUserServiceUserConversation.prototype, "userSid", void 0);
    return ConversationsV1ServiceServiceUserServiceUserConversation;
}(SpeakeasyBase));
export { ConversationsV1ServiceServiceUserServiceUserConversation };
