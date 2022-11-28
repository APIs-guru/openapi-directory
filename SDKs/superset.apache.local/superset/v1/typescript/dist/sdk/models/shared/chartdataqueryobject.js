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
import { AnnotationLayer } from "./annotationlayer";
import { ChartDataFilter } from "./chartdatafilter";
export var ChartDataQueryObjectDatasourceTypeEnum;
(function (ChartDataQueryObjectDatasourceTypeEnum) {
    ChartDataQueryObjectDatasourceTypeEnum["Druid"] = "druid";
    ChartDataQueryObjectDatasourceTypeEnum["Table"] = "table";
})(ChartDataQueryObjectDatasourceTypeEnum || (ChartDataQueryObjectDatasourceTypeEnum = {}));
var ChartDataQueryObjectDatasource = /** @class */ (function (_super) {
    __extends(ChartDataQueryObjectDatasource, _super);
    function ChartDataQueryObjectDatasource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ChartDataQueryObjectDatasource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChartDataQueryObjectDatasource.prototype, "type", void 0);
    return ChartDataQueryObjectDatasource;
}(SpeakeasyBase));
export { ChartDataQueryObjectDatasource };
export var ChartDataQueryObjectExtrasRelativeEndEnum;
(function (ChartDataQueryObjectExtrasRelativeEndEnum) {
    ChartDataQueryObjectExtrasRelativeEndEnum["Today"] = "today";
    ChartDataQueryObjectExtrasRelativeEndEnum["Now"] = "now";
})(ChartDataQueryObjectExtrasRelativeEndEnum || (ChartDataQueryObjectExtrasRelativeEndEnum = {}));
export var ChartDataQueryObjectExtrasRelativeStartEnum;
(function (ChartDataQueryObjectExtrasRelativeStartEnum) {
    ChartDataQueryObjectExtrasRelativeStartEnum["Today"] = "today";
    ChartDataQueryObjectExtrasRelativeStartEnum["Now"] = "now";
})(ChartDataQueryObjectExtrasRelativeStartEnum || (ChartDataQueryObjectExtrasRelativeStartEnum = {}));
export var ChartDataQueryObjectExtrasTimeGrainSqlaEnum;
(function (ChartDataQueryObjectExtrasTimeGrainSqlaEnum) {
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["Pt1S"] = "PT1S";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["Pt5S"] = "PT5S";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["Pt30S"] = "PT30S";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["Pt1M"] = "PT1M";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["Pt5M"] = "PT5M";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["Pt10M"] = "PT10M";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["Pt15M"] = "PT15M";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["Pt05H"] = "PT0.5H";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["Pt1H"] = "PT1H";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["Pt6H"] = "PT6H";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["P1D"] = "P1D";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["P1W"] = "P1W";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["P1M"] = "P1M";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["P025Y"] = "P0.25Y";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["P1Y"] = "P1Y";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["OneThousandNineHundredAndSixtyNine1228T000000ZP1W"] = "1969-12-28T00:00:00Z/P1W";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["OneThousandNineHundredAndSixtyNine1229T000000ZP1W"] = "1969-12-29T00:00:00Z/P1W";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["P1W19700103T000000Z"] = "P1W/1970-01-03T00:00:00Z";
    ChartDataQueryObjectExtrasTimeGrainSqlaEnum["P1W19700104T000000Z"] = "P1W/1970-01-04T00:00:00Z";
})(ChartDataQueryObjectExtrasTimeGrainSqlaEnum || (ChartDataQueryObjectExtrasTimeGrainSqlaEnum = {}));
// ChartDataQueryObjectExtras
/**
 * Extra parameters to add to the query.
**/
var ChartDataQueryObjectExtras = /** @class */ (function (_super) {
    __extends(ChartDataQueryObjectExtras, _super);
    function ChartDataQueryObjectExtras() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=druid_time_origin" }),
        __metadata("design:type", String)
    ], ChartDataQueryObjectExtras.prototype, "druidTimeOrigin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=having" }),
        __metadata("design:type", String)
    ], ChartDataQueryObjectExtras.prototype, "having", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=having_druid", elemType: ChartDataFilter }),
        __metadata("design:type", Array)
    ], ChartDataQueryObjectExtras.prototype, "havingDruid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relative_end" }),
        __metadata("design:type", String)
    ], ChartDataQueryObjectExtras.prototype, "relativeEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relative_start" }),
        __metadata("design:type", String)
    ], ChartDataQueryObjectExtras.prototype, "relativeStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_grain_sqla" }),
        __metadata("design:type", String)
    ], ChartDataQueryObjectExtras.prototype, "timeGrainSqla", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_range_endpoints" }),
        __metadata("design:type", Array)
    ], ChartDataQueryObjectExtras.prototype, "timeRangeEndpoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=where" }),
        __metadata("design:type", String)
    ], ChartDataQueryObjectExtras.prototype, "where", void 0);
    return ChartDataQueryObjectExtras;
}(SpeakeasyBase));
export { ChartDataQueryObjectExtras };
export var ChartDataQueryObjectPostProcessingOperationEnum;
(function (ChartDataQueryObjectPostProcessingOperationEnum) {
    ChartDataQueryObjectPostProcessingOperationEnum["Aggregate"] = "aggregate";
    ChartDataQueryObjectPostProcessingOperationEnum["Boxplot"] = "boxplot";
    ChartDataQueryObjectPostProcessingOperationEnum["Contribution"] = "contribution";
    ChartDataQueryObjectPostProcessingOperationEnum["Cum"] = "cum";
    ChartDataQueryObjectPostProcessingOperationEnum["GeodeticParse"] = "geodetic_parse";
    ChartDataQueryObjectPostProcessingOperationEnum["GeohashDecode"] = "geohash_decode";
    ChartDataQueryObjectPostProcessingOperationEnum["GeohashEncode"] = "geohash_encode";
    ChartDataQueryObjectPostProcessingOperationEnum["Pivot"] = "pivot";
    ChartDataQueryObjectPostProcessingOperationEnum["Prophet"] = "prophet";
    ChartDataQueryObjectPostProcessingOperationEnum["Rolling"] = "rolling";
    ChartDataQueryObjectPostProcessingOperationEnum["Select"] = "select";
    ChartDataQueryObjectPostProcessingOperationEnum["Sort"] = "sort";
    ChartDataQueryObjectPostProcessingOperationEnum["Diff"] = "diff";
    ChartDataQueryObjectPostProcessingOperationEnum["Compare"] = "compare";
})(ChartDataQueryObjectPostProcessingOperationEnum || (ChartDataQueryObjectPostProcessingOperationEnum = {}));
var ChartDataQueryObjectPostProcessing = /** @class */ (function (_super) {
    __extends(ChartDataQueryObjectPostProcessing, _super);
    function ChartDataQueryObjectPostProcessing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operation" }),
        __metadata("design:type", String)
    ], ChartDataQueryObjectPostProcessing.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Map)
    ], ChartDataQueryObjectPostProcessing.prototype, "options", void 0);
    return ChartDataQueryObjectPostProcessing;
}(SpeakeasyBase));
export { ChartDataQueryObjectPostProcessing };
var ChartDataQueryObject = /** @class */ (function (_super) {
    __extends(ChartDataQueryObject, _super);
    function ChartDataQueryObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotation_layers", elemType: AnnotationLayer }),
        __metadata("design:type", Array)
    ], ChartDataQueryObject.prototype, "annotationLayers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applied_time_extras" }),
        __metadata("design:type", Map)
    ], ChartDataQueryObject.prototype, "appliedTimeExtras", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apply_fetch_values_predicate" }),
        __metadata("design:type", Boolean)
    ], ChartDataQueryObject.prototype, "applyFetchValuesPredicate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columns" }),
        __metadata("design:type", Array)
    ], ChartDataQueryObject.prototype, "columns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasource" }),
        __metadata("design:type", ChartDataQueryObjectDatasource)
    ], ChartDataQueryObject.prototype, "datasource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=druid_time_origin" }),
        __metadata("design:type", String)
    ], ChartDataQueryObject.prototype, "druidTimeOrigin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extras" }),
        __metadata("design:type", ChartDataQueryObjectExtras)
    ], ChartDataQueryObject.prototype, "extras", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters", elemType: ChartDataFilter }),
        __metadata("design:type", Array)
    ], ChartDataQueryObject.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=granularity" }),
        __metadata("design:type", String)
    ], ChartDataQueryObject.prototype, "granularity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=granularity_sqla" }),
        __metadata("design:type", String)
    ], ChartDataQueryObject.prototype, "granularitySqla", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupby" }),
        __metadata("design:type", Array)
    ], ChartDataQueryObject.prototype, "groupby", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=having" }),
        __metadata("design:type", String)
    ], ChartDataQueryObject.prototype, "having", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=having_filters", elemType: ChartDataFilter }),
        __metadata("design:type", Array)
    ], ChartDataQueryObject.prototype, "havingFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_rowcount" }),
        __metadata("design:type", Boolean)
    ], ChartDataQueryObject.prototype, "isRowcount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_timeseries" }),
        __metadata("design:type", Boolean)
    ], ChartDataQueryObject.prototype, "isTimeseries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", Array)
    ], ChartDataQueryObject.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_desc" }),
        __metadata("design:type", Boolean)
    ], ChartDataQueryObject.prototype, "orderDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderby" }),
        __metadata("design:type", Array)
    ], ChartDataQueryObject.prototype, "orderby", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_processing", elemType: ChartDataQueryObjectPostProcessing }),
        __metadata("design:type", Array)
    ], ChartDataQueryObject.prototype, "postProcessing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result_type" }),
        __metadata("design:type", Object)
    ], ChartDataQueryObject.prototype, "resultType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_limit" }),
        __metadata("design:type", Number)
    ], ChartDataQueryObject.prototype, "rowLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_offset" }),
        __metadata("design:type", Number)
    ], ChartDataQueryObject.prototype, "rowOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_offsets" }),
        __metadata("design:type", Array)
    ], ChartDataQueryObject.prototype, "timeOffsets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_range" }),
        __metadata("design:type", String)
    ], ChartDataQueryObject.prototype, "timeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_shift" }),
        __metadata("design:type", String)
    ], ChartDataQueryObject.prototype, "timeShift", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeseries_limit" }),
        __metadata("design:type", Number)
    ], ChartDataQueryObject.prototype, "timeseriesLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeseries_limit_metric" }),
        __metadata("design:type", Object)
    ], ChartDataQueryObject.prototype, "timeseriesLimitMetric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url_params" }),
        __metadata("design:type", Map)
    ], ChartDataQueryObject.prototype, "urlParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=where" }),
        __metadata("design:type", String)
    ], ChartDataQueryObject.prototype, "where", void 0);
    return ChartDataQueryObject;
}(SpeakeasyBase));
export { ChartDataQueryObject };
