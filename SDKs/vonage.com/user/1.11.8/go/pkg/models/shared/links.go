package shared



type Links struct {
    First *FirstHref `json:"first,omitempty"`
    Next *NextHref `json:"next,omitempty"`
    Prev *PrevHref `json:"prev,omitempty"`
    Self *SelfHref `json:"self,omitempty"`
    
}

