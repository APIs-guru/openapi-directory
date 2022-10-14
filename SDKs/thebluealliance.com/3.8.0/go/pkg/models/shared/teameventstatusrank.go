package shared

type TeamEventStatusRankRanking struct {
	Dq            *int64     `json:"dq,omitempty"`
	MatchesPlayed *int64     `json:"matches_played,omitempty"`
	QualAverage   *float64   `json:"qual_average,omitempty"`
	Rank          *int64     `json:"rank,omitempty"`
	Record        *WltRecord `json:"record,omitempty"`
	SortOrders    []float64  `json:"sort_orders,omitempty"`
	TeamKey       *string    `json:"team_key,omitempty"`
}

type TeamEventStatusRankSortOrderInfo struct {
	Name      *string `json:"name,omitempty"`
	Precision *int64  `json:"precision,omitempty"`
}

type TeamEventStatusRank struct {
	NumTeams      *int64                             `json:"num_teams,omitempty"`
	Ranking       *TeamEventStatusRankRanking        `json:"ranking,omitempty"`
	SortOrderInfo []TeamEventStatusRankSortOrderInfo `json:"sort_order_info,omitempty"`
	Status        *string                            `json:"status,omitempty"`
}
