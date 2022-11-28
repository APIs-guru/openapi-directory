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
import { Component } from "./component";
// TemplateDefinitionDataSettings
/**
 * Defines filter and sort option for root data set.
**/
var TemplateDefinitionDataSettings = /** @class */ (function (_super) {
    __extends(TemplateDefinitionDataSettings, _super);
    function TemplateDefinitionDataSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterBy" }),
        __metadata("design:type", Array)
    ], TemplateDefinitionDataSettings.prototype, "filterBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortBy" }),
        __metadata("design:type", Array)
    ], TemplateDefinitionDataSettings.prototype, "sortBy", void 0);
    return TemplateDefinitionDataSettings;
}(SpeakeasyBase));
export { TemplateDefinitionDataSettings };
// TemplateDefinitionEditor
/**
 * Configuration preferences for the editor
**/
var TemplateDefinitionEditor = /** @class */ (function (_super) {
    __extends(TemplateDefinitionEditor, _super);
    function TemplateDefinitionEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heightMultiplier" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionEditor.prototype, "heightMultiplier", void 0);
    return TemplateDefinitionEditor;
}(SpeakeasyBase));
export { TemplateDefinitionEditor };
export var TemplateDefinitionLayoutFormatEnum;
(function (TemplateDefinitionLayoutFormatEnum) {
    TemplateDefinitionLayoutFormatEnum["A4"] = "A4";
    TemplateDefinitionLayoutFormatEnum["Letter"] = "letter";
    TemplateDefinitionLayoutFormatEnum["Custom"] = "custom";
})(TemplateDefinitionLayoutFormatEnum || (TemplateDefinitionLayoutFormatEnum = {}));
// TemplateDefinitionLayoutMargins
/**
 * Page margins in units
**/
var TemplateDefinitionLayoutMargins = /** @class */ (function (_super) {
    __extends(TemplateDefinitionLayoutMargins, _super);
    function TemplateDefinitionLayoutMargins() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bottom" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionLayoutMargins.prototype, "bottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=left" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionLayoutMargins.prototype, "left", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=right" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionLayoutMargins.prototype, "right", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=top" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionLayoutMargins.prototype, "top", void 0);
    return TemplateDefinitionLayoutMargins;
}(SpeakeasyBase));
export { TemplateDefinitionLayoutMargins };
export var TemplateDefinitionLayoutOrientationEnum;
(function (TemplateDefinitionLayoutOrientationEnum) {
    TemplateDefinitionLayoutOrientationEnum["Portrait"] = "portrait";
    TemplateDefinitionLayoutOrientationEnum["Landscape"] = "landscape";
})(TemplateDefinitionLayoutOrientationEnum || (TemplateDefinitionLayoutOrientationEnum = {}));
export var TemplateDefinitionLayoutRepeatLayoutFormatEnum;
(function (TemplateDefinitionLayoutRepeatLayoutFormatEnum) {
    TemplateDefinitionLayoutRepeatLayoutFormatEnum["A4"] = "A4";
    TemplateDefinitionLayoutRepeatLayoutFormatEnum["Letter"] = "letter";
    TemplateDefinitionLayoutRepeatLayoutFormatEnum["Custom"] = "custom";
})(TemplateDefinitionLayoutRepeatLayoutFormatEnum || (TemplateDefinitionLayoutRepeatLayoutFormatEnum = {}));
// TemplateDefinitionLayoutRepeatLayout
/**
 * Defines page size if layout is repeated on the page e.g sheet labels
**/
var TemplateDefinitionLayoutRepeatLayout = /** @class */ (function (_super) {
    __extends(TemplateDefinitionLayoutRepeatLayout, _super);
    function TemplateDefinitionLayoutRepeatLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TemplateDefinitionLayoutRepeatLayout.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionLayoutRepeatLayout.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionLayoutRepeatLayout.prototype, "width", void 0);
    return TemplateDefinitionLayoutRepeatLayout;
}(SpeakeasyBase));
export { TemplateDefinitionLayoutRepeatLayout };
export var TemplateDefinitionLayoutUnitEnum;
(function (TemplateDefinitionLayoutUnitEnum) {
    TemplateDefinitionLayoutUnitEnum["Cm"] = "cm";
    TemplateDefinitionLayoutUnitEnum["In"] = "in";
})(TemplateDefinitionLayoutUnitEnum || (TemplateDefinitionLayoutUnitEnum = {}));
// TemplateDefinitionLayout
/**
 * Defines template layout (e.g page format, margins).
**/
var TemplateDefinitionLayout = /** @class */ (function (_super) {
    __extends(TemplateDefinitionLayout, _super);
    function TemplateDefinitionLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emptyLabels" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionLayout.prototype, "emptyLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TemplateDefinitionLayout.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionLayout.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=margins" }),
        __metadata("design:type", TemplateDefinitionLayoutMargins)
    ], TemplateDefinitionLayout.prototype, "margins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orientation" }),
        __metadata("design:type", String)
    ], TemplateDefinitionLayout.prototype, "orientation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeatLayout" }),
        __metadata("design:type", TemplateDefinitionLayoutRepeatLayout)
    ], TemplateDefinitionLayout.prototype, "repeatLayout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rotation" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionLayout.prototype, "rotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], TemplateDefinitionLayout.prototype, "unit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionLayout.prototype, "width", void 0);
    return TemplateDefinitionLayout;
}(SpeakeasyBase));
export { TemplateDefinitionLayout };
var TemplateDefinitionPagesMargins = /** @class */ (function (_super) {
    __extends(TemplateDefinitionPagesMargins, _super);
    function TemplateDefinitionPagesMargins() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bottom" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionPagesMargins.prototype, "bottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=right" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionPagesMargins.prototype, "right", void 0);
    return TemplateDefinitionPagesMargins;
}(SpeakeasyBase));
export { TemplateDefinitionPagesMargins };
var TemplateDefinitionPages = /** @class */ (function (_super) {
    __extends(TemplateDefinitionPages, _super);
    function TemplateDefinitionPages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=components", elemType: Component }),
        __metadata("design:type", Array)
    ], TemplateDefinitionPages.prototype, "components", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionPages.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=margins" }),
        __metadata("design:type", TemplateDefinitionPagesMargins)
    ], TemplateDefinitionPages.prototype, "margins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionPages.prototype, "width", void 0);
    return TemplateDefinitionPages;
}(SpeakeasyBase));
export { TemplateDefinitionPages };
var TemplateDefinition = /** @class */ (function (_super) {
    __extends(TemplateDefinition, _super);
    function TemplateDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSettings" }),
        __metadata("design:type", TemplateDefinitionDataSettings)
    ], TemplateDefinition.prototype, "dataSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editor" }),
        __metadata("design:type", TemplateDefinitionEditor)
    ], TemplateDefinition.prototype, "editor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TemplateDefinition.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDraft" }),
        __metadata("design:type", Boolean)
    ], TemplateDefinition.prototype, "isDraft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layout" }),
        __metadata("design:type", TemplateDefinitionLayout)
    ], TemplateDefinition.prototype, "layout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TemplateDefinition.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages", elemType: TemplateDefinitionPages }),
        __metadata("design:type", Array)
    ], TemplateDefinition.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], TemplateDefinition.prototype, "tags", void 0);
    return TemplateDefinition;
}(SpeakeasyBase));
export { TemplateDefinition };
