package shared

type EventDistrictPointsPoints struct {
	AlliancePoints int64 `json:"alliance_points"`
	AwardPoints    int64 `json:"award_points"`
	ElimPoints     int64 `json:"elim_points"`
	QualPoints     int64 `json:"qual_points"`
	Total          int64 `json:"total"`
}

type EventDistrictPointsTiebreakers struct {
	HighestQualScores []int64 `json:"highest_qual_scores,omitempty"`
	QualWins          *int64  `json:"qual_wins,omitempty"`
}

type EventDistrictPoints struct {
	Points      map[string]EventDistrictPointsPoints      `json:"points"`
	Tiebreakers map[string]EventDistrictPointsTiebreakers `json:"tiebreakers,omitempty"`
}
