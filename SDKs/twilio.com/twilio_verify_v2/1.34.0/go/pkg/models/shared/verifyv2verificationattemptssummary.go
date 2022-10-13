package shared

type VerifyV2VerificationAttemptsSummary struct {
	ConversionRatePercentage *float64 `json:"conversion_rate_percentage"`
	TotalAttempts            *int64   `json:"total_attempts"`
	TotalConverted           *int64   `json:"total_converted"`
	TotalUnconverted         *int64   `json:"total_unconverted"`
	URL                      *string  `json:"url"`
}
