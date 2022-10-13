package operations

type UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams struct {
	EndDate   *string `queryParam:"style=form,explode=true,name=EndDate"`
	StartDate *string `queryParam:"style=form,explode=true,name=StartDate"`
	Tag       *string `queryParam:"style=form,explode=true,name=Tag"`
}

type UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest struct {
	QueryParams UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams
}

type UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSONResult struct {
	AccelerationScore *float64 `json:"AccelerationScore"`
	AppID             *string  `json:"AppId"`
	BrakingScore      *float64 `json:"BrakingScore"`
	CalcDate          *string  `json:"CalcDate"`
	CompanyID         *string  `json:"CompanyId"`
	CorneringScore    *float64 `json:"CorneringScore"`
	DeviceToken       *string  `json:"DeviceToken"`
	DistractedScore   *float64 `json:"DistractedScore"`
	InstanceID        *string  `json:"InstanceId"`
	OverallScore      *float64 `json:"OverallScore"`
	SpeedingScore     *float64 `json:"SpeedingScore"`
}

type UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSON struct {
	Errors []interface{}                                                                `json:"Errors"`
	Result []UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSONResult `json:"Result"`
	Status *float64                                                                     `json:"Status"`
	Title  *string                                                                      `json:"Title"`
}

type UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse struct {
	ContentType                                                                string
	Headers                                                                    map[string][]string
	StatusCode                                                                 int64
	UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSONObject *UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSON
}
