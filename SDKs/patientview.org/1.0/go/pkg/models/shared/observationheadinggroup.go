package shared

import (
"time")

type ObservationHeadingGroup struct {
    Created *time.Time `json:"created,omitempty"`
    Group *Group `json:"group,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Panel *int64 `json:"panel,omitempty"`
    PanelOrder *int64 `json:"panelOrder,omitempty"`
    
}

