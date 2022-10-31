package operations

import (
"openapi/pkg/models/shared")

type GetExamplesByLabelQueryParams struct {
    Count *string `queryParam:"style=form,explode=true,name=count"`
    LabelID *string `queryParam:"style=form,explode=true,name=labelId"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetExamplesByLabelSecurity struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetExamplesByLabelRequest struct {
    QueryParams GetExamplesByLabelQueryParams 
    Security GetExamplesByLabelSecurity 
    
}

type GetExamplesByLabelResponse struct {
    ContentType string 
    ExampleList *shared.ExampleList 
    StatusCode int64 
    
}

