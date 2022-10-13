package shared

type CancellationReason struct {
	CancellationReasonCode *string `json:"cancellationReasonCode"`
	CancellationReasonText *string `json:"cancellationReasonText"`
}
