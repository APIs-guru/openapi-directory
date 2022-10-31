package operations

import (
"openapi/pkg/models/shared")

type GetExamplesByLabel1QueryParams struct {
    Count *string `queryParam:"style=form,explode=true,name=count"`
    LabelID *string `queryParam:"style=form,explode=true,name=labelId"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetExamplesByLabel1Security struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetExamplesByLabel1Request struct {
    QueryParams GetExamplesByLabel1QueryParams 
    Security GetExamplesByLabel1Security 
    
}

type GetExamplesByLabel1Response struct {
    ContentType string 
    ExampleList *shared.ExampleList 
    StatusCode int64 
    
}

