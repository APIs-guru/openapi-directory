package operations

import (
"openapi/pkg/models/shared")

type ProvideFeedback1RequestBody struct {
    Data *string `multipartForm:"name=data"`
    ExpectedLabel *string `multipartForm:"name=expectedLabel"`
    ModelID *string `multipartForm:"name=modelId"`
    Name *string `multipartForm:"name=name"`
    
}

type ProvideFeedback1Security struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type ProvideFeedback1Request struct {
    Request *ProvideFeedback1RequestBody `request:"mediaType=multipart/form-data"`
    Security ProvideFeedback1Security 
    
}

type ProvideFeedback1Response struct {
    ContentType string 
    Example *shared.Example 
    StatusCode int64 
    
}

