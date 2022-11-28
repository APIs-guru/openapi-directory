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
import { Meta22 } from "./meta22";
import { Meta23 } from "./meta23";
import { Meta25 } from "./meta25";
import { Meta24 } from "./meta24";
var DatasetRestApiGet = /** @class */ (function (_super) {
    __extends(DatasetRestApiGet, _super);
    function DatasetRestApiGet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cache_timeout" }),
        __metadata("design:type", Number)
    ], DatasetRestApiGet.prototype, "cacheTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columns" }),
        __metadata("design:type", Meta22)
    ], DatasetRestApiGet.prototype, "columns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", Meta23)
    ], DatasetRestApiGet.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasource_type" }),
        __metadata("design:type", Object)
    ], DatasetRestApiGet.prototype, "datasourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_endpoint" }),
        __metadata("design:type", String)
    ], DatasetRestApiGet.prototype, "defaultEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DatasetRestApiGet.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extra" }),
        __metadata("design:type", String)
    ], DatasetRestApiGet.prototype, "extra", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fetch_values_predicate" }),
        __metadata("design:type", String)
    ], DatasetRestApiGet.prototype, "fetchValuesPredicate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_select_enabled" }),
        __metadata("design:type", Boolean)
    ], DatasetRestApiGet.prototype, "filterSelectEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DatasetRestApiGet.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_sqllab_view" }),
        __metadata("design:type", Boolean)
    ], DatasetRestApiGet.prototype, "isSqllabView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=main_dttm_col" }),
        __metadata("design:type", String)
    ], DatasetRestApiGet.prototype, "mainDttmCol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", Meta25)
    ], DatasetRestApiGet.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], DatasetRestApiGet.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owners" }),
        __metadata("design:type", Meta24)
    ], DatasetRestApiGet.prototype, "owners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], DatasetRestApiGet.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql" }),
        __metadata("design:type", String)
    ], DatasetRestApiGet.prototype, "sql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=table_name" }),
        __metadata("design:type", String)
    ], DatasetRestApiGet.prototype, "tableName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_params" }),
        __metadata("design:type", String)
    ], DatasetRestApiGet.prototype, "templateParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", Object)
    ], DatasetRestApiGet.prototype, "url", void 0);
    return DatasetRestApiGet;
}(SpeakeasyBase));
export { DatasetRestApiGet };
