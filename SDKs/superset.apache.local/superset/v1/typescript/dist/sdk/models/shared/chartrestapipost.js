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
export var ChartRestApiPostDatasourceTypeEnum;
(function (ChartRestApiPostDatasourceTypeEnum) {
    ChartRestApiPostDatasourceTypeEnum["Druid"] = "druid";
    ChartRestApiPostDatasourceTypeEnum["Table"] = "table";
    ChartRestApiPostDatasourceTypeEnum["View"] = "view";
})(ChartRestApiPostDatasourceTypeEnum || (ChartRestApiPostDatasourceTypeEnum = {}));
var ChartRestApiPost = /** @class */ (function (_super) {
    __extends(ChartRestApiPost, _super);
    function ChartRestApiPost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cache_timeout" }),
        __metadata("design:type", Number)
    ], ChartRestApiPost.prototype, "cacheTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dashboards" }),
        __metadata("design:type", Array)
    ], ChartRestApiPost.prototype, "dashboards", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasource_id" }),
        __metadata("design:type", Number)
    ], ChartRestApiPost.prototype, "datasourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasource_name" }),
        __metadata("design:type", String)
    ], ChartRestApiPost.prototype, "datasourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasource_type" }),
        __metadata("design:type", String)
    ], ChartRestApiPost.prototype, "datasourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ChartRestApiPost.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owners" }),
        __metadata("design:type", Array)
    ], ChartRestApiPost.prototype, "owners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=params" }),
        __metadata("design:type", String)
    ], ChartRestApiPost.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_context" }),
        __metadata("design:type", String)
    ], ChartRestApiPost.prototype, "queryContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slice_name" }),
        __metadata("design:type", String)
    ], ChartRestApiPost.prototype, "sliceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viz_type" }),
        __metadata("design:type", String)
    ], ChartRestApiPost.prototype, "vizType", void 0);
    return ChartRestApiPost;
}(SpeakeasyBase));
export { ChartRestApiPost };
