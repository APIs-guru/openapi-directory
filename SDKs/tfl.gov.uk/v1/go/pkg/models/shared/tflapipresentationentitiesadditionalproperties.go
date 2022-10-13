package shared

import (
	"time"
)

type TflAPIPresentationEntitiesAdditionalProperties struct {
	Category        *string    `json:"category"`
	Key             *string    `json:"key"`
	Modified        *time.Time `json:"modified"`
	SourceSystemKey *string    `json:"sourceSystemKey"`
	Value           *string    `json:"value"`
}
