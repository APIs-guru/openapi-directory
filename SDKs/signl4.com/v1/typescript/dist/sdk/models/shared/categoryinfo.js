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
import { CategoryAugmentation } from "./categoryaugmentation";
var CategoryInfo = /** @class */ (function (_super) {
    __extends(CategoryInfo, _super);
    function CategoryInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=augmentations", elemType: CategoryAugmentation }),
        __metadata("design:type", Array)
    ], CategoryInfo.prototype, "augmentations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], CategoryInfo.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CategoryInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageName" }),
        __metadata("design:type", String)
    ], CategoryInfo.prototype, "imageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDefault" }),
        __metadata("design:type", Boolean)
    ], CategoryInfo.prototype, "isDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywordMatching" }),
        __metadata("design:type", Number)
    ], CategoryInfo.prototype, "keywordMatching", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywords" }),
        __metadata("design:type", Array)
    ], CategoryInfo.prototype, "keywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastMatch" }),
        __metadata("design:type", Date)
    ], CategoryInfo.prototype, "lastMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CategoryInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Number)
    ], CategoryInfo.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", Number)
    ], CategoryInfo.prototype, "order", void 0);
    return CategoryInfo;
}(SpeakeasyBase));
export { CategoryInfo };
var CategoryInfoInput = /** @class */ (function (_super) {
    __extends(CategoryInfoInput, _super);
    function CategoryInfoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=augmentations", elemType: CategoryAugmentation }),
        __metadata("design:type", Array)
    ], CategoryInfoInput.prototype, "augmentations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], CategoryInfoInput.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CategoryInfoInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageName" }),
        __metadata("design:type", String)
    ], CategoryInfoInput.prototype, "imageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywordMatching" }),
        __metadata("design:type", Number)
    ], CategoryInfoInput.prototype, "keywordMatching", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywords" }),
        __metadata("design:type", Array)
    ], CategoryInfoInput.prototype, "keywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastMatch" }),
        __metadata("design:type", Date)
    ], CategoryInfoInput.prototype, "lastMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CategoryInfoInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Number)
    ], CategoryInfoInput.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", Number)
    ], CategoryInfoInput.prototype, "order", void 0);
    return CategoryInfoInput;
}(SpeakeasyBase));
export { CategoryInfoInput };
