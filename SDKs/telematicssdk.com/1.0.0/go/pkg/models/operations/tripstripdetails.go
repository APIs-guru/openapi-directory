package operations

type TripsTripDetailsQueryParams struct {
	TrackToken *string `queryParam:"style=form,explode=true,name=trackToken"`
}

type TripsTripDetails200ApplicationJSONResultTrackAddressFinishParts struct {
	City        *string `json:"City,omitempty"`
	CountryCode *string `json:"CountryCode,omitempty"`
	District    *string `json:"District,omitempty"`
	House       *string `json:"House,omitempty"`
	PostalCode  *string `json:"PostalCode,omitempty"`
	Street      *string `json:"Street,omitempty"`
}

type TripsTripDetails200ApplicationJSONResultTrackAddressStartParts struct {
	City        *string `json:"City,omitempty"`
	CountryCode *string `json:"CountryCode,omitempty"`
	District    *string `json:"District,omitempty"`
	House       *string `json:"House,omitempty"`
	PostalCode  *string `json:"PostalCode,omitempty"`
	Street      *string `json:"Street,omitempty"`
}

type TripsTripDetails200ApplicationJSONResultTrackPoints struct {
	AlertType   *string  `json:"AlertType,omitempty"`
	AlertValue  *float64 `json:"AlertValue,omitempty"`
	Cornering   *bool    `json:"Cornering,omitempty"`
	Course      *float64 `json:"Course,omitempty"`
	Height      *float64 `json:"Height,omitempty"`
	ID          *float64 `json:"Id,omitempty"`
	Lateral     *float64 `json:"Lateral,omitempty"`
	Latitude    *float64 `json:"Latitude,omitempty"`
	Longitude   *float64 `json:"Longitude,omitempty"`
	MidSpeed    *float64 `json:"MidSpeed,omitempty"`
	Number      *float64 `json:"Number,omitempty"`
	PhoneUsage  *bool    `json:"PhoneUsage,omitempty"`
	PointDate   *string  `json:"PointDate,omitempty"`
	Speed       *float64 `json:"Speed,omitempty"`
	SpeedLimit  *float64 `json:"SpeedLimit,omitempty"`
	SpeedType   *string  `json:"SpeedType,omitempty"`
	TotalMeters *float64 `json:"TotalMeters,omitempty"`
	Yaw         *float64 `json:"Yaw,omitempty"`
}

type TripsTripDetails200ApplicationJSONResultTrack struct {
	AccelerationCount         *float64                                                         `json:"AccelerationCount,omitempty"`
	AddressEnd                *string                                                          `json:"AddressEnd,omitempty"`
	AddressFinishParts        *TripsTripDetails200ApplicationJSONResultTrackAddressFinishParts `json:"AddressFinishParts,omitempty"`
	AddressStart              *string                                                          `json:"AddressStart,omitempty"`
	AddressStartParts         *TripsTripDetails200ApplicationJSONResultTrackAddressStartParts  `json:"AddressStartParts,omitempty"`
	BeaconID                  *float64                                                         `json:"BeaconId,omitempty"`
	CityFinish                *string                                                          `json:"CityFinish,omitempty"`
	CityStart                 *string                                                          `json:"CityStart,omitempty"`
	DecelerationCount         *float64                                                         `json:"DecelerationCount,omitempty"`
	Distance                  *float64                                                         `json:"Distance,omitempty"`
	DrivingTips               *string                                                          `json:"DrivingTips,omitempty"`
	Duration                  *float64                                                         `json:"Duration,omitempty"`
	EcoScore                  *float64                                                         `json:"EcoScore,omitempty"`
	EcoScoreBrakes            *float64                                                         `json:"EcoScoreBrakes,omitempty"`
	EcoScoreDepreciation      *float64                                                         `json:"EcoScoreDepreciation,omitempty"`
	EcoScoreFuel              *float64                                                         `json:"EcoScoreFuel,omitempty"`
	EcoScoreTyres             *float64                                                         `json:"EcoScoreTyres,omitempty"`
	EndDate                   *string                                                          `json:"EndDate,omitempty"`
	HighOverSpeedMileage      *float64                                                         `json:"HighOverSpeedMileage,omitempty"`
	MidOverSpeedMileage       *float64                                                         `json:"MidOverSpeedMileage,omitempty"`
	OriginChanged             *bool                                                            `json:"OriginChanged,omitempty"`
	PhoneUsage                *float64                                                         `json:"PhoneUsage,omitempty"`
	Points                    []TripsTripDetails200ApplicationJSONResultTrackPoints            `json:"Points,omitempty"`
	Rating                    *float64                                                         `json:"Rating,omitempty"`
	Rating100                 *float64                                                         `json:"Rating100,omitempty"`
	RatingAcceleration        *float64                                                         `json:"RatingAcceleration,omitempty"`
	RatingAcceleration100     *float64                                                         `json:"RatingAcceleration100,omitempty"`
	RatingBraking             *float64                                                         `json:"RatingBraking,omitempty"`
	RatingBraking100          *float64                                                         `json:"RatingBraking100,omitempty"`
	RatingCornering           *float64                                                         `json:"RatingCornering,omitempty"`
	RatingCornering100        *float64                                                         `json:"RatingCornering100,omitempty"`
	RatingPhoneDistraction100 *float64                                                         `json:"RatingPhoneDistraction100,omitempty"`
	RatingPhoneUsage          *float64                                                         `json:"RatingPhoneUsage,omitempty"`
	RatingSpeeding            *float64                                                         `json:"RatingSpeeding,omitempty"`
	RatingSpeeding100         *float64                                                         `json:"RatingSpeeding100,omitempty"`
	RatingTimeOfDay           *float64                                                         `json:"RatingTimeOfDay,omitempty"`
	ShareType                 *string                                                          `json:"ShareType,omitempty"`
	StartDate                 *string                                                          `json:"StartDate,omitempty"`
	Status                    *string                                                          `json:"Status,omitempty"`
	TrackOriginCode           *string                                                          `json:"TrackOriginCode,omitempty"`
}

type TripsTripDetails200ApplicationJSONResult struct {
	Code  *float64                                       `json:"Code,omitempty"`
	Track *TripsTripDetails200ApplicationJSONResultTrack `json:"Track,omitempty"`
}

type TripsTripDetails200ApplicationJSON struct {
	Result *TripsTripDetails200ApplicationJSONResult `json:"Result,omitempty"`
}

type TripsTripDetailsRequest struct {
	QueryParams TripsTripDetailsQueryParams
}

type TripsTripDetailsResponse struct {
	ContentType                              string
	Headers                                  map[string][]string
	StatusCode                               int64
	TripsTripDetails200ApplicationJSONObject *TripsTripDetails200ApplicationJSON
}
