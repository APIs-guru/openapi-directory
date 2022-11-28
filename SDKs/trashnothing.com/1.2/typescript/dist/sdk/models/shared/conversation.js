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
import { Message } from "./message";
import { User } from "./user";
// Conversation
/**
 * A conversation between the current user and another user.
**/
var Conversation = /** @class */ (function (_super) {
    __extends(Conversation, _super);
    function Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], Conversation.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], Conversation.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_id" }),
        __metadata("design:type", String)
    ], Conversation.prototype, "conversationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_message_date" }),
        __metadata("design:type", Date)
    ], Conversation.prototype, "lastMessageDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: Message }),
        __metadata("design:type", Array)
    ], Conversation.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_unread_messages" }),
        __metadata("design:type", Number)
    ], Conversation.prototype, "numUnreadMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", User)
    ], Conversation.prototype, "user", void 0);
    return Conversation;
}(SpeakeasyBase));
export { Conversation };
