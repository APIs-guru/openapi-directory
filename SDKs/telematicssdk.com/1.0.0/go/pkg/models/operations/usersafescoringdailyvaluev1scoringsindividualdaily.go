package operations



type UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams struct {
    EndDate *string `queryParam:"style=form,explode=true,name=EndDate"`
    StartDate *string `queryParam:"style=form,explode=true,name=StartDate"`
    Tag *string `queryParam:"style=form,explode=true,name=Tag"`
    
}

type UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest struct {
    QueryParams UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams 
    
}

type UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSONResult struct {
    AccelerationScore *float64 `json:"AccelerationScore,omitempty"`
    AppID *string `json:"AppId,omitempty"`
    BrakingScore *float64 `json:"BrakingScore,omitempty"`
    CalcDate *string `json:"CalcDate,omitempty"`
    CompanyID *string `json:"CompanyId,omitempty"`
    CorneringScore *float64 `json:"CorneringScore,omitempty"`
    DeviceToken *string `json:"DeviceToken,omitempty"`
    DistractedScore *float64 `json:"DistractedScore,omitempty"`
    InstanceID *string `json:"InstanceId,omitempty"`
    OverallScore *float64 `json:"OverallScore,omitempty"`
    SpeedingScore *float64 `json:"SpeedingScore,omitempty"`
    
}

type UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSON struct {
    Errors []interface{} `json:"Errors,omitempty"`
    Result []UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSONResult `json:"Result,omitempty"`
    Status *float64 `json:"Status,omitempty"`
    Title *string `json:"Title,omitempty"`
    
}

type UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSONObject *UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSON 
    
}

