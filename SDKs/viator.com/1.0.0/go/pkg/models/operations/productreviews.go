package operations

import (
	"openapi/pkg/models/shared"
)

type ProductReviewsQueryParams struct {
	Code            *string                     `queryParam:"style=form,explode=true,name=code"`
	ShowUnavailable *bool                       `queryParam:"style=form,explode=true,name=showUnavailable"`
	SortOrder       *shared.SortOrderReviewEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	TopX            *string                     `queryParam:"style=form,explode=true,name=topX"`
}

type ProductReviewsHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type ProductReviewsRequest struct {
	QueryParams ProductReviewsQueryParams
	Headers     ProductReviewsHeaders
}

type ProductReviews200ApplicationJSON struct {
	Data             []shared.ReviewObject  `json:"data"`
	DateStamp        *string                `json:"dateStamp"`
	ErrorCodes       []string               `json:"errorCodes"`
	ErrorMessage     []interface{}          `json:"errorMessage"`
	ErrorMessageText *string                `json:"errorMessageText"`
	ErrorName        *string                `json:"errorName"`
	ErrorReference   *string                `json:"errorReference"`
	ErrorType        *string                `json:"errorType"`
	ExtraInfo        map[string]interface{} `json:"extraInfo"`
	ExtraObject      map[string]interface{} `json:"extraObject"`
	Success          *bool                  `json:"success"`
	TotalCount       *int64                 `json:"totalCount"`
	Vmid             *string                `json:"vmid"`
}

type ProductReviewsResponse struct {
	ContentType                            string
	StatusCode                             int64
	ProductReviews200ApplicationJSONObject *ProductReviews200ApplicationJSON
}
