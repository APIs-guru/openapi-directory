package shared

type PayeeUserSelfUpdateRequest struct {
	Email                  *string `json:"email"`
	FirstName              *string `json:"firstName"`
	LastName               *string `json:"lastName"`
	PrimaryContactNumber   *string `json:"primaryContactNumber"`
	SecondaryContactNumber *string `json:"secondaryContactNumber"`
	SmsNumber              *string `json:"smsNumber"`
}
