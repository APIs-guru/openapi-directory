package shared

type SingleTweetLookupResponse struct {
	Data     *interface{}  `json:"data"`
	Errors   []interface{} `json:"errors"`
	Includes *Expansions   `json:"includes"`
}
