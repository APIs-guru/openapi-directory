package shared

import (
"time")

type AnnotationRestAPIPut struct {
    EndDttm *time.Time `json:"end_dttm,omitempty"`
    JSONMetadata *string `json:"json_metadata,omitempty"`
    LongDescr *string `json:"long_descr,omitempty"`
    ShortDescr *string `json:"short_descr,omitempty"`
    StartDttm *time.Time `json:"start_dttm,omitempty"`
    
}

