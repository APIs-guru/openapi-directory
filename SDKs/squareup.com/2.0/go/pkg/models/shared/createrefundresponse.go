package shared

type CreateRefundResponse struct {
	Errors []Error `json:"errors"`
	Refund *Refund `json:"refund"`
}
