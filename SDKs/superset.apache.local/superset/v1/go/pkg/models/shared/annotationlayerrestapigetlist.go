package shared

import (
	"time"
)

type AnnotationLayerRestAPIGetList struct {
	ChangedBy               *Meta4       `json:"changed_by,omitempty"`
	ChangedOn               *time.Time   `json:"changed_on,omitempty"`
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized,omitempty"`
	CreatedBy               *Meta3       `json:"created_by,omitempty"`
	CreatedOn               *time.Time   `json:"created_on,omitempty"`
	Descr                   *string      `json:"descr,omitempty"`
	ID                      *int32       `json:"id,omitempty"`
	Name                    *string      `json:"name,omitempty"`
}
