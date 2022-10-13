package shared

import (
	"time"
)

type CSSTemplateRestAPIGetList struct {
	ChangedBy               *Meta12      `json:"changed_by"`
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized"`
	CreatedBy               *Meta11      `json:"created_by"`
	CreatedOn               *time.Time   `json:"created_on"`
	CSS                     *string      `json:"css"`
	ID                      *int32       `json:"id"`
	TemplateName            *string      `json:"template_name"`
}
