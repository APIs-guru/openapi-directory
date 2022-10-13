package shared

import (
	"time"
)

type MessageViewModelAnnunciatorTypeEnum string

const (
	MessageViewModelAnnunciatorTypeEnumCommonsMain MessageViewModelAnnunciatorTypeEnum = "CommonsMain"
	MessageViewModelAnnunciatorTypeEnumLordsMain   MessageViewModelAnnunciatorTypeEnum = "LordsMain"
	MessageViewModelAnnunciatorTypeEnumSecurity    MessageViewModelAnnunciatorTypeEnum = "Security"
)

type MessageViewModel struct {
	AnnunciatorType    *MessageViewModelAnnunciatorTypeEnum `json:"annunciatorType"`
	ID                 *int32                               `json:"id"`
	IsSecurityOverride *bool                                `json:"isSecurityOverride"`
	PublishTime        *time.Time                           `json:"publishTime"`
	ScrollingMessages  []ScrollingMessageViewModel          `json:"scrollingMessages"`
	ShowCommonsBell    *bool                                `json:"showCommonsBell"`
	ShowLordsBell      *bool                                `json:"showLordsBell"`
	Slides             []SlideViewModel                     `json:"slides"`
}
