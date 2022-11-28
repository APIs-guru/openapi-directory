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
export var TemplateDefinitionNewLayoutFormatEnum;
(function (TemplateDefinitionNewLayoutFormatEnum) {
    TemplateDefinitionNewLayoutFormatEnum["A4"] = "A4";
    TemplateDefinitionNewLayoutFormatEnum["Letter"] = "letter";
    TemplateDefinitionNewLayoutFormatEnum["Custom"] = "custom";
})(TemplateDefinitionNewLayoutFormatEnum || (TemplateDefinitionNewLayoutFormatEnum = {}));
// TemplateDefinitionNewLayoutMargins
/**
 * Page margins in units
**/
var TemplateDefinitionNewLayoutMargins = /** @class */ (function (_super) {
    __extends(TemplateDefinitionNewLayoutMargins, _super);
    function TemplateDefinitionNewLayoutMargins() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bottom" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewLayoutMargins.prototype, "bottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=left" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewLayoutMargins.prototype, "left", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=right" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewLayoutMargins.prototype, "right", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=top" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewLayoutMargins.prototype, "top", void 0);
    return TemplateDefinitionNewLayoutMargins;
}(SpeakeasyBase));
export { TemplateDefinitionNewLayoutMargins };
export var TemplateDefinitionNewLayoutOrientationEnum;
(function (TemplateDefinitionNewLayoutOrientationEnum) {
    TemplateDefinitionNewLayoutOrientationEnum["Portrait"] = "portrait";
    TemplateDefinitionNewLayoutOrientationEnum["Landscape"] = "landscape";
})(TemplateDefinitionNewLayoutOrientationEnum || (TemplateDefinitionNewLayoutOrientationEnum = {}));
export var TemplateDefinitionNewLayoutRepeatLayoutFormatEnum;
(function (TemplateDefinitionNewLayoutRepeatLayoutFormatEnum) {
    TemplateDefinitionNewLayoutRepeatLayoutFormatEnum["A4"] = "A4";
    TemplateDefinitionNewLayoutRepeatLayoutFormatEnum["Letter"] = "letter";
    TemplateDefinitionNewLayoutRepeatLayoutFormatEnum["Custom"] = "custom";
})(TemplateDefinitionNewLayoutRepeatLayoutFormatEnum || (TemplateDefinitionNewLayoutRepeatLayoutFormatEnum = {}));
// TemplateDefinitionNewLayoutRepeatLayout
/**
 * Defines page size if layout is repeated on the page e.g sheet labels
**/
var TemplateDefinitionNewLayoutRepeatLayout = /** @class */ (function (_super) {
    __extends(TemplateDefinitionNewLayoutRepeatLayout, _super);
    function TemplateDefinitionNewLayoutRepeatLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TemplateDefinitionNewLayoutRepeatLayout.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewLayoutRepeatLayout.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewLayoutRepeatLayout.prototype, "width", void 0);
    return TemplateDefinitionNewLayoutRepeatLayout;
}(SpeakeasyBase));
export { TemplateDefinitionNewLayoutRepeatLayout };
export var TemplateDefinitionNewLayoutUnitEnum;
(function (TemplateDefinitionNewLayoutUnitEnum) {
    TemplateDefinitionNewLayoutUnitEnum["Cm"] = "cm";
    TemplateDefinitionNewLayoutUnitEnum["In"] = "in";
})(TemplateDefinitionNewLayoutUnitEnum || (TemplateDefinitionNewLayoutUnitEnum = {}));
// TemplateDefinitionNewLayout
/**
 * Defines template layout (e.g page format, margins).
**/
var TemplateDefinitionNewLayout = /** @class */ (function (_super) {
    __extends(TemplateDefinitionNewLayout, _super);
    function TemplateDefinitionNewLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emptyLabels" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewLayout.prototype, "emptyLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TemplateDefinitionNewLayout.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewLayout.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=margins" }),
        __metadata("design:type", TemplateDefinitionNewLayoutMargins)
    ], TemplateDefinitionNewLayout.prototype, "margins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orientation" }),
        __metadata("design:type", String)
    ], TemplateDefinitionNewLayout.prototype, "orientation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeatLayout" }),
        __metadata("design:type", TemplateDefinitionNewLayoutRepeatLayout)
    ], TemplateDefinitionNewLayout.prototype, "repeatLayout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rotaion" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewLayout.prototype, "rotaion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], TemplateDefinitionNewLayout.prototype, "unit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewLayout.prototype, "width", void 0);
    return TemplateDefinitionNewLayout;
}(SpeakeasyBase));
export { TemplateDefinitionNewLayout };
var TemplateDefinitionNewPagesMargins = /** @class */ (function (_super) {
    __extends(TemplateDefinitionNewPagesMargins, _super);
    function TemplateDefinitionNewPagesMargins() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bottom" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewPagesMargins.prototype, "bottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=right" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewPagesMargins.prototype, "right", void 0);
    return TemplateDefinitionNewPagesMargins;
}(SpeakeasyBase));
export { TemplateDefinitionNewPagesMargins };
var TemplateDefinitionNewPages = /** @class */ (function (_super) {
    __extends(TemplateDefinitionNewPages, _super);
    function TemplateDefinitionNewPages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=components", elemType: Component }),
        __metadata("design:type", Array)
    ], TemplateDefinitionNewPages.prototype, "components", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewPages.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=margins" }),
        __metadata("design:type", TemplateDefinitionNewPagesMargins)
    ], TemplateDefinitionNewPages.prototype, "margins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], TemplateDefinitionNewPages.prototype, "width", void 0);
    return TemplateDefinitionNewPages;
}(SpeakeasyBase));
export { TemplateDefinitionNewPages };
// TemplateDefinitionNew
/**
 * Template configuration
**/
var TemplateDefinitionNew = /** @class */ (function (_super) {
    __extends(TemplateDefinitionNew, _super);
    function TemplateDefinitionNew() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDraft" }),
        __metadata("design:type", Boolean)
    ], TemplateDefinitionNew.prototype, "isDraft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layout" }),
        __metadata("design:type", TemplateDefinitionNewLayout)
    ], TemplateDefinitionNew.prototype, "layout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TemplateDefinitionNew.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages", elemType: TemplateDefinitionNewPages }),
        __metadata("design:type", Array)
    ], TemplateDefinitionNew.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], TemplateDefinitionNew.prototype, "tags", void 0);
    return TemplateDefinitionNew;
}(SpeakeasyBase));
export { TemplateDefinitionNew };
