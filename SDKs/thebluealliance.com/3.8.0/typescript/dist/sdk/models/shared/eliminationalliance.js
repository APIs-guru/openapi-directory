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
import { WltRecord } from "./wltrecord";
// EliminationAllianceBackup
/**
 * Backup team called in, may be null.
**/
var EliminationAllianceBackup = /** @class */ (function (_super) {
    __extends(EliminationAllianceBackup, _super);
    function EliminationAllianceBackup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in" }),
        __metadata("design:type", String)
    ], EliminationAllianceBackup.prototype, "in", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=out" }),
        __metadata("design:type", String)
    ], EliminationAllianceBackup.prototype, "out", void 0);
    return EliminationAllianceBackup;
}(SpeakeasyBase));
export { EliminationAllianceBackup };
var EliminationAllianceStatus = /** @class */ (function (_super) {
    __extends(EliminationAllianceStatus, _super);
    function EliminationAllianceStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_level_record" }),
        __metadata("design:type", WltRecord)
    ], EliminationAllianceStatus.prototype, "currentLevelRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=level" }),
        __metadata("design:type", String)
    ], EliminationAllianceStatus.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playoff_average" }),
        __metadata("design:type", Number)
    ], EliminationAllianceStatus.prototype, "playoffAverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=record" }),
        __metadata("design:type", WltRecord)
    ], EliminationAllianceStatus.prototype, "record", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], EliminationAllianceStatus.prototype, "status", void 0);
    return EliminationAllianceStatus;
}(SpeakeasyBase));
export { EliminationAllianceStatus };
var EliminationAlliance = /** @class */ (function (_super) {
    __extends(EliminationAlliance, _super);
    function EliminationAlliance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backup" }),
        __metadata("design:type", EliminationAllianceBackup)
    ], EliminationAlliance.prototype, "backup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declines" }),
        __metadata("design:type", Array)
    ], EliminationAlliance.prototype, "declines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EliminationAlliance.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=picks" }),
        __metadata("design:type", Array)
    ], EliminationAlliance.prototype, "picks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", EliminationAllianceStatus)
    ], EliminationAlliance.prototype, "status", void 0);
    return EliminationAlliance;
}(SpeakeasyBase));
export { EliminationAlliance };
