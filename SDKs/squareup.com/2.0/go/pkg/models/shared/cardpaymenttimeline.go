package shared

type CardPaymentTimeline struct {
	AuthorizedAt *string `json:"authorized_at"`
	CapturedAt   *string `json:"captured_at"`
	VoidedAt     *string `json:"voided_at"`
}
