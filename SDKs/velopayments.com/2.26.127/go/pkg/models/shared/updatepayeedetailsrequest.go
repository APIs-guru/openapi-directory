package shared



type UpdatePayeeDetailsRequest struct {
    Address *PayeeAddress `json:"address,omitempty"`
    Challenge *Challenge `json:"challenge,omitempty"`
    Company *Company `json:"company,omitempty"`
    Email *string `json:"email,omitempty"`
    Individual *Individual `json:"individual,omitempty"`
    Language *string `json:"language,omitempty"`
    PayeeType *PayeeTypeEnum `json:"payeeType,omitempty"`
    
}

