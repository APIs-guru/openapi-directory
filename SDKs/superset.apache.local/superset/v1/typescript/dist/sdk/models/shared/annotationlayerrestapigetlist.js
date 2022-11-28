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
import { Meta4 } from "./meta4";
import { Meta3 } from "./meta3";
var AnnotationLayerRestApiGetList = /** @class */ (function (_super) {
    __extends(AnnotationLayerRestApiGetList, _super);
    function AnnotationLayerRestApiGetList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by" }),
        __metadata("design:type", Meta4)
    ], AnnotationLayerRestApiGetList.prototype, "changedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on" }),
        __metadata("design:type", Date)
    ], AnnotationLayerRestApiGetList.prototype, "changedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" }),
        __metadata("design:type", Object)
    ], AnnotationLayerRestApiGetList.prototype, "changedOnDeltaHumanized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", Meta3)
    ], AnnotationLayerRestApiGetList.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_on" }),
        __metadata("design:type", Date)
    ], AnnotationLayerRestApiGetList.prototype, "createdOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=descr" }),
        __metadata("design:type", String)
    ], AnnotationLayerRestApiGetList.prototype, "descr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AnnotationLayerRestApiGetList.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AnnotationLayerRestApiGetList.prototype, "name", void 0);
    return AnnotationLayerRestApiGetList;
}(SpeakeasyBase));
export { AnnotationLayerRestApiGetList };
