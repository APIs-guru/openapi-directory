package shared

type TweetLookupResponse struct {
	Data     []interface{} `json:"data"`
	Errors   []interface{} `json:"errors"`
	Includes *Expansions   `json:"includes"`
}
