package operations

import (
"openapi/pkg/models/shared")

type EndpointGetACategoryPathParams struct {
    CategoryID string `pathParam:"style=simple,explode=false,name=category_id"`
    
}

type EndpointGetACategoryQueryParams struct {
    Country *string `queryParam:"style=form,explode=true,name=country"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    
}

type EndpointGetACategoryHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetACategorySecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetACategoryRequest struct {
    PathParams EndpointGetACategoryPathParams 
    QueryParams EndpointGetACategoryQueryParams 
    Headers EndpointGetACategoryHeaders 
    Security EndpointGetACategorySecurity 
    
}

type EndpointGetACategoryResponse struct {
    CategoryObject *shared.CategoryObject 
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

