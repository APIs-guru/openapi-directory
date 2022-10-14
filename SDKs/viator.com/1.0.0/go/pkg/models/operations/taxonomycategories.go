package operations

type TaxonomyCategoriesQueryParams struct {
	DestID *int64 `queryParam:"style=form,explode=true,name=destId"`
}

type TaxonomyCategoriesHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type TaxonomyCategoriesRequest struct {
	QueryParams TaxonomyCategoriesQueryParams
	Headers     TaxonomyCategoriesHeaders
}

type TaxonomyCategories200ApplicationJSONDataSubcategories struct {
	CategoryID         *int64  `json:"categoryId,omitempty"`
	Sortorder          *int64  `json:"sortorder,omitempty"`
	SubCategoryURLName *string `json:"subCategoryUrlName,omitempty"`
	SubcategoryID      *int64  `json:"subcategoryId,omitempty"`
	SubcategoryName    *string `json:"subcategoryName,omitempty"`
}

type TaxonomyCategories200ApplicationJSONData struct {
	GroupName     *string                                                 `json:"groupName,omitempty"`
	GroupURLName  *string                                                 `json:"groupUrlName,omitempty"`
	ID            *int64                                                  `json:"id,omitempty"`
	ProductCount  *int64                                                  `json:"productCount,omitempty"`
	Subcategories []TaxonomyCategories200ApplicationJSONDataSubcategories `json:"subcategories,omitempty"`
	ThumbnailURL  *string                                                 `json:"thumbnailURL,omitempty"`
}

type TaxonomyCategories200ApplicationJSON struct {
	Data             []TaxonomyCategories200ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                                    `json:"dateStamp,omitempty"`
	ErrorCodes       []string                                   `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                              `json:"errorMessage,omitempty"`
	ErrorMessageText *string                                    `json:"errorMessageText,omitempty"`
	ErrorName        *string                                    `json:"errorName,omitempty"`
	ErrorReference   *string                                    `json:"errorReference,omitempty"`
	ErrorType        *string                                    `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}                     `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}                     `json:"extraObject,omitempty"`
	Success          *bool                                      `json:"success,omitempty"`
	TotalCount       *int64                                     `json:"totalCount,omitempty"`
	Vmid             *string                                    `json:"vmid,omitempty"`
}

type TaxonomyCategoriesResponse struct {
	ContentType                                string
	StatusCode                                 int64
	TaxonomyCategories200ApplicationJSONObject *TaxonomyCategories200ApplicationJSON
}
