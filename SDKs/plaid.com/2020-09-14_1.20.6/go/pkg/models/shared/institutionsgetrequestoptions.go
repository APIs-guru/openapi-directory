package shared

// InstitutionsGetRequestOptions
// An optional object to filter `/institutions/get` results.
type InstitutionsGetRequestOptions struct {
	IncludeOptionalMetadata          *bool          `json:"include_optional_metadata,omitempty"`
	IncludePaymentInitiationMetadata *bool          `json:"include_payment_initiation_metadata,omitempty"`
	Oauth                            *bool          `json:"oauth,omitempty"`
	Products                         []ProductsEnum `json:"products,omitempty"`
	RoutingNumbers                   []string       `json:"routing_numbers,omitempty"`
}
