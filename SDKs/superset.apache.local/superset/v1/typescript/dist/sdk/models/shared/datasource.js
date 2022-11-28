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
export var DatasourceDatasourceTypeEnum;
(function (DatasourceDatasourceTypeEnum) {
    DatasourceDatasourceTypeEnum["Druid"] = "druid";
    DatasourceDatasourceTypeEnum["Table"] = "table";
    DatasourceDatasourceTypeEnum["View"] = "view";
})(DatasourceDatasourceTypeEnum || (DatasourceDatasourceTypeEnum = {}));
var Datasource = /** @class */ (function (_super) {
    __extends(Datasource, _super);
    function Datasource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database_name" }),
        __metadata("design:type", String)
    ], Datasource.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasource_name" }),
        __metadata("design:type", String)
    ], Datasource.prototype, "datasourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasource_type" }),
        __metadata("design:type", String)
    ], Datasource.prototype, "datasourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], Datasource.prototype, "schema", void 0);
    return Datasource;
}(SpeakeasyBase));
export { Datasource };
