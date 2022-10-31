package shared

import (
"time")

type QuestionsViewModel struct {
    AnswerIsCorrection *bool `json:"answerIsCorrection,omitempty"`
    AnswerIsHolding *bool `json:"answerIsHolding,omitempty"`
    AnswerText *string `json:"answerText,omitempty"`
    AnsweringBodyID *int32 `json:"answeringBodyId,omitempty"`
    AnsweringBodyName *string `json:"answeringBodyName,omitempty"`
    AnsweringMember *MemberViewModel `json:"answeringMember,omitempty"`
    AnsweringMemberID *int32 `json:"answeringMemberId,omitempty"`
    AskingMember *MemberViewModel `json:"askingMember,omitempty"`
    AskingMemberID *int32 `json:"askingMemberId,omitempty"`
    AttachmentCount *int32 `json:"attachmentCount,omitempty"`
    Attachments []AttachmentViewModel `json:"attachments,omitempty"`
    ComparableAnswerText *string `json:"comparableAnswerText,omitempty"`
    CorrectingMember *MemberViewModel `json:"correctingMember,omitempty"`
    CorrectingMemberID *int32 `json:"correctingMemberId,omitempty"`
    DateAnswerCorrected *time.Time `json:"dateAnswerCorrected,omitempty"`
    DateAnswered *time.Time `json:"dateAnswered,omitempty"`
    DateForAnswer *time.Time `json:"dateForAnswer,omitempty"`
    DateHoldingAnswer *time.Time `json:"dateHoldingAnswer,omitempty"`
    DateTabled *time.Time `json:"dateTabled,omitempty"`
    GroupedQuestions []string `json:"groupedQuestions,omitempty"`
    GroupedQuestionsDates []GroupedQuestionViewModel `json:"groupedQuestionsDates,omitempty"`
    Heading *string `json:"heading,omitempty"`
    House *HouseEnumEnum `json:"house,omitempty"`
    ID *int32 `json:"id,omitempty"`
    IsNamedDay *bool `json:"isNamedDay,omitempty"`
    IsWithdrawn *bool `json:"isWithdrawn,omitempty"`
    MemberHasInterest *bool `json:"memberHasInterest,omitempty"`
    OriginalAnswerText *string `json:"originalAnswerText,omitempty"`
    QuestionText *string `json:"questionText,omitempty"`
    Uin *string `json:"uin,omitempty"`
    
}

