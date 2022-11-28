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
import { AnnotationEnumAnsweredByEnum } from "./annotationenumansweredbyenum";
import { AnnotationEnumConnectivityIssueEnum } from "./annotationenumconnectivityissueenum";
var InsightsV1CallAnnotation = /** @class */ (function (_super) {
    __extends(InsightsV1CallAnnotation, _super);
    function InsightsV1CallAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], InsightsV1CallAnnotation.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answered_by" }),
        __metadata("design:type", String)
    ], InsightsV1CallAnnotation.prototype, "answeredBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_score" }),
        __metadata("design:type", Number)
    ], InsightsV1CallAnnotation.prototype, "callScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_sid" }),
        __metadata("design:type", String)
    ], InsightsV1CallAnnotation.prototype, "callSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], InsightsV1CallAnnotation.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectivity_issue" }),
        __metadata("design:type", String)
    ], InsightsV1CallAnnotation.prototype, "connectivityIssue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incident" }),
        __metadata("design:type", String)
    ], InsightsV1CallAnnotation.prototype, "incident", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality_issues" }),
        __metadata("design:type", Array)
    ], InsightsV1CallAnnotation.prototype, "qualityIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spam" }),
        __metadata("design:type", Boolean)
    ], InsightsV1CallAnnotation.prototype, "spam", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], InsightsV1CallAnnotation.prototype, "url", void 0);
    return InsightsV1CallAnnotation;
}(SpeakeasyBase));
export { InsightsV1CallAnnotation };
