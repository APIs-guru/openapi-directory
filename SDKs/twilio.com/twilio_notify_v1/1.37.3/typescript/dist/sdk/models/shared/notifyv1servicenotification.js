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
import { NotificationEnumPriorityEnum } from "./notificationenumpriorityenum";
var NotifyV1ServiceNotification = /** @class */ (function (_super) {
    __extends(NotifyV1ServiceNotification, _super);
    function NotifyV1ServiceNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceNotification.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceNotification.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alexa" }),
        __metadata("design:type", Object)
    ], NotifyV1ServiceNotification.prototype, "alexa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apn" }),
        __metadata("design:type", Object)
    ], NotifyV1ServiceNotification.prototype, "apn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceNotification.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], NotifyV1ServiceNotification.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], NotifyV1ServiceNotification.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facebook_messenger" }),
        __metadata("design:type", Object)
    ], NotifyV1ServiceNotification.prototype, "facebookMessenger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fcm" }),
        __metadata("design:type", Object)
    ], NotifyV1ServiceNotification.prototype, "fcm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcm" }),
        __metadata("design:type", Object)
    ], NotifyV1ServiceNotification.prototype, "gcm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identities" }),
        __metadata("design:type", Array)
    ], NotifyV1ServiceNotification.prototype, "identities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceNotification.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segments" }),
        __metadata("design:type", Array)
    ], NotifyV1ServiceNotification.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceNotification.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceNotification.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms" }),
        __metadata("design:type", Object)
    ], NotifyV1ServiceNotification.prototype, "sms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sound" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceNotification.prototype, "sound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], NotifyV1ServiceNotification.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceNotification.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], NotifyV1ServiceNotification.prototype, "ttl", void 0);
    return NotifyV1ServiceNotification;
}(SpeakeasyBase));
export { NotifyV1ServiceNotification };
