package shared

type ControllersLinks struct {
	First    *string `json:"first,omitempty"`
	Last     *string `json:"last,omitempty"`
	Next     *string `json:"next,omitempty"`
	Previous *string `json:"previous,omitempty"`
}
