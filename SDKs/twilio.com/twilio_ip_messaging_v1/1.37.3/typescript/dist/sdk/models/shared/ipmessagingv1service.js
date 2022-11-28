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
var IpMessagingV1Service = /** @class */ (function (_super) {
    __extends(IpMessagingV1Service, _super);
    function IpMessagingV1Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV1Service.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumption_report_interval" }),
        __metadata("design:type", Number)
    ], IpMessagingV1Service.prototype, "consumptionReportInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], IpMessagingV1Service.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], IpMessagingV1Service.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_channel_creator_role_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV1Service.prototype, "defaultChannelCreatorRoleSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_channel_role_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV1Service.prototype, "defaultChannelRoleSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_service_role_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV1Service.prototype, "defaultServiceRoleSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], IpMessagingV1Service.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limits" }),
        __metadata("design:type", Object)
    ], IpMessagingV1Service.prototype, "limits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], IpMessagingV1Service.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications" }),
        __metadata("design:type", Object)
    ], IpMessagingV1Service.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_webhook_url" }),
        __metadata("design:type", String)
    ], IpMessagingV1Service.prototype, "postWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pre_webhook_url" }),
        __metadata("design:type", String)
    ], IpMessagingV1Service.prototype, "preWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reachability_enabled" }),
        __metadata("design:type", Boolean)
    ], IpMessagingV1Service.prototype, "reachabilityEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=read_status_enabled" }),
        __metadata("design:type", Boolean)
    ], IpMessagingV1Service.prototype, "readStatusEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], IpMessagingV1Service.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typing_indicator_timeout" }),
        __metadata("design:type", Number)
    ], IpMessagingV1Service.prototype, "typingIndicatorTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IpMessagingV1Service.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_filters" }),
        __metadata("design:type", Array)
    ], IpMessagingV1Service.prototype, "webhookFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_method" }),
        __metadata("design:type", String)
    ], IpMessagingV1Service.prototype, "webhookMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhooks" }),
        __metadata("design:type", Object)
    ], IpMessagingV1Service.prototype, "webhooks", void 0);
    return IpMessagingV1Service;
}(SpeakeasyBase));
export { IpMessagingV1Service };
