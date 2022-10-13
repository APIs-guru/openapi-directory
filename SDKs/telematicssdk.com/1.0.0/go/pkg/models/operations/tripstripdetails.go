package operations

type TripsTripDetailsQueryParams struct {
	TrackToken *string `queryParam:"style=form,explode=true,name=trackToken"`
}

type TripsTripDetailsRequest struct {
	QueryParams TripsTripDetailsQueryParams
}

type TripsTripDetails200ApplicationJSONResultTrackAddressFinishParts struct {
	City        *string `json:"City"`
	CountryCode *string `json:"CountryCode"`
	District    *string `json:"District"`
	House       *string `json:"House"`
	PostalCode  *string `json:"PostalCode"`
	Street      *string `json:"Street"`
}

type TripsTripDetails200ApplicationJSONResultTrackAddressStartParts struct {
	City        *string `json:"City"`
	CountryCode *string `json:"CountryCode"`
	District    *string `json:"District"`
	House       *string `json:"House"`
	PostalCode  *string `json:"PostalCode"`
	Street      *string `json:"Street"`
}

type TripsTripDetails200ApplicationJSONResultTrackPoints struct {
	AlertType   *string  `json:"AlertType"`
	AlertValue  *float64 `json:"AlertValue"`
	Cornering   *bool    `json:"Cornering"`
	Course      *float64 `json:"Course"`
	Height      *float64 `json:"Height"`
	ID          *float64 `json:"Id"`
	Lateral     *float64 `json:"Lateral"`
	Latitude    *float64 `json:"Latitude"`
	Longitude   *float64 `json:"Longitude"`
	MidSpeed    *float64 `json:"MidSpeed"`
	Number      *float64 `json:"Number"`
	PhoneUsage  *bool    `json:"PhoneUsage"`
	PointDate   *string  `json:"PointDate"`
	Speed       *float64 `json:"Speed"`
	SpeedLimit  *float64 `json:"SpeedLimit"`
	SpeedType   *string  `json:"SpeedType"`
	TotalMeters *float64 `json:"TotalMeters"`
	Yaw         *float64 `json:"Yaw"`
}

type TripsTripDetails200ApplicationJSONResultTrack struct {
	AccelerationCount         *float64                                                         `json:"AccelerationCount"`
	AddressEnd                *string                                                          `json:"AddressEnd"`
	AddressFinishParts        *TripsTripDetails200ApplicationJSONResultTrackAddressFinishParts `json:"AddressFinishParts"`
	AddressStart              *string                                                          `json:"AddressStart"`
	AddressStartParts         *TripsTripDetails200ApplicationJSONResultTrackAddressStartParts  `json:"AddressStartParts"`
	BeaconID                  *float64                                                         `json:"BeaconId"`
	CityFinish                *string                                                          `json:"CityFinish"`
	CityStart                 *string                                                          `json:"CityStart"`
	DecelerationCount         *float64                                                         `json:"DecelerationCount"`
	Distance                  *float64                                                         `json:"Distance"`
	DrivingTips               *string                                                          `json:"DrivingTips"`
	Duration                  *float64                                                         `json:"Duration"`
	EcoScore                  *float64                                                         `json:"EcoScore"`
	EcoScoreBrakes            *float64                                                         `json:"EcoScoreBrakes"`
	EcoScoreDepreciation      *float64                                                         `json:"EcoScoreDepreciation"`
	EcoScoreFuel              *float64                                                         `json:"EcoScoreFuel"`
	EcoScoreTyres             *float64                                                         `json:"EcoScoreTyres"`
	EndDate                   *string                                                          `json:"EndDate"`
	HighOverSpeedMileage      *float64                                                         `json:"HighOverSpeedMileage"`
	MidOverSpeedMileage       *float64                                                         `json:"MidOverSpeedMileage"`
	OriginChanged             *bool                                                            `json:"OriginChanged"`
	PhoneUsage                *float64                                                         `json:"PhoneUsage"`
	Points                    []TripsTripDetails200ApplicationJSONResultTrackPoints            `json:"Points"`
	Rating                    *float64                                                         `json:"Rating"`
	Rating100                 *float64                                                         `json:"Rating100"`
	RatingAcceleration        *float64                                                         `json:"RatingAcceleration"`
	RatingAcceleration100     *float64                                                         `json:"RatingAcceleration100"`
	RatingBraking             *float64                                                         `json:"RatingBraking"`
	RatingBraking100          *float64                                                         `json:"RatingBraking100"`
	RatingCornering           *float64                                                         `json:"RatingCornering"`
	RatingCornering100        *float64                                                         `json:"RatingCornering100"`
	RatingPhoneDistraction100 *float64                                                         `json:"RatingPhoneDistraction100"`
	RatingPhoneUsage          *float64                                                         `json:"RatingPhoneUsage"`
	RatingSpeeding            *float64                                                         `json:"RatingSpeeding"`
	RatingSpeeding100         *float64                                                         `json:"RatingSpeeding100"`
	RatingTimeOfDay           *float64                                                         `json:"RatingTimeOfDay"`
	ShareType                 *string                                                          `json:"ShareType"`
	StartDate                 *string                                                          `json:"StartDate"`
	Status                    *string                                                          `json:"Status"`
	TrackOriginCode           *string                                                          `json:"TrackOriginCode"`
}

type TripsTripDetails200ApplicationJSONResult struct {
	Code  *float64                                       `json:"Code"`
	Track *TripsTripDetails200ApplicationJSONResultTrack `json:"Track"`
}

type TripsTripDetails200ApplicationJSON struct {
	Result *TripsTripDetails200ApplicationJSONResult `json:"Result"`
}

type TripsTripDetailsResponse struct {
	ContentType                              string
	Headers                                  map[string][]string
	StatusCode                               int64
	TripsTripDetails200ApplicationJSONObject *TripsTripDetails200ApplicationJSON
}
