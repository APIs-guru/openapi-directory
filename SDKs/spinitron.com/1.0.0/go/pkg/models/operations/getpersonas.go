package operations

import (
"openapi/pkg/models/shared")

type GetPersonasQueryParams struct {
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    Expand []string `queryParam:"style=form,explode=true,name=expand"`
    Fields []string `queryParam:"style=form,explode=true,name=fields"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetPersonasRequest struct {
    QueryParams GetPersonasQueryParams 
    
}

type GetPersonas200ApplicationJSONLinks struct {
    Self *shared.Link `json:"self,omitempty"`
    
}

type GetPersonas200ApplicationJSON struct {
    Links *GetPersonas200ApplicationJSONLinks `json:"_links,omitempty"`
    Meta *shared.Pagination `json:"_meta,omitempty"`
    Items []shared.Persona `json:"items,omitempty"`
    
}

type GetPersonasResponse struct {
    Body []byte 
    ContentType string 
    GetPersonas200ApplicationJSONObject *GetPersonas200ApplicationJSON 
    StatusCode int64 
    
}

