package operations

import (
"openapi/pkg/models/shared")


type GetAssetsOrderByEnum string

const (
    GetAssetsOrderByEnumAssetType GetAssetsOrderByEnum = "AssetType"
GetAssetsOrderByEnumAssetName GetAssetsOrderByEnum = "AssetName"
GetAssetsOrderByEnumAssetNumber GetAssetsOrderByEnum = "AssetNumber"
GetAssetsOrderByEnumPurchaseDate GetAssetsOrderByEnum = "PurchaseDate"
GetAssetsOrderByEnumPurchasePrice GetAssetsOrderByEnum = "PurchasePrice"
GetAssetsOrderByEnumDisposalDate GetAssetsOrderByEnum = "DisposalDate"
GetAssetsOrderByEnumDisposalPrice GetAssetsOrderByEnum = "DisposalPrice"
)



type GetAssetsSortDirectionEnum string

const (
    GetAssetsSortDirectionEnumAsc GetAssetsSortDirectionEnum = "asc"
GetAssetsSortDirectionEnumDesc GetAssetsSortDirectionEnum = "desc"
)


type GetAssetsQueryParams struct {
    FilterBy *string `queryParam:"style=form,explode=true,name=filterBy"`
    OrderBy *GetAssetsOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    SortDirection *GetAssetsSortDirectionEnum `queryParam:"style=form,explode=true,name=sortDirection"`
    Status shared.AssetStatusQueryParamEnum `queryParam:"style=form,explode=true,name=status"`
    
}

type GetAssetsHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=xero-tenant-id"`
    
}

type GetAssetsSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetAssetsRequest struct {
    QueryParams GetAssetsQueryParams 
    Headers GetAssetsHeaders 
    Security GetAssetsSecurity 
    
}

type GetAssetsResponse struct {
    Assets *shared.Assets 
    ContentType string 
    StatusCode int64 
    
}

