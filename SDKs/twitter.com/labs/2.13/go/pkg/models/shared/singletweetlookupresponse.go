package shared

type SingleTweetLookupResponse struct {
	Data     *interface{}  `json:"data,omitempty"`
	Errors   []interface{} `json:"errors,omitempty"`
	Includes *Expansions   `json:"includes,omitempty"`
}
