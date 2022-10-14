package shared

type CollectionLinks struct {
	First *string `json:"first,omitempty"`
	Last  *string `json:"last,omitempty"`
	Next  *string `json:"next,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}
