package shared

import (
	"time"
)

type ArticleSearchDto struct {
	ActiveStatus    *bool      `json:"activeStatus,omitempty"`
	ApplyForAllGyms *bool      `json:"applyForAllGyms,omitempty"`
	ArticleID       *int32     `json:"articleId,omitempty"`
	CreatedDate     *time.Time `json:"createdDate,omitempty"`
	CreatedUser     *string    `json:"createdUser,omitempty"`
	Description     *string    `json:"description,omitempty"`
	MeasureUnit     *string    `json:"measureUnit,omitempty"`
	ModifiedDate    *time.Time `json:"modifiedDate,omitempty"`
	ModifiedUser    *string    `json:"modifiedUser,omitempty"`
	Name            *string    `json:"name,omitempty"`
	Number          *int32     `json:"number,omitempty"`
	Price           *float64   `json:"price,omitempty"`
	SellingPrice    *float64   `json:"sellingPrice,omitempty"`
	Tags            *string    `json:"tags,omitempty"`
	TotalCount      *int32     `json:"totalCount,omitempty"`
	Type            *string    `json:"type,omitempty"`
}
