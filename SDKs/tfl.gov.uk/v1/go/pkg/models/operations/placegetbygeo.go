package operations

import (
"openapi/pkg/models/shared")

type PlaceGetByGeoQueryParams struct {
    ActiveOnly *bool `queryParam:"style=form,explode=true,name=activeOnly"`
    Categories []string `queryParam:"style=form,explode=true,name=categories"`
    IncludeChildren *bool `queryParam:"style=form,explode=true,name=includeChildren"`
    NumberOfPlacesToReturn *int32 `queryParam:"style=form,explode=true,name=numberOfPlacesToReturn"`
    PlaceGeoLat *float64 `queryParam:"style=form,explode=true,name=placeGeo.lat"`
    PlaceGeoLon *float64 `queryParam:"style=form,explode=true,name=placeGeo.lon"`
    PlaceGeoNeLat *float64 `queryParam:"style=form,explode=true,name=placeGeo.neLat"`
    PlaceGeoNeLon *float64 `queryParam:"style=form,explode=true,name=placeGeo.neLon"`
    PlaceGeoSwLat *float64 `queryParam:"style=form,explode=true,name=placeGeo.swLat"`
    PlaceGeoSwLon *float64 `queryParam:"style=form,explode=true,name=placeGeo.swLon"`
    Radius *float64 `queryParam:"style=form,explode=true,name=radius"`
    Type []string `queryParam:"style=form,explode=true,name=type"`
    
}

type PlaceGetByGeoRequest struct {
    QueryParams PlaceGetByGeoQueryParams 
    
}

type PlaceGetByGeoResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesStopPoints []shared.TflAPIPresentationEntitiesStopPoint 
    
}

