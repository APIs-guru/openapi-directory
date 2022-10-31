package shared

import (
	"time"
)

type ReportScheduleRestAPIGetList struct {
	Active                  *bool        `json:"active,omitempty"`
	ChangedBy               *Meta34      `json:"changed_by,omitempty"`
	ChangedOn               *time.Time   `json:"changed_on,omitempty"`
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized,omitempty"`
	CreatedBy               *Meta33      `json:"created_by,omitempty"`
	CreatedOn               *time.Time   `json:"created_on,omitempty"`
	CreationMethod          *string      `json:"creation_method,omitempty"`
	Crontab                 string       `json:"crontab"`
	CrontabHumanized        *interface{} `json:"crontab_humanized,omitempty"`
	Description             *string      `json:"description,omitempty"`
	ID                      *int32       `json:"id,omitempty"`
	LastEvalDttm            *time.Time   `json:"last_eval_dttm,omitempty"`
	LastState               *string      `json:"last_state,omitempty"`
	Name                    string       `json:"name"`
	Owners                  *Meta36      `json:"owners,omitempty"`
	Recipients              Meta35       `json:"recipients"`
	Timezone                *string      `json:"timezone,omitempty"`
	Type                    string       `json:"type"`
}
