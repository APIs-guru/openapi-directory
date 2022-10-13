package shared

type UserDeliveryStatusInfo struct {
	StatusCode *int32  `json:"statusCode"`
	UserID     *string `json:"userId"`
}
