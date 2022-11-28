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
import { TflApiPresentationEntitiesPathAttribute } from "./tflapipresentationentitiespathattribute";
export var TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum;
(function (TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum) {
    TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum["North"] = "North";
    TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum["NorthEast"] = "NorthEast";
    TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum["East"] = "East";
    TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum["SouthEast"] = "SouthEast";
    TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum["South"] = "South";
    TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum["SouthWest"] = "SouthWest";
    TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum["West"] = "West";
    TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum["NorthWest"] = "NorthWest";
})(TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum || (TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum = {}));
export var TflApiPresentationEntitiesInstructionStepTrackTypeEnum;
(function (TflApiPresentationEntitiesInstructionStepTrackTypeEnum) {
    TflApiPresentationEntitiesInstructionStepTrackTypeEnum["CycleSuperHighway"] = "CycleSuperHighway";
    TflApiPresentationEntitiesInstructionStepTrackTypeEnum["CanalTowpath"] = "CanalTowpath";
    TflApiPresentationEntitiesInstructionStepTrackTypeEnum["QuietRoad"] = "QuietRoad";
    TflApiPresentationEntitiesInstructionStepTrackTypeEnum["ProvisionForCyclists"] = "ProvisionForCyclists";
    TflApiPresentationEntitiesInstructionStepTrackTypeEnum["BusyRoads"] = "BusyRoads";
    TflApiPresentationEntitiesInstructionStepTrackTypeEnum["None"] = "None";
    TflApiPresentationEntitiesInstructionStepTrackTypeEnum["PushBike"] = "PushBike";
    TflApiPresentationEntitiesInstructionStepTrackTypeEnum["Quietway"] = "Quietway";
})(TflApiPresentationEntitiesInstructionStepTrackTypeEnum || (TflApiPresentationEntitiesInstructionStepTrackTypeEnum = {}));
var TflApiPresentationEntitiesInstructionStep = /** @class */ (function (_super) {
    __extends(TflApiPresentationEntitiesInstructionStep, _super);
    function TflApiPresentationEntitiesInstructionStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cumulativeDistance" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesInstructionStep.prototype, "cumulativeDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cumulativeTravelTime" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesInstructionStep.prototype, "cumulativeTravelTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesInstructionStep.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=descriptionHeading" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesInstructionStep.prototype, "descriptionHeading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distance" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesInstructionStep.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesInstructionStep.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesInstructionStep.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pathAttribute" }),
        __metadata("design:type", TflApiPresentationEntitiesPathAttribute)
    ], TflApiPresentationEntitiesInstructionStep.prototype, "pathAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skyDirection" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesInstructionStep.prototype, "skyDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skyDirectionDescription" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesInstructionStep.prototype, "skyDirectionDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streetName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesInstructionStep.prototype, "streetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackType" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesInstructionStep.prototype, "trackType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=turnDirection" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesInstructionStep.prototype, "turnDirection", void 0);
    return TflApiPresentationEntitiesInstructionStep;
}(SpeakeasyBase));
export { TflApiPresentationEntitiesInstructionStep };
