package operations



type VoiceQueryParams struct {
    From *string `queryParam:"style=form,explode=true,name=from"`
    Text string `queryParam:"style=form,explode=true,name=text"`
    To string `queryParam:"style=form,explode=true,name=to"`
    XML *float64 `queryParam:"style=form,explode=true,name=xml"`
    
}

type VoiceRequest struct {
    QueryParams VoiceQueryParams 
    
}

type VoiceResponse struct {
    ContentType string 
    StatusCode int64 
    Voice200TextPlainString *string 
    
}

