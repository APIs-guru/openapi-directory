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
import { SessionEnumModeEnum } from "./sessionenummodeenum";
import { SessionEnumStatusEnum } from "./sessionenumstatusenum";
var ProxyV1ServiceSession = /** @class */ (function (_super) {
    __extends(ProxyV1ServiceSession, _super);
    function ProxyV1ServiceSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSession.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_reason" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSession.prototype, "closedReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], ProxyV1ServiceSession.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_ended" }),
        __metadata("design:type", Date)
    ], ProxyV1ServiceSession.prototype, "dateEnded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_expiry" }),
        __metadata("design:type", Date)
    ], ProxyV1ServiceSession.prototype, "dateExpiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_last_interaction" }),
        __metadata("design:type", Date)
    ], ProxyV1ServiceSession.prototype, "dateLastInteraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_started" }),
        __metadata("design:type", Date)
    ], ProxyV1ServiceSession.prototype, "dateStarted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], ProxyV1ServiceSession.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], ProxyV1ServiceSession.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSession.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSession.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSession.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSession.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], ProxyV1ServiceSession.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unique_name" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSession.prototype, "uniqueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ProxyV1ServiceSession.prototype, "url", void 0);
    return ProxyV1ServiceSession;
}(SpeakeasyBase));
export { ProxyV1ServiceSession };
