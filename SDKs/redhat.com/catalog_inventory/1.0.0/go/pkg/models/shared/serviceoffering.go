package shared

import (
"time")

type ServiceOffering struct {
    ArchivedAt *time.Time `json:"archived_at,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"display_name,omitempty"`
    Distributor *string `json:"distributor,omitempty"`
    DocumentationURL *string `json:"documentation_url,omitempty"`
    Extra map[string]interface{} `json:"extra,omitempty"`
    ID *string `json:"id,omitempty"`
    LastSeenAt *time.Time `json:"last_seen_at,omitempty"`
    LongDescription *string `json:"long_description,omitempty"`
    Name *string `json:"name,omitempty"`
    RefreshStatePartID *string `json:"refresh_state_part_id,omitempty"`
    ServiceInventoryID *string `json:"service_inventory_id,omitempty"`
    SourceCreatedAt *time.Time `json:"source_created_at,omitempty"`
    SourceDeletedAt *time.Time `json:"source_deleted_at,omitempty"`
    SourceID *string `json:"source_id,omitempty"`
    SourceRef *string `json:"source_ref,omitempty"`
    SupportURL *string `json:"support_url,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    
}

