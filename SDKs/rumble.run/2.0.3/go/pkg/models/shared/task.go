package shared

type Task struct {
	AgentID         *string                `json:"agent_id,omitempty"`
	ClientID        *string                `json:"client_id,omitempty"`
	CreatedAt       *int64                 `json:"created_at,omitempty"`
	CreatedBy       *string                `json:"created_by,omitempty"`
	CreatedByUserID *string                `json:"created_by_user_id,omitempty"`
	CruncherID      *string                `json:"cruncher_id,omitempty"`
	Description     *string                `json:"description,omitempty"`
	Error           *string                `json:"error,omitempty"`
	Hidden          *bool                  `json:"hidden,omitempty"`
	ID              string                 `json:"id"`
	Name            *string                `json:"name,omitempty"`
	OrganizationID  *string                `json:"organization_id,omitempty"`
	Params          map[string]string      `json:"params,omitempty"`
	ParentID        *string                `json:"parent_id,omitempty"`
	Recur           *bool                  `json:"recur,omitempty"`
	RecurFrequency  *string                `json:"recur_frequency,omitempty"`
	RecurLast       *int64                 `json:"recur_last,omitempty"`
	RecurLastTaskID *string                `json:"recur_last_task_id,omitempty"`
	RecurNext       *int64                 `json:"recur_next,omitempty"`
	SiteID          *string                `json:"site_id,omitempty"`
	StartTime       *int64                 `json:"start_time,omitempty"`
	Stats           map[string]interface{} `json:"stats,omitempty"`
	Status          *string                `json:"status,omitempty"`
	Type            *string                `json:"type,omitempty"`
	UpdatedAt       *int64                 `json:"updated_at,omitempty"`
}
