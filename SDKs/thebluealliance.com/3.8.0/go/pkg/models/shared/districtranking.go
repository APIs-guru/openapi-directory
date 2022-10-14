package shared

type DistrictRankingEventPoints struct {
	AlliancePoints int64  `json:"alliance_points"`
	AwardPoints    int64  `json:"award_points"`
	DistrictCmp    bool   `json:"district_cmp"`
	ElimPoints     int64  `json:"elim_points"`
	EventKey       string `json:"event_key"`
	QualPoints     int64  `json:"qual_points"`
	Total          int64  `json:"total"`
}

type DistrictRanking struct {
	EventPoints []DistrictRankingEventPoints `json:"event_points,omitempty"`
	PointTotal  int64                        `json:"point_total"`
	Rank        int64                        `json:"rank"`
	RookieBonus *int64                       `json:"rookie_bonus,omitempty"`
	TeamKey     string                       `json:"team_key"`
}
