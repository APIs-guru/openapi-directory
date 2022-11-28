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
import { TflApiPresentationEntitiesJourneyPlannerJourneyFare } from "./tflapipresentationentitiesjourneyplannerjourneyfare";
import { TflApiPresentationEntitiesJourneyPlannerLeg } from "./tflapipresentationentitiesjourneyplannerleg";
// TflApiPresentationEntitiesJourneyPlannerJourney
/**
 * Object that represents an end to end journey (see schematic).
**/
var TflApiPresentationEntitiesJourneyPlannerJourney = /** @class */ (function (_super) {
    __extends(TflApiPresentationEntitiesJourneyPlannerJourney, _super);
    function TflApiPresentationEntitiesJourneyPlannerJourney() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arrivalDateTime" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesJourneyPlannerJourney.prototype, "arrivalDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesJourneyPlannerJourney.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fare" }),
        __metadata("design:type", TflApiPresentationEntitiesJourneyPlannerJourneyFare)
    ], TflApiPresentationEntitiesJourneyPlannerJourney.prototype, "fare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legs", elemType: TflApiPresentationEntitiesJourneyPlannerLeg }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesJourneyPlannerJourney.prototype, "legs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDateTime" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesJourneyPlannerJourney.prototype, "startDateTime", void 0);
    return TflApiPresentationEntitiesJourneyPlannerJourney;
}(SpeakeasyBase));
export { TflApiPresentationEntitiesJourneyPlannerJourney };
