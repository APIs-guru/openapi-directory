package operations

import (
"openapi/pkg/models/shared")

type ListCardsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    CustomerID *string `queryParam:"style=form,explode=true,name=customer_id"`
    IncludeDisabled *bool `queryParam:"style=form,explode=true,name=include_disabled"`
    ReferenceID *string `queryParam:"style=form,explode=true,name=reference_id"`
    SortOrder *string `queryParam:"style=form,explode=true,name=sort_order"`
    
}

type ListCardsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListCardsRequest struct {
    QueryParams ListCardsQueryParams 
    Security ListCardsSecurity 
    
}

type ListCardsResponse struct {
    ContentType string 
    ListCardsResponse *shared.ListCardsResponse 
    StatusCode int64 
    
}

