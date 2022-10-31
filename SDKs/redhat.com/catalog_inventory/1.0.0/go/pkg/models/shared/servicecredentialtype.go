package shared

import (
"time")

type ServiceCredentialType struct {
    ArchivedAt *time.Time `json:"archived_at,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LastSeenAt *time.Time `json:"last_seen_at,omitempty"`
    Name *string `json:"name,omitempty"`
    Namespace *string `json:"namespace,omitempty"`
    RefreshStatePartID *string `json:"refresh_state_part_id,omitempty"`
    SourceCreatedAt *time.Time `json:"source_created_at,omitempty"`
    SourceDeletedAt *time.Time `json:"source_deleted_at,omitempty"`
    SourceID *string `json:"source_id,omitempty"`
    SourceRef *string `json:"source_ref,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    
}

