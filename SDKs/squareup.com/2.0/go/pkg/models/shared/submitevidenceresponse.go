package shared



type SubmitEvidenceResponse struct {
    Dispute *Dispute `json:"dispute,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

