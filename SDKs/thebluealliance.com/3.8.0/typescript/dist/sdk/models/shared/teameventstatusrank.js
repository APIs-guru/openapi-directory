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
import { WltRecord } from "./wltrecord";
var TeamEventStatusRankRanking = /** @class */ (function (_super) {
    __extends(TeamEventStatusRankRanking, _super);
    function TeamEventStatusRankRanking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dq" }),
        __metadata("design:type", Number)
    ], TeamEventStatusRankRanking.prototype, "dq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matches_played" }),
        __metadata("design:type", Number)
    ], TeamEventStatusRankRanking.prototype, "matchesPlayed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qual_average" }),
        __metadata("design:type", Number)
    ], TeamEventStatusRankRanking.prototype, "qualAverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], TeamEventStatusRankRanking.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=record" }),
        __metadata("design:type", WltRecord)
    ], TeamEventStatusRankRanking.prototype, "record", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort_orders" }),
        __metadata("design:type", Array)
    ], TeamEventStatusRankRanking.prototype, "sortOrders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team_key" }),
        __metadata("design:type", String)
    ], TeamEventStatusRankRanking.prototype, "teamKey", void 0);
    return TeamEventStatusRankRanking;
}(SpeakeasyBase));
export { TeamEventStatusRankRanking };
var TeamEventStatusRankSortOrderInfo = /** @class */ (function (_super) {
    __extends(TeamEventStatusRankSortOrderInfo, _super);
    function TeamEventStatusRankSortOrderInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamEventStatusRankSortOrderInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precision" }),
        __metadata("design:type", Number)
    ], TeamEventStatusRankSortOrderInfo.prototype, "precision", void 0);
    return TeamEventStatusRankSortOrderInfo;
}(SpeakeasyBase));
export { TeamEventStatusRankSortOrderInfo };
var TeamEventStatusRank = /** @class */ (function (_super) {
    __extends(TeamEventStatusRank, _super);
    function TeamEventStatusRank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_teams" }),
        __metadata("design:type", Number)
    ], TeamEventStatusRank.prototype, "numTeams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ranking" }),
        __metadata("design:type", TeamEventStatusRankRanking)
    ], TeamEventStatusRank.prototype, "ranking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort_order_info", elemType: TeamEventStatusRankSortOrderInfo }),
        __metadata("design:type", Array)
    ], TeamEventStatusRank.prototype, "sortOrderInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TeamEventStatusRank.prototype, "status", void 0);
    return TeamEventStatusRank;
}(SpeakeasyBase));
export { TeamEventStatusRank };
