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
import { TflApiPresentationEntitiesJourneyPlannerFareTap } from "./tflapipresentationentitiesjourneyplannerfaretap";
var TflApiPresentationEntitiesJourneyPlannerFare = /** @class */ (function (_super) {
    __extends(TflApiPresentationEntitiesJourneyPlannerFare, _super);
    function TflApiPresentationEntitiesJourneyPlannerFare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chargeLevel" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesJourneyPlannerFare.prototype, "chargeLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chargeProfileName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesJourneyPlannerFare.prototype, "chargeProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cost" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesJourneyPlannerFare.prototype, "cost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highZone" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesJourneyPlannerFare.prototype, "highZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isHopperFare" }),
        __metadata("design:type", Boolean)
    ], TflApiPresentationEntitiesJourneyPlannerFare.prototype, "isHopperFare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lowZone" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesJourneyPlannerFare.prototype, "lowZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offPeak" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesJourneyPlannerFare.prototype, "offPeak", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peak" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesJourneyPlannerFare.prototype, "peak", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taps", elemType: TflApiPresentationEntitiesJourneyPlannerFareTap }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesJourneyPlannerFare.prototype, "taps", void 0);
    return TflApiPresentationEntitiesJourneyPlannerFare;
}(SpeakeasyBase));
export { TflApiPresentationEntitiesJourneyPlannerFare };
