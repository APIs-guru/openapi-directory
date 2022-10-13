package shared

import (
	"time"
)

type ReportScheduleRestAPIGet struct {
	Active              *bool      `json:"active"`
	Chart               *Meta40    `json:"chart"`
	ContextMarkdown     *string    `json:"context_markdown"`
	CreationMethod      *string    `json:"creation_method"`
	Crontab             string     `json:"crontab"`
	Dashboard           *Meta41    `json:"dashboard"`
	Database            *Meta37    `json:"database"`
	Description         *string    `json:"description"`
	GracePeriod         *int32     `json:"grace_period"`
	ID                  *int32     `json:"id"`
	LastEvalDttm        *time.Time `json:"last_eval_dttm"`
	LastState           *string    `json:"last_state"`
	LastValue           *float32   `json:"last_value"`
	LastValueRowJSON    *string    `json:"last_value_row_json"`
	LogRetention        *int32     `json:"log_retention"`
	Name                string     `json:"name"`
	Owners              *Meta39    `json:"owners"`
	Recipients          Meta38     `json:"recipients"`
	ReportFormat        *string    `json:"report_format"`
	SQL                 *string    `json:"sql"`
	Timezone            *string    `json:"timezone"`
	Type                string     `json:"type"`
	ValidatorConfigJSON *string    `json:"validator_config_json"`
	ValidatorType       *string    `json:"validator_type"`
	WorkingTimeout      *int32     `json:"working_timeout"`
}
