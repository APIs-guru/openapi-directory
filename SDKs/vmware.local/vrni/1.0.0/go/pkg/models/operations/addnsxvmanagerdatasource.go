package operations

import (
"openapi/pkg/models/shared")

type AddNsxvManagerDatasourceSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddNsxvManagerDatasourceRequest struct {
    Request *shared.NsxvManagerDataSourceRequest `request:"mediaType=application/json"`
    Security AddNsxvManagerDatasourceSecurity 
    
}

type AddNsxvManagerDatasourceResponse struct {
    APIError *shared.APIError 
    ContentType string 
    NsxvManagerDataSource *shared.NsxvManagerDataSource 
    StatusCode int64 
    
}

