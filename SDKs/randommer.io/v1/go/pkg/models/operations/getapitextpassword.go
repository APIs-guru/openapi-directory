package operations



type GetAPITextPasswordQueryParams struct {
    HasDigits bool `queryParam:"style=form,explode=true,name=hasDigits"`
    HasSpecial bool `queryParam:"style=form,explode=true,name=hasSpecial"`
    HasUppercase bool `queryParam:"style=form,explode=true,name=hasUppercase"`
    Length int32 `queryParam:"style=form,explode=true,name=length"`
    
}

type GetAPITextPasswordHeaders struct {
    XAPIKey *string `header:"style=simple,explode=false,name=X-Api-Key"`
    
}

type GetAPITextPasswordRequest struct {
    QueryParams GetAPITextPasswordQueryParams 
    Headers GetAPITextPasswordHeaders 
    
}

type GetAPITextPasswordResponse struct {
    ContentType string 
    StatusCode int64 
    
}

