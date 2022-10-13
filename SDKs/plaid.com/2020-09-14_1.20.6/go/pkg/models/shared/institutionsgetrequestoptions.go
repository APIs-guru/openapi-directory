package shared

type InstitutionsGetRequestOptions struct {
	IncludeOptionalMetadata          *bool          `json:"include_optional_metadata"`
	IncludePaymentInitiationMetadata *bool          `json:"include_payment_initiation_metadata"`
	Oauth                            *bool          `json:"oauth"`
	Products                         []ProductsEnum `json:"products"`
	RoutingNumbers                   []string       `json:"routing_numbers"`
}
