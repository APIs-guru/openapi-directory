package shared

type Geofence struct {
	Area        *string                `json:"area"`
	Attributes  map[string]interface{} `json:"attributes"`
	CalendarID  *int64                 `json:"calendarId"`
	Description *string                `json:"description"`
	ID          *int64                 `json:"id"`
	Name        *string                `json:"name"`
}
