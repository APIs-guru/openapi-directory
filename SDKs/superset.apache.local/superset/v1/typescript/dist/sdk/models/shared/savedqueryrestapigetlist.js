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
import { Meta29 } from "./meta29";
import { Meta30 } from "./meta30";
var SavedQueryRestApiGetList = /** @class */ (function (_super) {
    __extends(SavedQueryRestApiGetList, _super);
    function SavedQueryRestApiGetList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" }),
        __metadata("design:type", Object)
    ], SavedQueryRestApiGetList.prototype, "changedOnDeltaHumanized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", Meta29)
    ], SavedQueryRestApiGetList.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_on" }),
        __metadata("design:type", Date)
    ], SavedQueryRestApiGetList.prototype, "createdOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", Meta30)
    ], SavedQueryRestApiGetList.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=db_id" }),
        __metadata("design:type", Number)
    ], SavedQueryRestApiGetList.prototype, "dbId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SavedQueryRestApiGetList.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extra" }),
        __metadata("design:type", Object)
    ], SavedQueryRestApiGetList.prototype, "extra", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SavedQueryRestApiGetList.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], SavedQueryRestApiGetList.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_run_delta_humanized" }),
        __metadata("design:type", Object)
    ], SavedQueryRestApiGetList.prototype, "lastRunDeltaHumanized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rows" }),
        __metadata("design:type", Number)
    ], SavedQueryRestApiGetList.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], SavedQueryRestApiGetList.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql" }),
        __metadata("design:type", String)
    ], SavedQueryRestApiGetList.prototype, "sql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql_tables" }),
        __metadata("design:type", Object)
    ], SavedQueryRestApiGetList.prototype, "sqlTables", void 0);
    return SavedQueryRestApiGetList;
}(SpeakeasyBase));
export { SavedQueryRestApiGetList };
