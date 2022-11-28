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
import { Meta18 } from "./meta18";
var DatabaseRestApiGetList = /** @class */ (function (_super) {
    __extends(DatabaseRestApiGetList, _super);
    function DatabaseRestApiGetList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_csv_upload" }),
        __metadata("design:type", Boolean)
    ], DatabaseRestApiGetList.prototype, "allowCsvUpload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_ctas" }),
        __metadata("design:type", Boolean)
    ], DatabaseRestApiGetList.prototype, "allowCtas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_cvas" }),
        __metadata("design:type", Boolean)
    ], DatabaseRestApiGetList.prototype, "allowCvas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_dml" }),
        __metadata("design:type", Boolean)
    ], DatabaseRestApiGetList.prototype, "allowDml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_multi_schema_metadata_fetch" }),
        __metadata("design:type", Boolean)
    ], DatabaseRestApiGetList.prototype, "allowMultiSchemaMetadataFetch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_run_async" }),
        __metadata("design:type", Boolean)
    ], DatabaseRestApiGetList.prototype, "allowRunAsync", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allows_cost_estimate" }),
        __metadata("design:type", Object)
    ], DatabaseRestApiGetList.prototype, "allowsCostEstimate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allows_subquery" }),
        __metadata("design:type", Object)
    ], DatabaseRestApiGetList.prototype, "allowsSubquery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allows_virtual_table_explore" }),
        __metadata("design:type", Object)
    ], DatabaseRestApiGetList.prototype, "allowsVirtualTableExplore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backend" }),
        __metadata("design:type", Object)
    ], DatabaseRestApiGetList.prototype, "backend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on" }),
        __metadata("design:type", Date)
    ], DatabaseRestApiGetList.prototype, "changedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" }),
        __metadata("design:type", Object)
    ], DatabaseRestApiGetList.prototype, "changedOnDeltaHumanized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", Meta18)
    ], DatabaseRestApiGetList.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database_name" }),
        __metadata("design:type", String)
    ], DatabaseRestApiGetList.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explore_database_id" }),
        __metadata("design:type", Object)
    ], DatabaseRestApiGetList.prototype, "exploreDatabaseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expose_in_sqllab" }),
        __metadata("design:type", Boolean)
    ], DatabaseRestApiGetList.prototype, "exposeInSqllab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extra" }),
        __metadata("design:type", String)
    ], DatabaseRestApiGetList.prototype, "extra", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=force_ctas_schema" }),
        __metadata("design:type", String)
    ], DatabaseRestApiGetList.prototype, "forceCtasSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DatabaseRestApiGetList.prototype, "id", void 0);
    return DatabaseRestApiGetList;
}(SpeakeasyBase));
export { DatabaseRestApiGetList };
