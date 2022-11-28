package shared

import (
	"time"
)

// ArticleDto
// The ArticleDTO Class.
// Contains relevant fields of Article DTO by masking actual Article entity's fields in application.
type ArticleDto struct {
	ActiveStatus     *bool                  `json:"activeStatus,omitempty"`
	ApplyForAllGyms  *bool                  `json:"applyForAllGyms,omitempty"`
	ArticleID        *int32                 `json:"articleId,omitempty"`
	AvailableGyms    []GymDto               `json:"availableGyms"`
	AvailableQty     *float64               `json:"availableQty,omitempty"`
	Barcode          *string                `json:"barcode,omitempty"`
	CreatedDate      *time.Time             `json:"createdDate,omitempty"`
	CreatedUser      *string                `json:"createdUser,omitempty"`
	CronExpression   *string                `json:"cronExpression,omitempty"`
	Description      *string                `json:"description,omitempty"`
	Discount         *float64               `json:"discount,omitempty"`
	EmployeeDiscount *float64               `json:"employeeDiscount,omitempty"`
	EmployeePrice    *float64               `json:"employeePrice,omitempty"`
	GymArticles      []GymArticleDetailsDto `json:"gymArticles,omitempty"`
	IsAddOn          *bool                  `json:"isAddOn,omitempty"`
	IsInventoryItem  *bool                  `json:"isInventoryItem,omitempty"`
	IsObsolete       *bool                  `json:"isObsolete,omitempty"`
	MeasureUnit      string                 `json:"measureUnit"`
	ModifiedDate     *time.Time             `json:"modifiedDate,omitempty"`
	ModifiedUser     *string                `json:"modifiedUser,omitempty"`
	Name             string                 `json:"name"`
	Number           *int32                 `json:"number,omitempty"`
	Price            float64                `json:"price"`
	ReorderLevel     *float64               `json:"reorderLevel,omitempty"`
	RevenueAccountID *int32                 `json:"revenueAccountId,omitempty"`
	SellingPrice     *float64               `json:"sellingPrice,omitempty"`
	Tags             *string                `json:"tags,omitempty"`
	Type             string                 `json:"type"`
	Vat              *float64               `json:"vat,omitempty"`
	VatApplicable    *bool                  `json:"vatApplicable,omitempty"`
}
