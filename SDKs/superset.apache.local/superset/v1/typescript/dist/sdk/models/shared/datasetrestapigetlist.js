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
import { Meta19 } from "./meta19";
import { Meta21 } from "./meta21";
import { Meta20 } from "./meta20";
var DatasetRestApiGetList = /** @class */ (function (_super) {
    __extends(DatasetRestApiGetList, _super);
    function DatasetRestApiGetList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by" }),
        __metadata("design:type", Meta19)
    ], DatasetRestApiGetList.prototype, "changedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by_name" }),
        __metadata("design:type", Object)
    ], DatasetRestApiGetList.prototype, "changedByName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by_url" }),
        __metadata("design:type", Object)
    ], DatasetRestApiGetList.prototype, "changedByUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" }),
        __metadata("design:type", Object)
    ], DatasetRestApiGetList.prototype, "changedOnDeltaHumanized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on_utc" }),
        __metadata("design:type", Object)
    ], DatasetRestApiGetList.prototype, "changedOnUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", Meta21)
    ], DatasetRestApiGetList.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_endpoint" }),
        __metadata("design:type", String)
    ], DatasetRestApiGetList.prototype, "defaultEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explore_url" }),
        __metadata("design:type", Object)
    ], DatasetRestApiGetList.prototype, "exploreUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extra" }),
        __metadata("design:type", String)
    ], DatasetRestApiGetList.prototype, "extra", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DatasetRestApiGetList.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", Object)
    ], DatasetRestApiGetList.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owners" }),
        __metadata("design:type", Meta20)
    ], DatasetRestApiGetList.prototype, "owners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], DatasetRestApiGetList.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql" }),
        __metadata("design:type", String)
    ], DatasetRestApiGetList.prototype, "sql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=table_name" }),
        __metadata("design:type", String)
    ], DatasetRestApiGetList.prototype, "tableName", void 0);
    return DatasetRestApiGetList;
}(SpeakeasyBase));
export { DatasetRestApiGetList };
