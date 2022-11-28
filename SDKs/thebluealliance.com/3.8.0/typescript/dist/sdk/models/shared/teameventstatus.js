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
import { TeamEventStatusAlliance } from "./teameventstatusalliance";
import { TeamEventStatusPlayoff } from "./teameventstatusplayoff";
import { TeamEventStatusRank } from "./teameventstatusrank";
var TeamEventStatus = /** @class */ (function (_super) {
    __extends(TeamEventStatus, _super);
    function TeamEventStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alliance" }),
        __metadata("design:type", TeamEventStatusAlliance)
    ], TeamEventStatus.prototype, "alliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alliance_status_str" }),
        __metadata("design:type", String)
    ], TeamEventStatus.prototype, "allianceStatusStr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_match_key" }),
        __metadata("design:type", String)
    ], TeamEventStatus.prototype, "lastMatchKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_match_key" }),
        __metadata("design:type", String)
    ], TeamEventStatus.prototype, "nextMatchKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overall_status_str" }),
        __metadata("design:type", String)
    ], TeamEventStatus.prototype, "overallStatusStr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playoff" }),
        __metadata("design:type", TeamEventStatusPlayoff)
    ], TeamEventStatus.prototype, "playoff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playoff_status_str" }),
        __metadata("design:type", String)
    ], TeamEventStatus.prototype, "playoffStatusStr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qual" }),
        __metadata("design:type", TeamEventStatusRank)
    ], TeamEventStatus.prototype, "qual", void 0);
    return TeamEventStatus;
}(SpeakeasyBase));
export { TeamEventStatus };
