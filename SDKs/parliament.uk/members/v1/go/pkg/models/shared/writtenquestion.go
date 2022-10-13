package shared

import (
	"time"
)

type WrittenQuestion struct {
	AnswerIsCorrection    *bool             `json:"answerIsCorrection"`
	AnswerIsHolding       *bool             `json:"answerIsHolding"`
	AnswerText            *string           `json:"answerText"`
	AnsweringBody         *AnsweringBody    `json:"answeringBody"`
	AnsweringBodyID       *int32            `json:"answeringBodyId"`
	AnsweringMember       *Member           `json:"answeringMember"`
	AnsweringMemberID     *int32            `json:"answeringMemberId"`
	AskingMemberID        *int32            `json:"askingMemberId"`
	AttachmentCount       *int32            `json:"attachmentCount"`
	CorrectingMember      *Member           `json:"correctingMember"`
	CorrectingMemberID    *int32            `json:"correctingMemberId"`
	DateAnswered          *time.Time        `json:"dateAnswered"`
	DateForAnswer         *time.Time        `json:"dateForAnswer"`
	DateTabled            *time.Time        `json:"dateTabled"`
	GroupedQuestions      []string          `json:"groupedQuestions"`
	GroupedQuestionsDates []GroupedQuestion `json:"groupedQuestionsDates"`
	Heading               *string           `json:"heading"`
	House                 *int32            `json:"house"`
	ID                    *int32            `json:"id"`
	IsNamedDay            *bool             `json:"isNamedDay"`
	IsWithdrawn           *bool             `json:"isWithdrawn"`
	MemberHasInterest     *bool             `json:"memberHasInterest"`
	QuestionText          *string           `json:"questionText"`
	Uin                   *string           `json:"uin"`
}
