package shared



type Server struct {
    Attributes map[string]interface{} `json:"attributes,omitempty"`
    BingKey *string `json:"bingKey,omitempty"`
    CoordinateFormat *string `json:"coordinateFormat,omitempty"`
    DeviceReadonly *bool `json:"deviceReadonly,omitempty"`
    ForceSettings *bool `json:"forceSettings,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Latitude *float64 `json:"latitude,omitempty"`
    LimitCommands *bool `json:"limitCommands,omitempty"`
    Longitude *float64 `json:"longitude,omitempty"`
    Map *string `json:"map,omitempty"`
    MapURL *string `json:"mapUrl,omitempty"`
    PoiLayer *string `json:"poiLayer,omitempty"`
    Readonly *bool `json:"readonly,omitempty"`
    Registration *bool `json:"registration,omitempty"`
    TwelveHourFormat *bool `json:"twelveHourFormat,omitempty"`
    Version *string `json:"version,omitempty"`
    Zoom *int64 `json:"zoom,omitempty"`
    
}

