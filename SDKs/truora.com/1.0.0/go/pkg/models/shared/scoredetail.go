package shared

type ScoreDetailResultEnum string

const (
	ScoreDetailResultEnumPending  ScoreDetailResultEnum = "pending"
	ScoreDetailResultEnumFound    ScoreDetailResultEnum = "found"
	ScoreDetailResultEnumNotFound ScoreDetailResultEnum = "not_found"
	ScoreDetailResultEnumError    ScoreDetailResultEnum = "error"
	ScoreDetailResultEnumDelayed  ScoreDetailResultEnum = "delayed"
	ScoreDetailResultEnumIgnored  ScoreDetailResultEnum = "ignored"
)

type ScoreDetailSeverityEnum string

const (
	ScoreDetailSeverityEnumUnknown  ScoreDetailSeverityEnum = "unknown"
	ScoreDetailSeverityEnumNone     ScoreDetailSeverityEnum = "none"
	ScoreDetailSeverityEnumVeryLow  ScoreDetailSeverityEnum = "very_low"
	ScoreDetailSeverityEnumLow      ScoreDetailSeverityEnum = "low"
	ScoreDetailSeverityEnumMedium   ScoreDetailSeverityEnum = "medium"
	ScoreDetailSeverityEnumHigh     ScoreDetailSeverityEnum = "high"
	ScoreDetailSeverityEnumVeryHigh ScoreDetailSeverityEnum = "very_high"
)

type ScoreDetail struct {
	Result   ScoreDetailResultEnum   `json:"result"`
	Score    float32                 `json:"score"`
	Severity ScoreDetailSeverityEnum `json:"severity"`
}
