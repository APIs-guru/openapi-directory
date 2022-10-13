package shared

import (
	"time"
)

type AnnotationRestAPIPut struct {
	EndDttm      *time.Time `json:"end_dttm"`
	JSONMetadata *string    `json:"json_metadata"`
	LongDescr    *string    `json:"long_descr"`
	ShortDescr   *string    `json:"short_descr"`
	StartDttm    *time.Time `json:"start_dttm"`
}
