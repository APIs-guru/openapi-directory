package operations

import (
	"openapi/pkg/models/shared"
)

type ProductPhotosQueryParams struct {
	Code            *string `queryParam:"style=form,explode=true,name=code"`
	ShowUnavailable *bool   `queryParam:"style=form,explode=true,name=showUnavailable"`
	TopX            *string `queryParam:"style=form,explode=true,name=topX"`
}

type ProductPhotosHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type ProductPhotosRequest struct {
	QueryParams ProductPhotosQueryParams
	Headers     ProductPhotosHeaders
}

type ProductPhotos200ApplicationJSON struct {
	Data             []shared.PhotoObject   `json:"data"`
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

type ProductPhotosResponse struct {
	ContentType                           string
	StatusCode                            int64
	ProductPhotos200ApplicationJSONObject *ProductPhotos200ApplicationJSON
}
