package shared

import (
	"time"
)

type ScrollingMessageViewModelAlertTypeEnum string

const (
	ScrollingMessageViewModelAlertTypeEnumStandard         ScrollingMessageViewModelAlertTypeEnum = "Standard"
	ScrollingMessageViewModelAlertTypeEnumSecondaryChamber ScrollingMessageViewModelAlertTypeEnum = "SecondaryChamber"
	ScrollingMessageViewModelAlertTypeEnumAlert            ScrollingMessageViewModelAlertTypeEnum = "Alert"
	ScrollingMessageViewModelAlertTypeEnumSecurityNormal   ScrollingMessageViewModelAlertTypeEnum = "SecurityNormal"
	ScrollingMessageViewModelAlertTypeEnumSecurityHigh     ScrollingMessageViewModelAlertTypeEnum = "SecurityHigh"
)

type ScrollingMessageViewModelVerticalAlignmentEnum string

const (
	ScrollingMessageViewModelVerticalAlignmentEnumTop    ScrollingMessageViewModelVerticalAlignmentEnum = "Top"
	ScrollingMessageViewModelVerticalAlignmentEnumMiddle ScrollingMessageViewModelVerticalAlignmentEnum = "Middle"
	ScrollingMessageViewModelVerticalAlignmentEnumBottom ScrollingMessageViewModelVerticalAlignmentEnum = "Bottom"
)

type ScrollingMessageViewModel struct {
	AlertType         *ScrollingMessageViewModelAlertTypeEnum         `json:"alertType"`
	Content           *string                                         `json:"content"`
	DisplayFrom       *time.Time                                      `json:"displayFrom"`
	DisplayTo         *time.Time                                      `json:"displayTo"`
	ID                *int32                                          `json:"id"`
	VerticalAlignment *ScrollingMessageViewModelVerticalAlignmentEnum `json:"verticalAlignment"`
}
