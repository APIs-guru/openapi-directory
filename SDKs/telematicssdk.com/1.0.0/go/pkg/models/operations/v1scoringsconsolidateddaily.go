package operations

type RootV1ScoringsConsolidatedDailyQueryParams struct {
	AppID       *string `queryParam:"style=form,explode=true,name=AppId"`
	CompanyID   *string `queryParam:"style=form,explode=true,name=CompanyId"`
	DeviceToken *string `queryParam:"style=form,explode=true,name=DeviceToken"`
	EndDate     *string `queryParam:"style=form,explode=true,name=EndDate"`
	InstanceID  *string `queryParam:"style=form,explode=true,name=InstanceId"`
	StartDate   *string `queryParam:"style=form,explode=true,name=StartDate"`
	Tag         *string `queryParam:"style=form,explode=true,name=Tag"`
}

type RootV1ScoringsConsolidatedDailyRequest struct {
	QueryParams RootV1ScoringsConsolidatedDailyQueryParams
}

type RootV1ScoringsConsolidatedDaily200ApplicationJSONResult struct {
	AccelerationScore *float64 `json:"AccelerationScore"`
	AppID             *string  `json:"AppId"`
	BrakingScore      *float64 `json:"BrakingScore"`
	CompanyID         *string  `json:"CompanyId"`
	CorneringScore    *float64 `json:"CorneringScore"`
	DeviceToken       *string  `json:"DeviceToken"`
	DistractedScore   *float64 `json:"DistractedScore"`
	InstanceID        *string  `json:"InstanceId"`
	OverallScore      *float64 `json:"OverallScore"`
	ReportDate        *string  `json:"ReportDate"`
	SpeedingScore     *float64 `json:"SpeedingScore"`
}

type RootV1ScoringsConsolidatedDaily200ApplicationJSON struct {
	Errors []interface{}                                             `json:"Errors"`
	Result []RootV1ScoringsConsolidatedDaily200ApplicationJSONResult `json:"Result"`
	Status *float64                                                  `json:"Status"`
	Title  *string                                                   `json:"Title"`
}

type RootV1ScoringsConsolidatedDailyResponse struct {
	RootV1ScoringsConsolidatedDaily200ApplicationJSONObject *RootV1ScoringsConsolidatedDaily200ApplicationJSON
	ContentType                                             string
	Headers                                                 map[string][]string
	StatusCode                                              int64
}
