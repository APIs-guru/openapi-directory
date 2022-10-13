package shared

type MatchSimpleAlliances struct {
	Blue *MatchAlliance `json:"blue"`
	Red  *MatchAlliance `json:"red"`
}

type MatchSimpleCompLevelEnum string

const (
	MatchSimpleCompLevelEnumQm MatchSimpleCompLevelEnum = "qm"
	MatchSimpleCompLevelEnumEf MatchSimpleCompLevelEnum = "ef"
	MatchSimpleCompLevelEnumQf MatchSimpleCompLevelEnum = "qf"
	MatchSimpleCompLevelEnumSf MatchSimpleCompLevelEnum = "sf"
	MatchSimpleCompLevelEnumF  MatchSimpleCompLevelEnum = "f"
)

type MatchSimpleWinningAllianceEnum string

const (
	MatchSimpleWinningAllianceEnumRed     MatchSimpleWinningAllianceEnum = "red"
	MatchSimpleWinningAllianceEnumBlue    MatchSimpleWinningAllianceEnum = "blue"
	MatchSimpleWinningAllianceEnumUnknown MatchSimpleWinningAllianceEnum = ""
)

type MatchSimple struct {
	ActualTime      *int64                          `json:"actual_time"`
	Alliances       *MatchSimpleAlliances           `json:"alliances"`
	CompLevel       MatchSimpleCompLevelEnum        `json:"comp_level"`
	EventKey        string                          `json:"event_key"`
	Key             string                          `json:"key"`
	MatchNumber     int64                           `json:"match_number"`
	PredictedTime   *int64                          `json:"predicted_time"`
	SetNumber       int64                           `json:"set_number"`
	Time            *int64                          `json:"time"`
	WinningAlliance *MatchSimpleWinningAllianceEnum `json:"winning_alliance"`
}
