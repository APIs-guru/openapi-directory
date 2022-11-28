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
import { Meta27 } from "./meta27";
import { Meta26 } from "./meta26";
var QueryRestApiGetList = /** @class */ (function (_super) {
    __extends(QueryRestApiGetList, _super);
    function QueryRestApiGetList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on" }),
        __metadata("design:type", Date)
    ], QueryRestApiGetList.prototype, "changedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", Meta27)
    ], QueryRestApiGetList.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_time" }),
        __metadata("design:type", Number)
    ], QueryRestApiGetList.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executed_sql" }),
        __metadata("design:type", String)
    ], QueryRestApiGetList.prototype, "executedSql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], QueryRestApiGetList.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rows" }),
        __metadata("design:type", Number)
    ], QueryRestApiGetList.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], QueryRestApiGetList.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql" }),
        __metadata("design:type", String)
    ], QueryRestApiGetList.prototype, "sql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql_tables" }),
        __metadata("design:type", Object)
    ], QueryRestApiGetList.prototype, "sqlTables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_time" }),
        __metadata("design:type", Number)
    ], QueryRestApiGetList.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], QueryRestApiGetList.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tab_name" }),
        __metadata("design:type", String)
    ], QueryRestApiGetList.prototype, "tabName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tmp_table_name" }),
        __metadata("design:type", String)
    ], QueryRestApiGetList.prototype, "tmpTableName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracking_url" }),
        __metadata("design:type", String)
    ], QueryRestApiGetList.prototype, "trackingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", Meta26)
    ], QueryRestApiGetList.prototype, "user", void 0);
    return QueryRestApiGetList;
}(SpeakeasyBase));
export { QueryRestApiGetList };
