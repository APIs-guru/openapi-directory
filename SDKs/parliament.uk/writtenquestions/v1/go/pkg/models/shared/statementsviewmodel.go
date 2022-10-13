package shared

import (
	"time"
)

type StatementsViewModel struct {
	AnsweringBodyID     *int32                `json:"answeringBodyId"`
	AnsweringBodyName   *string               `json:"answeringBodyName"`
	Attachments         []AttachmentViewModel `json:"attachments"`
	DateMade            *time.Time            `json:"dateMade"`
	HasAttachments      *bool                 `json:"hasAttachments"`
	HasLinkedStatements *bool                 `json:"hasLinkedStatements"`
	House               *HouseEnumEnum        `json:"house"`
	ID                  *int32                `json:"id"`
	LinkedStatements    []LinkedStatements    `json:"linkedStatements"`
	Member              *MemberViewModel      `json:"member"`
	MemberID            *int32                `json:"memberId"`
	MemberRole          *string               `json:"memberRole"`
	NoticeNumber        *int32                `json:"noticeNumber"`
	Text                *string               `json:"text"`
	Title               *string               `json:"title"`
	Uin                 *string               `json:"uin"`
}
