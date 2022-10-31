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
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type ProductReviewsRequest struct {
	QueryParams ProductReviewsQueryParams
	Headers     ProductReviewsHeaders
}

type ProductReviews200ApplicationJSON struct {
	Data             []shared.ReviewObject  `json:"data,omitempty"`
	DateStamp        *string                `json:"dateStamp,omitempty"`
	ErrorCodes       []string               `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}          `json:"errorMessage,omitempty"`
	ErrorMessageText *string                `json:"errorMessageText,omitempty"`
	ErrorName        *string                `json:"errorName,omitempty"`
	ErrorReference   *string                `json:"errorReference,omitempty"`
	ErrorType        *string                `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{} `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{} `json:"extraObject,omitempty"`
	Success          *bool                  `json:"success,omitempty"`
	TotalCount       *int64                 `json:"totalCount,omitempty"`
	Vmid             *string                `json:"vmid,omitempty"`
}

type ProductReviewsResponse struct {
	ContentType                            string
	StatusCode                             int64
	ProductReviews200ApplicationJSONObject *ProductReviews200ApplicationJSON
}
