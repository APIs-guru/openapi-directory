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
// TflApiPresentationEntitiesPrediction
/**
 * DTO to capture the prediction details
**/
var TflApiPresentationEntitiesPrediction = /** @class */ (function (_super) {
    __extends(TflApiPresentationEntitiesPrediction, _super);
    function TflApiPresentationEntitiesPrediction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bearing" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "bearing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentLocation" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "currentLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "destinationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationNaptanId" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "destinationNaptanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedArrival" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesPrediction.prototype, "expectedArrival", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineId" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "lineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "lineName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modeName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "modeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=naptanId" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "naptanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationType" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesPrediction.prototype, "operationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "platformName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stationName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "stationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeToLive" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesPrediction.prototype, "timeToLive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeToStation" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesPrediction.prototype, "timeToStation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesPrediction.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timing" }),
        __metadata("design:type", TflApiPresentationEntitiesPredictionTiming)
    ], TflApiPresentationEntitiesPrediction.prototype, "timing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=towards" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "towards", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vehicleId" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesPrediction.prototype, "vehicleId", void 0);
    return TflApiPresentationEntitiesPrediction;
}(SpeakeasyBase));
export { TflApiPresentationEntitiesPrediction };
