package operations

import (
"openapi/pkg/models/shared")

type MeterFolderInformationGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type MeterFolderInformationGetRequest struct {
    PathParams MeterFolderInformationGetPathParams 
    
}

type MeterFolderInformationGetResponse struct {
    Body []byte 
    ContentType string 
    MeterFolderInformation *shared.MeterFolderInformation 
    StatusCode int64 
    
}

