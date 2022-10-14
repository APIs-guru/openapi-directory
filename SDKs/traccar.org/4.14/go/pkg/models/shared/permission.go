package shared

type Permission struct {
	AttributeID   *int64 `json:"attributeId,omitempty"`
	CalendarID    *int64 `json:"calendarId,omitempty"`
	DeviceID      *int64 `json:"deviceId,omitempty"`
	DriverID      *int64 `json:"driverId,omitempty"`
	GeofenceID    *int64 `json:"geofenceId,omitempty"`
	GroupID       *int64 `json:"groupId,omitempty"`
	ManagedUserID *int64 `json:"managedUserId,omitempty"`
	UserID        *int64 `json:"userId,omitempty"`
}
