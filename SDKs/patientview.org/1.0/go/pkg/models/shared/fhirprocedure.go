package shared

type FhirProcedure struct {
	BodySite *string `json:"bodySite,omitempty"`
	ID       *int64  `json:"id,omitempty"`
	Type     *string `json:"type,omitempty"`
}
