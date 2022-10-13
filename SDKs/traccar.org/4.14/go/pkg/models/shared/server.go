package shared

type Server struct {
	Attributes       map[string]interface{} `json:"attributes"`
	BingKey          *string                `json:"bingKey"`
	CoordinateFormat *string                `json:"coordinateFormat"`
	DeviceReadonly   *bool                  `json:"deviceReadonly"`
	ForceSettings    *bool                  `json:"forceSettings"`
	ID               *int64                 `json:"id"`
	Latitude         *float64               `json:"latitude"`
	LimitCommands    *bool                  `json:"limitCommands"`
	Longitude        *float64               `json:"longitude"`
	Map              *string                `json:"map"`
	MapURL           *string                `json:"mapUrl"`
	PoiLayer         *string                `json:"poiLayer"`
	Readonly         *bool                  `json:"readonly"`
	Registration     *bool                  `json:"registration"`
	TwelveHourFormat *bool                  `json:"twelveHourFormat"`
	Version          *string                `json:"version"`
	Zoom             *int64                 `json:"zoom"`
}
