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
import { DatasetColumnsPut } from "./datasetcolumnsput";
import { DatasetMetricsPut } from "./datasetmetricsput";
var DatasetRestApiPut = /** @class */ (function (_super) {
    __extends(DatasetRestApiPut, _super);
    function DatasetRestApiPut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cache_timeout" }),
        __metadata("design:type", Number)
    ], DatasetRestApiPut.prototype, "cacheTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columns", elemType: DatasetColumnsPut }),
        __metadata("design:type", Array)
    ], DatasetRestApiPut.prototype, "columns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database_id" }),
        __metadata("design:type", Number)
    ], DatasetRestApiPut.prototype, "databaseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_endpoint" }),
        __metadata("design:type", String)
    ], DatasetRestApiPut.prototype, "defaultEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DatasetRestApiPut.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extra" }),
        __metadata("design:type", String)
    ], DatasetRestApiPut.prototype, "extra", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fetch_values_predicate" }),
        __metadata("design:type", String)
    ], DatasetRestApiPut.prototype, "fetchValuesPredicate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_select_enabled" }),
        __metadata("design:type", Boolean)
    ], DatasetRestApiPut.prototype, "filterSelectEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_sqllab_view" }),
        __metadata("design:type", Boolean)
    ], DatasetRestApiPut.prototype, "isSqllabView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=main_dttm_col" }),
        __metadata("design:type", String)
    ], DatasetRestApiPut.prototype, "mainDttmCol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics", elemType: DatasetMetricsPut }),
        __metadata("design:type", Array)
    ], DatasetRestApiPut.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], DatasetRestApiPut.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owners" }),
        __metadata("design:type", Array)
    ], DatasetRestApiPut.prototype, "owners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], DatasetRestApiPut.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql" }),
        __metadata("design:type", String)
    ], DatasetRestApiPut.prototype, "sql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=table_name" }),
        __metadata("design:type", String)
    ], DatasetRestApiPut.prototype, "tableName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_params" }),
        __metadata("design:type", String)
    ], DatasetRestApiPut.prototype, "templateParams", void 0);
    return DatasetRestApiPut;
}(SpeakeasyBase));
export { DatasetRestApiPut };
