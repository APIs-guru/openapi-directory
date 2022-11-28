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
var EventDistrictPointsPoints = /** @class */ (function (_super) {
    __extends(EventDistrictPointsPoints, _super);
    function EventDistrictPointsPoints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alliance_points" }),
        __metadata("design:type", Number)
    ], EventDistrictPointsPoints.prototype, "alliancePoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=award_points" }),
        __metadata("design:type", Number)
    ], EventDistrictPointsPoints.prototype, "awardPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elim_points" }),
        __metadata("design:type", Number)
    ], EventDistrictPointsPoints.prototype, "elimPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qual_points" }),
        __metadata("design:type", Number)
    ], EventDistrictPointsPoints.prototype, "qualPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EventDistrictPointsPoints.prototype, "total", void 0);
    return EventDistrictPointsPoints;
}(SpeakeasyBase));
export { EventDistrictPointsPoints };
var EventDistrictPointsTiebreakers = /** @class */ (function (_super) {
    __extends(EventDistrictPointsTiebreakers, _super);
    function EventDistrictPointsTiebreakers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highest_qual_scores" }),
        __metadata("design:type", Array)
    ], EventDistrictPointsTiebreakers.prototype, "highestQualScores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qual_wins" }),
        __metadata("design:type", Number)
    ], EventDistrictPointsTiebreakers.prototype, "qualWins", void 0);
    return EventDistrictPointsTiebreakers;
}(SpeakeasyBase));
export { EventDistrictPointsTiebreakers };
var EventDistrictPoints = /** @class */ (function (_super) {
    __extends(EventDistrictPoints, _super);
    function EventDistrictPoints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=points", elemType: EventDistrictPointsPoints }),
        __metadata("design:type", Map)
    ], EventDistrictPoints.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tiebreakers", elemType: EventDistrictPointsTiebreakers }),
        __metadata("design:type", Map)
    ], EventDistrictPoints.prototype, "tiebreakers", void 0);
    return EventDistrictPoints;
}(SpeakeasyBase));
export { EventDistrictPoints };
