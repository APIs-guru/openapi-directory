package shared



type RetrieveDisputeEvidenceResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Evidence *DisputeEvidence `json:"evidence,omitempty"`
    
}

