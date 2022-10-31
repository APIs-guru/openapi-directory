package operations

import (
"openapi/pkg/models/shared")

type GetExamplesPathParams struct {
    DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
    
}


type GetExamplesSourceEnum string

const (
    GetExamplesSourceEnumAll GetExamplesSourceEnum = "all"
GetExamplesSourceEnumFeedback GetExamplesSourceEnum = "feedback"
GetExamplesSourceEnumUpload GetExamplesSourceEnum = "upload"
)


type GetExamplesQueryParams struct {
    Count *string `queryParam:"style=form,explode=true,name=count"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    Source *GetExamplesSourceEnum `queryParam:"style=form,explode=true,name=source"`
    
}

type GetExamplesSecurity struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetExamplesRequest struct {
    PathParams GetExamplesPathParams 
    QueryParams GetExamplesQueryParams 
    Security GetExamplesSecurity 
    
}

type GetExamplesResponse struct {
    ContentType string 
    ExampleList *shared.ExampleList 
    StatusCode int64 
    
}

