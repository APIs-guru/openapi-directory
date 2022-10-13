package shared

import (
	"time"
)

type ServiceOfferingNode struct {
	ArchivedAt            *time.Time             `json:"archived_at"`
	CreatedAt             *time.Time             `json:"created_at"`
	Extra                 map[string]interface{} `json:"extra"`
	ID                    *string                `json:"id"`
	LastSeenAt            *time.Time             `json:"last_seen_at"`
	Name                  *string                `json:"name"`
	RefreshStatePartID    *string                `json:"refresh_state_part_id"`
	RootServiceOfferingID *string                `json:"root_service_offering_id"`
	ServiceInventoryID    *string                `json:"service_inventory_id"`
	ServiceOfferingID     *string                `json:"service_offering_id"`
	SourceCreatedAt       *time.Time             `json:"source_created_at"`
	SourceID              *string                `json:"source_id"`
	SourceRef             *string                `json:"source_ref"`
	SourceUpdatedAt       *time.Time             `json:"source_updated_at"`
	UpdatedAt             *time.Time             `json:"updated_at"`
}
