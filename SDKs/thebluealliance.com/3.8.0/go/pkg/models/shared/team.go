package shared



type Team struct {
    Address *string `json:"address,omitempty"`
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    GmapsPlaceID *string `json:"gmaps_place_id,omitempty"`
    GmapsURL *string `json:"gmaps_url,omitempty"`
    HomeChampionship map[string]interface{} `json:"home_championship,omitempty"`
    Key string `json:"key"`
    Lat *float64 `json:"lat,omitempty"`
    Lng *float64 `json:"lng,omitempty"`
    LocationName *string `json:"location_name,omitempty"`
    Motto *string `json:"motto,omitempty"`
    Name string `json:"name"`
    Nickname *string `json:"nickname,omitempty"`
    PostalCode *string `json:"postal_code,omitempty"`
    RookieYear *int64 `json:"rookie_year,omitempty"`
    SchoolName *string `json:"school_name,omitempty"`
    StateProv *string `json:"state_prov,omitempty"`
    TeamNumber int64 `json:"team_number"`
    Website *string `json:"website,omitempty"`
    
}

