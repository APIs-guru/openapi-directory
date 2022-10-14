package shared

type EventRankingExtraStatsInfo struct {
	Name      string  `json:"name"`
	Precision float64 `json:"precision"`
}

type EventRankingRankings struct {
	Dq            int64     `json:"dq"`
	ExtraStats    []float64 `json:"extra_stats,omitempty"`
	MatchesPlayed int64     `json:"matches_played"`
	QualAverage   *int64    `json:"qual_average,omitempty"`
	Rank          int64     `json:"rank"`
	Record        WltRecord `json:"record"`
	SortOrders    []float64 `json:"sort_orders,omitempty"`
	TeamKey       string    `json:"team_key"`
}

type EventRankingSortOrderInfo struct {
	Name      string `json:"name"`
	Precision int64  `json:"precision"`
}

type EventRanking struct {
	ExtraStatsInfo []EventRankingExtraStatsInfo `json:"extra_stats_info,omitempty"`
	Rankings       []EventRankingRankings       `json:"rankings"`
	SortOrderInfo  []EventRankingSortOrderInfo  `json:"sort_order_info"`
}
