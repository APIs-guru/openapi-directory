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
import { V3StopModel } from "./v3stopmodel";
var V3PatternDeparture = /** @class */ (function (_super) {
    __extends(V3PatternDeparture, _super);
    function V3PatternDeparture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=at_platform" }),
        __metadata("design:type", Boolean)
    ], V3PatternDeparture.prototype, "atPlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departure_sequence" }),
        __metadata("design:type", Number)
    ], V3PatternDeparture.prototype, "departureSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction_id" }),
        __metadata("design:type", Number)
    ], V3PatternDeparture.prototype, "directionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disruption_ids" }),
        __metadata("design:type", Array)
    ], V3PatternDeparture.prototype, "disruptionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimated_departure_utc" }),
        __metadata("design:type", Date)
    ], V3PatternDeparture.prototype, "estimatedDepartureUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flags" }),
        __metadata("design:type", String)
    ], V3PatternDeparture.prototype, "flags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform_number" }),
        __metadata("design:type", String)
    ], V3PatternDeparture.prototype, "platformNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=route_id" }),
        __metadata("design:type", Number)
    ], V3PatternDeparture.prototype, "routeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=run_id" }),
        __metadata("design:type", Number)
    ], V3PatternDeparture.prototype, "runId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=run_ref" }),
        __metadata("design:type", String)
    ], V3PatternDeparture.prototype, "runRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduled_departure_utc" }),
        __metadata("design:type", Date)
    ], V3PatternDeparture.prototype, "scheduledDepartureUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipped_stops", elemType: V3StopModel }),
        __metadata("design:type", Array)
    ], V3PatternDeparture.prototype, "skippedStops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stop_id" }),
        __metadata("design:type", Number)
    ], V3PatternDeparture.prototype, "stopId", void 0);
    return V3PatternDeparture;
}(SpeakeasyBase));
export { V3PatternDeparture };
