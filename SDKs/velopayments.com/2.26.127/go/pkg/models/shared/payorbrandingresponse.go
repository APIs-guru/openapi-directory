package shared

type PayorBrandingResponse struct {
	CollectiveAlias *string `json:"collectiveAlias"`
	DbaName         *string `json:"dbaName"`
	LogoURL         string  `json:"logoUrl"`
	PayorName       string  `json:"payorName"`
	SupportContact  *string `json:"supportContact"`
}
