package shared

import (
	"time"
)

type ServiceInstance struct {
	ArchivedAt            *time.Time             `json:"archived_at,omitempty"`
	CreatedAt             *time.Time             `json:"created_at,omitempty"`
	ExternalURL           *string                `json:"external_url,omitempty"`
	Extra                 map[string]interface{} `json:"extra,omitempty"`
	ID                    *string                `json:"id,omitempty"`
	LastSeenAt            *time.Time             `json:"last_seen_at,omitempty"`
	Name                  *string                `json:"name,omitempty"`
	RefreshStatePartID    *string                `json:"refresh_state_part_id,omitempty"`
	RootServiceInstanceID *string                `json:"root_service_instance_id,omitempty"`
	ServiceInventoryID    *string                `json:"service_inventory_id,omitempty"`
	ServiceOfferingID     *string                `json:"service_offering_id,omitempty"`
	ServicePlanID         *string                `json:"service_plan_id,omitempty"`
	SourceCreatedAt       *time.Time             `json:"source_created_at,omitempty"`
	SourceDeletedAt       *time.Time             `json:"source_deleted_at,omitempty"`
	SourceID              *string                `json:"source_id,omitempty"`
	SourceRef             *string                `json:"source_ref,omitempty"`
	UpdatedAt             *time.Time             `json:"updated_at,omitempty"`
}
