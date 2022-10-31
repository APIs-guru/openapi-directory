package shared

import (
"time")

type WrittenQuestion struct {
    AnswerIsCorrection *bool `json:"answerIsCorrection,omitempty"`
    AnswerIsHolding *bool `json:"answerIsHolding,omitempty"`
    AnswerText *string `json:"answerText,omitempty"`
    AnsweringBody *AnsweringBody `json:"answeringBody,omitempty"`
    AnsweringBodyID *int32 `json:"answeringBodyId,omitempty"`
    AnsweringMember *Member `json:"answeringMember,omitempty"`
    AnsweringMemberID *int32 `json:"answeringMemberId,omitempty"`
    AskingMemberID *int32 `json:"askingMemberId,omitempty"`
    AttachmentCount *int32 `json:"attachmentCount,omitempty"`
    CorrectingMember *Member `json:"correctingMember,omitempty"`
    CorrectingMemberID *int32 `json:"correctingMemberId,omitempty"`
    DateAnswered *time.Time `json:"dateAnswered,omitempty"`
    DateForAnswer *time.Time `json:"dateForAnswer,omitempty"`
    DateTabled *time.Time `json:"dateTabled,omitempty"`
    GroupedQuestions []string `json:"groupedQuestions,omitempty"`
    GroupedQuestionsDates []GroupedQuestion `json:"groupedQuestionsDates,omitempty"`
    Heading *string `json:"heading,omitempty"`
    House *int32 `json:"house,omitempty"`
    ID *int32 `json:"id,omitempty"`
    IsNamedDay *bool `json:"isNamedDay,omitempty"`
    IsWithdrawn *bool `json:"isWithdrawn,omitempty"`
    MemberHasInterest *bool `json:"memberHasInterest,omitempty"`
    QuestionText *string `json:"questionText,omitempty"`
    Uin *string `json:"uin,omitempty"`
    
}

