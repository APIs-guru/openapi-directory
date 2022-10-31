package shared



type TflAPIPresentationEntitiesStopPoint struct {
    AccessibilitySummary *string `json:"accessibilitySummary,omitempty"`
    AdditionalProperties []TflAPIPresentationEntitiesAdditionalProperties `json:"additionalProperties,omitempty"`
    Children []TflAPIPresentationEntitiesPlace `json:"children,omitempty"`
    ChildrenUrls []string `json:"childrenUrls,omitempty"`
    CommonName *string `json:"commonName,omitempty"`
    Distance *float64 `json:"distance,omitempty"`
    FullName *string `json:"fullName,omitempty"`
    HubNaptanCode *string `json:"hubNaptanCode,omitempty"`
    IcsCode *string `json:"icsCode,omitempty"`
    ID *string `json:"id,omitempty"`
    Indicator *string `json:"indicator,omitempty"`
    Lat *float64 `json:"lat,omitempty"`
    LineGroup []TflAPIPresentationEntitiesLineGroup `json:"lineGroup,omitempty"`
    LineModeGroups []TflAPIPresentationEntitiesLineModeGroup `json:"lineModeGroups,omitempty"`
    Lines []TflAPIPresentationEntitiesIdentifier `json:"lines,omitempty"`
    Lon *float64 `json:"lon,omitempty"`
    Modes []string `json:"modes,omitempty"`
    NaptanID *string `json:"naptanId,omitempty"`
    NaptanMode *string `json:"naptanMode,omitempty"`
    PlaceType *string `json:"placeType,omitempty"`
    PlatformName *string `json:"platformName,omitempty"`
    SmsCode *string `json:"smsCode,omitempty"`
    StationNaptan *string `json:"stationNaptan,omitempty"`
    Status *bool `json:"status,omitempty"`
    StopLetter *string `json:"stopLetter,omitempty"`
    StopType *string `json:"stopType,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

