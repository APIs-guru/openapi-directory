package shared

import (
	"time"
)

type CSSTemplateRestAPIGetList struct {
	ChangedBy               *Meta12      `json:"changed_by,omitempty"`
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized,omitempty"`
	CreatedBy               *Meta11      `json:"created_by,omitempty"`
	CreatedOn               *time.Time   `json:"created_on,omitempty"`
	CSS                     *string      `json:"css,omitempty"`
	ID                      *int32       `json:"id,omitempty"`
	TemplateName            *string      `json:"template_name,omitempty"`
}
