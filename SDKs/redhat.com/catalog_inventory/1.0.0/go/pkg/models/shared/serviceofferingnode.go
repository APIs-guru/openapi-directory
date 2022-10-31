package shared

import (
"time")

type ServiceOfferingNode struct {
    ArchivedAt *time.Time `json:"archived_at,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Extra map[string]interface{} `json:"extra,omitempty"`
    ID *string `json:"id,omitempty"`
    LastSeenAt *time.Time `json:"last_seen_at,omitempty"`
    Name *string `json:"name,omitempty"`
    RefreshStatePartID *string `json:"refresh_state_part_id,omitempty"`
    RootServiceOfferingID *string `json:"root_service_offering_id,omitempty"`
    ServiceInventoryID *string `json:"service_inventory_id,omitempty"`
    ServiceOfferingID *string `json:"service_offering_id,omitempty"`
    SourceCreatedAt *time.Time `json:"source_created_at,omitempty"`
    SourceID *string `json:"source_id,omitempty"`
    SourceRef *string `json:"source_ref,omitempty"`
    SourceUpdatedAt *time.Time `json:"source_updated_at,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    
}

