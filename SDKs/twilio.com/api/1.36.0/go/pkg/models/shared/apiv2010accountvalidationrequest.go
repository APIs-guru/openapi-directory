package shared

type APIV2010AccountValidationRequest struct {
	AccountSid     *string `json:"account_sid"`
	CallSid        *string `json:"call_sid"`
	FriendlyName   *string `json:"friendly_name"`
	PhoneNumber    *string `json:"phone_number"`
	ValidationCode *string `json:"validation_code"`
}
