package shared

type AlertDeliveryStatusInfo struct {
	StatusCode *int32                   `json:"statusCode"`
	Users      []UserDeliveryStatusInfo `json:"users"`
}
