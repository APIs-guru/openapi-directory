package shared

type InstitutionsGetByIDRequestOptions struct {
	IncludeOptionalMetadata          *bool `json:"include_optional_metadata"`
	IncludePaymentInitiationMetadata *bool `json:"include_payment_initiation_metadata"`
	IncludeStatus                    *bool `json:"include_status"`
}
