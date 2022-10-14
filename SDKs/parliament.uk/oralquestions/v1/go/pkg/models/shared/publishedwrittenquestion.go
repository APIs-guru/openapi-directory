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
	Answer                 *string                                   `json:"Answer,omitempty"`
	AnsweredWhen           *time.Time                                `json:"AnsweredWhen,omitempty"`
	AnsweringBody          *string                                   `json:"AnsweringBody,omitempty"`
	AnsweringBodyID        *int32                                    `json:"AnsweringBodyId,omitempty"`
	AnsweringMinister      *MemberForDate                            `json:"AnsweringMinister,omitempty"`
	AnsweringMinisterID    *int32                                    `json:"AnsweringMinisterId,omitempty"`
	AnsweringMinisterTitle *string                                   `json:"AnsweringMinisterTitle,omitempty"`
	AskingMember           *MemberForDate                            `json:"AskingMember,omitempty"`
	AskingMemberID         *int32                                    `json:"AskingMemberId,omitempty"`
	DueForAnswer           *time.Time                                `json:"DueForAnswer,omitempty"`
	ID                     *int32                                    `json:"Id,omitempty"`
	QuestionText           *string                                   `json:"QuestionText,omitempty"`
	QuestionType           *PublishedWrittenQuestionQuestionTypeEnum `json:"QuestionType,omitempty"`
	TabledWhen             *time.Time                                `json:"TabledWhen,omitempty"`
	Uin                    *int32                                    `json:"UIN,omitempty"`
}
