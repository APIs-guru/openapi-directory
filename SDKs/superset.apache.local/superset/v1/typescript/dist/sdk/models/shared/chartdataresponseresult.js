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
export var ChartDataResponseResultStatusEnum;
(function (ChartDataResponseResultStatusEnum) {
    ChartDataResponseResultStatusEnum["Stopped"] = "stopped";
    ChartDataResponseResultStatusEnum["Failed"] = "failed";
    ChartDataResponseResultStatusEnum["Pending"] = "pending";
    ChartDataResponseResultStatusEnum["Running"] = "running";
    ChartDataResponseResultStatusEnum["Scheduled"] = "scheduled";
    ChartDataResponseResultStatusEnum["Success"] = "success";
    ChartDataResponseResultStatusEnum["TimedOut"] = "timed_out";
})(ChartDataResponseResultStatusEnum || (ChartDataResponseResultStatusEnum = {}));
var ChartDataResponseResult = /** @class */ (function (_super) {
    __extends(ChartDataResponseResult, _super);
    function ChartDataResponseResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotation_data" }),
        __metadata("design:type", Array)
    ], ChartDataResponseResult.prototype, "annotationData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applied_filters" }),
        __metadata("design:type", Array)
    ], ChartDataResponseResult.prototype, "appliedFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cache_key" }),
        __metadata("design:type", String)
    ], ChartDataResponseResult.prototype, "cacheKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cache_timeout" }),
        __metadata("design:type", Number)
    ], ChartDataResponseResult.prototype, "cacheTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cached_dttm" }),
        __metadata("design:type", String)
    ], ChartDataResponseResult.prototype, "cachedDttm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], ChartDataResponseResult.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ChartDataResponseResult.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_cached" }),
        __metadata("design:type", Boolean)
    ], ChartDataResponseResult.prototype, "isCached", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", String)
    ], ChartDataResponseResult.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejected_filters" }),
        __metadata("design:type", Array)
    ], ChartDataResponseResult.prototype, "rejectedFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowcount" }),
        __metadata("design:type", Number)
    ], ChartDataResponseResult.prototype, "rowcount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stacktrace" }),
        __metadata("design:type", String)
    ], ChartDataResponseResult.prototype, "stacktrace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ChartDataResponseResult.prototype, "status", void 0);
    return ChartDataResponseResult;
}(SpeakeasyBase));
export { ChartDataResponseResult };
