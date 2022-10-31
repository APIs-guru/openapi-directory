package operations

import (
"openapi/pkg/models/shared")

type PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams struct {
    Ext shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
    Heading float32 `pathParam:"style=simple,explode=false,name=heading"`
    Position string `pathParam:"style=simple,explode=false,name=position"`
    VersionNumber int64 `pathParam:"style=simple,explode=false,name=versionNumber"`
    
}

type PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams struct {
    RoutingTimeout *int64 `queryParam:"style=form,explode=true,name=routingTimeout"`
    
}

type PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress struct {
    FreeformAddress *string `json:"freeformAddress,omitempty"`
    
}

type PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi struct {
    Name *string `json:"name,omitempty"`
    
}

type PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition struct {
    Lat *float32 `json:"lat,omitempty"`
    Lon *float32 `json:"lon,omitempty"`
    
}

type PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList struct {
    Address *PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress `json:"address,omitempty"`
    Poi *PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi `json:"poi,omitempty"`
    Position *PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition `json:"position,omitempty"`
    
}

type PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody struct {
    PoiList []PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList `json:"poiList,omitempty"`
    
}

type PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest struct {
    PathParams PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams 
    QueryParams PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams 
    Request *PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody `request:"mediaType=application/json"`
    
}

type PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse struct {
    ContentType string 
    StatusCode int64 
    
}

