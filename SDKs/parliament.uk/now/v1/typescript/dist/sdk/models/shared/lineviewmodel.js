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
import { MemberViewModel } from "./memberviewmodel";
export var LineViewModelContentTypeEnum;
(function (LineViewModelContentTypeEnum) {
    LineViewModelContentTypeEnum["Generic"] = "Generic";
    LineViewModelContentTypeEnum["Member"] = "Member";
    LineViewModelContentTypeEnum["OralQuestionTime"] = "OralQuestionTime";
    LineViewModelContentTypeEnum["AnsweringBody"] = "AnsweringBody";
    LineViewModelContentTypeEnum["Bill"] = "Bill";
})(LineViewModelContentTypeEnum || (LineViewModelContentTypeEnum = {}));
export var LineViewModelHorizontalAlignmentEnum;
(function (LineViewModelHorizontalAlignmentEnum) {
    LineViewModelHorizontalAlignmentEnum["Left"] = "Left";
    LineViewModelHorizontalAlignmentEnum["Right"] = "Right";
    LineViewModelHorizontalAlignmentEnum["Centre"] = "Centre";
})(LineViewModelHorizontalAlignmentEnum || (LineViewModelHorizontalAlignmentEnum = {}));
export var LineViewModelStyleEnum;
(function (LineViewModelStyleEnum) {
    LineViewModelStyleEnum["DividerSolid"] = "DividerSolid";
    LineViewModelStyleEnum["EmptyLine"] = "EmptyLine";
    LineViewModelStyleEnum["Member"] = "Member";
    LineViewModelStyleEnum["Footer"] = "Footer";
    LineViewModelStyleEnum["AnsweringBody"] = "AnsweringBody";
    LineViewModelStyleEnum["WestminsterHallInfo"] = "WestminsterHallInfo";
    LineViewModelStyleEnum["GrandCommitteeInfo"] = "GrandCommitteeInfo";
    LineViewModelStyleEnum["DividerDotted"] = "DividerDotted";
    LineViewModelStyleEnum["DividerDashed"] = "DividerDashed";
    LineViewModelStyleEnum["Division"] = "Division";
    LineViewModelStyleEnum["Text150"] = "Text150";
    LineViewModelStyleEnum["Text140"] = "Text140";
    LineViewModelStyleEnum["Text130"] = "Text130";
    LineViewModelStyleEnum["Text120"] = "Text120";
    LineViewModelStyleEnum["Text110"] = "Text110";
    LineViewModelStyleEnum["Text100"] = "Text100";
    LineViewModelStyleEnum["Text90"] = "Text90";
    LineViewModelStyleEnum["Text80"] = "Text80";
    LineViewModelStyleEnum["Text70"] = "Text70";
})(LineViewModelStyleEnum || (LineViewModelStyleEnum = {}));
export var LineViewModelVerticalAlignmentEnum;
(function (LineViewModelVerticalAlignmentEnum) {
    LineViewModelVerticalAlignmentEnum["Top"] = "Top";
    LineViewModelVerticalAlignmentEnum["Middle"] = "Middle";
    LineViewModelVerticalAlignmentEnum["Bottom"] = "Bottom";
})(LineViewModelVerticalAlignmentEnum || (LineViewModelVerticalAlignmentEnum = {}));
var LineViewModel = /** @class */ (function (_super) {
    __extends(LineViewModel, _super);
    function LineViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], LineViewModel.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentAdditionalJson" }),
        __metadata("design:type", String)
    ], LineViewModel.prototype, "contentAdditionalJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentType" }),
        __metadata("design:type", String)
    ], LineViewModel.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentUrl" }),
        __metadata("design:type", String)
    ], LineViewModel.prototype, "contentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayOrder" }),
        __metadata("design:type", Number)
    ], LineViewModel.prototype, "displayOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forceCapitalisation" }),
        __metadata("design:type", Boolean)
    ], LineViewModel.prototype, "forceCapitalisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=horizontalAlignment" }),
        __metadata("design:type", String)
    ], LineViewModel.prototype, "horizontalAlignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=member" }),
        __metadata("design:type", MemberViewModel)
    ], LineViewModel.prototype, "member", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=style" }),
        __metadata("design:type", String)
    ], LineViewModel.prototype, "style", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verticalAlignment" }),
        __metadata("design:type", String)
    ], LineViewModel.prototype, "verticalAlignment", void 0);
    return LineViewModel;
}(SpeakeasyBase));
export { LineViewModel };
