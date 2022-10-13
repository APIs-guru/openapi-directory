package shared

import (
	"time"
)

type ArticleSearchDto struct {
	ActiveStatus    *bool      `json:"activeStatus"`
	ApplyForAllGyms *bool      `json:"applyForAllGyms"`
	ArticleID       *int32     `json:"articleId"`
	CreatedDate     *time.Time `json:"createdDate"`
	CreatedUser     *string    `json:"createdUser"`
	Description     *string    `json:"description"`
	MeasureUnit     *string    `json:"measureUnit"`
	ModifiedDate    *time.Time `json:"modifiedDate"`
	ModifiedUser    *string    `json:"modifiedUser"`
	Name            *string    `json:"name"`
	Number          *int32     `json:"number"`
	Price           *float64   `json:"price"`
	SellingPrice    *float64   `json:"sellingPrice"`
	Tags            *string    `json:"tags"`
	TotalCount      *int32     `json:"totalCount"`
	Type            *string    `json:"type"`
}
