package shared

type PackageItemDto struct {
	ArticleID                int32    `json:"articleId"`
	ArticleName              *string  `json:"articleName,omitempty"`
	ArticleNumber            *int32   `json:"articleNumber,omitempty"`
	ArticlePrice             *float64 `json:"articlePrice,omitempty"`
	EndOrder                 *int32   `json:"endOrder,omitempty"`
	IsIncludeServiceInCharge *bool    `json:"isIncludeServiceInCharge,omitempty"`
	MeasureUnit              *string  `json:"measureUnit,omitempty"`
	NumberOfItems            *float64 `json:"numberOfItems,omitempty"`
	StartOrder               *int32   `json:"startOrder,omitempty"`
}
