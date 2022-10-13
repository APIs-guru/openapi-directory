package shared

type TeamEventStatusRankRanking struct {
	Dq            *int64     `json:"dq"`
	MatchesPlayed *int64     `json:"matches_played"`
	QualAverage   *float64   `json:"qual_average"`
	Rank          *int64     `json:"rank"`
	Record        *WltRecord `json:"record"`
	SortOrders    []float64  `json:"sort_orders"`
	TeamKey       *string    `json:"team_key"`
}

type TeamEventStatusRankSortOrderInfo struct {
	Name      *string `json:"name"`
	Precision *int64  `json:"precision"`
}

type TeamEventStatusRank struct {
	NumTeams      *int64                             `json:"num_teams"`
	Ranking       *TeamEventStatusRankRanking        `json:"ranking"`
	SortOrderInfo []TeamEventStatusRankSortOrderInfo `json:"sort_order_info"`
	Status        *string                            `json:"status"`
}
