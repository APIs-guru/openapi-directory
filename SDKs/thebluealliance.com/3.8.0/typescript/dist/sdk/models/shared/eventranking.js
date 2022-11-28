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
var EventRankingExtraStatsInfo = /** @class */ (function (_super) {
    __extends(EventRankingExtraStatsInfo, _super);
    function EventRankingExtraStatsInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EventRankingExtraStatsInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precision" }),
        __metadata("design:type", Number)
    ], EventRankingExtraStatsInfo.prototype, "precision", void 0);
    return EventRankingExtraStatsInfo;
}(SpeakeasyBase));
export { EventRankingExtraStatsInfo };
var EventRankingRankings = /** @class */ (function (_super) {
    __extends(EventRankingRankings, _super);
    function EventRankingRankings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dq" }),
        __metadata("design:type", Number)
    ], EventRankingRankings.prototype, "dq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extra_stats" }),
        __metadata("design:type", Array)
    ], EventRankingRankings.prototype, "extraStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matches_played" }),
        __metadata("design:type", Number)
    ], EventRankingRankings.prototype, "matchesPlayed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qual_average" }),
        __metadata("design:type", Number)
    ], EventRankingRankings.prototype, "qualAverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], EventRankingRankings.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=record" }),
        __metadata("design:type", WltRecord)
    ], EventRankingRankings.prototype, "record", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort_orders" }),
        __metadata("design:type", Array)
    ], EventRankingRankings.prototype, "sortOrders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team_key" }),
        __metadata("design:type", String)
    ], EventRankingRankings.prototype, "teamKey", void 0);
    return EventRankingRankings;
}(SpeakeasyBase));
export { EventRankingRankings };
var EventRankingSortOrderInfo = /** @class */ (function (_super) {
    __extends(EventRankingSortOrderInfo, _super);
    function EventRankingSortOrderInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EventRankingSortOrderInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precision" }),
        __metadata("design:type", Number)
    ], EventRankingSortOrderInfo.prototype, "precision", void 0);
    return EventRankingSortOrderInfo;
}(SpeakeasyBase));
export { EventRankingSortOrderInfo };
var EventRanking = /** @class */ (function (_super) {
    __extends(EventRanking, _super);
    function EventRanking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extra_stats_info", elemType: EventRankingExtraStatsInfo }),
        __metadata("design:type", Array)
    ], EventRanking.prototype, "extraStatsInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rankings", elemType: EventRankingRankings }),
        __metadata("design:type", Array)
    ], EventRanking.prototype, "rankings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort_order_info", elemType: EventRankingSortOrderInfo }),
        __metadata("design:type", Array)
    ], EventRanking.prototype, "sortOrderInfo", void 0);
    return EventRanking;
}(SpeakeasyBase));
export { EventRanking };
