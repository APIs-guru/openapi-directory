package shared

type FhirProcedure struct {
	BodySite *string `json:"bodySite"`
	ID       *int64  `json:"id"`
	Type     *string `json:"type"`
}
