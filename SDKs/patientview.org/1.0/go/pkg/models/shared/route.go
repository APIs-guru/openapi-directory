package shared

import (
	"time"
)

type Route struct {
	Controller   *string
	Created      *time.Time
	DisplayOrder *int32
	ID           *int64
	Lookup       *Lookup
	TemplateURL  *string
	Title        *string
	URL          *string
}
