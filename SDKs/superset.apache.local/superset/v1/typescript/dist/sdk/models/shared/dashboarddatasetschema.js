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
import { Database } from "./database";
var DashboardDatasetSchema = /** @class */ (function (_super) {
    __extends(DashboardDatasetSchema, _super);
    function DashboardDatasetSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cache_timeout" }),
        __metadata("design:type", Number)
    ], DashboardDatasetSchema.prototype, "cacheTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_formats" }),
        __metadata("design:type", Map)
    ], DashboardDatasetSchema.prototype, "columnFormats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_types" }),
        __metadata("design:type", Array)
    ], DashboardDatasetSchema.prototype, "columnTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columns" }),
        __metadata("design:type", Array)
    ], DashboardDatasetSchema.prototype, "columns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", Database)
    ], DashboardDatasetSchema.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasource_name" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "datasourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_endpoint" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "defaultEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_url" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "editUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fetch_values_predicate" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "fetchValuesPredicate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_select" }),
        __metadata("design:type", Boolean)
    ], DashboardDatasetSchema.prototype, "filterSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_select_enabled" }),
        __metadata("design:type", Boolean)
    ], DashboardDatasetSchema.prototype, "filterSelectEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=granularity_sqla" }),
        __metadata("design:type", Array)
    ], DashboardDatasetSchema.prototype, "granularitySqla", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_check_message" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "healthCheckMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DashboardDatasetSchema.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_sqllab_view" }),
        __metadata("design:type", Boolean)
    ], DashboardDatasetSchema.prototype, "isSqllabView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=main_dttm_col" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "mainDttmCol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", Array)
    ], DashboardDatasetSchema.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], DashboardDatasetSchema.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_by_choices" }),
        __metadata("design:type", Array)
    ], DashboardDatasetSchema.prototype, "orderByChoices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owners" }),
        __metadata("design:type", Array)
    ], DashboardDatasetSchema.prototype, "owners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=params" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perm" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "perm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select_star" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "selectStar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "sql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=table_name" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "tableName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_params" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "templateParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_grain_sqla" }),
        __metadata("design:type", Array)
    ], DashboardDatasetSchema.prototype, "timeGrainSqla", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], DashboardDatasetSchema.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verbose_map" }),
        __metadata("design:type", Map)
    ], DashboardDatasetSchema.prototype, "verboseMap", void 0);
    return DashboardDatasetSchema;
}(SpeakeasyBase));
export { DashboardDatasetSchema };
