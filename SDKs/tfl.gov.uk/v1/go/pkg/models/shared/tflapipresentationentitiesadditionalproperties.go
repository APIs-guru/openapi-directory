package shared

import (
	"time"
)

type TflAPIPresentationEntitiesAdditionalProperties struct {
	Category        *string    `json:"category,omitempty"`
	Key             *string    `json:"key,omitempty"`
	Modified        *time.Time `json:"modified,omitempty"`
	SourceSystemKey *string    `json:"sourceSystemKey,omitempty"`
	Value           *string    `json:"value,omitempty"`
}
