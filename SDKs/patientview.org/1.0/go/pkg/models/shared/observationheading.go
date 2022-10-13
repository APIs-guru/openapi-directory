package shared

import (
	"time"
)

type ObservationHeading struct {
	Code                     *string                   `json:"code"`
	Created                  *time.Time                `json:"created"`
	DecimalPlaces            *int64                    `json:"decimalPlaces"`
	DefaultPanel             *int64                    `json:"defaultPanel"`
	DefaultPanelOrder        *int64                    `json:"defaultPanelOrder"`
	Heading                  *string                   `json:"heading"`
	ID                       *int64                    `json:"id"`
	InfoLink                 *string                   `json:"infoLink"`
	LastUpdate               *time.Time                `json:"lastUpdate"`
	MaxGraph                 *float64                  `json:"maxGraph"`
	MinGraph                 *float64                  `json:"minGraph"`
	Name                     *string                   `json:"name"`
	NormalRange              *string                   `json:"normalRange"`
	ObservationHeadingGroups []ObservationHeadingGroup `json:"observationHeadingGroups"`
	Units                    *string                   `json:"units"`
}
