package shared

import (
	"time"
)

type AnnotationRestAPIGetList struct {
	ChangedBy               *Meta1       `json:"changed_by"`
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized"`
	CreatedBy               *Meta        `json:"created_by"`
	EndDttm                 *time.Time   `json:"end_dttm"`
	ID                      *int32       `json:"id"`
	LongDescr               *string      `json:"long_descr"`
	ShortDescr              *string      `json:"short_descr"`
	StartDttm               *time.Time   `json:"start_dttm"`
}
