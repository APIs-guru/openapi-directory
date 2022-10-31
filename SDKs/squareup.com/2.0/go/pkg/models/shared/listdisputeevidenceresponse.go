package shared



type ListDisputeEvidenceResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    Evidence []DisputeEvidence `json:"evidence,omitempty"`
    
}

