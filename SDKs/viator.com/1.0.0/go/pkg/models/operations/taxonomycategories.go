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
	CategoryID         *int64  `json:"categoryId"`
	Sortorder          *int64  `json:"sortorder"`
	SubCategoryURLName *string `json:"subCategoryUrlName"`
	SubcategoryID      *int64  `json:"subcategoryId"`
	SubcategoryName    *string `json:"subcategoryName"`
}

type TaxonomyCategories200ApplicationJSONData struct {
	GroupName     *string                                                 `json:"groupName"`
	GroupURLName  *string                                                 `json:"groupUrlName"`
	ID            *int64                                                  `json:"id"`
	ProductCount  *int64                                                  `json:"productCount"`
	Subcategories []TaxonomyCategories200ApplicationJSONDataSubcategories `json:"subcategories"`
	ThumbnailURL  *string                                                 `json:"thumbnailURL"`
}

type TaxonomyCategories200ApplicationJSON struct {
	Data             []TaxonomyCategories200ApplicationJSONData `json:"data"`
	DateStamp        *string                                    `json:"dateStamp"`
	ErrorCodes       []string                                   `json:"errorCodes"`
	ErrorMessage     []interface{}                              `json:"errorMessage"`
	ErrorMessageText *string                                    `json:"errorMessageText"`
	ErrorName        *string                                    `json:"errorName"`
	ErrorReference   *string                                    `json:"errorReference"`
	ErrorType        *string                                    `json:"errorType"`
	ExtraInfo        map[string]interface{}                     `json:"extraInfo"`
	ExtraObject      map[string]interface{}                     `json:"extraObject"`
	Success          *bool                                      `json:"success"`
	TotalCount       *int64                                     `json:"totalCount"`
	Vmid             *string                                    `json:"vmid"`
}

type TaxonomyCategoriesResponse struct {
	ContentType                                string
	StatusCode                                 int64
	TaxonomyCategories200ApplicationJSONObject *TaxonomyCategories200ApplicationJSON
}
