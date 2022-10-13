package shared

import (
	"time"
)

type ObservationHeadingGroup struct {
	Created    *time.Time `json:"created"`
	Group      *Group     `json:"group"`
	ID         *int64     `json:"id"`
	Panel      *int64     `json:"panel"`
	PanelOrder *int64     `json:"panelOrder"`
}
