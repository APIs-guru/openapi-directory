package shared

type Links struct {
	First *FirstHref `json:"first"`
	Last  *LastHref  `json:"last"`
	Next  *NextHref  `json:"next"`
	Prev  *PrevHref  `json:"prev"`
	Self  *SelfHref  `json:"self"`
}
