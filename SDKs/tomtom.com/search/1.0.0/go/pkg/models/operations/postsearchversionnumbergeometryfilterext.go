package operations

import (
"openapi/pkg/models/shared")

type PostSearchVersionNumberGeometryFilterExtPathParams struct {
    Ext shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
    VersionNumber int64 `pathParam:"style=simple,explode=false,name=versionNumber"`
    
}

type PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList struct {
    Position *string `json:"position,omitempty"`
    Radius *int64 `json:"radius,omitempty"`
    Type *string `json:"type,omitempty"`
    Vertices []string `json:"vertices,omitempty"`
    
}

type PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress struct {
    FreeformAddress *string `json:"freeformAddress,omitempty"`
    
}

type PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi struct {
    Name *string `json:"name,omitempty"`
    
}

type PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition struct {
    Lat *float32 `json:"lat,omitempty"`
    Lon *float32 `json:"lon,omitempty"`
    
}

type PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList struct {
    Address *PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress `json:"address,omitempty"`
    Poi *PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi `json:"poi,omitempty"`
    Position *PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition `json:"position,omitempty"`
    
}

type PostSearchVersionNumberGeometryFilterExtRequestBody struct {
    GeometryList []PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList `json:"geometryList,omitempty"`
    PoiList []PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList `json:"poiList,omitempty"`
    
}

type PostSearchVersionNumberGeometryFilterExtRequest struct {
    PathParams PostSearchVersionNumberGeometryFilterExtPathParams 
    Request *PostSearchVersionNumberGeometryFilterExtRequestBody `request:"mediaType=application/json"`
    
}

type PostSearchVersionNumberGeometryFilterExtResponse struct {
    ContentType string 
    StatusCode int64 
    
}

