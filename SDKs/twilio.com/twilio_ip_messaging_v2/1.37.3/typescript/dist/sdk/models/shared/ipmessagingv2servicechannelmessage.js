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
var IpMessagingV2ServiceChannelMessage = /** @class */ (function (_super) {
    __extends(IpMessagingV2ServiceChannelMessage, _super);
    function IpMessagingV2ServiceChannelMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceChannelMessage.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceChannelMessage.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceChannelMessage.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceChannelMessage.prototype, "channelSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], IpMessagingV2ServiceChannelMessage.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], IpMessagingV2ServiceChannelMessage.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceChannelMessage.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], IpMessagingV2ServiceChannelMessage.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_updated_by" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceChannelMessage.prototype, "lastUpdatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media" }),
        __metadata("design:type", Object)
    ], IpMessagingV2ServiceChannelMessage.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceChannelMessage.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceChannelMessage.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceChannelMessage.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceChannelMessage.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceChannelMessage.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=was_edited" }),
        __metadata("design:type", Boolean)
    ], IpMessagingV2ServiceChannelMessage.prototype, "wasEdited", void 0);
    return IpMessagingV2ServiceChannelMessage;
}(SpeakeasyBase));
export { IpMessagingV2ServiceChannelMessage };
