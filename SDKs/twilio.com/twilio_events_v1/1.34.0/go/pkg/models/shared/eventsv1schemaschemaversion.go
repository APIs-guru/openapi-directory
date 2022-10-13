package shared

import (
	"time"
)

type EventsV1SchemaSchemaVersion struct {
	DateCreated   *time.Time `json:"date_created"`
	ID            *string    `json:"id"`
	Raw           *string    `json:"raw"`
	SchemaVersion *int64     `json:"schema_version"`
	URL           *string    `json:"url"`
}
