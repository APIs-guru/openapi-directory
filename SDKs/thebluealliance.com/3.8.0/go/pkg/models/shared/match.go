package shared

type MatchAlliances struct {
	Blue *MatchAlliance `json:"blue,omitempty"`
	Red  *MatchAlliance `json:"red,omitempty"`
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
	Key  *string `json:"key,omitempty"`
	Type *string `json:"type,omitempty"`
}

type MatchWinningAllianceEnum string

const (
	MatchWinningAllianceEnumRed     MatchWinningAllianceEnum = "red"
	MatchWinningAllianceEnumBlue    MatchWinningAllianceEnum = "blue"
	MatchWinningAllianceEnumUnknown MatchWinningAllianceEnum = ""
)

type Match struct {
	ActualTime      *int64                    `json:"actual_time,omitempty"`
	Alliances       *MatchAlliances           `json:"alliances,omitempty"`
	CompLevel       MatchCompLevelEnum        `json:"comp_level"`
	EventKey        string                    `json:"event_key"`
	Key             string                    `json:"key"`
	MatchNumber     int64                     `json:"match_number"`
	PostResultTime  *int64                    `json:"post_result_time,omitempty"`
	PredictedTime   *int64                    `json:"predicted_time,omitempty"`
	ScoreBreakdown  map[string]interface{}    `json:"score_breakdown,omitempty"`
	SetNumber       int64                     `json:"set_number"`
	Time            *int64                    `json:"time,omitempty"`
	Videos          []MatchVideos             `json:"videos,omitempty"`
	WinningAlliance *MatchWinningAllianceEnum `json:"winning_alliance,omitempty"`
}
