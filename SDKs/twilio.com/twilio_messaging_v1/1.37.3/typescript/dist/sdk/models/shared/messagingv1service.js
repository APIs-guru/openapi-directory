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
import { ServiceEnumScanMessageContentEnum } from "./serviceenumscanmessagecontentenum";
export var MessagingV1ServiceFallbackMethodEnum;
(function (MessagingV1ServiceFallbackMethodEnum) {
    MessagingV1ServiceFallbackMethodEnum["Head"] = "HEAD";
    MessagingV1ServiceFallbackMethodEnum["Get"] = "GET";
    MessagingV1ServiceFallbackMethodEnum["Post"] = "POST";
    MessagingV1ServiceFallbackMethodEnum["Patch"] = "PATCH";
    MessagingV1ServiceFallbackMethodEnum["Put"] = "PUT";
    MessagingV1ServiceFallbackMethodEnum["Delete"] = "DELETE";
})(MessagingV1ServiceFallbackMethodEnum || (MessagingV1ServiceFallbackMethodEnum = {}));
export var MessagingV1ServiceInboundMethodEnum;
(function (MessagingV1ServiceInboundMethodEnum) {
    MessagingV1ServiceInboundMethodEnum["Head"] = "HEAD";
    MessagingV1ServiceInboundMethodEnum["Get"] = "GET";
    MessagingV1ServiceInboundMethodEnum["Post"] = "POST";
    MessagingV1ServiceInboundMethodEnum["Patch"] = "PATCH";
    MessagingV1ServiceInboundMethodEnum["Put"] = "PUT";
    MessagingV1ServiceInboundMethodEnum["Delete"] = "DELETE";
})(MessagingV1ServiceInboundMethodEnum || (MessagingV1ServiceInboundMethodEnum = {}));
var MessagingV1Service = /** @class */ (function (_super) {
    __extends(MessagingV1Service, _super);
    function MessagingV1Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], MessagingV1Service.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=area_code_geomatch" }),
        __metadata("design:type", Boolean)
    ], MessagingV1Service.prototype, "areaCodeGeomatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], MessagingV1Service.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], MessagingV1Service.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fallback_method" }),
        __metadata("design:type", String)
    ], MessagingV1Service.prototype, "fallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fallback_to_long_code" }),
        __metadata("design:type", Boolean)
    ], MessagingV1Service.prototype, "fallbackToLongCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fallback_url" }),
        __metadata("design:type", String)
    ], MessagingV1Service.prototype, "fallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], MessagingV1Service.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_method" }),
        __metadata("design:type", String)
    ], MessagingV1Service.prototype, "inboundMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_request_url" }),
        __metadata("design:type", String)
    ], MessagingV1Service.prototype, "inboundRequestUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], MessagingV1Service.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mms_converter" }),
        __metadata("design:type", Boolean)
    ], MessagingV1Service.prototype, "mmsConverter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scan_message_content" }),
        __metadata("design:type", String)
    ], MessagingV1Service.prototype, "scanMessageContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], MessagingV1Service.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smart_encoding" }),
        __metadata("design:type", Boolean)
    ], MessagingV1Service.prototype, "smartEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], MessagingV1Service.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticky_sender" }),
        __metadata("design:type", Boolean)
    ], MessagingV1Service.prototype, "stickySender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=synchronous_validation" }),
        __metadata("design:type", Boolean)
    ], MessagingV1Service.prototype, "synchronousValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MessagingV1Service.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=us_app_to_person_registered" }),
        __metadata("design:type", Boolean)
    ], MessagingV1Service.prototype, "usAppToPersonRegistered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_inbound_webhook_on_number" }),
        __metadata("design:type", Boolean)
    ], MessagingV1Service.prototype, "useInboundWebhookOnNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usecase" }),
        __metadata("design:type", String)
    ], MessagingV1Service.prototype, "usecase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validity_period" }),
        __metadata("design:type", Number)
    ], MessagingV1Service.prototype, "validityPeriod", void 0);
    return MessagingV1Service;
}(SpeakeasyBase));
export { MessagingV1Service };
