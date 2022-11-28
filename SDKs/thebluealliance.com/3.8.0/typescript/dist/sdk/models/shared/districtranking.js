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
var DistrictRankingEventPoints = /** @class */ (function (_super) {
    __extends(DistrictRankingEventPoints, _super);
    function DistrictRankingEventPoints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alliance_points" }),
        __metadata("design:type", Number)
    ], DistrictRankingEventPoints.prototype, "alliancePoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=award_points" }),
        __metadata("design:type", Number)
    ], DistrictRankingEventPoints.prototype, "awardPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=district_cmp" }),
        __metadata("design:type", Boolean)
    ], DistrictRankingEventPoints.prototype, "districtCmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elim_points" }),
        __metadata("design:type", Number)
    ], DistrictRankingEventPoints.prototype, "elimPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_key" }),
        __metadata("design:type", String)
    ], DistrictRankingEventPoints.prototype, "eventKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qual_points" }),
        __metadata("design:type", Number)
    ], DistrictRankingEventPoints.prototype, "qualPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], DistrictRankingEventPoints.prototype, "total", void 0);
    return DistrictRankingEventPoints;
}(SpeakeasyBase));
export { DistrictRankingEventPoints };
// DistrictRanking
/**
 * Rank of a team in a district.
**/
var DistrictRanking = /** @class */ (function (_super) {
    __extends(DistrictRanking, _super);
    function DistrictRanking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_points", elemType: DistrictRankingEventPoints }),
        __metadata("design:type", Array)
    ], DistrictRanking.prototype, "eventPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=point_total" }),
        __metadata("design:type", Number)
    ], DistrictRanking.prototype, "pointTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], DistrictRanking.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rookie_bonus" }),
        __metadata("design:type", Number)
    ], DistrictRanking.prototype, "rookieBonus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team_key" }),
        __metadata("design:type", String)
    ], DistrictRanking.prototype, "teamKey", void 0);
    return DistrictRanking;
}(SpeakeasyBase));
export { DistrictRanking };
