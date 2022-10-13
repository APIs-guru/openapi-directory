package shared

import (
	"time"
)

type ServiceCredential struct {
	ArchivedAt              *time.Time `json:"archived_at"`
	CreatedAt               *time.Time `json:"created_at"`
	Description             *string    `json:"description"`
	ID                      *string    `json:"id"`
	LastSeenAt              *time.Time `json:"last_seen_at"`
	Name                    *string    `json:"name"`
	RefreshStatePartID      *string    `json:"refresh_state_part_id"`
	ServiceCredentialTypeID *string    `json:"service_credential_type_id"`
	SourceCreatedAt         *time.Time `json:"source_created_at"`
	SourceID                *string    `json:"source_id"`
	SourceRef               *string    `json:"source_ref"`
	SourceUpdatedAt         *time.Time `json:"source_updated_at"`
	TypeName                *string    `json:"type_name"`
	UpdatedAt               *time.Time `json:"updated_at"`
}
