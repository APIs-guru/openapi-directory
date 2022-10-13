package shared

import (
	"time"
)

type ServiceOffering struct {
	ArchivedAt         *time.Time             `json:"archived_at"`
	CreatedAt          *time.Time             `json:"created_at"`
	Description        *string                `json:"description"`
	DisplayName        *string                `json:"display_name"`
	Distributor        *string                `json:"distributor"`
	DocumentationURL   *string                `json:"documentation_url"`
	Extra              map[string]interface{} `json:"extra"`
	ID                 *string                `json:"id"`
	LastSeenAt         *time.Time             `json:"last_seen_at"`
	LongDescription    *string                `json:"long_description"`
	Name               *string                `json:"name"`
	RefreshStatePartID *string                `json:"refresh_state_part_id"`
	ServiceInventoryID *string                `json:"service_inventory_id"`
	SourceCreatedAt    *time.Time             `json:"source_created_at"`
	SourceDeletedAt    *time.Time             `json:"source_deleted_at"`
	SourceID           *string                `json:"source_id"`
	SourceRef          *string                `json:"source_ref"`
	SupportURL         *string                `json:"support_url"`
	UpdatedAt          *time.Time             `json:"updated_at"`
}
