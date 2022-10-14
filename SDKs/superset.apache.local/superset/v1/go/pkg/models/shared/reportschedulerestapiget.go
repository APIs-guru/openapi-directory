package shared

import (
	"time"
)

type ReportScheduleRestAPIGet struct {
	Active              *bool      `json:"active,omitempty"`
	Chart               *Meta40    `json:"chart,omitempty"`
	ContextMarkdown     *string    `json:"context_markdown,omitempty"`
	CreationMethod      *string    `json:"creation_method,omitempty"`
	Crontab             string     `json:"crontab"`
	Dashboard           *Meta41    `json:"dashboard,omitempty"`
	Database            *Meta37    `json:"database,omitempty"`
	Description         *string    `json:"description,omitempty"`
	GracePeriod         *int32     `json:"grace_period,omitempty"`
	ID                  *int32     `json:"id,omitempty"`
	LastEvalDttm        *time.Time `json:"last_eval_dttm,omitempty"`
	LastState           *string    `json:"last_state,omitempty"`
	LastValue           *float32   `json:"last_value,omitempty"`
	LastValueRowJSON    *string    `json:"last_value_row_json,omitempty"`
	LogRetention        *int32     `json:"log_retention,omitempty"`
	Name                string     `json:"name"`
	Owners              *Meta39    `json:"owners,omitempty"`
	Recipients          Meta38     `json:"recipients"`
	ReportFormat        *string    `json:"report_format,omitempty"`
	SQL                 *string    `json:"sql,omitempty"`
	Timezone            *string    `json:"timezone,omitempty"`
	Type                string     `json:"type"`
	ValidatorConfigJSON *string    `json:"validator_config_json,omitempty"`
	ValidatorType       *string    `json:"validator_type,omitempty"`
	WorkingTimeout      *int32     `json:"working_timeout,omitempty"`
}
