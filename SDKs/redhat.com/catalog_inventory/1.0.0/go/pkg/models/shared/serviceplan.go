package shared

import (
	"time"
)

type ServicePlan struct {
	ArchivedAt         *time.Time             `json:"archived_at"`
	CreateJSONSchema   map[string]interface{} `json:"create_json_schema"`
	CreatedAt          *time.Time             `json:"created_at"`
	Description        *string                `json:"description"`
	Extra              map[string]interface{} `json:"extra"`
	ID                 *string                `json:"id"`
	LastSeenAt         *time.Time             `json:"last_seen_at"`
	Name               *string                `json:"name"`
	RefreshStatePartID *string                `json:"refresh_state_part_id"`
	ResourceVersion    *string                `json:"resource_version"`
	ServiceOfferingID  *string                `json:"service_offering_id"`
	SourceCreatedAt    *time.Time             `json:"source_created_at"`
	SourceDeletedAt    *time.Time             `json:"source_deleted_at"`
	SourceID           *string                `json:"source_id"`
	SourceRef          *string                `json:"source_ref"`
	UpdateJSONSchema   *string                `json:"update_json_schema"`
	UpdatedAt          *time.Time             `json:"updated_at"`
}
