package shared

type OrderLineItemTax struct {
	AppliedMoney    *Money            `json:"applied_money"`
	AutoApplied     *bool             `json:"auto_applied"`
	CatalogObjectID *string           `json:"catalog_object_id"`
	CatalogVersion  *int64            `json:"catalog_version"`
	Metadata        map[string]string `json:"metadata"`
	Name            *string           `json:"name"`
	Percentage      *string           `json:"percentage"`
	Scope           *string           `json:"scope"`
	Type            *string           `json:"type"`
	UID             *string           `json:"uid"`
}
