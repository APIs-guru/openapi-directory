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
import { Hierarchy } from "./hierarchy";
import { Language } from "./language";
import { Variable } from "./variable";
var SurveyMetadata = /** @class */ (function (_super) {
    __extends(SurveyMetadata, _super);
    function SurveyMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hierarchies", elemType: Hierarchy }),
        __metadata("design:type", Array)
    ], SurveyMetadata.prototype, "hierarchies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interviewCount" }),
        __metadata("design:type", Number)
    ], SurveyMetadata.prototype, "interviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages", elemType: Language }),
        __metadata("design:type", Array)
    ], SurveyMetadata.prototype, "languages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SurveyMetadata.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SurveyMetadata.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variables", elemType: Variable }),
        __metadata("design:type", Array)
    ], SurveyMetadata.prototype, "variables", void 0);
    return SurveyMetadata;
}(SpeakeasyBase));
export { SurveyMetadata };
