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
import { TflApiPresentationEntitiesPredictionTiming } from "./tflapipresentationentitiespredictiontiming";
export var TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum;
(function (TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum) {
    TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum["OnTime"] = "OnTime";
    TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum["Delayed"] = "Delayed";
    TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum["Cancelled"] = "Cancelled";
    TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum["NotStoppingAtStation"] = "NotStoppingAtStation";
})(TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum || (TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum = {}));
// TflApiPresentationEntitiesArrivalDeparture
/**
 * DTO to capture the prediction details
**/
var TflApiPresentationEntitiesArrivalDeparture = /** @class */ (function (_super) {
    __extends(TflApiPresentationEntitiesArrivalDeparture, _super);
    function TflApiPresentationEntitiesArrivalDeparture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cause" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "cause", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departureStatus" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "departureStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "destinationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationNaptanId" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "destinationNaptanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimatedTimeOfArrival" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "estimatedTimeOfArrival", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimatedTimeOfDeparture" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "estimatedTimeOfDeparture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minutesAndSecondsToArrival" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "minutesAndSecondsToArrival", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minutesAndSecondsToDeparture" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "minutesAndSecondsToDeparture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=naptanId" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "naptanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "platformName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduledTimeOfArrival" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "scheduledTimeOfArrival", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduledTimeOfDeparture" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "scheduledTimeOfDeparture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stationName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "stationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timing" }),
        __metadata("design:type", TflApiPresentationEntitiesPredictionTiming)
    ], TflApiPresentationEntitiesArrivalDeparture.prototype, "timing", void 0);
    return TflApiPresentationEntitiesArrivalDeparture;
}(SpeakeasyBase));
export { TflApiPresentationEntitiesArrivalDeparture };
