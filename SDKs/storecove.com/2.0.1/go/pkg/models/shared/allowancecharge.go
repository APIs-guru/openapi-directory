package shared



type AllowanceCharge struct {
    AmountExcludingVat float64 `json:"amountExcludingVat"`
    Reason *string `json:"reason,omitempty"`
    ReasonCode *string `json:"reasonCode,omitempty"`
    Tax Tax `json:"tax"`
    TaxesDutiesFees []Tax `json:"taxes_duties_fees,omitempty"`
    
}

