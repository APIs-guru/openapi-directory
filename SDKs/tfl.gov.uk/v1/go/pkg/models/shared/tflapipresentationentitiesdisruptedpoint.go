package shared

import (
	"time"
)

type TflAPIPresentationEntitiesDisruptedPoint struct {
	AdditionalInformation *string    `json:"additionalInformation,omitempty"`
	Appearance            *string    `json:"appearance,omitempty"`
	AtcoCode              *string    `json:"atcoCode,omitempty"`
	CommonName            *string    `json:"commonName,omitempty"`
	Description           *string    `json:"description,omitempty"`
	FromDate              *time.Time `json:"fromDate,omitempty"`
	Mode                  *string    `json:"mode,omitempty"`
	StationAtcoCode       *string    `json:"stationAtcoCode,omitempty"`
	ToDate                *time.Time `json:"toDate,omitempty"`
	Type                  *string    `json:"type,omitempty"`
}
