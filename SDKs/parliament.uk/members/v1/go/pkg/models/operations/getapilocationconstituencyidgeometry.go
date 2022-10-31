package operations

import (
"openapi/pkg/models/shared")

type GetAPILocationConstituencyIDGeometryPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPILocationConstituencyIDGeometryRequest struct {
    PathParams GetAPILocationConstituencyIDGeometryPathParams 
    
}

type GetAPILocationConstituencyIDGeometryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    StringItem *shared.StringItem 
    
}

