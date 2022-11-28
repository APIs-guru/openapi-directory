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
var IpMessagingV1ServiceUser = /** @class */ (function (_super) {
    __extends(IpMessagingV1ServiceUser, _super);
    function IpMessagingV1ServiceUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceUser.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceUser.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], IpMessagingV1ServiceUser.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], IpMessagingV1ServiceUser.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceUser.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identity" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceUser.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_notifiable" }),
        __metadata("design:type", Boolean)
    ], IpMessagingV1ServiceUser.prototype, "isNotifiable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_online" }),
        __metadata("design:type", Boolean)
    ], IpMessagingV1ServiceUser.prototype, "isOnline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=joined_channels_count" }),
        __metadata("design:type", Number)
    ], IpMessagingV1ServiceUser.prototype, "joinedChannelsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], IpMessagingV1ServiceUser.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceUser.prototype, "roleSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceUser.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceUser.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceUser.prototype, "url", void 0);
    return IpMessagingV1ServiceUser;
}(SpeakeasyBase));
export { IpMessagingV1ServiceUser };
