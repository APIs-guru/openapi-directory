package shared



type PartialFindResultVenueForAPIContract struct {
    Items []VenueForAPIContract `json:"items,omitempty"`
    Term *string `json:"term,omitempty"`
    TotalCount *int32 `json:"totalCount,omitempty"`
    
}

