package shared

import (
	"time"
)

type AnnotationRestAPIGetList struct {
	ChangedBy               *Meta1       `json:"changed_by,omitempty"`
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized,omitempty"`
	CreatedBy               *Meta        `json:"created_by,omitempty"`
	EndDttm                 *time.Time   `json:"end_dttm,omitempty"`
	ID                      *int32       `json:"id,omitempty"`
	LongDescr               *string      `json:"long_descr,omitempty"`
	ShortDescr              *string      `json:"short_descr,omitempty"`
	StartDttm               *time.Time   `json:"start_dttm,omitempty"`
}
