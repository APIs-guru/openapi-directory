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
var DebateContribution = /** @class */ (function (_super) {
    __extends(DebateContribution, _super);
    function DebateContribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answerCount" }),
        __metadata("design:type", Number)
    ], DebateContribution.prototype, "answerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debateId" }),
        __metadata("design:type", Number)
    ], DebateContribution.prototype, "debateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debateTitle" }),
        __metadata("design:type", String)
    ], DebateContribution.prototype, "debateTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debateWebsiteId" }),
        __metadata("design:type", String)
    ], DebateContribution.prototype, "debateWebsiteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstTimecode" }),
        __metadata("design:type", Date)
    ], DebateContribution.prototype, "firstTimecode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=house" }),
        __metadata("design:type", String)
    ], DebateContribution.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interventionCount" }),
        __metadata("design:type", Number)
    ], DebateContribution.prototype, "interventionCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pointsOfOrderCount" }),
        __metadata("design:type", Number)
    ], DebateContribution.prototype, "pointsOfOrderCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questionCount" }),
        __metadata("design:type", Number)
    ], DebateContribution.prototype, "questionCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=section" }),
        __metadata("design:type", String)
    ], DebateContribution.prototype, "section", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sittingDate" }),
        __metadata("design:type", Date)
    ], DebateContribution.prototype, "sittingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speechCount" }),
        __metadata("design:type", Number)
    ], DebateContribution.prototype, "speechCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statementsCount" }),
        __metadata("design:type", Number)
    ], DebateContribution.prototype, "statementsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplementaryQuestionCount" }),
        __metadata("design:type", Number)
    ], DebateContribution.prototype, "supplementaryQuestionCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalContributions" }),
        __metadata("design:type", Number)
    ], DebateContribution.prototype, "totalContributions", void 0);
    return DebateContribution;
}(SpeakeasyBase));
export { DebateContribution };
