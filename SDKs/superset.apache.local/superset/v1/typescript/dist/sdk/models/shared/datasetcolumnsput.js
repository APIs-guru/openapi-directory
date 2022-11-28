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
var DatasetColumnsPut = /** @class */ (function (_super) {
    __extends(DatasetColumnsPut, _super);
    function DatasetColumnsPut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], DatasetColumnsPut.prototype, "columnName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DatasetColumnsPut.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expression" }),
        __metadata("design:type", String)
    ], DatasetColumnsPut.prototype, "expression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterable" }),
        __metadata("design:type", Boolean)
    ], DatasetColumnsPut.prototype, "filterable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupby" }),
        __metadata("design:type", Boolean)
    ], DatasetColumnsPut.prototype, "groupby", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DatasetColumnsPut.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_active" }),
        __metadata("design:type", Boolean)
    ], DatasetColumnsPut.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_dttm" }),
        __metadata("design:type", Boolean)
    ], DatasetColumnsPut.prototype, "isDttm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=python_date_format" }),
        __metadata("design:type", String)
    ], DatasetColumnsPut.prototype, "pythonDateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DatasetColumnsPut.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], DatasetColumnsPut.prototype, "uuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verbose_name" }),
        __metadata("design:type", String)
    ], DatasetColumnsPut.prototype, "verboseName", void 0);
    return DatasetColumnsPut;
}(SpeakeasyBase));
export { DatasetColumnsPut };
