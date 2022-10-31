package operations

import (
"openapi/pkg/models/shared")

type GetDatabaseAvailableSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetDatabaseAvailableRequest struct {
    Security GetDatabaseAvailableSecurity 
    
}

type GetDatabaseAvailable200ApplicationJSON struct {
    AvailableDrivers []string `json:"available_drivers,omitempty"`
    DefaultDriver *string `json:"default_driver,omitempty"`
    Engine *string `json:"engine,omitempty"`
    Name *string `json:"name,omitempty"`
    Parameters map[string]interface{} `json:"parameters,omitempty"`
    Preferred *bool `json:"preferred,omitempty"`
    SqlalchemyURIPlaceholder *string `json:"sqlalchemy_uri_placeholder,omitempty"`
    
}

type GetDatabaseAvailable400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabaseAvailable500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabaseAvailableResponse struct {
    ContentType string 
    GetDatabaseAvailable200ApplicationJSONObjects []GetDatabaseAvailable200ApplicationJSON 
    GetDatabaseAvailable400ApplicationJSONObject *GetDatabaseAvailable400ApplicationJSON 
    GetDatabaseAvailable500ApplicationJSONObject *GetDatabaseAvailable500ApplicationJSON 
    StatusCode int64 
    
}

