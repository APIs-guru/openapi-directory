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
import { AttachmentViewModel } from "./attachmentviewmodel";
import { GroupedQuestionViewModel } from "./groupedquestionviewmodel";
import { HouseEnumEnum } from "./houseenumenum";
var QuestionsViewModel = /** @class */ (function (_super) {
    __extends(QuestionsViewModel, _super);
    function QuestionsViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answerIsCorrection" }),
        __metadata("design:type", Boolean)
    ], QuestionsViewModel.prototype, "answerIsCorrection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answerIsHolding" }),
        __metadata("design:type", Boolean)
    ], QuestionsViewModel.prototype, "answerIsHolding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answerText" }),
        __metadata("design:type", String)
    ], QuestionsViewModel.prototype, "answerText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answeringBodyId" }),
        __metadata("design:type", Number)
    ], QuestionsViewModel.prototype, "answeringBodyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answeringBodyName" }),
        __metadata("design:type", String)
    ], QuestionsViewModel.prototype, "answeringBodyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answeringMember" }),
        __metadata("design:type", MemberViewModel)
    ], QuestionsViewModel.prototype, "answeringMember", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answeringMemberId" }),
        __metadata("design:type", Number)
    ], QuestionsViewModel.prototype, "answeringMemberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=askingMember" }),
        __metadata("design:type", MemberViewModel)
    ], QuestionsViewModel.prototype, "askingMember", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=askingMemberId" }),
        __metadata("design:type", Number)
    ], QuestionsViewModel.prototype, "askingMemberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachmentCount" }),
        __metadata("design:type", Number)
    ], QuestionsViewModel.prototype, "attachmentCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachments", elemType: AttachmentViewModel }),
        __metadata("design:type", Array)
    ], QuestionsViewModel.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparableAnswerText" }),
        __metadata("design:type", String)
    ], QuestionsViewModel.prototype, "comparableAnswerText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=correctingMember" }),
        __metadata("design:type", MemberViewModel)
    ], QuestionsViewModel.prototype, "correctingMember", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=correctingMemberId" }),
        __metadata("design:type", Number)
    ], QuestionsViewModel.prototype, "correctingMemberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateAnswerCorrected" }),
        __metadata("design:type", Date)
    ], QuestionsViewModel.prototype, "dateAnswerCorrected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateAnswered" }),
        __metadata("design:type", Date)
    ], QuestionsViewModel.prototype, "dateAnswered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateForAnswer" }),
        __metadata("design:type", Date)
    ], QuestionsViewModel.prototype, "dateForAnswer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateHoldingAnswer" }),
        __metadata("design:type", Date)
    ], QuestionsViewModel.prototype, "dateHoldingAnswer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateTabled" }),
        __metadata("design:type", Date)
    ], QuestionsViewModel.prototype, "dateTabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupedQuestions" }),
        __metadata("design:type", Array)
    ], QuestionsViewModel.prototype, "groupedQuestions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupedQuestionsDates", elemType: GroupedQuestionViewModel }),
        __metadata("design:type", Array)
    ], QuestionsViewModel.prototype, "groupedQuestionsDates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heading" }),
        __metadata("design:type", String)
    ], QuestionsViewModel.prototype, "heading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=house" }),
        __metadata("design:type", String)
    ], QuestionsViewModel.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], QuestionsViewModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isNamedDay" }),
        __metadata("design:type", Boolean)
    ], QuestionsViewModel.prototype, "isNamedDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isWithdrawn" }),
        __metadata("design:type", Boolean)
    ], QuestionsViewModel.prototype, "isWithdrawn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memberHasInterest" }),
        __metadata("design:type", Boolean)
    ], QuestionsViewModel.prototype, "memberHasInterest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalAnswerText" }),
        __metadata("design:type", String)
    ], QuestionsViewModel.prototype, "originalAnswerText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questionText" }),
        __metadata("design:type", String)
    ], QuestionsViewModel.prototype, "questionText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uin" }),
        __metadata("design:type", String)
    ], QuestionsViewModel.prototype, "uin", void 0);
    return QuestionsViewModel;
}(SpeakeasyBase));
export { QuestionsViewModel };
