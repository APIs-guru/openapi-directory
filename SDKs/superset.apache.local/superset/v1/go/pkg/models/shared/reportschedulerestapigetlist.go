package shared

import (
	"time"
)

type ReportScheduleRestAPIGetList struct {
	Active                  *bool        `json:"active"`
	ChangedBy               *Meta34      `json:"changed_by"`
	ChangedOn               *time.Time   `json:"changed_on"`
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized"`
	CreatedBy               *Meta33      `json:"created_by"`
	CreatedOn               *time.Time   `json:"created_on"`
	CreationMethod          *string      `json:"creation_method"`
	Crontab                 string       `json:"crontab"`
	CrontabHumanized        *interface{} `json:"crontab_humanized"`
	Description             *string      `json:"description"`
	ID                      *int32       `json:"id"`
	LastEvalDttm            *time.Time   `json:"last_eval_dttm"`
	LastState               *string      `json:"last_state"`
	Name                    string       `json:"name"`
	Owners                  *Meta36      `json:"owners"`
	Recipients              Meta35       `json:"recipients"`
	Timezone                *string      `json:"timezone"`
	Type                    string       `json:"type"`
}
