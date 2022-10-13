package shared

type OrderReturnDiscount struct {
	AmountMoney       *Money  `json:"amount_money"`
	AppliedMoney      *Money  `json:"applied_money"`
	CatalogObjectID   *string `json:"catalog_object_id"`
	CatalogVersion    *int64  `json:"catalog_version"`
	Name              *string `json:"name"`
	Percentage        *string `json:"percentage"`
	Scope             *string `json:"scope"`
	SourceDiscountUID *string `json:"source_discount_uid"`
	Type              *string `json:"type"`
	UID               *string `json:"uid"`
}
