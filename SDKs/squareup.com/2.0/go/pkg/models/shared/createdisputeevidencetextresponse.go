package shared



type CreateDisputeEvidenceTextResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Evidence *DisputeEvidence `json:"evidence,omitempty"`
    
}

