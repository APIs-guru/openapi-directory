package shared

type InstitutionsGetByIDRequestOptions struct {
	IncludeOptionalMetadata          *bool `json:"include_optional_metadata,omitempty"`
	IncludePaymentInitiationMetadata *bool `json:"include_payment_initiation_metadata,omitempty"`
	IncludeStatus                    *bool `json:"include_status,omitempty"`
}
