package shared

import (
	"time"
)

type EventsV1SchemaSchemaVersion struct {
	DateCreated   *time.Time `json:"date_created,omitempty"`
	ID            *string    `json:"id,omitempty"`
	Raw           *string    `json:"raw,omitempty"`
	SchemaVersion *int64     `json:"schema_version,omitempty"`
	URL           *string    `json:"url,omitempty"`
}
