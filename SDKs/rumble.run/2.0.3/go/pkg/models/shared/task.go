package shared

type Task struct {
	AgentID         *string                `json:"agent_id"`
	ClientID        *string                `json:"client_id"`
	CreatedAt       *int64                 `json:"created_at"`
	CreatedBy       *string                `json:"created_by"`
	CreatedByUserID *string                `json:"created_by_user_id"`
	CruncherID      *string                `json:"cruncher_id"`
	Description     *string                `json:"description"`
	Error           *string                `json:"error"`
	Hidden          *bool                  `json:"hidden"`
	ID              string                 `json:"id"`
	Name            *string                `json:"name"`
	OrganizationID  *string                `json:"organization_id"`
	Params          map[string]string      `json:"params"`
	ParentID        *string                `json:"parent_id"`
	Recur           *bool                  `json:"recur"`
	RecurFrequency  *string                `json:"recur_frequency"`
	RecurLast       *int64                 `json:"recur_last"`
	RecurLastTaskID *string                `json:"recur_last_task_id"`
	RecurNext       *int64                 `json:"recur_next"`
	SiteID          *string                `json:"site_id"`
	StartTime       *int64                 `json:"start_time"`
	Stats           map[string]interface{} `json:"stats"`
	Status          *string                `json:"status"`
	Type            *string                `json:"type"`
	UpdatedAt       *int64                 `json:"updated_at"`
}
