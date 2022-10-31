package shared

import (
"time")

type AlertAnnotationInfo struct {
    AnnotationType *int32 `json:"annotationType,omitempty"`
    ID *string `json:"id,omitempty"`
    Text *string `json:"text,omitempty"`
    Timestamp *time.Time `json:"timestamp,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

