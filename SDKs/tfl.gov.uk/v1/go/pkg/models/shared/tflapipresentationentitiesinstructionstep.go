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
	CumulativeDistance      *int32                                                                `json:"cumulativeDistance"`
	CumulativeTravelTime    *int32                                                                `json:"cumulativeTravelTime"`
	Description             *string                                                               `json:"description"`
	DescriptionHeading      *string                                                               `json:"descriptionHeading"`
	Distance                *int32                                                                `json:"distance"`
	Latitude                *float64                                                              `json:"latitude"`
	Longitude               *float64                                                              `json:"longitude"`
	PathAttribute           *TflAPIPresentationEntitiesPathAttribute                              `json:"pathAttribute"`
	SkyDirection            *int32                                                                `json:"skyDirection"`
	SkyDirectionDescription *TflAPIPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum `json:"skyDirectionDescription"`
	StreetName              *string                                                               `json:"streetName"`
	TrackType               *TflAPIPresentationEntitiesInstructionStepTrackTypeEnum               `json:"trackType"`
	TurnDirection           *string                                                               `json:"turnDirection"`
}
