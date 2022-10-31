package shared

import (
"time")


type MediaV1MediaProcessorStatusCallbackMethodEnum string

const (
    MediaV1MediaProcessorStatusCallbackMethodEnumHead MediaV1MediaProcessorStatusCallbackMethodEnum = "HEAD"
MediaV1MediaProcessorStatusCallbackMethodEnumGet MediaV1MediaProcessorStatusCallbackMethodEnum = "GET"
MediaV1MediaProcessorStatusCallbackMethodEnumPost MediaV1MediaProcessorStatusCallbackMethodEnum = "POST"
MediaV1MediaProcessorStatusCallbackMethodEnumPatch MediaV1MediaProcessorStatusCallbackMethodEnum = "PATCH"
MediaV1MediaProcessorStatusCallbackMethodEnumPut MediaV1MediaProcessorStatusCallbackMethodEnum = "PUT"
MediaV1MediaProcessorStatusCallbackMethodEnumDelete MediaV1MediaProcessorStatusCallbackMethodEnum = "DELETE"
)


type MediaV1MediaProcessor struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    EndedReason *string `json:"ended_reason,omitempty"`
    Extension *string `json:"extension,omitempty"`
    ExtensionContext *string `json:"extension_context,omitempty"`
    MaxDuration *int64 `json:"max_duration,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *MediaProcessorEnumStatusEnum `json:"status,omitempty"`
    StatusCallback *string `json:"status_callback,omitempty"`
    StatusCallbackMethod *MediaV1MediaProcessorStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

