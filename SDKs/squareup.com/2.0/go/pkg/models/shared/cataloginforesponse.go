package shared

type CatalogInfoResponse struct {
	Errors                       []Error                       `json:"errors"`
	Limits                       *CatalogInfoResponseLimits    `json:"limits"`
	StandardUnitDescriptionGroup *StandardUnitDescriptionGroup `json:"standard_unit_description_group"`
}
