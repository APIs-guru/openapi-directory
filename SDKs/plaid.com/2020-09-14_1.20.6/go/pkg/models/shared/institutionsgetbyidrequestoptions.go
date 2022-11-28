package shared

// InstitutionsGetByIDRequestOptions
// Specifies optional parameters for `/institutions/get_by_id`. If provided, must not be `null`.
type InstitutionsGetByIDRequestOptions struct {
	IncludeOptionalMetadata          *bool `json:"include_optional_metadata,omitempty"`
	IncludePaymentInitiationMetadata *bool `json:"include_payment_initiation_metadata,omitempty"`
	IncludeStatus                    *bool `json:"include_status,omitempty"`
}
