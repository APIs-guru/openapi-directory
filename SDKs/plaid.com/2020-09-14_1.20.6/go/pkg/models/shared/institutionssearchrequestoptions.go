package shared

type InstitutionsSearchRequestOptions struct {
	IncludeOptionalMetadata          *bool                  `json:"include_optional_metadata"`
	IncludePaymentInitiationMetadata *bool                  `json:"include_payment_initiation_metadata"`
	Oauth                            *bool                  `json:"oauth"`
	PaymentInitiation                map[string]interface{} `json:"payment_initiation"`
}
