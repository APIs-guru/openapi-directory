package operations

import (
"openapi/pkg/models/shared")

type AddVcenterDatasourceSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddVcenterDatasourceRequest struct {
    Request shared.VCenterDataSourceRequest `request:"mediaType=application/json"`
    Security AddVcenterDatasourceSecurity 
    
}

type AddVcenterDatasourceResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    VCenterDataSource *shared.VCenterDataSource 
    
}

