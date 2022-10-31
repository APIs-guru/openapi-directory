package operations



type PostAPIV1UserSubscriptionsQueryParams struct {
    Email *string `queryParam:"style=form,explode=true,name=email"`
    
}

type PostAPIV1UserSubscriptionsRequest struct {
    QueryParams PostAPIV1UserSubscriptionsQueryParams 
    
}

type PostAPIV1UserSubscriptionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

