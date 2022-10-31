package operations

import (
"openapi/pkg/models/shared")

type GetAPILocationConstituencyIDRepresentationsPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPILocationConstituencyIDRepresentationsRequest struct {
    PathParams GetAPILocationConstituencyIDRepresentationsPathParams 
    
}

type GetAPILocationConstituencyIDRepresentationsResponse struct {
    Body []byte 
    ConstituencyRepresentationListItem *shared.ConstituencyRepresentationListItem 
    ContentType string 
    StatusCode int64 
    
}

