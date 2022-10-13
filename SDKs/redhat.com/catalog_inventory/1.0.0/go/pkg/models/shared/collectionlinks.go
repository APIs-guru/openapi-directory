package shared

type CollectionLinks struct {
	First *string `json:"first"`
	Last  *string `json:"last"`
	Next  *string `json:"next"`
	Prev  *string `json:"prev"`
}
