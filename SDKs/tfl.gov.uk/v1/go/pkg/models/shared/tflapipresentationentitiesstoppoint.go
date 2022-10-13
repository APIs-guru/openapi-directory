package shared

type TflAPIPresentationEntitiesStopPoint struct {
	AccessibilitySummary *string                                          `json:"accessibilitySummary"`
	AdditionalProperties []TflAPIPresentationEntitiesAdditionalProperties `json:"additionalProperties"`
	Children             []TflAPIPresentationEntitiesPlace                `json:"children"`
	ChildrenUrls         []string                                         `json:"childrenUrls"`
	CommonName           *string                                          `json:"commonName"`
	Distance             *float64                                         `json:"distance"`
	FullName             *string                                          `json:"fullName"`
	HubNaptanCode        *string                                          `json:"hubNaptanCode"`
	IcsCode              *string                                          `json:"icsCode"`
	ID                   *string                                          `json:"id"`
	Indicator            *string                                          `json:"indicator"`
	Lat                  *float64                                         `json:"lat"`
	LineGroup            []TflAPIPresentationEntitiesLineGroup            `json:"lineGroup"`
	LineModeGroups       []TflAPIPresentationEntitiesLineModeGroup        `json:"lineModeGroups"`
	Lines                []TflAPIPresentationEntitiesIdentifier           `json:"lines"`
	Lon                  *float64                                         `json:"lon"`
	Modes                []string                                         `json:"modes"`
	NaptanID             *string                                          `json:"naptanId"`
	NaptanMode           *string                                          `json:"naptanMode"`
	PlaceType            *string                                          `json:"placeType"`
	PlatformName         *string                                          `json:"platformName"`
	SmsCode              *string                                          `json:"smsCode"`
	StationNaptan        *string                                          `json:"stationNaptan"`
	Status               *bool                                            `json:"status"`
	StopLetter           *string                                          `json:"stopLetter"`
	StopType             *string                                          `json:"stopType"`
	URL                  *string                                          `json:"url"`
}
