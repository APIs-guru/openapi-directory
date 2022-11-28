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
import { TflApiPresentationEntitiesPoint } from "./tflapipresentationentitiespoint";
import { TflApiPresentationEntitiesDisruption } from "./tflapipresentationentitiesdisruption";
import { TflApiPresentationEntitiesInstruction } from "./tflapipresentationentitiesinstruction";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";
import { TflApiPresentationEntitiesJourneyPlannerObstacle } from "./tflapipresentationentitiesjourneyplannerobstacle";
import { TflApiPresentationEntitiesJourneyPlannerPath } from "./tflapipresentationentitiesjourneyplannerpath";
import { TflApiPresentationEntitiesJourneyPlannerPlannedWork } from "./tflapipresentationentitiesjourneyplannerplannedwork";
import { TflApiPresentationEntitiesJourneyPlannerRouteOption } from "./tflapipresentationentitiesjourneyplannerrouteoption";
var TflApiPresentationEntitiesJourneyPlannerLeg = /** @class */ (function (_super) {
    __extends(TflApiPresentationEntitiesJourneyPlannerLeg, _super);
    function TflApiPresentationEntitiesJourneyPlannerLeg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arrivalPoint" }),
        __metadata("design:type", TflApiPresentationEntitiesPoint)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "arrivalPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arrivalTime" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "arrivalTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departurePoint" }),
        __metadata("design:type", TflApiPresentationEntitiesPoint)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "departurePoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departureTime" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "departureTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disruptions", elemType: TflApiPresentationEntitiesDisruption }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "disruptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distance" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasFixedLocations" }),
        __metadata("design:type", Boolean)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "hasFixedLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instruction" }),
        __metadata("design:type", TflApiPresentationEntitiesInstruction)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "instruction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDisrupted" }),
        __metadata("design:type", Boolean)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "isDisrupted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", TflApiPresentationEntitiesIdentifier)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obstacles", elemType: TflApiPresentationEntitiesJourneyPlannerObstacle }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "obstacles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", TflApiPresentationEntitiesJourneyPlannerPath)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plannedWorks", elemType: TflApiPresentationEntitiesJourneyPlannerPlannedWork }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "plannedWorks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeOptions", elemType: TflApiPresentationEntitiesJourneyPlannerRouteOption }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "routeOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speed" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesJourneyPlannerLeg.prototype, "speed", void 0);
    return TflApiPresentationEntitiesJourneyPlannerLeg;
}(SpeakeasyBase));
export { TflApiPresentationEntitiesJourneyPlannerLeg };
