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
var V3StopStaffing = /** @class */ (function (_super) {
    __extends(V3StopStaffing, _super);
    function V3StopStaffing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fri_am_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "friAmFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fri_am_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "friAmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fri_pm_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "friPmFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fri_pm_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "friPmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mon_am_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "monAmFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mon_am_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "monAmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mon_pm_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "monPmFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mon_pm_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "monPmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ph_additional_text" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "phAdditionalText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ph_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "phFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ph_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "phTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sat_am_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "satAmFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sat_am_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "satAmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sat_pm_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "satPmFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sat_pm_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "satPmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sun_am_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "sunAmFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sun_am_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "sunAmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sun_pm_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "sunPmFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sun_pm_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "sunPmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thu_am_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "thuAmFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thu_am_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "thuAmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thu_pm_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "thuPmFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thu_pm_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "thuPmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tue_am_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "tueAmFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tue_am_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "tueAmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tue_pm_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "tuePmFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tue_pm_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "tuePmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wed_am_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "wedAmFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wed_am_to" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "wedAmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wed_pm_To" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "wedPmTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wed_pm_from" }),
        __metadata("design:type", String)
    ], V3StopStaffing.prototype, "wedPmFrom", void 0);
    return V3StopStaffing;
}(SpeakeasyBase));
export { V3StopStaffing };
