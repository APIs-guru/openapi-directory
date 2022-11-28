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
import { MemberForDate } from "./memberfordate";
export var PublishedWrittenQuestionQuestionTypeEnum;
(function (PublishedWrittenQuestionQuestionTypeEnum) {
    PublishedWrittenQuestionQuestionTypeEnum["NamedDay"] = "NamedDay";
    PublishedWrittenQuestionQuestionTypeEnum["Ordinary"] = "Ordinary";
})(PublishedWrittenQuestionQuestionTypeEnum || (PublishedWrittenQuestionQuestionTypeEnum = {}));
var PublishedWrittenQuestion = /** @class */ (function (_super) {
    __extends(PublishedWrittenQuestion, _super);
    function PublishedWrittenQuestion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Answer" }),
        __metadata("design:type", String)
    ], PublishedWrittenQuestion.prototype, "answer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnsweredWhen" }),
        __metadata("design:type", Date)
    ], PublishedWrittenQuestion.prototype, "answeredWhen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnsweringBody" }),
        __metadata("design:type", String)
    ], PublishedWrittenQuestion.prototype, "answeringBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnsweringBodyId" }),
        __metadata("design:type", Number)
    ], PublishedWrittenQuestion.prototype, "answeringBodyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnsweringMinister" }),
        __metadata("design:type", MemberForDate)
    ], PublishedWrittenQuestion.prototype, "answeringMinister", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnsweringMinisterId" }),
        __metadata("design:type", Number)
    ], PublishedWrittenQuestion.prototype, "answeringMinisterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnsweringMinisterTitle" }),
        __metadata("design:type", String)
    ], PublishedWrittenQuestion.prototype, "answeringMinisterTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AskingMember" }),
        __metadata("design:type", MemberForDate)
    ], PublishedWrittenQuestion.prototype, "askingMember", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AskingMemberId" }),
        __metadata("design:type", Number)
    ], PublishedWrittenQuestion.prototype, "askingMemberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DueForAnswer" }),
        __metadata("design:type", Date)
    ], PublishedWrittenQuestion.prototype, "dueForAnswer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], PublishedWrittenQuestion.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QuestionText" }),
        __metadata("design:type", String)
    ], PublishedWrittenQuestion.prototype, "questionText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QuestionType" }),
        __metadata("design:type", String)
    ], PublishedWrittenQuestion.prototype, "questionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TabledWhen" }),
        __metadata("design:type", Date)
    ], PublishedWrittenQuestion.prototype, "tabledWhen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UIN" }),
        __metadata("design:type", Number)
    ], PublishedWrittenQuestion.prototype, "uin", void 0);
    return PublishedWrittenQuestion;
}(SpeakeasyBase));
export { PublishedWrittenQuestion };
