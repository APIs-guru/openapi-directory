package shared

import (
	"time"
)

type ServiceCredentialType struct {
	ArchivedAt         *time.Time `json:"archived_at"`
	CreatedAt          *time.Time `json:"created_at"`
	Description        *string    `json:"description"`
	ID                 *string    `json:"id"`
	Kind               *string    `json:"kind"`
	LastSeenAt         *time.Time `json:"last_seen_at"`
	Name               *string    `json:"name"`
	Namespace          *string    `json:"namespace"`
	RefreshStatePartID *string    `json:"refresh_state_part_id"`
	SourceCreatedAt    *time.Time `json:"source_created_at"`
	SourceDeletedAt    *time.Time `json:"source_deleted_at"`
	SourceID           *string    `json:"source_id"`
	SourceRef          *string    `json:"source_ref"`
	UpdatedAt          *time.Time `json:"updated_at"`
}
