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
import * as shared from "../shared";
export var UpdateServiceServerList = [
    "https://chat.twilio.com",
];
var UpdateServicePathParams = /** @class */ (function (_super) {
    __extends(UpdateServicePathParams, _super);
    function UpdateServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateServicePathParams.prototype, "sid", void 0);
    return UpdateServicePathParams;
}(SpeakeasyBase));
export { UpdateServicePathParams };
export var UpdateServiceUpdateServiceRequestWebhookMethodEnum;
(function (UpdateServiceUpdateServiceRequestWebhookMethodEnum) {
    UpdateServiceUpdateServiceRequestWebhookMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestWebhookMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestWebhookMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestWebhookMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestWebhookMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestWebhookMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestWebhookMethodEnum || (UpdateServiceUpdateServiceRequestWebhookMethodEnum = {}));
var UpdateServiceUpdateServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceUpdateServiceRequest, _super);
    function UpdateServiceUpdateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConsumptionReportInterval;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "consumptionReportInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DefaultChannelCreatorRoleSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "defaultChannelCreatorRoleSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DefaultChannelRoleSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "defaultChannelRoleSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DefaultServiceRoleSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "defaultServiceRoleSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Limits.ChannelMembers;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "limitsChannelMembers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Limits.UserChannels;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "limitsUserChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Media.CompatibilityMessage;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "mediaCompatibilityMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.AddedToChannel.Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsAddedToChannelEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.AddedToChannel.Sound;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsAddedToChannelSound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.AddedToChannel.Template;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsAddedToChannelTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.InvitedToChannel.Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsInvitedToChannelEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.InvitedToChannel.Sound;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsInvitedToChannelSound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.InvitedToChannel.Template;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsInvitedToChannelTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.LogEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsLogEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.NewMessage.BadgeCountEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsNewMessageBadgeCountEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.NewMessage.Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsNewMessageEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.NewMessage.Sound;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsNewMessageSound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.NewMessage.Template;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsNewMessageTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.RemovedFromChannel.Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsRemovedFromChannelEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.RemovedFromChannel.Sound;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsRemovedFromChannelSound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Notifications.RemovedFromChannel.Template;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "notificationsRemovedFromChannelTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PostWebhookRetryCount;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "postWebhookRetryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PostWebhookUrl;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "postWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PreWebhookRetryCount;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "preWebhookRetryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PreWebhookUrl;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "preWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ReachabilityEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "reachabilityEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ReadStatusEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "readStatusEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TypingIndicatorTimeout;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "typingIndicatorTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=WebhookFilters;" }),
        __metadata("design:type", Array)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhookFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=WebhookMethod;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "webhookMethod", void 0);
    return UpdateServiceUpdateServiceRequest;
}(SpeakeasyBase));
export { UpdateServiceUpdateServiceRequest };
var UpdateServiceSecurity = /** @class */ (function (_super) {
    __extends(UpdateServiceSecurity, _super);
    function UpdateServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateServiceSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateServiceSecurity;
}(SpeakeasyBase));
export { UpdateServiceSecurity };
var UpdateServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceRequest, _super);
    function UpdateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateServiceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateServicePathParams)
    ], UpdateServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateServiceUpdateServiceRequest)
    ], UpdateServiceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateServiceSecurity)
    ], UpdateServiceRequest.prototype, "security", void 0);
    return UpdateServiceRequest;
}(SpeakeasyBase));
export { UpdateServiceRequest };
var UpdateServiceResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceResponse, _super);
    function UpdateServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChatV2Service)
    ], UpdateServiceResponse.prototype, "chatV2Service", void 0);
    return UpdateServiceResponse;
}(SpeakeasyBase));
export { UpdateServiceResponse };
