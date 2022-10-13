package shared

type Team struct {
	Address          *string                `json:"address"`
	City             *string                `json:"city"`
	Country          *string                `json:"country"`
	GmapsPlaceID     *string                `json:"gmaps_place_id"`
	GmapsURL         *string                `json:"gmaps_url"`
	HomeChampionship map[string]interface{} `json:"home_championship"`
	Key              string                 `json:"key"`
	Lat              *float64               `json:"lat"`
	Lng              *float64               `json:"lng"`
	LocationName     *string                `json:"location_name"`
	Motto            *string                `json:"motto"`
	Name             string                 `json:"name"`
	Nickname         *string                `json:"nickname"`
	PostalCode       *string                `json:"postal_code"`
	RookieYear       *int64                 `json:"rookie_year"`
	SchoolName       *string                `json:"school_name"`
	StateProv        *string                `json:"state_prov"`
	TeamNumber       int64                  `json:"team_number"`
	Website          *string                `json:"website"`
}
