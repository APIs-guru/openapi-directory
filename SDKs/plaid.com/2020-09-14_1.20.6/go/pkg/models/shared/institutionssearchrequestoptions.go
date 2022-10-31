package shared

type InstitutionsSearchRequestOptions struct {
	IncludeOptionalMetadata          *bool                  `json:"include_optional_metadata,omitempty"`
	IncludePaymentInitiationMetadata *bool                  `json:"include_payment_initiation_metadata,omitempty"`
	Oauth                            *bool                  `json:"oauth,omitempty"`
	PaymentInitiation                map[string]interface{} `json:"payment_initiation,omitempty"`
}
