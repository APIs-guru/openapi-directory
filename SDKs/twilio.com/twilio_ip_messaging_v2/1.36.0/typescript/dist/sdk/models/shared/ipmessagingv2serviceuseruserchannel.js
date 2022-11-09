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
import { UserChannelEnumNotificationLevelEnum } from "./userchannelenumnotificationlevelenum";
import { UserChannelEnumChannelStatusEnum } from "./userchannelenumchannelstatusenum";
var IpMessagingV2ServiceUserUserChannel = /** @class */ (function (_super) {
    __extends(IpMessagingV2ServiceUserUserChannel, _super);
    function IpMessagingV2ServiceUserUserChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceUserUserChannel.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=channel_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceUserUserChannel.prototype, "channelSid", void 0);
    __decorate([
        Metadata({ data: "json, name=last_consumed_message_index" }),
        __metadata("design:type", Number)
    ], IpMessagingV2ServiceUserUserChannel.prototype, "lastConsumedMessageIndex", void 0);
    __decorate([
        Metadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], IpMessagingV2ServiceUserUserChannel.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=member_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceUserUserChannel.prototype, "memberSid", void 0);
    __decorate([
        Metadata({ data: "json, name=notification_level" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceUserUserChannel.prototype, "notificationLevel", void 0);
    __decorate([
        Metadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceUserUserChannel.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceUserUserChannel.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=unread_messages_count" }),
        __metadata("design:type", Number)
    ], IpMessagingV2ServiceUserUserChannel.prototype, "unreadMessagesCount", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceUserUserChannel.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=user_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceUserUserChannel.prototype, "userSid", void 0);
    return IpMessagingV2ServiceUserUserChannel;
}(SpeakeasyBase));
export { IpMessagingV2ServiceUserUserChannel };
