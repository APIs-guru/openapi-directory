package operations



type GetListingsListingIDSalesPathParams struct {
    ListingID string `pathParam:"style=simple,explode=false,name=listing_id"`
    
}

type GetListingsListingIDSalesRequest struct {
    PathParams GetListingsListingIDSalesPathParams 
    
}

type GetListingsListingIDSalesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

