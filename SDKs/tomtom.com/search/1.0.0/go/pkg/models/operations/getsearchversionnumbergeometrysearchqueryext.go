package operations

import (
"openapi/pkg/models/shared")

type GetSearchVersionNumberGeometrySearchQueryExtPathParams struct {
    Ext shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
    Query string `pathParam:"style=simple,explode=false,name=query"`
    VersionNumber int64 `pathParam:"style=simple,explode=false,name=versionNumber"`
    
}

type GetSearchVersionNumberGeometrySearchQueryExtQueryParams struct {
    ExtendedPostalCodesFor *string `queryParam:"style=form,explode=true,name=extendedPostalCodesFor"`
    GeometryList *string `queryParam:"style=form,explode=true,name=geometryList"`
    IdxSet *string `queryParam:"style=form,explode=true,name=idxSet"`
    Language *string `queryParam:"style=form,explode=true,name=language"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type GetSearchVersionNumberGeometrySearchQueryExtRequest struct {
    PathParams GetSearchVersionNumberGeometrySearchQueryExtPathParams 
    QueryParams GetSearchVersionNumberGeometrySearchQueryExtQueryParams 
    
}

type GetSearchVersionNumberGeometrySearchQueryExtResponse struct {
    ContentType string 
    StatusCode int64 
    
}

