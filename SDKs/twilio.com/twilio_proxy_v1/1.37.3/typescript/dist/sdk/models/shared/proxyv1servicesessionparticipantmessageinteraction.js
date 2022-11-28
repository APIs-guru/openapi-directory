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
import { MessageInteractionEnumResourceStatusEnum } from "./messageinteractionenumresourcestatusenum";
import { MessageInteractionEnumTypeEnum } from "./messageinteractionenumtypeenum";
var ProxyV1ServiceSessionParticipantMessageInteraction = /** @class */ (function (_super) {
    __extends(ProxyV1ServiceSessionParticipantMessageInteraction, _super);
    function ProxyV1ServiceSessionParticipantMessageInteraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_participant_sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "inboundParticipantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_resource_sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "inboundResourceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_resource_status" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "inboundResourceStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_resource_type" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "inboundResourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_resource_url" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "inboundResourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound_participant_sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "outboundParticipantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound_resource_sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "outboundResourceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound_resource_status" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "outboundResourceStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound_resource_type" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "outboundResourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound_resource_url" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "outboundResourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participant_sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "participantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=session_sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "sessionSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSessionParticipantMessageInteraction.prototype, "url", void 0);
    return ProxyV1ServiceSessionParticipantMessageInteraction;
}(SpeakeasyBase));
export { ProxyV1ServiceSessionParticipantMessageInteraction };
