package operations



type RootV1ScoringsConsolidatedQueryParams struct {
    AppID *string `queryParam:"style=form,explode=true,name=AppId"`
    CompanyID *string `queryParam:"style=form,explode=true,name=CompanyId"`
    DeviceToken *string `queryParam:"style=form,explode=true,name=DeviceToken"`
    EndDate *string `queryParam:"style=form,explode=true,name=EndDate"`
    InstanceID *string `queryParam:"style=form,explode=true,name=InstanceId"`
    StartDate *string `queryParam:"style=form,explode=true,name=StartDate"`
    Tag *string `queryParam:"style=form,explode=true,name=Tag"`
    
}

type RootV1ScoringsConsolidatedRequest struct {
    QueryParams RootV1ScoringsConsolidatedQueryParams 
    
}

type RootV1ScoringsConsolidatedResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

