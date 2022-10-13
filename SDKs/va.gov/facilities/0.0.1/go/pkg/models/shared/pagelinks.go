package shared

type PageLinks struct {
	First   *string `json:"first"`
	Last    *string `json:"last"`
	Next    *string `json:"next"`
	Prev    *string `json:"prev"`
	Related *string `json:"related"`
	Self    string  `json:"self"`
}
