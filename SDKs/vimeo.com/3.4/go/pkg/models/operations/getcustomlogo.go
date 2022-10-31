package operations

import (
"openapi/pkg/models/shared")

type GetCustomLogoPathParams struct {
    LogoID float64 `pathParam:"style=simple,explode=false,name=logo_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetCustomLogoRequest struct {
    PathParams GetCustomLogoPathParams 
    
}

type GetCustomLogoResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Picture *shared.Picture 
    
}

