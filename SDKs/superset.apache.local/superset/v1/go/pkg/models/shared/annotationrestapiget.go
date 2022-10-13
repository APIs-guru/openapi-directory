package shared

import (
	"time"
)

type AnnotationRestAPIGet struct {
	EndDttm      *time.Time `json:"end_dttm"`
	ID           *int32     `json:"id"`
	JSONMetadata *string    `json:"json_metadata"`
	Layer        Meta2      `json:"layer"`
	LongDescr    *string    `json:"long_descr"`
	ShortDescr   *string    `json:"short_descr"`
	StartDttm    *time.Time `json:"start_dttm"`
}
