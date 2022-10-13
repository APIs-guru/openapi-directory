package shared

type PackageItemDto struct {
	ArticleID                int32    `json:"articleId"`
	ArticleName              *string  `json:"articleName"`
	ArticleNumber            *int32   `json:"articleNumber"`
	ArticlePrice             *float64 `json:"articlePrice"`
	EndOrder                 *int32   `json:"endOrder"`
	IsIncludeServiceInCharge *bool    `json:"isIncludeServiceInCharge"`
	MeasureUnit              *string  `json:"measureUnit"`
	NumberOfItems            *float64 `json:"numberOfItems"`
	StartOrder               *int32   `json:"startOrder"`
}
