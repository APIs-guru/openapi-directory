package shared

type Links struct {
	First *FirstHref `json:"first"`
	Next  *NextHref  `json:"next"`
	Prev  *PrevHref  `json:"prev"`
	Self  *SelfHref  `json:"self"`
}
