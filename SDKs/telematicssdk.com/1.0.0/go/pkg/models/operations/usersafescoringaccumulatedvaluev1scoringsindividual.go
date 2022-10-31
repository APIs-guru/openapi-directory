package operations

type UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams struct {
	EndDate   *string `queryParam:"style=form,explode=true,name=endDate"`
	StartDate *string `queryParam:"style=form,explode=true,name=startDate"`
}

type UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest struct {
	QueryParams UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams
}

type UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONResult struct {
	AccelerationScore *float64 `json:"AccelerationScore,omitempty"`
	AppID             *string  `json:"AppId,omitempty"`
	BrakingScore      *float64 `json:"BrakingScore,omitempty"`
	CompanyID         *string  `json:"CompanyId,omitempty"`
	CorneringScore    *float64 `json:"CorneringScore,omitempty"`
	DeviceToken       *string  `json:"DeviceToken,omitempty"`
	DistractedScore   *float64 `json:"DistractedScore,omitempty"`
	InstanceID        *string  `json:"InstanceId,omitempty"`
	OverallScore      *float64 `json:"OverallScore,omitempty"`
	SpeedingScore     *float64 `json:"SpeedingScore,omitempty"`
}

type UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSON struct {
	Errors []interface{}                                                                `json:"Errors,omitempty"`
	Result *UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONResult `json:"Result,omitempty"`
	Status *float64                                                                     `json:"Status,omitempty"`
	Title  *string                                                                      `json:"Title,omitempty"`
}

type UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse struct {
	ContentType                                                                 string
	Headers                                                                     map[string][]string
	StatusCode                                                                  int64
	UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONObject *UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSON
}
