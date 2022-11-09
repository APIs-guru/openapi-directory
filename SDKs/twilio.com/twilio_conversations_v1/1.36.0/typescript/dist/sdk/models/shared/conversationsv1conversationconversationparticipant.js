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
var ConversationsV1ConversationConversationParticipant = /** @class */ (function (_super) {
    __extends(ConversationsV1ConversationConversationParticipant, _super);
    function ConversationsV1ConversationConversationParticipant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ConversationConversationParticipant.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=attributes" }),
        __metadata("design:type", String)
    ], ConversationsV1ConversationConversationParticipant.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "json, name=conversation_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ConversationConversationParticipant.prototype, "conversationSid", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], ConversationsV1ConversationConversationParticipant.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], ConversationsV1ConversationConversationParticipant.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=identity" }),
        __metadata("design:type", String)
    ], ConversationsV1ConversationConversationParticipant.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "json, name=last_read_message_index" }),
        __metadata("design:type", Number)
    ], ConversationsV1ConversationConversationParticipant.prototype, "lastReadMessageIndex", void 0);
    __decorate([
        Metadata({ data: "json, name=last_read_timestamp" }),
        __metadata("design:type", String)
    ], ConversationsV1ConversationConversationParticipant.prototype, "lastReadTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=messaging_binding" }),
        __metadata("design:type", Object)
    ], ConversationsV1ConversationConversationParticipant.prototype, "messagingBinding", void 0);
    __decorate([
        Metadata({ data: "json, name=role_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ConversationConversationParticipant.prototype, "roleSid", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ConversationConversationParticipant.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ConversationsV1ConversationConversationParticipant.prototype, "url", void 0);
    return ConversationsV1ConversationConversationParticipant;
}(SpeakeasyBase));
export { ConversationsV1ConversationConversationParticipant };
