package shared

import (
"time")

type TflAPIPresentationEntitiesAccidentStatsAccidentDetail struct {
    Borough *string `json:"borough,omitempty"`
    Casualties []TflAPIPresentationEntitiesAccidentStatsCasualty `json:"casualties,omitempty"`
    Date *time.Time `json:"date,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Lat *float64 `json:"lat,omitempty"`
    Location *string `json:"location,omitempty"`
    Lon *float64 `json:"lon,omitempty"`
    Severity *string `json:"severity,omitempty"`
    Vehicles []TflAPIPresentationEntitiesAccidentStatsVehicle `json:"vehicles,omitempty"`
    
}

