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
import { Language } from "./language";
import { Variable } from "./variable";
var HierarchyMetadata = /** @class */ (function (_super) {
    __extends(HierarchyMetadata, _super);
    function HierarchyMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interviewCount" }),
        __metadata("design:type", Number)
    ], HierarchyMetadata.prototype, "interviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages", elemType: Language }),
        __metadata("design:type", Array)
    ], HierarchyMetadata.prototype, "languages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], HierarchyMetadata.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], HierarchyMetadata.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variables", elemType: Variable }),
        __metadata("design:type", Array)
    ], HierarchyMetadata.prototype, "variables", void 0);
    return HierarchyMetadata;
}(SpeakeasyBase));
export { HierarchyMetadata };
var HierarchyParent = /** @class */ (function (_super) {
    __extends(HierarchyParent, _super);
    function HierarchyParent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=level" }),
        __metadata("design:type", String)
    ], HierarchyParent.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkVar" }),
        __metadata("design:type", String)
    ], HierarchyParent.prototype, "linkVar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ordered" }),
        __metadata("design:type", Boolean)
    ], HierarchyParent.prototype, "ordered", void 0);
    return HierarchyParent;
}(SpeakeasyBase));
export { HierarchyParent };
var Hierarchy = /** @class */ (function (_super) {
    __extends(Hierarchy, _super);
    function Hierarchy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ident" }),
        __metadata("design:type", String)
    ], Hierarchy.prototype, "ident", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", HierarchyMetadata)
    ], Hierarchy.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", HierarchyParent)
    ], Hierarchy.prototype, "parent", void 0);
    return Hierarchy;
}(SpeakeasyBase));
export { Hierarchy };
