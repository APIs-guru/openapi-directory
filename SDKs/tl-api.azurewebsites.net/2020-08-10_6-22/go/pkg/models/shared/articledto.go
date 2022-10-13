package shared

import (
	"time"
)

type ArticleDto struct {
	ActiveStatus     *bool                  `json:"activeStatus"`
	ApplyForAllGyms  *bool                  `json:"applyForAllGyms"`
	ArticleID        *int32                 `json:"articleId"`
	AvailableGyms    []GymDto               `json:"availableGyms"`
	AvailableQty     *float64               `json:"availableQty"`
	Barcode          *string                `json:"barcode"`
	CreatedDate      *time.Time             `json:"createdDate"`
	CreatedUser      *string                `json:"createdUser"`
	CronExpression   *string                `json:"cronExpression"`
	Description      *string                `json:"description"`
	Discount         *float64               `json:"discount"`
	EmployeeDiscount *float64               `json:"employeeDiscount"`
	EmployeePrice    *float64               `json:"employeePrice"`
	GymArticles      []GymArticleDetailsDto `json:"gymArticles"`
	IsAddOn          *bool                  `json:"isAddOn"`
	IsInventoryItem  *bool                  `json:"isInventoryItem"`
	IsObsolete       *bool                  `json:"isObsolete"`
	MeasureUnit      string                 `json:"measureUnit"`
	ModifiedDate     *time.Time             `json:"modifiedDate"`
	ModifiedUser     *string                `json:"modifiedUser"`
	Name             string                 `json:"name"`
	Number           *int32                 `json:"number"`
	Price            float64                `json:"price"`
	ReorderLevel     *float64               `json:"reorderLevel"`
	RevenueAccountID *int32                 `json:"revenueAccountId"`
	SellingPrice     *float64               `json:"sellingPrice"`
	Tags             *string                `json:"tags"`
	Type             string                 `json:"type"`
	Vat              *float64               `json:"vat"`
	VatApplicable    *bool                  `json:"vatApplicable"`
}
