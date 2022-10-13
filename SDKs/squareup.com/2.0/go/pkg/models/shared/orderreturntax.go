package shared

type OrderReturnTax struct {
	AppliedMoney    *Money  `json:"applied_money"`
	CatalogObjectID *string `json:"catalog_object_id"`
	CatalogVersion  *int64  `json:"catalog_version"`
	Name            *string `json:"name"`
	Percentage      *string `json:"percentage"`
	Scope           *string `json:"scope"`
	SourceTaxUID    *string `json:"source_tax_uid"`
	Type            *string `json:"type"`
	UID             *string `json:"uid"`
}
