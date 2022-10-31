package shared

import (
"time")

type ObservationHeading struct {
    Code *string `json:"code,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    DecimalPlaces *int64 `json:"decimalPlaces,omitempty"`
    DefaultPanel *int64 `json:"defaultPanel,omitempty"`
    DefaultPanelOrder *int64 `json:"defaultPanelOrder,omitempty"`
    Heading *string `json:"heading,omitempty"`
    ID *int64 `json:"id,omitempty"`
    InfoLink *string `json:"infoLink,omitempty"`
    LastUpdate *time.Time `json:"lastUpdate,omitempty"`
    MaxGraph *float64 `json:"maxGraph,omitempty"`
    MinGraph *float64 `json:"minGraph,omitempty"`
    Name *string `json:"name,omitempty"`
    NormalRange *string `json:"normalRange,omitempty"`
    ObservationHeadingGroups []ObservationHeadingGroup `json:"observationHeadingGroups,omitempty"`
    Units *string `json:"units,omitempty"`
    
}

