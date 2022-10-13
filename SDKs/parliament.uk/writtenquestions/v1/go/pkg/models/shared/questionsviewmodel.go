package shared

import (
	"time"
)

type QuestionsViewModel struct {
	AnswerIsCorrection    *bool                      `json:"answerIsCorrection"`
	AnswerIsHolding       *bool                      `json:"answerIsHolding"`
	AnswerText            *string                    `json:"answerText"`
	AnsweringBodyID       *int32                     `json:"answeringBodyId"`
	AnsweringBodyName     *string                    `json:"answeringBodyName"`
	AnsweringMember       *MemberViewModel           `json:"answeringMember"`
	AnsweringMemberID     *int32                     `json:"answeringMemberId"`
	AskingMember          *MemberViewModel           `json:"askingMember"`
	AskingMemberID        *int32                     `json:"askingMemberId"`
	AttachmentCount       *int32                     `json:"attachmentCount"`
	Attachments           []AttachmentViewModel      `json:"attachments"`
	ComparableAnswerText  *string                    `json:"comparableAnswerText"`
	CorrectingMember      *MemberViewModel           `json:"correctingMember"`
	CorrectingMemberID    *int32                     `json:"correctingMemberId"`
	DateAnswerCorrected   *time.Time                 `json:"dateAnswerCorrected"`
	DateAnswered          *time.Time                 `json:"dateAnswered"`
	DateForAnswer         *time.Time                 `json:"dateForAnswer"`
	DateHoldingAnswer     *time.Time                 `json:"dateHoldingAnswer"`
	DateTabled            *time.Time                 `json:"dateTabled"`
	GroupedQuestions      []string                   `json:"groupedQuestions"`
	GroupedQuestionsDates []GroupedQuestionViewModel `json:"groupedQuestionsDates"`
	Heading               *string                    `json:"heading"`
	House                 *HouseEnumEnum             `json:"house"`
	ID                    *int32                     `json:"id"`
	IsNamedDay            *bool                      `json:"isNamedDay"`
	IsWithdrawn           *bool                      `json:"isWithdrawn"`
	MemberHasInterest     *bool                      `json:"memberHasInterest"`
	OriginalAnswerText    *string                    `json:"originalAnswerText"`
	QuestionText          *string                    `json:"questionText"`
	Uin                   *string                    `json:"uin"`
}
