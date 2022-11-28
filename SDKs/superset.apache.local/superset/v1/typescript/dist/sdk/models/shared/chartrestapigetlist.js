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
import { Meta8 } from "./meta8";
import { Meta5 } from "./meta5";
import { Meta7 } from "./meta7";
import { Meta6 } from "./meta6";
var ChartRestApiGetList = /** @class */ (function (_super) {
    __extends(ChartRestApiGetList, _super);
    function ChartRestApiGetList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cache_timeout" }),
        __metadata("design:type", Number)
    ], ChartRestApiGetList.prototype, "cacheTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by" }),
        __metadata("design:type", Meta8)
    ], ChartRestApiGetList.prototype, "changedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by_name" }),
        __metadata("design:type", Object)
    ], ChartRestApiGetList.prototype, "changedByName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by_url" }),
        __metadata("design:type", Object)
    ], ChartRestApiGetList.prototype, "changedByUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" }),
        __metadata("design:type", Object)
    ], ChartRestApiGetList.prototype, "changedOnDeltaHumanized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on_utc" }),
        __metadata("design:type", Object)
    ], ChartRestApiGetList.prototype, "changedOnUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", Meta5)
    ], ChartRestApiGetList.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasource_id" }),
        __metadata("design:type", Number)
    ], ChartRestApiGetList.prototype, "datasourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasource_name_text" }),
        __metadata("design:type", Object)
    ], ChartRestApiGetList.prototype, "datasourceNameText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasource_type" }),
        __metadata("design:type", String)
    ], ChartRestApiGetList.prototype, "datasourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasource_url" }),
        __metadata("design:type", Object)
    ], ChartRestApiGetList.prototype, "datasourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ChartRestApiGetList.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_markeddown" }),
        __metadata("design:type", Object)
    ], ChartRestApiGetList.prototype, "descriptionMarkeddown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_url" }),
        __metadata("design:type", Object)
    ], ChartRestApiGetList.prototype, "editUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ChartRestApiGetList.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owners" }),
        __metadata("design:type", Meta7)
    ], ChartRestApiGetList.prototype, "owners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=params" }),
        __metadata("design:type", String)
    ], ChartRestApiGetList.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slice_name" }),
        __metadata("design:type", String)
    ], ChartRestApiGetList.prototype, "sliceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=table" }),
        __metadata("design:type", Meta6)
    ], ChartRestApiGetList.prototype, "table", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnail_url" }),
        __metadata("design:type", Object)
    ], ChartRestApiGetList.prototype, "thumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", Object)
    ], ChartRestApiGetList.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viz_type" }),
        __metadata("design:type", String)
    ], ChartRestApiGetList.prototype, "vizType", void 0);
    return ChartRestApiGetList;
}(SpeakeasyBase));
export { ChartRestApiGetList };
