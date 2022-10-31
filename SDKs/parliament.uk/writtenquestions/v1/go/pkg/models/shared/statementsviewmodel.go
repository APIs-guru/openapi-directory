package shared

import (
"time")

type StatementsViewModel struct {
    AnsweringBodyID *int32 `json:"answeringBodyId,omitempty"`
    AnsweringBodyName *string `json:"answeringBodyName,omitempty"`
    Attachments []AttachmentViewModel `json:"attachments,omitempty"`
    DateMade *time.Time `json:"dateMade,omitempty"`
    HasAttachments *bool `json:"hasAttachments,omitempty"`
    HasLinkedStatements *bool `json:"hasLinkedStatements,omitempty"`
    House *HouseEnumEnum `json:"house,omitempty"`
    ID *int32 `json:"id,omitempty"`
    LinkedStatements []LinkedStatements `json:"linkedStatements,omitempty"`
    Member *MemberViewModel `json:"member,omitempty"`
    MemberID *int32 `json:"memberId,omitempty"`
    MemberRole *string `json:"memberRole,omitempty"`
    NoticeNumber *int32 `json:"noticeNumber,omitempty"`
    Text *string `json:"text,omitempty"`
    Title *string `json:"title,omitempty"`
    Uin *string `json:"uin,omitempty"`
    
}

