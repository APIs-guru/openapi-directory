package operations

import (
"openapi/pkg/models/shared")

type GetStopPointIDPlaceTypesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetStopPointIDPlaceTypesQueryParams struct {
    PlaceTypes []string `queryParam:"style=form,explode=true,name=placeTypes"`
    
}

type GetStopPointIDPlaceTypesRequest struct {
    PathParams GetStopPointIDPlaceTypesPathParams 
    QueryParams GetStopPointIDPlaceTypesQueryParams 
    
}

type GetStopPointIDPlaceTypesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesPlaces []shared.TflAPIPresentationEntitiesPlace 
    
}

