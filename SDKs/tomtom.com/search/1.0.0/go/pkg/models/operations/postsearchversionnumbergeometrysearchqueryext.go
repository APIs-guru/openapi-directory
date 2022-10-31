package operations

import (
"openapi/pkg/models/shared")

type PostSearchVersionNumberGeometrySearchQueryExtPathParams struct {
    Ext shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
    Query string `pathParam:"style=simple,explode=false,name=query"`
    VersionNumber int64 `pathParam:"style=simple,explode=false,name=versionNumber"`
    
}

type PostSearchVersionNumberGeometrySearchQueryExtQueryParams struct {
    ExtendedPostalCodesFor *string `queryParam:"style=form,explode=true,name=extendedPostalCodesFor"`
    IdxSet *string `queryParam:"style=form,explode=true,name=idxSet"`
    Language *string `queryParam:"style=form,explode=true,name=language"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList struct {
    Position *string `json:"position,omitempty"`
    Radius *int64 `json:"radius,omitempty"`
    Type *string `json:"type,omitempty"`
    Vertices []string `json:"vertices,omitempty"`
    
}

type PostSearchVersionNumberGeometrySearchQueryExtRequestBody struct {
    GeometryList []PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList `json:"geometryList,omitempty"`
    
}

type PostSearchVersionNumberGeometrySearchQueryExtRequest struct {
    PathParams PostSearchVersionNumberGeometrySearchQueryExtPathParams 
    QueryParams PostSearchVersionNumberGeometrySearchQueryExtQueryParams 
    Request *PostSearchVersionNumberGeometrySearchQueryExtRequestBody `request:"mediaType=application/json"`
    
}

type PostSearchVersionNumberGeometrySearchQueryExtResponse struct {
    ContentType string 
    StatusCode int64 
    
}

