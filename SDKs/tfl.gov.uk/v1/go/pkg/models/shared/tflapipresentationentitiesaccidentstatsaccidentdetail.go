package shared

import (
	"time"
)

type TflAPIPresentationEntitiesAccidentStatsAccidentDetail struct {
	Borough    *string                                           `json:"borough"`
	Casualties []TflAPIPresentationEntitiesAccidentStatsCasualty `json:"casualties"`
	Date       *time.Time                                        `json:"date"`
	ID         *int32                                            `json:"id"`
	Lat        *float64                                          `json:"lat"`
	Location   *string                                           `json:"location"`
	Lon        *float64                                          `json:"lon"`
	Severity   *string                                           `json:"severity"`
	Vehicles   []TflAPIPresentationEntitiesAccidentStatsVehicle  `json:"vehicles"`
}
