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
var RuleWithCategoryTags = /** @class */ (function (_super) {
    __extends(RuleWithCategoryTags, _super);
    function RuleWithCategoryTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RuleWithCategoryTags.prototype, "name", void 0);
    return RuleWithCategoryTags;
}(SpeakeasyBase));
export { RuleWithCategoryTags };
var RuleWithCategory = /** @class */ (function (_super) {
    __extends(RuleWithCategory, _super);
    function RuleWithCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], RuleWithCategory.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directives" }),
        __metadata("design:type", Array)
    ], RuleWithCategory.prototype, "directives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], RuleWithCategory.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], RuleWithCategory.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RuleWithCategory.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longDescription" }),
        __metadata("design:type", String)
    ], RuleWithCategory.prototype, "longDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortDescription" }),
        __metadata("design:type", String)
    ], RuleWithCategory.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=system" }),
        __metadata("design:type", Boolean)
    ], RuleWithCategory.prototype, "system", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: RuleWithCategoryTags }),
        __metadata("design:type", Array)
    ], RuleWithCategory.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets" }),
        __metadata("design:type", Array)
    ], RuleWithCategory.prototype, "targets", void 0);
    return RuleWithCategory;
}(SpeakeasyBase));
export { RuleWithCategory };
