package shared

import (
	"time"
)

type EventsV1EventType struct {
	DateCreated *time.Time             `json:"date_created,omitempty"`
	DateUpdated *time.Time             `json:"date_updated,omitempty"`
	Description *string                `json:"description,omitempty"`
	Links       map[string]interface{} `json:"links,omitempty"`
	SchemaID    *string                `json:"schema_id,omitempty"`
	Type        *string                `json:"type,omitempty"`
	URL         *string                `json:"url,omitempty"`
}
