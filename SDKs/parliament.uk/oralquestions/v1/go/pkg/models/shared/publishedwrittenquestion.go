package shared

import (
	"time"
)

type PublishedWrittenQuestionQuestionTypeEnum string

const (
	PublishedWrittenQuestionQuestionTypeEnumNamedDay PublishedWrittenQuestionQuestionTypeEnum = "NamedDay"
	PublishedWrittenQuestionQuestionTypeEnumOrdinary PublishedWrittenQuestionQuestionTypeEnum = "Ordinary"
)

type PublishedWrittenQuestion struct {
	Answer                 *string                                   `json:"Answer"`
	AnsweredWhen           *time.Time                                `json:"AnsweredWhen"`
	AnsweringBody          *string                                   `json:"AnsweringBody"`
	AnsweringBodyID        *int32                                    `json:"AnsweringBodyId"`
	AnsweringMinister      *MemberForDate                            `json:"AnsweringMinister"`
	AnsweringMinisterID    *int32                                    `json:"AnsweringMinisterId"`
	AnsweringMinisterTitle *string                                   `json:"AnsweringMinisterTitle"`
	AskingMember           *MemberForDate                            `json:"AskingMember"`
	AskingMemberID         *int32                                    `json:"AskingMemberId"`
	DueForAnswer           *time.Time                                `json:"DueForAnswer"`
	ID                     *int32                                    `json:"Id"`
	QuestionText           *string                                   `json:"QuestionText"`
	QuestionType           *PublishedWrittenQuestionQuestionTypeEnum `json:"QuestionType"`
	TabledWhen             *time.Time                                `json:"TabledWhen"`
	Uin                    *int32                                    `json:"UIN"`
}
