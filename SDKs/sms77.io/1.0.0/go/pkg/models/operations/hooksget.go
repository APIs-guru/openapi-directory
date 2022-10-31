package operations




type HooksGetActionEnum string

const (
    HooksGetActionEnumRead HooksGetActionEnum = "read"
)


type HooksGetQueryParams struct {
    Action HooksGetActionEnum `queryParam:"style=form,explode=true,name=action"`
    
}

type HooksGetRequest struct {
    QueryParams HooksGetQueryParams 
    
}

type HooksGet200ApplicationJSONHooks struct {
    Created *string `json:"created,omitempty"`
    EventType *string `json:"event_type,omitempty"`
    ID *string `json:"id,omitempty"`
    RequestMethod *string `json:"request_method,omitempty"`
    TargetURL *string `json:"target_url,omitempty"`
    
}

type HooksGet200ApplicationJSON struct {
    Hooks []HooksGet200ApplicationJSONHooks `json:"hooks,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

type HooksGetResponse struct {
    ContentType string 
    HooksGet200ApplicationJSONObject *HooksGet200ApplicationJSON 
    StatusCode int64 
    
}

