package operations

type UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams struct {
	EndDate   *string `queryParam:"style=form,explode=true,name=endDate"`
	StartDate *string `queryParam:"style=form,explode=true,name=startDate"`
}

type UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest struct {
	QueryParams UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams
}

type UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONResult struct {
	AccelerationScore *float64 `json:"AccelerationScore"`
	AppID             *string  `json:"AppId"`
	BrakingScore      *float64 `json:"BrakingScore"`
	CompanyID         *string  `json:"CompanyId"`
	CorneringScore    *float64 `json:"CorneringScore"`
	DeviceToken       *string  `json:"DeviceToken"`
	DistractedScore   *float64 `json:"DistractedScore"`
	InstanceID        *string  `json:"InstanceId"`
	OverallScore      *float64 `json:"OverallScore"`
	SpeedingScore     *float64 `json:"SpeedingScore"`
}

type UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSON struct {
	Errors []interface{}                                                                `json:"Errors"`
	Result *UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONResult `json:"Result"`
	Status *float64                                                                     `json:"Status"`
	Title  *string                                                                      `json:"Title"`
}

type UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse struct {
	ContentType                                                                 string
	Headers                                                                     map[string][]string
	StatusCode                                                                  int64
	UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONObject *UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSON
}
