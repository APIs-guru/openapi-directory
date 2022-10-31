package shared

type UserDeliveryStatusInfo struct {
	StatusCode *int32  `json:"statusCode,omitempty"`
	UserID     *string `json:"userId,omitempty"`
}
