package shared

type CardPaymentTimeline struct {
	AuthorizedAt *string `json:"authorized_at,omitempty"`
	CapturedAt   *string `json:"captured_at,omitempty"`
	VoidedAt     *string `json:"voided_at,omitempty"`
}
