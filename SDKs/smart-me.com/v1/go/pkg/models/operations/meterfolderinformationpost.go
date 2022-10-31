package operations

import (
"openapi/pkg/models/shared")

type MeterFolderInformationPostRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    MeterFolderInformationToPost *shared.MeterFolderInformationToPost `request:"mediaType=application/json"`
    MeterFolderInformationToPost1 *shared.MeterFolderInformationToPost `request:"mediaType=application/x-www-form-urlencoded"`
    MeterFolderInformationToPost2 *shared.MeterFolderInformationToPost `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type MeterFolderInformationPostRequest struct {
    Request MeterFolderInformationPostRequests 
    
}

type MeterFolderInformationPostResponse struct {
    ContentType string 
    StatusCode int64 
    
}

