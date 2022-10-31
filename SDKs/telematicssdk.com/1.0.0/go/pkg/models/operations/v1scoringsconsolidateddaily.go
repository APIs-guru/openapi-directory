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
	AccelerationScore *float64 `json:"AccelerationScore,omitempty"`
	AppID             *string  `json:"AppId,omitempty"`
	BrakingScore      *float64 `json:"BrakingScore,omitempty"`
	CompanyID         *string  `json:"CompanyId,omitempty"`
	CorneringScore    *float64 `json:"CorneringScore,omitempty"`
	DeviceToken       *string  `json:"DeviceToken,omitempty"`
	DistractedScore   *float64 `json:"DistractedScore,omitempty"`
	InstanceID        *string  `json:"InstanceId,omitempty"`
	OverallScore      *float64 `json:"OverallScore,omitempty"`
	ReportDate        *string  `json:"ReportDate,omitempty"`
	SpeedingScore     *float64 `json:"SpeedingScore,omitempty"`
}

type RootV1ScoringsConsolidatedDaily200ApplicationJSON struct {
	Errors []interface{}                                             `json:"Errors,omitempty"`
	Result []RootV1ScoringsConsolidatedDaily200ApplicationJSONResult `json:"Result,omitempty"`
	Status *float64                                                  `json:"Status,omitempty"`
	Title  *string                                                   `json:"Title,omitempty"`
}

type RootV1ScoringsConsolidatedDailyResponse struct {
	RootV1ScoringsConsolidatedDaily200ApplicationJSONObject *RootV1ScoringsConsolidatedDaily200ApplicationJSON
	ContentType                                             string
	Headers                                                 map[string][]string
	StatusCode                                              int64
}
