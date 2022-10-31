package operations

import (
"openapi/pkg/models/shared")

type FindFormsQueryParams struct {
    Query *string `queryParam:"style=form,explode=true,name=query"`
    
}

type FindFormsSecurity struct {
    Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
    
}

type FindFormsRequest struct {
    QueryParams FindFormsQueryParams 
    Security FindFormsSecurity 
    
}

type FindForms200ApplicationJSON struct {
    Data []interface{} `json:"data"`
    
}

type FindFormsResponse struct {
    ContentType string 
    StatusCode int64 
    FindForms200ApplicationJSONObject *FindForms200ApplicationJSON 
    FindForms401ApplicationJSONAny *interface{} 
    FindForms429ApplicationJSONAny *interface{} 
    
}

