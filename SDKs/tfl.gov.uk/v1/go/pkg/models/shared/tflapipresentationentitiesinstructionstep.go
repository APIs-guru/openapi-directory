package shared

type TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum string

const (
	TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnumNorth     TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum = "North"
	TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnumNorthEast TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum = "NorthEast"
	TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnumEast      TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum = "East"
	TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnumSouthEast TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum = "SouthEast"
	TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnumSouth     TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum = "South"
	TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnumSouthWest TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum = "SouthWest"
	TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnumWest      TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum = "West"
	TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnumNorthWest TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum = "NorthWest"
)

type TflAPIPresentationEntitiesInstructionStepTrackTypeEnum string

const (
	TflAPIPresentationEntitiesInstructionStepTrackTypeEnumCycleSuperHighway    TflAPIPresentationEntitiesInstructionStepTrackTypeEnum = "CycleSuperHighway"
	TflAPIPresentationEntitiesInstructionStepTrackTypeEnumCanalTowpath         TflAPIPresentationEntitiesInstructionStepTrackTypeEnum = "CanalTowpath"
	TflAPIPresentationEntitiesInstructionStepTrackTypeEnumQuietRoad            TflAPIPresentationEntitiesInstructionStepTrackTypeEnum = "QuietRoad"
	TflAPIPresentationEntitiesInstructionStepTrackTypeEnumProvisionForCyclists TflAPIPresentationEntitiesInstructionStepTrackTypeEnum = "ProvisionForCyclists"
	TflAPIPresentationEntitiesInstructionStepTrackTypeEnumBusyRoads            TflAPIPresentationEntitiesInstructionStepTrackTypeEnum = "BusyRoads"
	TflAPIPresentationEntitiesInstructionStepTrackTypeEnumNone                 TflAPIPresentationEntitiesInstructionStepTrackTypeEnum = "None"
	TflAPIPresentationEntitiesInstructionStepTrackTypeEnumPushBike             TflAPIPresentationEntitiesInstructionStepTrackTypeEnum = "PushBike"
	TflAPIPresentationEntitiesInstructionStepTrackTypeEnumQuietway             TflAPIPresentationEntitiesInstructionStepTrackTypeEnum = "Quietway"
)

type TflAPIPresentationEntitiesInstructionStep struct {
	CumulativeDistance      *int32                                                                `json:"cumulativeDistance,omitempty"`
	CumulativeTravelTime    *int32                                                                `json:"cumulativeTravelTime,omitempty"`
	Description             *string                                                               `json:"description,omitempty"`
	DescriptionHeading      *string                                                               `json:"descriptionHeading,omitempty"`
	Distance                *int32                                                                `json:"distance,omitempty"`
	Latitude                *float64                                                              `json:"latitude,omitempty"`
	Longitude               *float64                                                              `json:"longitude,omitempty"`
	PathAttribute           *TflAPIPresentationEntitiesPathAttribute                              `json:"pathAttribute,omitempty"`
	SkyDirection            *int32                                                                `json:"skyDirection,omitempty"`
	SkyDirectionDescription *TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum `json:"skyDirectionDescription,omitempty"`
	StreetName              *string                                                               `json:"streetName,omitempty"`
	TrackType               *TflAPIPresentationEntitiesInstructionStepTrackTypeEnum               `json:"trackType,omitempty"`
	TurnDirection           *string                                                               `json:"turnDirection,omitempty"`
}
