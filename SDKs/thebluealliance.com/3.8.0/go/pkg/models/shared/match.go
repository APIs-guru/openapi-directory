package shared

type MatchAlliances struct {
	Blue *MatchAlliance `json:"blue"`
	Red  *MatchAlliance `json:"red"`
}

type MatchCompLevelEnum string

const (
	MatchCompLevelEnumQm MatchCompLevelEnum = "qm"
	MatchCompLevelEnumEf MatchCompLevelEnum = "ef"
	MatchCompLevelEnumQf MatchCompLevelEnum = "qf"
	MatchCompLevelEnumSf MatchCompLevelEnum = "sf"
	MatchCompLevelEnumF  MatchCompLevelEnum = "f"
)

type MatchVideos struct {
	Key  *string `json:"key"`
	Type *string `json:"type"`
}

type MatchWinningAllianceEnum string

const (
	MatchWinningAllianceEnumRed     MatchWinningAllianceEnum = "red"
	MatchWinningAllianceEnumBlue    MatchWinningAllianceEnum = "blue"
	MatchWinningAllianceEnumUnknown MatchWinningAllianceEnum = ""
)

type Match struct {
	ActualTime      *int64                    `json:"actual_time"`
	Alliances       *MatchAlliances           `json:"alliances"`
	CompLevel       MatchCompLevelEnum        `json:"comp_level"`
	EventKey        string                    `json:"event_key"`
	Key             string                    `json:"key"`
	MatchNumber     int64                     `json:"match_number"`
	PostResultTime  *int64                    `json:"post_result_time"`
	PredictedTime   *int64                    `json:"predicted_time"`
	ScoreBreakdown  map[string]interface{}    `json:"score_breakdown"`
	SetNumber       int64                     `json:"set_number"`
	Time            *int64                    `json:"time"`
	Videos          []MatchVideos             `json:"videos"`
	WinningAlliance *MatchWinningAllianceEnum `json:"winning_alliance"`
}
