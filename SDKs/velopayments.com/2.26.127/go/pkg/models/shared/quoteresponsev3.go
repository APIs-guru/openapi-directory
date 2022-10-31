package shared



type QuoteResponseV3 struct {
    FxSummaries []QuoteFxSummaryV3 `json:"fxSummaries,omitempty"`
    
}

