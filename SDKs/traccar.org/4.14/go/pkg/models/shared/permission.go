package shared

// Permission
// This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }
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
