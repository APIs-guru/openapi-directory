package shared

import (
	"time"
)

type BaseGroup struct {
	Code           *string
	GroupType      *Lookup
	ID             *int64
	LastImportDate *time.Time
	Name           *string
	ParentCodes    []string
	ShortName      *string
	Visible        *bool
	VisibleToJoin  *bool
}
