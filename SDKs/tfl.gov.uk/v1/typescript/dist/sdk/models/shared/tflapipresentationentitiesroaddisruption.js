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
import { SystemDataSpatialDbGeography } from "./systemdataspatialdbgeography";
import { TflApiPresentationEntitiesRoadDisruptionSchedule } from "./tflapipresentationentitiesroaddisruptionschedule";
import { TflApiPresentationEntitiesRoadDisruptionImpactArea } from "./tflapipresentationentitiesroaddisruptionimpactarea";
import { TflApiPresentationEntitiesRoadDisruptionLine } from "./tflapipresentationentitiesroaddisruptionline";
import { TflApiPresentationEntitiesRoadProject } from "./tflapipresentationentitiesroadproject";
import { TflApiPresentationEntitiesStreet } from "./tflapipresentationentitiesstreet";
var TflApiPresentationEntitiesRoadDisruption = /** @class */ (function (_super) {
    __extends(TflApiPresentationEntitiesRoadDisruption, _super);
    function TflApiPresentationEntitiesRoadDisruption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=corridorIds" }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "corridorIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentUpdate" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "currentUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentUpdateDateTime" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "currentUpdateDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDateTime" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "endDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geography" }),
        __metadata("design:type", SystemDataSpatialDbGeography)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "geography", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geometry" }),
        __metadata("design:type", SystemDataSpatialDbGeography)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "geometry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasClosures" }),
        __metadata("design:type", Boolean)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "hasClosures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isProvisional" }),
        __metadata("design:type", Boolean)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "isProvisional", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedTime" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=levelOfInterest" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "levelOfInterest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkText" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "linkText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkUrl" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "linkUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ordinal" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "ordinal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=point" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "point", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishEndDate" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "publishEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishStartDate" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "publishStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recurringSchedules", elemType: TflApiPresentationEntitiesRoadDisruptionSchedule }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "recurringSchedules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roadDisruptionImpactAreas", elemType: TflApiPresentationEntitiesRoadDisruptionImpactArea }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "roadDisruptionImpactAreas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roadDisruptionLines", elemType: TflApiPresentationEntitiesRoadDisruptionLine }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "roadDisruptionLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roadProject" }),
        __metadata("design:type", TflApiPresentationEntitiesRoadProject)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "roadProject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDateTime" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "startDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streets", elemType: TflApiPresentationEntitiesStreet }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "streets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subCategory" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "subCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeFrame" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadDisruption.prototype, "url", void 0);
    return TflApiPresentationEntitiesRoadDisruption;
}(SpeakeasyBase));
export { TflApiPresentationEntitiesRoadDisruption };
