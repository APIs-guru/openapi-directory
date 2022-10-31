package shared

import (
	"time"
)

type ServicePlan struct {
	ArchivedAt         *time.Time             `json:"archived_at,omitempty"`
	CreateJSONSchema   map[string]interface{} `json:"create_json_schema,omitempty"`
	CreatedAt          *time.Time             `json:"created_at,omitempty"`
	Description        *string                `json:"description,omitempty"`
	Extra              map[string]interface{} `json:"extra,omitempty"`
	ID                 *string                `json:"id,omitempty"`
	LastSeenAt         *time.Time             `json:"last_seen_at,omitempty"`
	Name               *string                `json:"name,omitempty"`
	RefreshStatePartID *string                `json:"refresh_state_part_id,omitempty"`
	ResourceVersion    *string                `json:"resource_version,omitempty"`
	ServiceOfferingID  *string                `json:"service_offering_id,omitempty"`
	SourceCreatedAt    *time.Time             `json:"source_created_at,omitempty"`
	SourceDeletedAt    *time.Time             `json:"source_deleted_at,omitempty"`
	SourceID           *string                `json:"source_id,omitempty"`
	SourceRef          *string                `json:"source_ref,omitempty"`
	UpdateJSONSchema   *string                `json:"update_json_schema,omitempty"`
	UpdatedAt          *time.Time             `json:"updated_at,omitempty"`
}
