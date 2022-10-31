package shared



type APIV2010AccountValidationRequest struct {
    AccountSid *string `json:"account_sid,omitempty"`
    CallSid *string `json:"call_sid,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    PhoneNumber *string `json:"phone_number,omitempty"`
    ValidationCode *string `json:"validation_code,omitempty"`
    
}

