package shared

import (
"time")


type ScrollingMessageViewModelAlertTypeEnum string

const (
    ScrollingMessageViewModelAlertTypeEnumStandard ScrollingMessageViewModelAlertTypeEnum = "Standard"
ScrollingMessageViewModelAlertTypeEnumSecondaryChamber ScrollingMessageViewModelAlertTypeEnum = "SecondaryChamber"
ScrollingMessageViewModelAlertTypeEnumAlert ScrollingMessageViewModelAlertTypeEnum = "Alert"
ScrollingMessageViewModelAlertTypeEnumSecurityNormal ScrollingMessageViewModelAlertTypeEnum = "SecurityNormal"
ScrollingMessageViewModelAlertTypeEnumSecurityHigh ScrollingMessageViewModelAlertTypeEnum = "SecurityHigh"
)



type ScrollingMessageViewModelVerticalAlignmentEnum string

const (
    ScrollingMessageViewModelVerticalAlignmentEnumTop ScrollingMessageViewModelVerticalAlignmentEnum = "Top"
ScrollingMessageViewModelVerticalAlignmentEnumMiddle ScrollingMessageViewModelVerticalAlignmentEnum = "Middle"
ScrollingMessageViewModelVerticalAlignmentEnumBottom ScrollingMessageViewModelVerticalAlignmentEnum = "Bottom"
)


type ScrollingMessageViewModel struct {
    AlertType *ScrollingMessageViewModelAlertTypeEnum `json:"alertType,omitempty"`
    Content *string `json:"content,omitempty"`
    DisplayFrom *time.Time `json:"displayFrom,omitempty"`
    DisplayTo *time.Time `json:"displayTo,omitempty"`
    ID *int32 `json:"id,omitempty"`
    VerticalAlignment *ScrollingMessageViewModelVerticalAlignmentEnum `json:"verticalAlignment,omitempty"`
    
}

