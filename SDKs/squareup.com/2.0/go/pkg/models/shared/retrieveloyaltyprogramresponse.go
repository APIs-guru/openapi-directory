package shared



type RetrieveLoyaltyProgramResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Program *LoyaltyProgram `json:"program,omitempty"`
    
}

