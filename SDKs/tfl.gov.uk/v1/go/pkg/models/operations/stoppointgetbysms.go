package operations



type StopPointGetBySmsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type StopPointGetBySmsQueryParams struct {
    Output *string `queryParam:"style=form,explode=true,name=output"`
    
}

type StopPointGetBySmsRequest struct {
    PathParams StopPointGetBySmsPathParams 
    QueryParams StopPointGetBySmsQueryParams 
    
}

type StopPointGetBySmsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

