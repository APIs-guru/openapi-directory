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
var PreviewWirelessRatePlan = /** @class */ (function (_super) {
    __extends(PreviewWirelessRatePlan, _super);
    function PreviewWirelessRatePlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], PreviewWirelessRatePlan.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_enabled" }),
        __metadata("design:type", Boolean)
    ], PreviewWirelessRatePlan.prototype, "dataEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_limit" }),
        __metadata("design:type", Number)
    ], PreviewWirelessRatePlan.prototype, "dataLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_metering" }),
        __metadata("design:type", String)
    ], PreviewWirelessRatePlan.prototype, "dataMetering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], PreviewWirelessRatePlan.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], PreviewWirelessRatePlan.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], PreviewWirelessRatePlan.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=international_roaming" }),
        __metadata("design:type", Array)
    ], PreviewWirelessRatePlan.prototype, "internationalRoaming", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messaging_enabled" }),
        __metadata("design:type", Boolean)
    ], PreviewWirelessRatePlan.prototype, "messagingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=national_roaming_enabled" }),
        __metadata("design:type", Boolean)
    ], PreviewWirelessRatePlan.prototype, "nationalRoamingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], PreviewWirelessRatePlan.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unique_name" }),
        __metadata("design:type", String)
    ], PreviewWirelessRatePlan.prototype, "uniqueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PreviewWirelessRatePlan.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_enabled" }),
        __metadata("design:type", Boolean)
    ], PreviewWirelessRatePlan.prototype, "voiceEnabled", void 0);
    return PreviewWirelessRatePlan;
}(SpeakeasyBase));
export { PreviewWirelessRatePlan };
