package shared



type CheckDetailsOutput struct {
    Details []CheckDetails `json:"details"`
    Next *string `json:"next,omitempty"`
    Self string `json:"self"`
    
}

