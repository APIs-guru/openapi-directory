package shared

import (
	"time"
)

type ServiceInstance struct {
	ArchivedAt            *time.Time             `json:"archived_at"`
	CreatedAt             *time.Time             `json:"created_at"`
	ExternalURL           *string                `json:"external_url"`
	Extra                 map[string]interface{} `json:"extra"`
	ID                    *string                `json:"id"`
	LastSeenAt            *time.Time             `json:"last_seen_at"`
	Name                  *string                `json:"name"`
	RefreshStatePartID    *string                `json:"refresh_state_part_id"`
	RootServiceInstanceID *string                `json:"root_service_instance_id"`
	ServiceInventoryID    *string                `json:"service_inventory_id"`
	ServiceOfferingID     *string                `json:"service_offering_id"`
	ServicePlanID         *string                `json:"service_plan_id"`
	SourceCreatedAt       *time.Time             `json:"source_created_at"`
	SourceDeletedAt       *time.Time             `json:"source_deleted_at"`
	SourceID              *string                `json:"source_id"`
	SourceRef             *string                `json:"source_ref"`
	UpdatedAt             *time.Time             `json:"updated_at"`
}
