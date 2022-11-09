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
var ChatV1ServiceChannelMessage = /** @class */ (function (_super) {
    __extends(ChatV1ServiceChannelMessage, _super);
    function ChatV1ServiceChannelMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ChatV1ServiceChannelMessage.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=attributes" }),
        __metadata("design:type", String)
    ], ChatV1ServiceChannelMessage.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ChatV1ServiceChannelMessage.prototype, "body", void 0);
    __decorate([
        Metadata({ data: "json, name=channel_sid" }),
        __metadata("design:type", String)
    ], ChatV1ServiceChannelMessage.prototype, "channelSid", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], ChatV1ServiceChannelMessage.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], ChatV1ServiceChannelMessage.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], ChatV1ServiceChannelMessage.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], ChatV1ServiceChannelMessage.prototype, "index", void 0);
    __decorate([
        Metadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], ChatV1ServiceChannelMessage.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ChatV1ServiceChannelMessage.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], ChatV1ServiceChannelMessage.prototype, "to", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ChatV1ServiceChannelMessage.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=was_edited" }),
        __metadata("design:type", Boolean)
    ], ChatV1ServiceChannelMessage.prototype, "wasEdited", void 0);
    return ChatV1ServiceChannelMessage;
}(SpeakeasyBase));
export { ChatV1ServiceChannelMessage };
