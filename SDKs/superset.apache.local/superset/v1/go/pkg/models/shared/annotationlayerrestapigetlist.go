package shared

import (
	"time"
)

type AnnotationLayerRestAPIGetList struct {
	ChangedBy               *Meta4       `json:"changed_by"`
	ChangedOn               *time.Time   `json:"changed_on"`
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized"`
	CreatedBy               *Meta3       `json:"created_by"`
	CreatedOn               *time.Time   `json:"created_on"`
	Descr                   *string      `json:"descr"`
	ID                      *int32       `json:"id"`
	Name                    *string      `json:"name"`
}
