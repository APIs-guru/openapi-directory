package shared



type VerifyV2VerificationAttemptsSummary struct {
    ConversionRatePercentage *float64 `json:"conversion_rate_percentage,omitempty"`
    TotalAttempts *int64 `json:"total_attempts,omitempty"`
    TotalConverted *int64 `json:"total_converted,omitempty"`
    TotalUnconverted *int64 `json:"total_unconverted,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

