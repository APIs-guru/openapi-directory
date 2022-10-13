package shared

type GymArticleDetailsDto struct {
	ArticleID        *int32   `json:"articleId"`
	AvailableQty     *float64 `json:"availableQty"`
	CreatedUser      *string  `json:"createdUser"`
	EmployeeDiscount *float64 `json:"employeeDiscount"`
	EmployeePrice    *float64 `json:"employeePrice"`
	GymID            *int32   `json:"gymId"`
	GymIDList        *string  `json:"gymIdList"`
	GymName          *string  `json:"gymName"`
	ID               *int32   `json:"id"`
	IsDefault        *bool    `json:"isDefault"`
	IsInventoryItem  *bool    `json:"isInventoryItem"`
	IsObsolete       *bool    `json:"isObsolete"`
	ModifiedUser     *string  `json:"modifiedUser"`
	ReorderLevel     *float64 `json:"reorderLevel"`
	RevenueAccountID *int32   `json:"revenueAccountId"`
	SellingPrice     *float64 `json:"sellingPrice"`
}
