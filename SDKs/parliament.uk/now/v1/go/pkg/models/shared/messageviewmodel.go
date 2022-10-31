package shared

import (
"time")


type MessageViewModelAnnunciatorTypeEnum string

const (
    MessageViewModelAnnunciatorTypeEnumCommonsMain MessageViewModelAnnunciatorTypeEnum = "CommonsMain"
MessageViewModelAnnunciatorTypeEnumLordsMain MessageViewModelAnnunciatorTypeEnum = "LordsMain"
MessageViewModelAnnunciatorTypeEnumSecurity MessageViewModelAnnunciatorTypeEnum = "Security"
)


type MessageViewModel struct {
    AnnunciatorType *MessageViewModelAnnunciatorTypeEnum `json:"annunciatorType,omitempty"`
    ID *int32 `json:"id,omitempty"`
    IsSecurityOverride *bool `json:"isSecurityOverride,omitempty"`
    PublishTime *time.Time `json:"publishTime,omitempty"`
    ScrollingMessages []ScrollingMessageViewModel `json:"scrollingMessages,omitempty"`
    ShowCommonsBell *bool `json:"showCommonsBell,omitempty"`
    ShowLordsBell *bool `json:"showLordsBell,omitempty"`
    Slides []SlideViewModel `json:"slides,omitempty"`
    
}

