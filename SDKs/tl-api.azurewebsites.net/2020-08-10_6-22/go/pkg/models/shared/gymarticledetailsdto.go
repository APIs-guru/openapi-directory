package shared

// GymArticleDetailsDto
// The GymArticleDetailsDTO Class.
// Contains fields of GymArticleDetails DTO in application.
type GymArticleDetailsDto struct {
	ArticleID        *int32   `json:"articleId,omitempty"`
	AvailableQty     *float64 `json:"availableQty,omitempty"`
	CreatedUser      *string  `json:"createdUser,omitempty"`
	EmployeeDiscount *float64 `json:"employeeDiscount,omitempty"`
	EmployeePrice    *float64 `json:"employeePrice,omitempty"`
	GymID            *int32   `json:"gymId,omitempty"`
	GymIDList        *string  `json:"gymIdList,omitempty"`
	GymName          *string  `json:"gymName,omitempty"`
	ID               *int32   `json:"id,omitempty"`
	IsDefault        *bool    `json:"isDefault,omitempty"`
	IsInventoryItem  *bool    `json:"isInventoryItem,omitempty"`
	IsObsolete       *bool    `json:"isObsolete,omitempty"`
	ModifiedUser     *string  `json:"modifiedUser,omitempty"`
	ReorderLevel     *float64 `json:"reorderLevel,omitempty"`
	RevenueAccountID *int32   `json:"revenueAccountId,omitempty"`
	SellingPrice     *float64 `json:"sellingPrice,omitempty"`
}
