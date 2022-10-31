package shared

import (
"time")

type PreviewUnderstandAssistantTaskField struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AssistantSid *string `json:"assistant_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FieldType *string `json:"field_type,omitempty"`
    Sid *string `json:"sid,omitempty"`
    TaskSid *string `json:"task_sid,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

