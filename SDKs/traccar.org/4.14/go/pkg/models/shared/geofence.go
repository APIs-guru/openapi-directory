package shared

type Geofence struct {
	Area        *string                `json:"area,omitempty"`
	Attributes  map[string]interface{} `json:"attributes,omitempty"`
	CalendarID  *int64                 `json:"calendarId,omitempty"`
	Description *string                `json:"description,omitempty"`
	ID          *int64                 `json:"id,omitempty"`
	Name        *string                `json:"name,omitempty"`
}
