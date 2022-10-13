package shared

type Permission struct {
	AttributeID   *int64 `json:"attributeId"`
	CalendarID    *int64 `json:"calendarId"`
	DeviceID      *int64 `json:"deviceId"`
	DriverID      *int64 `json:"driverId"`
	GeofenceID    *int64 `json:"geofenceId"`
	GroupID       *int64 `json:"groupId"`
	ManagedUserID *int64 `json:"managedUserId"`
	UserID        *int64 `json:"userId"`
}
